const $ = (id) => document.getElementById(id);

const els = {
  caoLine: $("caoLine"),
  nowLine: $("nowLine"),
  addReceiverBtn: $("addReceiverBtn"),
  totalOffload: $("totalOffload"),
  receiverCount: $("receiverCount"),
  contactCount: $("contactCount"),
  receiverList: $("receiverList"),
  emptyState: $("emptyState"),
  backToTopBtn: $("backToTopBtn"),
  copyTimelineBtn: $("copyTimelineBtn"),
  cgBtn: $("cgBtn"),
  exportBtn: $("exportBtn"),
  importBtn: $("importBtn"),
  importFile: $("importFile"),
  filterBtn: $("filterBtn"),
  filterStatus: $("filterStatus"),
  filterModal: $("filterModal"),
  filterQuery: $("filterQuery"),
  filterFrom: $("filterFrom"),
  filterTo: $("filterTo"),
  cgModal: $("cgModal"),
  cgFb: $("cgFb"),
  cgCw: $("cgCw"),
  cgAb: $("cgAb"),
  cgRes: $("cgRes"),
  cgUd: $("cgUd"),
  cgResult: $("cgResult"),
  clearFilterBtn: $("clearFilterBtn"),
  applyFilterBtn: $("applyFilterBtn"),
  resetBtn: $("resetBtn"),
  messageCenterPanel: $("messageCenterPanel"),
  installMessage: $("installMessage"),
  installBtn: $("installBtn"),
  updateMessage: $("updateMessage"),
  updateBtn: $("updateBtn"),
  offloadModal: $("offloadModal"),
  offloadForm: $("offloadForm"),
  modalTitle: $("modalTitle"),
  entryDate: $("entryDate"),
  callsign: $("callsign"),
  tail: $("tail"),
  receiverType: $("receiverType"),
  receiverInfo: $("receiverInfo"),
  blockB40: $("blockB40"),
  blockB45: $("blockB45"),
  burnRate: $("burnRate"),
  fuelStart: $("fuelStart"),
  fuelEnd: $("fuelEnd"),
  boomTime: $("boomTime"),
  fuelOffload: $("fuelOffload"),
  contacts: $("contacts"),
  previewOffload: $("previewOffload"),
  formulaText: $("formulaText"),
  deleteEntryBtn: $("deleteEntryBtn"),
  installModal: $("installModal"),
  confirmModal: $("confirmModal"),
  confirmTitle: $("confirmTitle"),
  confirmBody: $("confirmBody"),
  confirmCancelBtn: $("confirmCancelBtn"),
  confirmOkBtn: $("confirmOkBtn")
};

const STORAGE_KEY = "simba-fuel-tracker-v1";
const DEFAULT_BURN_RATE = 10.0;
const APP_CAO = "CAO 18JUL26";

let state = {
  entries: [],
  lastUpdated: null,
  lastBlockMode: "B40"
};
let editingEntryId = null;
let addToReceiver = null;
let confirmAction = null;
let deferredInstallPrompt = null;
let waitingWorker = null;
let activeFilter = { query: "", from: "", to: "" };
let suppressClicksUntil = 0;
let activeBlockMode = "B40";

function id() {
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
}

function loadState() {
  try {
    const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
    if (parsed && Array.isArray(parsed.entries)) {
      const entries = parsed.entries.map(normalizeEntryUnits);
      state = {
        entries,
        lastUpdated: parsed.lastUpdated || null,
        lastBlockMode: validBlockMode(parsed.lastBlockMode) || latestEntryBlockMode(entries) || "B40"
      };
    }
  } catch {
    state = { entries: [], lastUpdated: null, lastBlockMode: "B40" };
  }
}

function saveState() {
  state.lastUpdated = new Date().toISOString();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function formatNumber(value) {
  return Math.round(Number(value) || 0).toLocaleString();
}

function formatK(value, digits = 1) {
  const number = Number(value) || 0;
  return number.toLocaleString(undefined, {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits
  });
}

function formatSignedK(value, digits = 1) {
  const number = Number(value) || 0;
  const sign = number < 0 ? "-" : "";
  return `${sign}${formatK(Math.abs(number), digits)}`;
}

function fuelDisplay(valueK) {
  const abs = Math.abs(Number(valueK) || 0);
  if (abs >= 1000000) {
    return { value: formatSignedK(Number(valueK) / 1000000), unit: "B lbs" };
  }
  if (abs >= 1000) {
    return { value: formatSignedK(Number(valueK) / 1000), unit: "M lbs" };
  }
  return { value: formatSignedK(valueK), unit: "K lbs" };
}

function formatFuel(valueK) {
  const display = fuelDisplay(valueK);
  return `${display.value} ${display.unit}`;
}

function negativeClass(value) {
  return Number(value) < 0 ? " is-negative" : "";
}

function validBlockMode(mode) {
  return mode === "B45" || mode === "B40" ? mode : "";
}

function latestEntryBlockMode(entries) {
  return [...entries]
    .sort((a, b) => entryTimestamp(b.date) - entryTimestamp(a.date))
    .map((entry) => validBlockMode(entry.blockMode))
    .find(Boolean) || "";
}

function normalizeEntryUnits(entry) {
  const normalized = { ...entry };
  normalized.blockMode = normalized.blockMode || "B40";
  const looksLikeRawLbs = [normalized.fuelStart, normalized.fuelEnd, normalized.burnRate, normalized.fuelOffload, normalized.offload]
    .some((value) => Math.abs(Number(value) || 0) > 1000);
  if (!looksLikeRawLbs) return normalized;
  ["fuelStart", "fuelEnd", "burnRate", "boomBurn", "fuelOffload", "offload"].forEach((key) => {
    if (Number.isFinite(Number(normalized[key]))) normalized[key] = Number(normalized[key]) / 1000;
  });
  return normalized;
}

function entryImportKey(entry) {
  return [
    String(entry.date || ""),
    String(entry.callsign || "").trim().toUpperCase(),
    String(entryTail(entry)).trim().toUpperCase(),
    String(entry.blockMode || "B40"),
    Number(entry.fuelStart) || 0,
    Number(entry.fuelEnd) || 0,
    Number(entry.burnRate) || 0,
    Number(entry.fuelOffload) || 0,
    String(entry.boomTime || ""),
    Number(entry.contacts) || 0,
    Number(entry.offload) || 0
  ].join("|");
}

function pad(value) {
  return String(value).padStart(2, "0");
}

function zuluDatetimeValue(date = new Date()) {
  return `${date.getUTCFullYear()}-${pad(date.getUTCMonth() + 1)}-${pad(date.getUTCDate())}T${pad(date.getUTCHours())}:${pad(date.getUTCMinutes())}`;
}

function formatNowDate(date = new Date()) {
  const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
  return `${pad(date.getUTCDate())}${months[date.getUTCMonth()]}${String(date.getUTCFullYear()).slice(-2)}`;
}

function formatClockTime(date, useZulu = true) {
  const hours = useZulu ? date.getUTCHours() : date.getHours();
  const minutes = useZulu ? date.getUTCMinutes() : date.getMinutes();
  return `${pad(hours)}${pad(minutes)}${useZulu ? "Z" : "L"}`;
}

function updateNowLine() {
  const now = new Date();
  els.nowLine.textContent = `${formatNowDate(now)} ${formatClockTime(now, true)} ${formatClockTime(now, false)} | JD${julianDay(now.toISOString())}`;
}

function startNowClock() {
  updateNowLine();
  window.setInterval(updateNowLine, 1000);
}

function formatEntryDate(value) {
  const text = String(value || "");
  const localInputMatch = text.match(/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})/);
  if (localInputMatch) {
    const [, year, month, day, hour, minute] = localInputMatch;
    const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    return `${pad(day)}${months[Number(month) - 1]}${String(year).slice(-2)} ${hour}${minute}Z`;
  }
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value || "--";
  return `${pad(date.getUTCDate())}${date.toLocaleString(undefined, { month: "short", timeZone: "UTC" }).toUpperCase()}${String(date.getUTCFullYear()).slice(-2)} ${pad(date.getUTCHours())}${pad(date.getUTCMinutes())}Z`;
}

function julianDay(value) {
  const time = entryTimestamp(value);
  if (!Number.isFinite(time)) return "";
  const date = new Date(time);
  const start = Date.UTC(date.getUTCFullYear(), 0, 1);
  return pad(Math.floor((Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()) - start) / 86400000) + 1).padStart(3, "0");
}

function formatEntryTileDate(value) {
  const jd = julianDay(value);
  return jd ? `${formatEntryDate(value)} | JD${jd}` : formatEntryDate(value);
}

function entryTimestamp(value) {
  const text = String(value || "");
  const localInputMatch = text.match(/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})/);
  if (localInputMatch && !/[zZ]|[+-]\d{2}:?\d{2}$/.test(text)) {
    const [, year, month, day, hour, minute] = localInputMatch.map(Number);
    return Date.UTC(year, month - 1, day, hour, minute);
  }
  return new Date(value).getTime();
}

function receiverKey(entry) {
  return `${String(entry.callsign || "").trim().toUpperCase()}|${String(entryTail(entry)).trim().toUpperCase()}`;
}

function entryTail(entry) {
  return entry.tail || entry.aircraft || "";
}

function entryType(entry) {
  return String(entry.receiverType || entry.type || "").trim().toUpperCase() || "UNKNOWN";
}

function entryInfo(entry) {
  return String(entry.receiverInfo || entry.info || "").trim();
}

function filterLabel() {
  const parts = [];
  if (activeFilter.query) parts.push(`SEARCH ${activeFilter.query}`);
  if (activeFilter.from || activeFilter.to) {
    const from = activeFilter.from ? formatEntryDate(activeFilter.from) : "START";
    const to = activeFilter.to ? formatEntryDate(activeFilter.to) : "NOW";
    parts.push(`${from} - ${to}`);
  }
  return parts.join(" | ");
}

function entrySearchText(entry) {
  return [
    entry.date,
    formatEntryDate(entry.date),
    entry.blockMode,
    entry.callsign,
    entryTail(entry),
    entryType(entry),
    entryInfo(entry),
    entry.fuelStart,
    entry.fuelEnd,
    entry.burnRate,
    entry.fuelOffload,
    entry.boomTime,
    entry.boomMinutes,
    entry.contacts,
    entry.offload,
    formatFuel(entry.offload)
  ].filter((value) => value !== null && value !== undefined).join(" ").toUpperCase();
}

function entryInActiveFilter(entry) {
  const time = entryTimestamp(entry.date);
  if (!Number.isFinite(time)) return false;
  if (activeFilter.from && time < entryTimestamp(activeFilter.from)) return false;
  if (activeFilter.to && time > entryTimestamp(activeFilter.to)) return false;
  if (activeFilter.query && !entrySearchText(entry).includes(activeFilter.query.toUpperCase())) return false;
  return true;
}

function currentEntries() {
  if (!activeFilter.query && !activeFilter.from && !activeFilter.to) return state.entries;
  return state.entries.filter(entryInActiveFilter);
}

function summarizeByType(entries = currentEntries()) {
  const summary = new Map();
  groupEntries(entries).forEach((receiver) => {
    const type = entryType(receiver.entries[0]);
    if (!summary.has(type)) {
      summary.set(type, { type, receivers: 0, contacts: 0, offload: 0 });
    }
    const item = summary.get(type);
    item.receivers += 1;
    item.contacts += receiver.contacts;
    item.offload += receiver.totalOffload;
  });
  return [...summary.values()];
}

function groupEntries(entries) {
  const groups = new Map();
  entries.forEach((entry) => {
    const key = receiverKey(entry);
    if (!groups.has(key)) {
      groups.set(key, {
        key,
        callsign: entry.callsign,
        tail: entryTail(entry),
        entries: []
      });
    }
    groups.get(key).entries.push(entry);
  });
  return [...groups.values()].map((group) => {
    group.entries.sort((a, b) => entryTimestamp(b.date) - entryTimestamp(a.date));
    group.totalOffload = group.entries.reduce((sum, entry) => sum + entry.offload, 0);
    group.contacts = group.entries.reduce((sum, entry) => sum + (Number(entry.contacts) || 0), 0);
    group.receiverInfo = entryInfo(group.entries.find((entry) => entryInfo(entry)) || {});
    group.lastDate = group.entries.reduce((latest, entry) => {
      const time = entryTimestamp(entry.date);
      return Number.isFinite(time) && time > latest ? time : latest;
    }, 0);
    return group;
  }).sort((a, b) => b.lastDate - a.lastDate);
}

function parseBoomMinutes(value) {
  const text = String(value || "").trim();
  if (!text) return NaN;
  if (text.includes(":")) {
    const parts = text.split(":").map((part) => Number(part));
    if (parts.some((part) => !Number.isFinite(part) || part < 0)) return NaN;
    if (parts.length === 2) return (parts[0] * 60) + parts[1];
    if (parts.length === 3) return (parts[0] * 60) + parts[1] + (parts[2] / 60);
    return NaN;
  }
  if (/^\d{4}$/.test(text)) {
    const minutes = Number(text.slice(0, 2));
    const seconds = Number(text.slice(2));
    if (seconds >= 60) return NaN;
    return minutes + (seconds / 60);
  }
  const numeric = Number(text);
  return Number.isFinite(numeric) ? numeric : NaN;
}

function calculateOffload(values) {
  if (values.blockMode === "B45") {
    const offload = Number(values.fuelOffload);
    if (!Number.isFinite(offload)) return null;
    const boomMinutes = parseBoomMinutes(values.boomTime);
    const boomBurn = calculateBoomBurn(values);
    return {
      offload,
      boomMinutes: Number.isFinite(boomMinutes) ? boomMinutes : null,
      boomBurn: Number.isFinite(boomBurn) ? boomBurn : null
    };
  }
  return calculateB40Offload(values);
}

function calculateBoomBurn(values) {
  const burnRate = Number(values.burnRate);
  const boomMinutes = parseBoomMinutes(values.boomTime);
  if (![burnRate, boomMinutes].every(Number.isFinite)) return NaN;
  return (boomMinutes / 60) * burnRate;
}

function calculateB40Offload(values) {
  const start = Number(values.fuelStart);
  const end = Number(values.fuelEnd);
  const boomMinutes = parseBoomMinutes(values.boomTime);
  const boomBurn = calculateBoomBurn(values);
  if (![start, end, boomMinutes, boomBurn].every(Number.isFinite)) return null;
  const offload = start - end - boomBurn;
  return { offload, boomMinutes, boomBurn };
}

function currentFormValues() {
  return {
    date: els.entryDate.value,
    callsign: els.callsign.value.trim().toUpperCase(),
    tail: els.tail.value.trim().toUpperCase(),
    receiverType: els.receiverType.value.trim().toUpperCase(),
    receiverInfo: els.receiverInfo.value.trim(),
    blockMode: activeBlockMode,
    fuelStart: Number(els.fuelStart.value),
    fuelEnd: Number(els.fuelEnd.value),
    burnRate: Number(els.burnRate.value || DEFAULT_BURN_RATE),
    fuelOffload: els.fuelOffload.value === "" ? NaN : Number(els.fuelOffload.value),
    boomTime: els.boomTime.value.trim(),
    contacts: Math.max(1, Math.round(Number(els.contacts.value) || 1))
  };
}

function updatePreview() {
  const values = currentFormValues();
  const result = calculateOffload(values);
  const card = document.querySelector(".formula-card");
  card.classList.remove("warn", "bad");
  if (!result) {
    els.previewOffload.textContent = "0.0 K lbs";
    els.formulaText.textContent = values.blockMode === "B45" ? "Direct fuel entry" : "Start - End - (Boom Time x Burn Rate)";
    return;
  }
  els.previewOffload.textContent = formatFuel(result.offload);
  els.formulaText.textContent = values.blockMode === "B45"
    ? "Direct fuel entry"
    : `${formatK(values.fuelStart)} - ${formatK(values.fuelEnd)} - (${formatNumber(result.boomMinutes)} min x ${formatK(values.burnRate)} K/hr)`;
  if (result.offload < 0) card.classList.add("bad");
  else if (result.offload === 0) card.classList.add("warn");
}

function calculateCg() {
  const inputs = [els.cgFb, els.cgCw, els.cgAb, els.cgRes, els.cgUd];
  if (inputs.some((input) => input.value === "")) return null;
  const values = inputs.map((input) => Number(input.value));
  if (values.some((value) => !Number.isFinite(value))) return null;
  const [fb, cw, ab, res, ud] = values;
  return 33 - fb - (cw / 3) + ((2 / 3) * (ab + res)) + ((3 / 2) * ud);
}

function updateCgPreview() {
  const cg = calculateCg();
  const isCgExceeded = cg !== null && (cg < 16 || cg > 35);
  const isCgNearLimit = cg !== null && !isCgExceeded && (cg <= 18 || cg >= 34);
  els.cgResult.textContent = cg === null ? "--" : formatK(cg, 1);
  els.cgResult.classList.toggle("is-negative", isCgExceeded);
  els.cgResult.classList.toggle("is-warning", isCgNearLimit);
}

function openCgCalculator() {
  updateCgPreview();
  openModal("cgModal");
  focusAndSelect(els.cgFb);
}

function render() {
  const entries = currentEntries();
  const groups = groupEntries(entries);
  const totalOffload = entries.reduce((sum, entry) => sum + entry.offload, 0);
  const contacts = entries.reduce((sum, entry) => sum + (Number(entry.contacts) || 0), 0);
  const trackedContacts = entries.some((entry) => Number(entry.contacts) > 0);

  els.totalOffload.textContent = formatFuel(totalOffload);
  els.totalOffload.classList.toggle("is-negative", totalOffload < 0);
  els.receiverCount.textContent = String(groups.length);
  els.contactCount.textContent = trackedContacts ? String(contacts) : "--";
  els.caoLine.textContent = APP_CAO;
  const label = filterLabel();
  els.filterStatus.hidden = !label;
  els.filterStatus.textContent = label ? `FILTER ${label}` : "";
  els.filterBtn.classList.toggle("active", Boolean(label));
  els.emptyState.hidden = entries.length > 0;
  if (!entries.length && state.entries.length && label) {
    els.emptyState.querySelector("strong").textContent = "No entries in filter";
    els.emptyState.querySelector("span").textContent = "Clear or adjust the time filter.";
  } else {
    els.emptyState.querySelector("strong").textContent = "No receivers yet";
    els.emptyState.querySelector("span").textContent = "Tap the plus button to log the first offload.";
  }
  els.receiverList.innerHTML = groups.map(renderReceiverCard).join("");
  updateBackToTopVisibility();
}

function updateStickyOffset() {
  const header = document.querySelector(".app-header");
  const height = header ? Math.ceil(header.getBoundingClientRect().height) : 0;
  document.documentElement.style.setProperty("--sticky-offset", `${height}px`);
}

function updateBackToTopVisibility() {
  requestAnimationFrame(() => {
    const canScroll = document.documentElement.scrollHeight > window.innerHeight + 24;
    els.backToTopBtn.hidden = !canScroll || currentEntries().length === 0;
  });
}

function renderReceiverCard(group) {
  const contactText = group.contacts ? group.contacts : 0;
  return `
    <article class="receiver-card" data-receiver-key="${escapeHtml(group.key)}">
      <div class="receiver-head">
        <div class="receiver-title">
          <strong>${escapeHtml(group.callsign)}</strong>
          <span>Tail ${escapeHtml(group.tail)} - ${escapeHtml(entryType(group.entries[0]))}</span>
        </div>
        <div class="receiver-total${negativeClass(group.totalOffload)}">${formatFuel(group.totalOffload)} | ${contactText} ct</div>
      </div>
      <div class="entry-list">
        ${group.entries.map(renderEntryRow).join("")}
      </div>
      <div class="card-actions">
        ${group.receiverInfo ? `<span class="receiver-info">${escapeHtml(group.receiverInfo)}</span>` : ""}
        <button class="mini-btn add-to-receiver" type="button" data-receiver-key="${escapeHtml(group.key)}" aria-label="Add offload" title="Add offload">+</button>
        <button class="mini-btn danger-outline delete-receiver" type="button" data-receiver-key="${escapeHtml(group.key)}" aria-label="Delete receiver" title="Delete receiver">&times;</button>
      </div>
    </article>
  `;
}

function renderEntryRow(entry) {
  const contacts = entry.contacts ? ` - ${entry.contacts} ct` : "";
  const blockMode = entry.blockMode || "B40";
  const details = blockMode === "B45"
    ? `${blockMode} - direct${contacts}`
    : `${formatK(entry.fuelStart)} to ${formatK(entry.fuelEnd)} K - ${formatNumber(entry.boomMinutes)} min${contacts}`;
  return `
    <button class="entry-row" type="button" data-entry-id="${entry.id}">
      <span>
        <strong>${formatEntryTileDate(entry.date)}</strong>
        <span>${details}</span>
      </span>
      <b class="${negativeClass(entry.offload).trim()}">${formatFuel(entry.offload)}</b>
    </button>
  `;
}

function timelineFuel(value, width = 0) {
  const display = fuelDisplay(value);
  return `${display.value.padStart(width, " ")} ${display.unit}`;
}

function timelineEntryDetails(entry, fuelWidth = 0) {
  const contacts = `${Number(entry.contacts) || 0} ct`;
  return `${timelineFuel(entry.offload, fuelWidth)} | ${contacts}`;
}

function timelineEntryLine(entry, fuelWidth = 0) {
  const receiver = `${String(entry.callsign || "").trim().toUpperCase()} ${entryTail(entry)} ${entryType(entry)}`.trim();
  return `${formatEntryDate(entry.date)} ${receiver}: ${timelineEntryDetails(entry, fuelWidth)}`;
}

function timelineHeader(entries) {
  const first = entries[0];
  const last = entries[entries.length - 1];
  const firstDate = formatNowDate(new Date(entryTimestamp(first.date)));
  const lastDate = formatNowDate(new Date(entryTimestamp(last.date)));
  const firstLabel = `${firstDate} JD${julianDay(first.date)}`;
  const lastLabel = `${lastDate} JD${julianDay(last.date)}`;
  return firstLabel === lastLabel ? `Receivers ${firstLabel}` : `Receivers ${firstLabel} - ${lastLabel}`;
}

function buildTimelineText(entries = currentEntries()) {
  const sorted = [...entries].sort((a, b) => entryTimestamp(a.date) - entryTimestamp(b.date));
  const totalOffload = entries.reduce((sum, entry) => sum + entry.offload, 0);
  const receiverCount = groupEntries(entries).length;
  const contacts = entries.reduce((sum, entry) => sum + (Number(entry.contacts) || 0), 0);
  const fuelWidth = Math.max(...entries.map((entry) => fuelDisplay(entry.offload).value.length), fuelDisplay(totalOffload).value.length);
  const timeline = sorted.map((entry) => timelineEntryLine(entry, fuelWidth)).join("\n");
  return `${timelineHeader(sorted)}\n${timeline}\n\nTOTAL: ${timelineFuel(totalOffload, fuelWidth)} | ${receiverCount} RCVR | ${contacts} ct`;
}

async function copyText(text) {
  if (navigator.clipboard?.writeText && window.isSecureContext) {
    await navigator.clipboard.writeText(text);
    return;
  }
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.top = "-1000px";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.select();
  const copied = document.execCommand("copy");
  textarea.remove();
  if (!copied) throw new Error("Copy failed");
}

async function copyTimeline() {
  const entries = currentEntries();
  if (!entries.length) {
    openConfirm("Timeline", "No offloads to copy.", null, { hideCancel: true, hideOk: true, danger: false });
    return;
  }
  try {
    await copyText(buildTimelineText(entries));
    openConfirm(
      "Timeline Copied",
      `Copied ${entries.length} offload entr${entries.length === 1 ? "y" : "ies"} for paste into a text message.`,
      null,
      { hideCancel: true, hideOk: true, danger: false }
    );
  } catch {
    openConfirm("Copy Failed", "Could not copy the timeline. Try again from the browser.", null, { okText: "OK", hideCancel: true, danger: false });
  }
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function openAddForReceiverKey(key) {
  const group = groupEntries(state.entries).find((item) => item.key === key);
  if (group) openNewEntry(group);
}

function openModal(idName) {
  const modal = els[idName];
  if (!modal) return;
  if (document.activeElement && !modal.contains(document.activeElement)) {
    document.activeElement.blur();
  }
  modal.hidden = false;
  document.body.classList.add("modal-open");
}

function closeModal(idName) {
  const modal = els[idName];
  if (modal) {
    modal.hidden = true;
  }
  if (idName === "offloadModal") {
    editingEntryId = null;
    addToReceiver = null;
  }
  if (idName === "confirmModal") confirmAction = null;
  if (!document.querySelector(".modal:not([hidden])")) document.body.classList.remove("modal-open");
}

function resetForm() {
  els.offloadForm.reset();
  els.entryDate.value = zuluDatetimeValue();
  els.burnRate.value = DEFAULT_BURN_RATE;
  els.contacts.value = 1;
  els.deleteEntryBtn.hidden = true;
  editingEntryId = null;
  addToReceiver = null;
  setBlockMode(state.lastBlockMode || "B40");
  updatePreview();
}

function setBlockMode(mode) {
  activeBlockMode = mode === "B45" ? "B45" : "B40";
  const isB45 = activeBlockMode === "B45";
  els.blockB40.classList.toggle("active", !isB45);
  els.blockB45.classList.toggle("active", isB45);
  els.blockB40.setAttribute("aria-pressed", String(!isB45));
  els.blockB45.setAttribute("aria-pressed", String(isB45));
  document.querySelectorAll(".b40-field").forEach((field) => { field.hidden = isB45; });
  document.querySelectorAll(".b45-field").forEach((field) => { field.hidden = !isB45; });
  [els.burnRate, els.fuelStart, els.fuelEnd, els.boomTime].forEach((input) => { input.required = !isB45; });
  els.fuelOffload.required = isB45;
  updatePreview();
}

function focusForKeyboard(el) {
  if (!el) return;
  el.focus();
}

function focusAndSelect(el) {
  focusForKeyboard(el);
  selectInputValue(el);
}

function selectInputValue(el) {
  requestAnimationFrame(() => {
    try {
      el.select();
    } catch {
      // Some native date/time controls do not expose selectable text.
    }
  });
}

function sanitizeNumberText(value, allowDecimal = true) {
  let text = String(value || "").replace(/[^\d.]/g, "");
  if (!allowDecimal) return text.replace(/\./g, "");
  const firstDot = text.indexOf(".");
  if (firstDot === -1) return text;
  return `${text.slice(0, firstDot + 1)}${text.slice(firstDot + 1).replace(/\./g, "")}`;
}

function bindNumberOnlyInput(el, onInput, { allowDecimal = true } = {}) {
  el.addEventListener("keydown", (event) => {
    if (event.ctrlKey || event.metaKey || event.altKey || event.key.length !== 1) return;
    if (/\d/.test(event.key)) return;
    if (allowDecimal && event.key === ".") {
      let selected = "";
      try {
        selected = el.value.slice(el.selectionStart || 0, el.selectionEnd || 0);
      } catch {
        selected = "";
      }
      if (!el.value.includes(".") || selected.includes(".")) return;
    }
    event.preventDefault();
  });
  el.addEventListener("input", () => {
    const cleaned = sanitizeNumberText(el.value, allowDecimal);
    if (el.value !== cleaned) el.value = cleaned;
    onInput();
  });
}

function openNewEntry(receiver = null) {
  resetForm();
  els.modalTitle.textContent = receiver ? "Add Offload" : "Add Receiver";
  if (receiver) {
    addToReceiver = receiver;
    els.callsign.value = receiver.callsign;
    els.tail.value = receiver.tail;
    els.receiverType.value = entryType(receiver.entries[0]) === "UNKNOWN" ? "" : entryType(receiver.entries[0]);
    els.receiverInfo.value = receiver.receiverInfo || entryInfo(receiver.entries[0]);
    setBlockMode(receiver.entries[0]?.blockMode || "B40");
  }
  openModal("offloadModal");
  const focusTarget = receiver ? (activeBlockMode === "B45" ? els.fuelOffload : els.fuelStart) : els.callsign;
  focusAndSelect(focusTarget);
}

function submitOffloadForm() {
  if (typeof els.offloadForm.requestSubmit === "function") {
    els.offloadForm.requestSubmit();
    return;
  }
  els.offloadForm.querySelector('button[type="submit"]')?.click();
}

function openEditEntry(entryId) {
  const entry = state.entries.find((item) => item.id === entryId);
  if (!entry) return;
  resetForm();
  editingEntryId = entry.id;
  els.modalTitle.textContent = "Edit Offload";
  els.entryDate.value = entry.date || zuluDatetimeValue();
  setBlockMode(entry.blockMode || "B40");
  els.callsign.value = entry.callsign || "";
  els.tail.value = entryTail(entry);
  els.receiverType.value = entryType(entry) === "UNKNOWN" ? "" : entryType(entry);
  els.receiverInfo.value = entryInfo(entry);
  els.burnRate.value = entry.burnRate ?? DEFAULT_BURN_RATE;
  els.fuelStart.value = entry.fuelStart ?? "";
  els.fuelEnd.value = entry.fuelEnd ?? "";
  els.boomTime.value = entry.boomTime || String(entry.boomMinutes || "");
  els.fuelOffload.value = entry.fuelOffload ?? entry.offload ?? "";
  els.contacts.value = entry.contacts || 1;
  els.deleteEntryBtn.hidden = false;
  updatePreview();
  openModal("offloadModal");
}

async function saveEntry(event) {
  event.preventDefault();
  if (document.activeElement && els.offloadForm.contains(document.activeElement)) {
    document.activeElement.blur();
    await new Promise((resolve) => requestAnimationFrame(resolve));
  }
  const values = currentFormValues();
  const result = calculateOffload(values);
  if (!result || !values.callsign || !values.tail || !values.receiverType || !values.date) return;
  const b40Result = calculateB40Offload(values);
  const b40BoomMinutes = parseBoomMinutes(values.boomTime);
  const b40BoomBurn = calculateBoomBurn(values);

  const entry = {
    id: editingEntryId || id(),
    date: values.date,
    callsign: values.callsign,
    tail: values.tail,
    receiverType: values.receiverType,
    receiverInfo: values.receiverInfo,
    blockMode: values.blockMode,
    fuelStart: Number.isFinite(values.fuelStart) ? values.fuelStart : null,
    fuelEnd: Number.isFinite(values.fuelEnd) ? values.fuelEnd : null,
    burnRate: Number.isFinite(values.burnRate) ? values.burnRate : null,
    fuelOffload: Number.isFinite(values.fuelOffload) ? values.fuelOffload : null,
    boomTime: values.boomTime,
    boomMinutes: result.boomMinutes,
    boomBurn: result.boomBurn,
    b40Offload: b40Result?.offload ?? null,
    b40BoomMinutes: Number.isFinite(b40BoomMinutes) ? b40BoomMinutes : null,
    b40BoomBurn: Number.isFinite(b40BoomBurn) ? b40BoomBurn : null,
    contacts: values.contacts,
    offload: result.offload
  };

  if (editingEntryId) {
    state.entries = state.entries.map((item) => item.id === editingEntryId ? entry : item);
  } else {
    state.entries.push(entry);
  }

  state.lastBlockMode = values.blockMode;
  saveState();
  render();
  closeModal("offloadModal");
}

function openSummary(type) {
  const rankKeyByType = {
    offload: "offload",
    receivers: "receivers",
    contacts: "contacts"
  };
  const rankKey = rankKeyByType[type] || "offload";
  const rows = summarizeByType().sort((a, b) => (b[rankKey] - a[rankKey]) || a.type.localeCompare(b.type));
  if (!rows.length) {
    openConfirm("Summary", "No receiver fuel logged yet.", null, { okText: "OK", hideCancel: true, danger: false });
    return;
  }
  const titleByType = {
    offload: "Total Offload",
    receivers: "Receivers",
    contacts: "Contacts"
  };
  const totalByType = {
    offload: formatFuel(rows.reduce((sum, row) => sum + row.offload, 0)),
    receivers: String(rows.reduce((sum, row) => sum + row.receivers, 0)),
    contacts: String(rows.reduce((sum, row) => sum + row.contacts, 0))
  };
  const summaryRows = rows.map((row) => ({
    label: row.type,
    value: type === "offload" ? fuelDisplay(row.offload).value : String(type === "receivers" ? row.receivers : row.contacts),
    unit: type === "offload" ? fuelDisplay(row.offload).unit : ""
  }));
  openConfirm(`${titleByType[type] || "Summary"} ${totalByType[type] || ""}`.trim(), "", null, {
    hideCancel: true,
    hideOk: true,
    danger: false,
    summaryRows
  });
}

function openFilter() {
  els.filterQuery.value = activeFilter.query;
  els.filterFrom.value = activeFilter.from;
  els.filterTo.value = activeFilter.to;
  openModal("filterModal");
}

function openFilterAfterTap() {
  window.setTimeout(openFilter, 90);
}

function applyFilter(event) {
  event?.preventDefault();
  event?.stopPropagation();
  const from = els.filterFrom.value;
  const to = els.filterTo.value;
  if (from && to && entryTimestamp(from) > entryTimestamp(to)) {
    openConfirm("Time Filter", "From must be earlier than To.", null, { okText: "OK", hideCancel: true, danger: false });
    return;
  }
  activeFilter = {
    query: els.filterQuery.value.trim(),
    from,
    to
  };
  suppressClicksUntil = Date.now() + 1000;
  window.setTimeout(() => {
    closeModal("filterModal");
    render();
  }, 120);
}

function clearFilter() {
  activeFilter = { query: "", from: "", to: "" };
  els.filterQuery.value = "";
  els.filterFrom.value = "";
  els.filterTo.value = "";
  render();
}

function openConfirm(title, body, action, options = {}) {
  els.confirmTitle.textContent = title;
  els.confirmBody.textContent = body;
  els.confirmBody.classList.toggle("summary-table", Boolean(options.summaryRows));
  if (options.summaryRows) {
    els.confirmBody.innerHTML = `
      <table class="summary-table-inner">
        <tbody>
          ${options.summaryRows.map((row) => `
            <tr>
              <td class="summary-label">${escapeHtml(row.label)}</td>
              <td class="summary-value">${escapeHtml(row.value)}</td>
              <td class="summary-unit">${escapeHtml(row.unit || "")}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    `;
  } else {
    els.confirmBody.textContent = body;
  }
  els.confirmCancelBtn.hidden = Boolean(options.hideCancel);
  els.confirmCancelBtn.textContent = options.cancelText || "Cancel";
  els.confirmOkBtn.hidden = Boolean(options.hideOk);
  els.confirmOkBtn.textContent = options.okText || "Confirm";
  els.confirmOkBtn.classList.toggle("danger-btn", options.danger !== false);
  confirmAction = action;
  openModal("confirmModal");
}

function deleteCurrentEntry() {
  if (!editingEntryId) return;
  const entry = state.entries.find((item) => item.id === editingEntryId);
  openConfirm("Delete Offload", `Delete ${entry?.callsign || "this"} offload entry?`, () => {
    state.entries = state.entries.filter((item) => item.id !== editingEntryId);
    saveState();
    render();
    closeModal("offloadModal");
  });
}

function deleteReceiver(key) {
  const entries = state.entries.filter((entry) => receiverKey(entry) === key);
  const label = entries[0] ? `${entries[0].callsign} ${entryTail(entries[0])}` : "this receiver";
  openConfirm("Delete Receiver", `Delete all ${entries.length} offload entr${entries.length === 1 ? "y" : "ies"} for ${label}?`, () => {
    state.entries = state.entries.filter((entry) => receiverKey(entry) !== key);
    saveState();
    render();
  });
}

function confirmExport() {
  openConfirm(
    "Export Backup",
    "This will download a Fuel Tracker backup file from the current mission. You can import that file later on this device or any other device running Fuel Tracker.",
    exportData,
    { okText: "Export", danger: false }
  );
}

function exportData() {
  const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const stamp = zuluDatetimeValue().replaceAll(":", "").replace("T", "-");
  const filename = `kc135-fuel-tracker-${stamp}.json`;
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function confirmImport() {
  openConfirm(
    "Import Backup",
    "This will let you choose a Fuel Tracker backup file and incorporate it with the current mission. Matching duplicate entries will be skipped.",
    () => els.importFile.click(),
    { okText: "Import", danger: false }
  );
}

function importData(file) {
  if (!file) return;
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    try {
      const parsed = JSON.parse(String(reader.result || ""));
      if (!parsed || !Array.isArray(parsed.entries)) throw new Error("Invalid file");
      const existingKeys = new Set(state.entries.map(entryImportKey));
      const importedEntries = parsed.entries.map(normalizeEntryUnits);
      const newEntries = importedEntries.filter((entry) => {
        const key = entryImportKey(entry);
        if (existingKeys.has(key)) return false;
        existingKeys.add(key);
        return true;
      });
      const duplicateCount = importedEntries.length - newEntries.length;
      state.entries = [...state.entries, ...newEntries];
      saveState();
      render();
      openConfirm(
        "Import Complete",
        `Added ${newEntries.length} new offload entr${newEntries.length === 1 ? "y" : "ies"}. Skipped ${duplicateCount} duplicate entr${duplicateCount === 1 ? "y" : "ies"}.`,
        null,
        { okText: "OK", hideCancel: true, danger: false }
      );
    } catch {
      openConfirm("Import Failed", "That file did not look like a Fuel Tracker export.", () => {});
    } finally {
      els.importFile.value = "";
    }
  });
  reader.readAsText(file);
}

function displayModeMatches(mode) {
  return Boolean(window.matchMedia?.(`(display-mode: ${mode})`)?.matches);
}

function isInstalledApp() {
  return window.navigator.standalone === true
    || displayModeMatches("standalone")
    || displayModeMatches("fullscreen")
    || displayModeMatches("minimal-ui")
    || document.referrer.startsWith("android-app://");
}

function refreshMessageCenter() {
  const showInstall = !isInstalledApp();
  const showUpdatePrompt = Boolean(waitingWorker);
  els.installMessage.hidden = !showInstall;
  els.updateMessage.hidden = !showUpdatePrompt;
  els.messageCenterPanel.hidden = !(showInstall || showUpdatePrompt);
}

function registerServiceWorker() {
  if (!("serviceWorker" in navigator)) {
    refreshMessageCenter();
    return;
  }
  navigator.serviceWorker.register("service-worker.js").then((reg) => {
    if (reg.waiting) showUpdate(reg.waiting);
    reg.addEventListener("updatefound", () => {
      const worker = reg.installing;
      if (!worker) return;
      worker.addEventListener("statechange", () => {
        if (worker.state === "installed" && navigator.serviceWorker.controller) showUpdate(worker);
      });
    });
  }).catch(refreshMessageCenter);

  navigator.serviceWorker.addEventListener("controllerchange", () => window.location.reload());
}

function showUpdate(worker) {
  waitingWorker = worker;
  refreshMessageCenter();
}

function initInstall() {
  ["standalone", "fullscreen", "minimal-ui"].forEach((mode) => {
    const query = window.matchMedia?.(`(display-mode: ${mode})`);
    query?.addEventListener?.("change", refreshMessageCenter);
  });
  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    deferredInstallPrompt = event;
    refreshMessageCenter();
  });
  window.addEventListener("appinstalled", () => {
    deferredInstallPrompt = null;
    refreshMessageCenter();
  });
  els.installBtn.addEventListener("click", async () => {
    if (!deferredInstallPrompt) {
      openModal("installModal");
      return;
    }
    deferredInstallPrompt.prompt();
    await deferredInstallPrompt.userChoice;
    deferredInstallPrompt = null;
    refreshMessageCenter();
  });
  refreshMessageCenter();
}

function initEvents() {
  updateStickyOffset();
  window.addEventListener("resize", () => {
    updateStickyOffset();
    updateBackToTopVisibility();
  });
  window.addEventListener("scroll", updateBackToTopVisibility, { passive: true });

  const onPress = (el, handler) => {
    let lastPointerAt = 0;
    el.addEventListener("pointerup", (event) => {
      event.preventDefault();
      event.stopPropagation();
      lastPointerAt = Date.now();
      suppressClicksUntil = Date.now() + 700;
      handler(event);
    });
    el.addEventListener("click", (event) => {
      if (Date.now() - lastPointerAt < 500) {
        event.preventDefault();
        event.stopPropagation();
        return;
      }
      handler(event);
    });
  };

  document.querySelectorAll(".metric[data-summary]").forEach((tile) => {
    tile.addEventListener("click", () => openSummary(tile.dataset.summary));
    tile.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      openSummary(tile.dataset.summary);
    });
  });
  els.addReceiverBtn.addEventListener("click", (event) => {
    event.stopPropagation();
    openNewEntry();
  });
  els.cgBtn.addEventListener("click", (event) => {
    event.stopPropagation();
    openCgCalculator();
  });
  els.offloadForm.addEventListener("submit", saveEntry);
  els.deleteEntryBtn.addEventListener("click", deleteCurrentEntry);
  [els.fuelStart, els.fuelEnd, els.burnRate, els.fuelOffload].forEach((el) => {
    bindNumberOnlyInput(el, updatePreview, { allowDecimal: true });
  });
  [els.boomTime, els.contacts].forEach((el) => {
    bindNumberOnlyInput(el, updatePreview, { allowDecimal: false });
  });

  const cgInputs = [els.cgFb, els.cgCw, els.cgAb, els.cgRes, els.cgUd];
  cgInputs.forEach((el, index) => {
    bindNumberOnlyInput(el, updateCgPreview, { allowDecimal: true });
    el.addEventListener("focus", () => selectInputValue(el));
    el.addEventListener("click", () => selectInputValue(el));
    el.addEventListener("keydown", (event) => {
      if (event.key !== "Enter") return;
      event.preventDefault();
      const next = cgInputs[index + 1];
      if (next) focusAndSelect(next);
      else el.blur();
    });
  });

  els.blockB40.addEventListener("click", () => setBlockMode("B40"));
  els.blockB45.addEventListener("click", () => setBlockMode("B45"));

  els.callsign.addEventListener("input", () => {
    const cursor = els.callsign.selectionStart;
    els.callsign.value = els.callsign.value.toUpperCase();
    if (cursor !== null) els.callsign.setSelectionRange(cursor, cursor);
  });

  els.receiverType.addEventListener("input", () => {
    const cursor = els.receiverType.selectionStart;
    els.receiverType.value = els.receiverType.value.toUpperCase();
    if (cursor !== null) els.receiverType.setSelectionRange(cursor, cursor);
  });

  els.offloadForm.querySelectorAll("input").forEach((el) => {
    el.addEventListener("focus", () => selectInputValue(el));
    el.addEventListener("click", () => selectInputValue(el));
  });

  els.boomTime.addEventListener("keydown", (event) => {
    if (event.key !== "Enter") return;
    event.preventDefault();
    els.contacts.focus();
  });

  els.fuelOffload.addEventListener("keydown", (event) => {
    if (event.key !== "Enter") return;
    event.preventDefault();
    els.contacts.focus();
  });

  els.contacts.addEventListener("keydown", (event) => {
    if (event.key !== "Enter") return;
    event.preventDefault();
    submitOffloadForm();
  });

  els.receiverList.addEventListener("click", (event) => {
    const entryButton = event.target.closest(".entry-row");
    if (entryButton) {
      event.preventDefault();
      event.stopPropagation();
      entryButton.blur();
      openEditEntry(entryButton.dataset.entryId);
      return;
    }
    const addButton = event.target.closest(".add-to-receiver");
    if (addButton) {
      event.stopPropagation();
      addButton.blur();
      openAddForReceiverKey(addButton.dataset.receiverKey);
      return;
    }
    const deleteButton = event.target.closest(".delete-receiver");
    if (deleteButton) deleteReceiver(deleteButton.dataset.receiverKey);
  });

  els.exportBtn.addEventListener("click", confirmExport);
  els.copyTimelineBtn.addEventListener("click", copyTimeline);
  els.backToTopBtn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  els.importBtn.addEventListener("click", confirmImport);
  els.importFile.addEventListener("change", () => importData(els.importFile.files?.[0]));
  els.filterBtn.addEventListener("click", openFilterAfterTap);
  onPress(els.applyFilterBtn, applyFilter);
  onPress(els.clearFilterBtn, clearFilter);
  els.filterQuery.addEventListener("keydown", (event) => {
    if (event.key !== "Enter") return;
    event.preventDefault();
    applyFilter();
  });
  [els.filterFrom, els.filterTo].forEach((el) => {
    el.addEventListener("focus", () => {
      if (!el.value) el.value = zuluDatetimeValue();
    });
    el.addEventListener("pointerdown", () => {
      if (!el.value) el.value = zuluDatetimeValue();
    });
  });
  els.resetBtn.addEventListener("click", () => {
    if (!state.entries.length) {
      openConfirm("Delete Profile", "Nothing to delete.", null, { hideCancel: true, hideOk: true, danger: false });
      return;
    }
    openConfirm(
      "Delete Profile",
      "Clear all receivers and offload entries from this device?\n\nIf you want to save this mission for later or import it on another device, export it before deleting.",
      () => {
        state = {
          entries: [],
          lastUpdated: new Date().toISOString(),
          lastBlockMode: state.lastBlockMode || "B40"
        };
        saveState();
        render();
      }
    );
  });

  els.confirmCancelBtn.addEventListener("click", () => closeModal("confirmModal"));
  els.confirmOkBtn.addEventListener("click", () => {
    const action = confirmAction;
    closeModal("confirmModal");
    if (typeof action === "function") action();
  });

  document.querySelectorAll(".modal-close").forEach((button) => {
    button.addEventListener("click", () => closeModal(button.dataset.close));
  });
  document.addEventListener("click", (event) => {
    if (Date.now() > suppressClicksUntil) return;
    event.preventDefault();
    event.stopPropagation();
  }, true);
  document.querySelectorAll(".modal").forEach((modal) => {
    modal.addEventListener("click", (event) => {
      if (event.target === modal) event.preventDefault();
    });
  });
  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    const open = [...document.querySelectorAll(".modal:not([hidden])")].pop();
    if (open) closeModal(open.id);
  });

  els.updateBtn.addEventListener("click", () => {
    if (waitingWorker) waitingWorker.postMessage({ type: "SKIP_WAITING" });
    else window.location.reload();
  });
}

function boot() {
  loadState();
  initEvents();
  startNowClock();
  render();
  initInstall();
  registerServiceWorker();
}

boot();
