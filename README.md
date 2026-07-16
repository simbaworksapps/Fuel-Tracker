# Fuel Tracker

Standalone offline-first receiver fuel offload tracker PWA styled after SIMBA XWIND.

## Run Locally

```powershell
python -m http.server 8771
```

Then open `http://127.0.0.1:8771/`.

## Formula

Fuel offloaded is calculated as:

```text
fuel start K - fuel end K - (time on boom hours x burn rate K/hr)
```

Time on boom accepts minutes, such as `12`, or `HH:MM`, such as `00:12`.
Receiver entry date/time is tracked and displayed in Zulu.

Receivers are grouped by callsign plus tail number.

## Updating

When deploying a new version, bump `CACHE_NAME` in `service-worker.js`. Users with the installed app will see the Update button after the new service worker is detected.
