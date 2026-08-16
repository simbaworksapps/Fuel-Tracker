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
  rdvzProfileModal: $("rdvzProfileModal"),
  cgFb: $("cgFb"),
  cgCw: $("cgCw"),
  cgAb: $("cgAb"),
  cgRes: $("cgRes"),
  cgUd: $("cgUd"),
  cgResult: $("cgResult"),
  cgAltResult: $("cgAltResult"),
  cgAltUdWarning: $("cgAltUdWarning"),
  cgInfoBtn: $("cgInfoBtn"),
  feedbackBtn: $("feedbackBtn"),
  cgClearBtn: $("cgClearBtn"),
  rdvzProfile: $("rdvzProfile"),
  rdvzProfileButton: $("rdvzProfileButton"),
  rdvzProfileMenu: $("rdvzProfileMenu"),
  rdvzAddProfile: $("rdvzAddProfile"),
  rdvzType: $("rdvzType"),
  rdvzNewKias: $("rdvzNewKias"),
  rdvzSaveProfile: $("rdvzSaveProfile"),
  rdvzCancelProfile: $("rdvzCancelProfile"),
  rdvzLibraryModal: $("rdvzLibraryModal"),
  rdvzChartsModal: $("rdvzChartsModal"),
  rdvzLibraryCategories: $("rdvzLibraryCategories"),
  rdvzLibrarySearch: $("rdvzLibrarySearch"),
  rdvzLibraryCustom: $("rdvzLibraryCustom"),
  rdvzLibraryList: $("rdvzLibraryList"),
  rdvzKias: $("rdvzKias"),
  rdvzArFl: $("rdvzArFl"),
  rdvzTankerKias: $("rdvzTankerKias"),
  rdvzTrack: $("rdvzTrack"),
  rdvzWind: $("rdvzWind"),
  rdvzWindComponents: $("rdvzWindComponents"),
  rdvzOrbit: $("rdvzOrbit"),
  rdvzOrbitButton: $("rdvzOrbitButton"),
  rdvzOrbitMenu: $("rdvzOrbitMenu"),
  rdvzResults: $("rdvzResults"),
  rdvzVisual: $("rdvzVisual"),
  rdvzVisualSvg: $("rdvzVisualSvg"),
  rdvzWindAdjustBtn: $("rdvzWindAdjustBtn"),
  rdvzCompassXw: $("rdvzCompassXw"),
  rdvzCompassAlongRow: $("rdvzCompassAlongRow"),
  rdvzCompassAlongLabel: $("rdvzCompassAlongLabel"),
  rdvzCompassAlong: $("rdvzCompassAlong"),
  rdvzCompassAngle: $("rdvzCompassAngle"),
  rdvzTrackLine: $("rdvzTrackLine"),
  rdvzCpTurnPath: $("rdvzCpTurnPath"),
  rdvzDownwindLine: $("rdvzDownwindLine"),
  rdvzTurnPath: $("rdvzTurnPath"),
  rdvzWindGuide: $("rdvzWindGuide"),
  rdvzWindLine: $("rdvzWindLine"),
  rdvzWindAnglePrimary: $("rdvzWindAnglePrimary"),
  rdvzWindAngleSecondary: $("rdvzWindAngleSecondary"),
  rdvzAripLabel: $("rdvzAripLabel"),
  rdvzArcpLabel: $("rdvzArcpLabel"),
  rdvzVisualTrack: $("rdvzVisualTrack"),
  rdvzVisualWind: $("rdvzVisualWind"),
  rdvzVisualOrbit: $("rdvzVisualOrbit"),
  fragRampFuel: $("fragRampFuel"),
  fragLandFuel: $("fragLandFuel"),
  fragBurnRate: $("fragBurnRate"),
  fragFlightTime: $("fragFlightTime"),
  fragOffload: $("fragOffload"),
  fragResult: $("fragResult"),
  fragFormula: $("fragFormula"),
  fragInfoBtn: $("fragInfoBtn"),
  burnTimeRate: $("burnTimeRate"),
  burnTimeAmount: $("burnTimeAmount"),
  burnTimeInfoBtn: $("burnTimeInfoBtn"),
  burnTimeTimerBtn: $("burnTimeTimerBtn"),
  burnTimeResult: $("burnTimeResult"),
  burnTimeFormula: $("burnTimeFormula"),
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
  entryDateNowBtn: $("entryDateNowBtn"),
  entryDateSyncStatus: $("entryDateSyncStatus"),
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
  boomTimerBtn: $("boomTimerBtn"),
  fuelOffload: $("fuelOffload"),
  contacts: $("contacts"),
  contactsUpBtn: $("contactsUpBtn"),
  previewOffload: $("previewOffload"),
  formulaText: $("formulaText"),
  deleteEntryBtn: $("deleteEntryBtn"),
  installModal: $("installModal"),
  confirmModal: $("confirmModal"),
  confirmCard: $("confirmCard"),
  confirmTitle: $("confirmTitle"),
  confirmBody: $("confirmBody"),
  confirmCancelBtn: $("confirmCancelBtn"),
  confirmOkBtn: $("confirmOkBtn")
};

const STORAGE_KEY = "simba-fuel-tracker-v1";
const DEFAULT_BURN_RATE = 10.0;
const APP_CAO = "CAO 16AUG26";
const RDVZ_RECEIVER_LIBRARY = {
  kc135: {
    Boom: [
      ["B-1B", 350], ["B-2A", null, "450 KTAS"], ["B-52H", 310], ["C-5A-C/M", 300], ["C-17A", 310], ["C-32B", 310],
      ["C-130E/H/P/U, EC-130J/MC-130J/AC-130J", 215], ["RC-135S/U/V/W, TC-135S/W, WC-135R", 310], ["E-3A-D/F/G, E-6B, CT-49A", 310],
      ["E-4B/VC-25A", 310], ["E-7 Wedgetail", 310], ["KC-46A", 310], ["P-8A", 310]
    ],
    BDA: [["EA-6B", 310]],
    MPRS: [["EA-6B", 310]]
  },
  kc46: {
    Boom: [
      ["B-1B", 350], ["B-2A", null, "450 KTAS"], ["B-52H", 310], ["C-5M", 300], ["C-17A", 310], ["C-32B", 310], ["AC/EC/HC/MC-130J", 215],
      ["EC-130H", 215], ["E-3A/B/G", 285], ["E-4B", null, "310 KTAS"], ["E-6B", 310], ["E-7 Wedgetail", 310], ["RC-135S/U/V/W, TC-135W, WC-135R", 310],
      ["KC-46A", 310], ["P-8A", 310]
    ]
  }
};
const CG_FILL_VALUES = {
  cgFb: "39",
  cgCw: "49",
  cgAb: "43",
  cgRes: "3",
  cgUd: "15"
};
const CG_MAX_VALUES = {
  cgFb: 39,
  cgCw: 49,
  cgAb: 43,
  cgRes: 3.0,
  cgUd: 15
};
const RDVZ_TAS_TABLE = {
  kias: [200, 210, 225, 235, 245, 250, 255, 260, 270, 275, 280, 285, 290, 300, 305, 310, 315, 320, 325, 330, 335, 340, 345, 350, 355, 360],
  rows: [
    [3, [212, 222, 238, 249, 259, 265, 269, 275, 286, 291, 297, 302, 307, 318, 323, 328, 334, 339, 344, 350, 355, 360, 366, 371, 376, 381]],
    [6, [214, 224, 240, 251, 261, 268, 272, 278, 289, 294, 298, 305, 310, 321, 326, 331, 337, 342, 347, 352, 358, 364, 369, 374, 379, 385]],
    [9, [223, 235, 251, 263, 274, 279, 285, 290, 302, 307, 313, 318, 324, 335, 340, 346, 351, 357, 362, 368, 373, 379, 385, 390, 395, 401]],
    [10, [227, 238, 255, 267, 278, 283, 289, 295, 307, 312, 317, 322, 328, 340, 345, 351, 356, 362, 367, 373, 378, 384, 390, 395, 401, 406]],
    [12, [234, 245, 263, 275, 286, 292, 298, 303, 315, 321, 327, 332, 338, 349, 355, 361, 367, 372, 378, 384, 390, 395, 400, 406, 412, 418]],
    [14, [241, 253, 271, 283, 295, 301, 307, 313, 325, 330, 336, 342, 348, 360, 366, 372, 377, 383, 389, 395, 401, 407, 412, 418, 424, 430]],
    [16, [249, 261, 280, 292, 304, 310, 316, 322, 335, 341, 347, 352, 359, 371, 372, 383, 389, 395, 401, 407, 412, 418, 424, 430, 436, 442]],
    [18, [257, 269, 288, 301, 314, 320, 326, 332, 346, 351, 357, 363, 370, 382, 388, 394, 400, 407, 413, 419, 425, 431, 437, 443, 449, 455]],
    [20, [265, 278, 298, 311, 324, 330, 336, 343, 356, 362, 367, 374, 381, 394, 400, 406, 412, 419, 425, 431, 437, 444, 450, 456, 462, 469]],
    [21, [270, 283, 303, 316, 329, 335, 342, 348, 361, 367, 374, 379, 387, 400, 406, 413, 418, 425, 431, 438, 444, 450, 456, 463, 469, 475]],
    [22, [274, 288, 308, 321, 334, 341, 347, 355, 367, 374, 380, 386, 393, 406, 413, 419, 425, 432, 438, 445, 452, 457, 463, 470, 476, 483]],
    [23, [279, 292, 313, 326, 339, 347, 354, 360, 372, 379, 385, 392, 399, 411, 417, 425, 431, 437, 444, 451, 457, 464, 470, 477, 483, 490]],
    [24, [283, 297, 318, 332, 345, 353, 359, 365, 379, 384, 391, 397, 404, 417, 424, 431, 437, 444, 451, 458, 464, 471, 477, 484, 490, 497]],
    [25, [288, 302, 324, 338, 351, 358, 364, 371, 385, 390, 397, 404, 411, 424, 431, 437, 444, 450, 458, 465, 472, 478, 485, 491, 497, 504]],
    [26, [293, 307, 329, 343, 357, 363, 371, 377, 390, 397, 404, 410, 417, 431, 437, 444, 450, 458, 465, 472, 479, 486, 492, 499, 505, 512]],
    [27, [298, 312, 334, 348, 363, 370, 376, 384, 397, 404, 410, 417, 424, 437, 445, 451, 459, 466, 472, 479, 486, 493, 500, 506, 513, 520]],
    [28, [303, 318, 340, 354, 369, 376, 382, 390, 404, 410, 417, 424, 431, 445, 452, 459, 466, 474, 480, 487, 494, 501, 507, 514, 521, 528]],
    [29, [308, 323, 345, 360, 375, 385, 389, 396, 411, 416, 424, 431, 437, 452, 459, 466, 474, 482, 488, 494, 501, 508, 515, 522, 529, 536]],
    [30, [313, 329, 351, 366, 381, 388, 395, 403, 416, 424, 431, 437, 445, 459, 466, 474, 482, 490, 496, 502, 509, 516, 523, 530, 537, 544]],
    [31, [319, 335, 357, 372, 387, 395, 402, 410, 424, 431, 437, 444, 453, 466, 474, 481, 489, 497, 503, 510, 517, 524, 531, 538, 545, 552]],
    [32, [325, 340, 364, 379, 394, 401, 409, 416, 431, 437, 445, 452, 459, 474, 481, 489, 496, 504, 511, 518, 525, 532, 539, 546, 553, 560]],
    [33, [331, 346, 370, 385, 401, 408, 416, 424, 438, 445, 452, 460, 466, 481, 489, 496, 504, 512, 519, 526, 533, 540, 547, 554, 561, 568]],
    [34, [336, 352, 376, 392, 407, 415, 423, 431, 445, 452, 460, 466, 474, 489, 497, 504, 512, 520, 527, 534, 541, 549, 556, 563, 570, 577]],
    [35, [342, 358, 382, 398, 414, 422, 430, 438, 454, 460, 467, 474, 481, 497, 504, 512, 521, 529, 535, 542, 550, 558, 564, 571, 578, 585]]
  ]
};
const RDVZ_DRIFT_BUCKETS = [-15, -10, -5, 0, 5, 10, 15];
const RDVZ_TIMING_CHART = {
  closures: [460, 480, 500, 520, 540, 560, 580, 600, 620, 640, 660, 680, 700, 720, 740, 760, 780, 800, 820, 840, 860, 880, 900, 920, 940, 960, 980, 1000],
  time40Seconds: [262, 246, 230, 216, 202, 190, 178, 168, 157, 148, 139, 131, 118, 110, 102, 95, 88, 81, 75, 69, 63, 57, 52, 47, 42, 38, 33, 29],
  time30Seconds: [185, 171, 158, 147, 136, 126, 117, 108, 99, 92, 85, 78, 67, 60, 54, 47, 42, 36, 31, 26, 21, 16, 12, 8, 4, 0, null, null]
};
const RDVZ_TIMING_TABLE = [
  [100, ["12:12","11:36","11:02","10:31","10:02","9:36","9:11","8:48","8:26","8:06","7:46","7:28","7:06","6:50","6:34","6:18","6:04","5:51","5:38","5:25","5:13","5:02","4:52","4:41","4:31","4:22","4:13","4:05"]],
  [95, ["11:33","10:58","10:26","9:56","9:29","9:03","8:40","8:18","7:57","7:37","7:19","7:02","6:41","6:25","6:09","5:55","5:42","5:29","5:16","5:04","4:53","4:42","4:32","4:22","4:12","4:03","3:55","3:47"]],
  [90, ["10:54","10:21","9:50","9:22","8:56","8:31","8:09","7:48","7:28","7:09","6:52","6:36","6:15","6:00","5:45","5:31","5:18","5:06","4:54","4:43","4:32","4:21","4:11","4:02","3:53","3:45","3:36","3:29"]],
  [85, ["10:15","9:43","9:14","8:47","8:22","7:59","7:38","7:18","6:59","6:41","6:25","6:09","5:49","5:35","5:21","5:07","4:55","4:44","4:32","4:21","4:11","4:01","3:52","3:43","3:34","3:26","3:18","3:11"]],
  [80, ["9:36","9:06","8:38","8:12","7:49","7:27","7:07","6:48","6:30","6:13","5:57","5:43","5:24","5:10","4:56","4:44","4:32","4:21","4:10","4:00","3:50","3:40","3:31","3:23","3:15","3:08","3:00","2:53"]],
  [75, ["8:56","8:28","8:02","7:38","7:16","6:55","6:36","6:18","6:01","5:45","5:30","5:16","4:58","4:45","4:32","4:20","4:09","3:59","3:48","3:38","3:29","3:20","3:12","3:04","2:56","2:48","2:41","2:35"]],
  [70, ["8:17","7:51","7:26","7:03","6:42","6:23","6:04","5:48","5:32","5:17","5:03","4:50","4:32","4:20","4:08","3:56","3:46","3:36","3:26","3:17","3:08","3:00","2:52","2:44","2:37","2:30","2:23","2:17"]],
  [65, ["7:38","7:13","6:50","6:29","6:09","5:51","5:33","5:18","5:03","4:49","4:36","4:23","4:06","3:55","3:43","3:33","3:23","3:13","3:04","2:55","2:47","2:39","2:31","2:24","2:18","2:11","2:04","1:59"]],
  [60, ["6:59","6:36","6:14","5:54","5:36","5:18","5:02","4:48","4:34","4:21","4:08","3:57","3:41","3:30","3:19","3:09","3:00","2:51","2:42","2:34","2:26","2:19","2:12","2:05","1:58","1:52","1:46","1:41"]],
  [55, ["6:20","5:58","5:38","5:19","5:02","4:46","4:31","4:18","4:05","3:52","3:41","3:30","3:15","3:05","2:55","2:45","2:36","2:28","2:20","2:12","2:05","1:58","1:52","1:46","1:40","1:34","1:28","1:23"]],
  [50, ["5:41","5:21","5:02","4:45","4:29","4:14","4:00","3:48","3:36","3:24","3:14","3:04","2:50","2:40","2:30","2:21","2:13","2:05","1:58","1:51","1:44","1:38","1:32","1:26","1:20","1:15","1:10","1:05"]],
  [45, ["5:02","4:43","4:26","4:10","3:56","3:42","3:30","3:18","3:06","2:56","2:46","2:37","2:24","2:15","2:06","1:58","1:50","1:43","1:37","1:30","1:24","1:18","1:12","1:07","1:01","0:56","0:51","0:47"]],
  [40, ["4:22","4:06","3:50","3:36","3:22","3:10","2:58","2:48","2:37","2:28","2:19","2:11","1:58","1:50","1:42","1:35","1:28","1:21","1:15","1:09","1:03","0:57","0:52","0:47","0:42","0:38","0:33","0:29"]],
  [35, ["3:44","3:28","3:14","3:01","2:49","2:38","2:27","2:18","2:09","2:00","1:52","1:44","1:33","1:25","1:18","1:11","1:05","0:59","0:53","0:47","0:42","0:37","0:32","0:27","0:23","0:19","0:15","0:11"]],
  [30, ["3:05","2:51","2:38","2:27","2:16","2:06","1:57","1:48","1:39","1:32","1:25","1:18","1:07","1:00","0:54","0:47","0:42","0:36","0:31","0:26","0:21","0:16","0:12","0:08","0:04","0:00","-","-"]]
];
const RDVZ_TURN_RANGE_25 = [
  [1000, [26, 28, 30, 32, 34, 36, 39]], [975, [25, 27, 28, 30, 32, 34, 36]],
  [950, [24, 26, 27, 29, 31, 33, 35]], [925, [23, 24, 29, 28, 29, 31, 33]],
  [900, [22, 23, 25, 27, 28, 30, 32]], [875, [21, 23, 24, 26, 27, 29, 31]],
  [850, [20, 21, 23, 24, 26, 27, 29]], [825, [19, 20, 21, 23, 24, 26, 27]],
  [800, [18, 19, 21, 22, 23, 25, 26]], [775, [17, 18, 19, 21, 22, 23, 25]],
  [750, [16, 17, 18, 20, 21, 22, 24]], [725, [15, 16, 17, 18, 20, 21, 22]],
  [700, [15, 15, 16, 17, 18, 19, 20]], [675, [12, 13, 14, 15, 15, 16, 17]],
  [650, [11, 12, 13, 14, 15, 15, 17]], [625, [10, 11, 12, 13, 14, 15, 16]],
  [600, [9, 10, 11, 12, 13, 14, 15]], [575, [9, 10, 10, 11, 12, 13, 14]],
  [550, [8, 9, 9, 10, 11, 12, 12]], [525, [7, 8, 8, 9, 10, 11, 11]],
  [500, [7, 7, 8, 8, 9, 10, 11]], [475, [6, 7, 7, 8, 8, 9, 10]]
];
const RDVZ_TURN_RANGE_C130_25 = [
  [575, [8, 9, 10, 11, 11, 12, 13]],
  [550, [7, 8, 9, 10, 11, 12, 13]],
  [525, [6, 7, 8, 9, 10, 11, 12]],
  [500, [6, 6, 7, 8, 9, 10, 11]],
  [475, [5, 6, 6, 7, 7, 8, 9]]
];
const RDVZ_OFFSET_25 = [
  [520, [11, 13, 15, 17, 20, 22, 26]], [500, [10, 12, 14, 16, 18, 21, 23]],
  [480, [9, 11, 13, 15, 17, 19, 21]], [460, [9, 10, 12, 13, 15, 18, 20]],
  [440, [8, 9, 11, 12, 14, 16, 18]], [430, [7.5, 8.5, 10.5, 11.5, 13.5, 15.5, 17.5]],
  [420, [7, 8, 10, 11, 13, 15, 17]], [410, [6.5, 7.5, 9.5, 10.5, 12.5, 14, 16]],
  [400, [6, 7, 9, 10, 12, 13, 15]], [390, [6, 7, 8.5, 9.5, 11.5, 12.5, 14.5]],
  [380, [6, 7, 8, 9, 11, 12, 14]], [370, [5.5, 6.5, 7.5, 8.5, 10, 11.5, 13]],
  [360, [5, 6, 7, 8, 9, 11, 12]], [350, [5, 5.5, 6.5, 7.5, 8.5, 10.5, 11.5]],
  [340, [5, 5, 6, 7, 8, 10, 11]], [320, [4, 5, 6, 6, 7, 9, 10]],
  [300, [4, 4, 5, 6, 7, 8, 9]], [280, [3, 4, 4, 5, 6, 7, 8]],
  [260, [3, 3, 4, 4, 5, 6, 7]], [240, [2, 3, 3, 4, 5, 5, 6]],
  [220, [2, 3, 3, 4, 4, 5, 5]]
];

let state = {
  entries: [],
  lastUpdated: null,
  lastBlockMode: "MAN",
  receiverProfiles: [],
  rdvzInputs: null
};
let editingEntryId = null;
let addToReceiver = null;
let confirmAction = null;
let deferredInstallPrompt = null;
let waitingWorker = null;
let activeFilter = { query: "", from: "", to: "" };
let suppressClicksUntil = 0;
let activeBlockMode = "MAN";
let entryDateSyncTimer = null;
let boomTimerInterval = null;
let boomTimerStartedAt = 0;
let boomTimerBaseSeconds = 0;
let boomTimerHold = null;
let boomTimerIgnoreClick = false;
let burnTimerInterval = null;
let burnTimerStartedAt = 0;
let burnTimerRemainingSeconds = 0;
let burnTimerRequiredSeconds = 0;
let burnTimerCompleted = false;
let burnTimerHasStarted = false;
let rdvzWindAdjustMode = false;
let rdvzWindDragging = false;
let rdvzLibraryTanker = "kc135";
let rdvzLibraryCategory = "Boom";
let burnTimerBlinking = false;
let burnTimerHold = null;
let burnTimerIgnoreClick = false;
let rdvzTimerInterval = null;
let rdvzTimerStartedAt = 0;
let rdvzTimerBaseSeconds = 0;
let rdvzTimerHold = null;
let rdvzTimerIgnoreClick = false;
let editingRdvzProfileId = null;

function id() {
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
}

function normalizeRdvzProfiles(profiles) {
  if (!Array.isArray(profiles)) return [];
  const seen = new Set();
  return profiles
    .map((profile) => ({
      id: String(profile.id || id()),
      type: String(profile.type || "").trim().toUpperCase(),
      kias: Math.round(Number(profile.kias) || 0),
      notes: String(profile.notes || "").trim()
    }))
    .filter((profile) => profile.type && profile.kias > 0)
    .filter((profile) => {
      const key = profile.type;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    })
    .sort((a, b) => a.type.localeCompare(b.type));
}

function loadState() {
  try {
    const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
    if (parsed && Array.isArray(parsed.entries)) {
      const entries = parsed.entries.map(normalizeEntryUnits);
      state = {
        entries,
        lastUpdated: parsed.lastUpdated || null,
        lastBlockMode: validBlockMode(parsed.lastBlockMode) || latestEntryBlockMode(entries) || "MAN",
        receiverProfiles: normalizeRdvzProfiles(parsed.receiverProfiles),
        rdvzInputs: normalizeRdvzWorkingInputs(parsed.rdvzInputs)
      };
    }
  } catch {
    state = { entries: [], lastUpdated: null, lastBlockMode: "MAN", receiverProfiles: [], rdvzInputs: null };
  }
}

function saveState() {
  state.lastUpdated = new Date().toISOString();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function normalizeRdvzWorkingInputs(value) {
  if (!value || typeof value !== "object") return null;
  return {
    profileId: String(value.profileId || ""),
    kias: String(value.kias || ""),
    arFl: String(value.arFl || ""),
    tankerKias: value.tankerKias === undefined || value.tankerKias === null ? "275" : String(value.tankerKias),
    track: String(value.track || ""),
    wind: String(value.wind || ""),
    orbit: value.orbit === "right" ? "right" : "left"
  };
}

function saveRdvzWorkingInputs() {
  state.rdvzInputs = {
    profileId: els.rdvzProfile.value || "",
    kias: els.rdvzKias.value,
    arFl: els.rdvzArFl.value,
    tankerKias: els.rdvzTankerKias.value,
    track: els.rdvzTrack.value,
    wind: els.rdvzWind.value,
    orbit: els.rdvzOrbit.value === "right" ? "right" : "left"
  };
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // Keep the calculator usable if browser storage is unavailable.
  }
}

function formatNumber(value) {
  return Math.round(Number(value) || 0).toLocaleString();
}

function formatBoomTime(value) {
  const totalSeconds = Math.round((Number(value) || 0) * 60);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return seconds ? `${minutes}m${String(seconds).padStart(2, "0")}s` : `${minutes} min`;
}

function formatK(value, digits = 1) {
  const number = Number(value) || 0;
  return number.toLocaleString(undefined, {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits
  });
}

function formatFlightLevel(value) {
  return `FL${String(Math.max(0, Math.round(Number(value) || 0))).padStart(3, "0")}`;
}

function rdvzRolloutLabel(result) {
  if (result.isC130Receiver) return "1NM Trail";
  if (result.closure >= 675) return "Rollout 3 NM Lead";
  if (result.closure <= 650) return "Rollout ½ NM Lead (A-10)";
  return "Rollout ½–3 NM Lead";
}

function rdvzTurnRangeOutputLabel(result) {
  if (result.isC130Receiver) return "TR (-1NM)";
  if (result.closure >= 675) return "TR (3NM)";
  if (result.closure <= 650) return "TR (½NM)";
  return "TR (½–3NM)";
}

function formatOneDecimalInput(value) {
  const number = Number(value);
  return Number.isFinite(number) ? number.toFixed(1) : "";
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
  if (mode === "DIR" || mode === "B45") return "DIR";
  if (mode === "MAN" || mode === "B40") return "MAN";
  return "";
}

function latestEntryBlockMode(entries) {
  return [...entries]
    .sort((a, b) => entryTimestamp(b.date) - entryTimestamp(a.date))
    .map((entry) => validBlockMode(entry.blockMode))
    .find(Boolean) || "";
}

function normalizeEntryUnits(entry) {
  const normalized = { ...entry };
  normalized.blockMode = validBlockMode(normalized.blockMode) || "MAN";
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
    String(validBlockMode(entry.blockMode) || "MAN"),
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
  }).sort((a, b) => (b.lastDate - a.lastDate)
    || a.callsign.localeCompare(b.callsign)
    || a.tail.localeCompare(b.tail));
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

function parseBoomSeconds(value) {
  const minutes = parseBoomMinutes(value);
  return Number.isFinite(minutes) ? Math.max(0, Math.round(minutes * 60)) : 0;
}

function formatBoomTimerInput(totalSeconds) {
  const secondsTotal = Math.max(0, Math.round(Number(totalSeconds) || 0));
  const minutes = Math.floor(secondsTotal / 60);
  const seconds = secondsTotal % 60;
  if (!seconds) return String(minutes);
  return `${String(minutes).padStart(2, "0")}${String(seconds).padStart(2, "0")}`;
}

function calculateOffload(values) {
  if (values.blockMode === "DIR") {
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
    els.formulaText.textContent = values.blockMode === "DIR" ? "Direct entry" : "Start - End - (Boom Time x Burn Rate)";
    return;
  }
  els.previewOffload.textContent = formatFuel(result.offload);
  els.formulaText.textContent = values.blockMode === "DIR"
    ? "Direct entry"
    : `${formatK(values.fuelStart)} - ${formatK(values.fuelEnd)} - (${formatBoomTime(result.boomMinutes)} x ${formatK(values.burnRate)} K/hr)`;
  if (result.offload < 0) card.classList.add("bad");
  else if (result.offload === 0) card.classList.add("warn");
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function bracketIndex(values, value) {
  if (value <= values[0]) return [0, 0];
  const last = values.length - 1;
  if (value >= values[last]) return [last, last];
  for (let i = 0; i < last; i += 1) {
    if (value >= values[i] && value <= values[i + 1]) return [i, i + 1];
  }
  return [last, last];
}

function extrapolationBracketIndex(values, value) {
  const last = values.length - 1;
  if (last < 1) return [0, 0];
  if (value <= values[0]) return [0, 1];
  if (value >= values[last]) return [last - 1, last];
  return bracketIndex(values, value);
}

function tableRangeStatus(values, value, allowedIntervals = 2) {
  const sorted = [...values].map(Number).sort((a, b) => a - b);
  if (sorted.length < 2 || !Number.isFinite(value)) return "out";
  const lowStep = sorted[1] - sorted[0];
  const last = sorted.length - 1;
  const highStep = sorted[last] - sorted[last - 1];
  if (value < sorted[0] - (lowStep * allowedIntervals) || value > sorted[last] + (highStep * allowedIntervals)) return "out";
  if (value < sorted[0] || value > sorted[last]) return "estimated";
  return "inside";
}

function interpolate(a, b, ratio) {
  return a + ((b - a) * ratio);
}

function interpolateTable(rows, value, columnIndex) {
  const points = rows.map(([key, values]) => [Number(key), Number(values[columnIndex])]);
  points.sort((a, b) => a[0] - b[0]);
  const keys = points.map(([key]) => key);
  const [loIndex, hiIndex] = bracketIndex(keys, value);
  const [loKey, loValue] = points[loIndex];
  const [hiKey, hiValue] = points[hiIndex];
  if (loIndex === hiIndex || hiKey === loKey) return loValue;
  return interpolate(loValue, hiValue, (value - loKey) / (hiKey - loKey));
}

function extrapolateTable(rows, value, columnIndex) {
  const points = rows.map(([key, values]) => [Number(key), Number(values[columnIndex])]);
  points.sort((a, b) => a[0] - b[0]);
  const keys = points.map(([key]) => key);
  const [loIndex, hiIndex] = extrapolationBracketIndex(keys, value);
  const [loKey, loValue] = points[loIndex];
  const [hiKey, hiValue] = points[hiIndex];
  if (loIndex === hiIndex || hiKey === loKey) return loValue;
  return interpolate(loValue, hiValue, (value - loKey) / (hiKey - loKey));
}

function extrapolateDriftTable(rows, value, driftDegrees) {
  const [loIndex, hiIndex] = extrapolationBracketIndex(RDVZ_DRIFT_BUCKETS, driftDegrees);
  const loDrift = RDVZ_DRIFT_BUCKETS[loIndex];
  const hiDrift = RDVZ_DRIFT_BUCKETS[hiIndex];
  const loValue = extrapolateTable(rows, value, loIndex);
  const hiValue = extrapolateTable(rows, value, hiIndex);
  if (loIndex === hiIndex || hiDrift === loDrift) return loValue;
  return interpolate(loValue, hiValue, (driftDegrees - loDrift) / (hiDrift - loDrift));
}

function nearestDriftBucket(driftDegrees) {
  const bounded = clamp(Math.round(driftDegrees / 5) * 5, -15, 15);
  return bounded;
}

function rdvzDriftColumn(driftDegrees, orbit) {
  const bucket = nearestDriftBucket(rdvzOrbitDrift(driftDegrees, orbit));
  return RDVZ_DRIFT_BUCKETS.indexOf(bucket);
}

function rdvzOrbitDrift(driftDegrees, orbit) {
  return orbit === "right" ? -driftDegrees : driftDegrees;
}

function formatDrift(value) {
  if (!Number.isFinite(value) || Math.abs(value) < .5) return "0";
  return `${formatK(Math.abs(value), 0)}${value < 0 ? "L" : "R"}`;
}

function lookupTas(fl, kias) {
  const altitudes = RDVZ_TAS_TABLE.rows.map(([alt]) => alt);
  if (tableRangeStatus(altitudes, fl) === "out" || tableRangeStatus(RDVZ_TAS_TABLE.kias, kias) === "out") return NaN;
  const [altLo, altHi] = extrapolationBracketIndex(altitudes, fl);
  const [kiasLo, kiasHi] = extrapolationBracketIndex(RDVZ_TAS_TABLE.kias, kias);
  const altitudeRatio = altLo === altHi ? 0 : (fl - altitudes[altLo]) / (altitudes[altHi] - altitudes[altLo]);
  const kiasRatio = kiasLo === kiasHi ? 0 : (kias - RDVZ_TAS_TABLE.kias[kiasLo]) / (RDVZ_TAS_TABLE.kias[kiasHi] - RDVZ_TAS_TABLE.kias[kiasLo]);
  const rowLo = RDVZ_TAS_TABLE.rows[altLo][1];
  const rowHi = RDVZ_TAS_TABLE.rows[altHi][1];
  const tasLo = interpolate(rowLo[kiasLo], rowLo[kiasHi], kiasRatio);
  const tasHi = interpolate(rowHi[kiasLo], rowHi[kiasHi], kiasRatio);
  return interpolate(tasLo, tasHi, altitudeRatio);
}

function calculateWindDrift(tas, track, windDir, windKts) {
  if (![tas, track, windDir, windKts].every(Number.isFinite) || tas <= 0 || windKts <= 0) return 0;
  const relative = ((windDir - track + 540) % 360) - 180;
  // Wind direction is where the wind comes from; its push is the opposite vector.
  const crosswind = -windKts * Math.sin(relative * Math.PI / 180);
  return Math.asin(clamp(crosswind / tas, -1, 1)) * 180 / Math.PI;
}

function parseRdvzWind(value) {
  const text = String(value || "").trim();
  if (!text || text === "0") return { direction: 0, speed: 0 };
  const slashMatch = text.match(/^(\d{1,3})\s*\/\s*(\d{1,3})$/);
  const compactMatch = text.match(/^(\d{3})(\d{2,3})$/);
  const match = slashMatch || compactMatch;
  if (!match) return null;
  const direction = Number(match[1]);
  const speed = Number(match[2]);
  if (!Number.isFinite(direction) || !Number.isFinite(speed) || direction > 360) return null;
  return { direction, speed };
}

function normalizeRdvzWind() {
  const wind = parseRdvzWind(els.rdvzWind.value);
  if (!wind) return;
  els.rdvzWind.value = wind.speed === 0 ? "0" : `${String(wind.direction).padStart(3, "0")}/${wind.speed}`;
  saveRdvzWorkingInputs();
}

function usesC130TurnRangeTable() {
  const profile = state.receiverProfiles.find((item) => item.id === els.rdvzProfile.value);
  return /\bC-?130/i.test(profile?.type || "");
}

function calculateRdvz() {
  const receiverKias = Number(els.rdvzKias.value);
  const arFl = Number(els.rdvzArFl.value);
  const tankerKias = Number(els.rdvzTankerKias.value);
  if (![receiverKias, arFl, tankerKias].every(Number.isFinite) || receiverKias <= 0 || arFl <= 0 || tankerKias <= 0) return null;
  const receiverFl = Math.max(0, arFl - 10);
  const tankerTas = lookupTas(arFl / 10, tankerKias);
  const receiverTas = lookupTas(receiverFl / 10, receiverKias);
  const closure = tankerTas + receiverTas;
  const wind = parseRdvzWind(els.rdvzWind.value) || { direction: 0, speed: 0 };
  const windDrift = calculateWindDrift(tankerTas, Number(els.rdvzTrack.value), wind.direction, wind.speed);
  const orbit = els.rdvzOrbit.value || "left";
  // ARIP-to-ARCP drift is measured on course and does not change with orbit direction.
  // Orbit direction only reverses which ATP table header maps to the numeric column.
  const drift = windDrift;
  const orbitDrift = rdvzOrbitDrift(windDrift, orbit);
  const isC130Receiver = usesC130TurnRangeTable();
  const c130CombinedTurnRange = [
    ...RDVZ_TURN_RANGE_25.filter(([tableClosure]) => tableClosure > 575),
    ...RDVZ_TURN_RANGE_C130_25
  ];
  const usesC130TurnRange = isC130Receiver && closure <= 575;
  const turnRangeTable = isC130Receiver ? c130CombinedTurnRange : RDVZ_TURN_RANGE_25;
  const turnRangeClosures = turnRangeTable.map(([value]) => value);
  const turnRangeMinClosure = Math.min(...turnRangeClosures);
  const turnRangeMaxClosure = Math.max(...turnRangeClosures);
  const turnRangeInRange = Number.isFinite(closure)
    && tableRangeStatus(turnRangeClosures, closure) !== "out"
    && tableRangeStatus(RDVZ_DRIFT_BUCKETS, orbitDrift) !== "out";
  const offsetInRange = Number.isFinite(tankerTas)
    && tableRangeStatus(RDVZ_OFFSET_25.map(([value]) => value), tankerTas) !== "out"
    && tableRangeStatus(RDVZ_DRIFT_BUCKETS, orbitDrift) !== "out";
  const turnRange = !turnRangeInRange ? NaN : extrapolateDriftTable(turnRangeTable, closure, orbitDrift);
  const offset = !offsetInRange ? NaN : extrapolateDriftTable(RDVZ_OFFSET_25, tankerTas, orbitDrift);
  const windTime40 = Number.isFinite(turnRange) && Number.isFinite(closure) ? Math.max(0, (40 - turnRange) / (closure / 60)) : NaN;
  const windTime30 = Number.isFinite(turnRange) && Number.isFinite(closure) ? Math.max(0, (30 - turnRange) / (closure / 60)) : NaN;
  const chartTime40 = lookupRdvzChartTime(closure, RDVZ_TIMING_CHART.time40Seconds);
  const chartTime30 = lookupRdvzChartTime(closure, RDVZ_TIMING_CHART.time30Seconds);
  const turnRate25 = 1091 * Math.tan(25 * Math.PI / 180) / tankerTas;
  const standardRateBank = Math.atan((3 * tankerTas) / 1091) * 180 / Math.PI;
  const halfStandardRateBank = Math.atan((1.5 * tankerTas) / 1091) * 180 / Math.PI;
  const turnTime180 = 180 / turnRate25 / 60;
  const c130OutsideChart = isC130Receiver && (closure < 475 || closure > 575);
  const turnRadius25 = (tankerTas ** 2) / (68626 * Math.tan(25 * Math.PI / 180));
  const receiverTravelDuringTurn = receiverTas * (Math.PI * turnRadius25 / tankerTas);
  const geometricRolloutNm = isC130Receiver
    ? -1
    : closure >= 675
      ? 3
      : closure <= 650
        ? 0.5
        : interpolate(0.5, 3, (closure - 650) / 25);
  const geometricBaseTurnRange = Math.max(0, turnRadius25 + receiverTravelDuringTurn + geometricRolloutNm);
  const geometricBaseOffset = 2 * turnRadius25;
  const geometricDriftRadians = orbitDrift * Math.PI / 180;
  const geometricTurnRange = Math.max(0, (geometricBaseTurnRange * Math.cos(geometricDriftRadians)) + (geometricBaseOffset * Math.sin(geometricDriftRadians)));
  const geometricOffset = Math.max(0, (geometricBaseOffset * Math.cos(geometricDriftRadians)) + (geometricBaseTurnRange * Math.sin(geometricDriftRadians)));
  const receiverTasEstimated = Number.isFinite(receiverTas) && (receiverFl / 10 < 3 || receiverFl / 10 > 35 || receiverKias < 200 || receiverKias > 360);
  const tankerTasEstimated = Number.isFinite(tankerTas) && (arFl / 10 < 3 || arFl / 10 > 35 || tankerKias < 200 || tankerKias > 360);
  const closureEstimated = receiverTasEstimated || tankerTasEstimated;
  const turnRangeEstimated = closureEstimated || closure < turnRangeMinClosure || closure > turnRangeMaxClosure || Math.abs(drift) > 15;
  const offsetEstimated = tankerTasEstimated || tankerTas < 220 || tankerTas > 520 || Math.abs(drift) > 15;
  const chartTimeEstimated = closureEstimated || closure < 460 || closure > 1000;
  const estimates = {
    receiverTas: receiverTasEstimated,
    tankerTas: tankerTasEstimated,
    closure: closureEstimated,
    turnRange: turnRangeEstimated,
    offset: offsetEstimated,
    chartTime: chartTimeEstimated,
    windTime: turnRangeEstimated || closureEstimated,
    overrun: turnRangeEstimated,
    turnMetrics: tankerTasEstimated
  };
  const tableWarnings = [];
  if (arFl / 10 < 3 || arFl / 10 > 35 || receiverFl / 10 < 3 || receiverFl / 10 > 35) tableWarnings.push("altitude");
  if (receiverKias < 200 || receiverKias > 360 || tankerKias < 200 || tankerKias > 360) tableWarnings.push("KIAS");
  if (closure < turnRangeMinClosure || closure > turnRangeMaxClosure) tableWarnings.push("closure");
  if (tankerTas < 220 || tankerTas > 520) tableWarnings.push("tanker TAS");
  if (Math.abs(drift) > 15) tableWarnings.push("drift");
  const outOfRange = {
    receiverTas: !Number.isFinite(receiverTas),
    tankerTas: !Number.isFinite(tankerTas),
    closure: !Number.isFinite(closure),
    turnRange: !Number.isFinite(turnRange),
    offset: !Number.isFinite(offset),
    chartTime: !Number.isFinite(closure) || tableRangeStatus(RDVZ_TIMING_CHART.closures, closure) === "out",
    windTime: !Number.isFinite(windTime40) || !Number.isFinite(windTime30),
    turnMetrics: !Number.isFinite(tankerTas)
  };
  return { receiverFl, tankerFl: arFl, tankerTas, receiverTas, closure, drift, turnRange, offset, chartTime40, chartTime30, windTime40, windTime30, turnRate25, standardRateBank, halfStandardRateBank, turnTime180, isC130Receiver, usesC130TurnRange, c130OutsideChart, geometricTurnRange, geometricOffset, tableWarnings, estimates, outOfRange };
}

function lookupRdvzChartTime(closure, values) {
  if (!Number.isFinite(closure) || tableRangeStatus(RDVZ_TIMING_CHART.closures, closure) === "out") return NaN;
  const [lo, hi] = extrapolationBracketIndex(RDVZ_TIMING_CHART.closures, closure);
  if (!Number.isFinite(values[lo]) || !Number.isFinite(values[hi])) return NaN;
  const ratio = lo === hi ? 0 : (closure - RDVZ_TIMING_CHART.closures[lo]) / (RDVZ_TIMING_CHART.closures[hi] - RDVZ_TIMING_CHART.closures[lo]);
  return Math.max(0, interpolate(values[lo], values[hi], ratio)) / 60;
}

function formatTimerMinutes(value) {
  if (!Number.isFinite(value)) return "--";
  const totalSeconds = Math.round(value * 60);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes}:${String(seconds).padStart(2, "0")}`;
}

function updateRdvzProfileOptions() {
  const selected = els.rdvzProfile.value;
  els.rdvzProfile.innerHTML = `${state.receiverProfiles.length ? "" : '<option value="" selected disabled>No receiver types</option>'}${state.receiverProfiles.map((profile) => (
    `<option value="${escapeHtml(profile.id)}">${escapeHtml(profile.type)}</option>`
  )).join("")}`;
  if (state.receiverProfiles.some((profile) => profile.id === selected)) els.rdvzProfile.value = selected;
  else if (state.receiverProfiles.length) els.rdvzProfile.value = state.receiverProfiles[0].id;
  else els.rdvzProfile.value = "";
  const active = state.receiverProfiles.find((profile) => profile.id === els.rdvzProfile.value);
  els.rdvzProfileButton.querySelector("span").textContent = active?.type || "Add";
  els.rdvzProfileMenu.innerHTML = state.receiverProfiles.length
    ? state.receiverProfiles.map((profile) => `<div class="receiver-profile-option" role="option" aria-selected="${profile.id === els.rdvzProfile.value}"><button class="profile-select" type="button" data-select-profile="${escapeHtml(profile.id)}">${escapeHtml(profile.type)}</button><button class="profile-edit" type="button" data-edit-profile="${escapeHtml(profile.id)}" aria-label="Edit ${escapeHtml(profile.type)}" title="Edit">&#9998;</button><button class="profile-delete" type="button" data-delete-profile="${escapeHtml(profile.id)}" aria-label="Delete ${escapeHtml(profile.type)}" title="Delete">&times;</button></div>`).join("")
    : '<span class="themed-select-empty">Add</span>';
}

function renderRdvzLibrary() {
  const groups = RDVZ_RECEIVER_LIBRARY[rdvzLibraryTanker];
  const categories = Object.keys(groups);
  if (!categories.includes(rdvzLibraryCategory)) rdvzLibraryCategory = categories[0];
  const query = els.rdvzLibrarySearch.value.trim().toUpperCase();
  els.rdvzLibraryCategories.innerHTML = categories.map((category) => (
    `<button type="button" data-library-category="${category}" class="${category === rdvzLibraryCategory ? "active" : ""}">${category}</button>`
  )).join("");
  document.querySelectorAll("[data-library-tanker]").forEach((button) => {
    button.classList.toggle("active", button.dataset.libraryTanker === rdvzLibraryTanker);
  });
  const saved = state.receiverProfiles.filter((profile) => !query || profile.type.includes(query));
  const catalog = groups[rdvzLibraryCategory].filter(([type]) => !query || type.includes(query));
  const savedHtml = saved.length
    ? `<h3>Saved</h3>${saved.map((profile) => `<div class="rdvz-library-row saved"><button type="button" class="rdvz-library-select" data-select-profile="${escapeHtml(profile.id)}"><span>${escapeHtml(profile.type)}</span><b>${profile.kias} KIAS</b></button><button type="button" class="profile-edit" data-edit-profile="${escapeHtml(profile.id)}" aria-label="Edit ${escapeHtml(profile.type)}">&#9998;</button><button type="button" class="profile-delete" data-delete-profile="${escapeHtml(profile.id)}" aria-label="Delete ${escapeHtml(profile.type)}">&times;</button></div>`).join("")}`
    : "";
  const catalogHtml = catalog.length
    ? `<h3>${rdvzLibraryTanker === "kc135" ? "KC-135" : "KC-46"} ${rdvzLibraryCategory}</h3>${catalog.map(([type, kias, alternate]) => `<div class="rdvz-library-row${kias ? "" : " unavailable"}">${kias ? `<button type="button" class="rdvz-library-select" data-library-type="${escapeHtml(type)}" data-library-kias="${kias}">` : "<div class=\"rdvz-library-select\">"}<span>${escapeHtml(type)}</span><b>${kias ? `${kias} KIAS` : escapeHtml(alternate || "Not listed")}</b>${kias ? "</button>" : "</div>"}</div>`).join("")}`
    : '<p class="rdvz-library-empty">No matching receivers</p>';
  els.rdvzLibraryList.innerHTML = savedHtml + catalogHtml;
}

function openRdvzLibrary() {
  closeRdvzMenus();
  els.rdvzLibrarySearch.value = "";
  renderRdvzLibrary();
  openModal("rdvzLibraryModal");
}

function selectLibraryReceiver(type, kias) {
  const normalizedType = String(type).trim().toUpperCase();
  const speed = Math.round(Number(kias) || 0);
  if (!normalizedType || speed <= 0) return;
  let profile = state.receiverProfiles.find((item) => item.type === normalizedType);
  if (profile) profile.kias = speed;
  else {
    profile = { id: id(), type: normalizedType, kias: speed, notes: "" };
    state.receiverProfiles.push(profile);
  }
  state.receiverProfiles = normalizeRdvzProfiles(state.receiverProfiles);
  profile = state.receiverProfiles.find((item) => item.type === normalizedType);
  saveState();
  updateRdvzProfileOptions();
  if (profile) els.rdvzProfile.value = profile.id;
  updateRdvzProfileOptions();
  els.rdvzKias.value = speed;
  closeModal("rdvzLibraryModal");
  updateRdvzPreview();
  saveRdvzWorkingInputs();
}

function closeRdvzMenus() {
  els.rdvzProfileMenu.hidden = true;
  els.rdvzOrbitMenu.hidden = true;
  els.rdvzProfileButton.setAttribute("aria-expanded", "false");
  els.rdvzOrbitButton.setAttribute("aria-expanded", "false");
}

function toggleRdvzMenu(menu, button) {
  const willOpen = menu.hidden;
  closeRdvzMenus();
  menu.hidden = !willOpen;
  button.setAttribute("aria-expanded", String(willOpen));
}

function syncRdvzOrbitControl() {
  const value = els.rdvzOrbit.value || "left";
  els.rdvzOrbitButton.querySelector("span").textContent = value === "right" ? "Right" : "Left";
  els.rdvzOrbitMenu.querySelectorAll("[data-value]").forEach((option) => {
    option.setAttribute("aria-selected", String(option.dataset.value === value));
  });
}

function openRdvzProfileEditor(profile = null) {
  closeRdvzMenus();
  editingRdvzProfileId = profile?.id || null;
  els.rdvzType.value = profile ? profile.type : "";
  els.rdvzNewKias.value = profile ? profile.kias : "";
  openModal("rdvzProfileModal");
  setTimeout(() => els.rdvzType.focus(), 0);
}

function updateRdvzWindComponents() {
  const wind = parseRdvzWind(els.rdvzWind.value);
  const track = Number(els.rdvzTrack.value);
  if (!wind || !Number.isFinite(track) || els.rdvzTrack.value === "") {
    els.rdvzWindComponents.innerHTML = 'HW -- <span></span> XW --';
    return;
  }
  const relative = ((wind.direction - track + 540) % 360) - 180;
  const along = wind.speed * Math.cos(relative * Math.PI / 180);
  const crosswind = Math.abs(wind.speed * Math.sin(relative * Math.PI / 180));
  const alongLabel = along < -.5 ? "TW" : "HW";
  els.rdvzWindComponents.innerHTML = `${alongLabel} ${formatK(Math.abs(along), 0)} <span></span> XW ${formatK(crosswind, 0)}`;
}

function setSvgLine(line, start, end) {
  line.setAttribute("x1", start.x.toFixed(1));
  line.setAttribute("y1", start.y.toFixed(1));
  line.setAttribute("x2", end.x.toFixed(1));
  line.setAttribute("y2", end.y.toFixed(1));
}

function setSvgLabel(label, point, anchor = "middle") {
  label.setAttribute("x", point.x.toFixed(1));
  label.setAttribute("y", point.y.toFixed(1));
  label.setAttribute("text-anchor", anchor);
}

function signedHeadingDifference(a, b) {
  return ((a - b + 540) % 360) - 180;
}

function setRdvzWindAdjustMode(enabled) {
  rdvzWindAdjustMode = Boolean(enabled);
  els.cgModal.classList.toggle("rdvz-wind-adjust-mode", rdvzWindAdjustMode);
  els.rdvzVisualSvg.classList.toggle("wind-adjust-mode", rdvzWindAdjustMode);
  els.rdvzWindAdjustBtn.classList.toggle("active", rdvzWindAdjustMode);
  els.rdvzWindAdjustBtn.setAttribute("aria-pressed", String(rdvzWindAdjustMode));
  const label = rdvzWindAdjustMode ? "Exit wind adjustment" : "Adjust wind direction";
  els.rdvzWindAdjustBtn.setAttribute("aria-label", label);
  els.rdvzWindAdjustBtn.title = label;
  const status = els.rdvzResults.querySelector(".rdvz-wind-override-status");
  if (status) status.hidden = !rdvzWindAdjustMode;
}

function rdvzWindDirectionFromPointer(event) {
  const point = els.rdvzVisualSvg.createSVGPoint();
  point.x = event.clientX;
  point.y = event.clientY;
  const matrix = els.rdvzVisualSvg.getScreenCTM();
  if (!matrix) return null;
  const local = point.matrixTransform(matrix.inverse());
  const dx = local.x - 160;
  const dy = local.y - 160;
  if (Math.hypot(dx, dy) < 18) return null;
  return ((Math.round(Math.atan2(dx, -dy) * 180 / Math.PI) % 360) + 360) % 360;
}

function setRdvzWindDirection(direction) {
  const current = parseRdvzWind(els.rdvzWind.value);
  const speed = current?.speed > 0 ? current.speed : 20;
  els.rdvzWind.value = `${String(direction).padStart(3, "0")}/${speed}`;
  updateRdvzPreview();
  saveRdvzWorkingInputs();
}

function initRdvzWindDrag() {
  const updateFromPointer = (event) => {
    const direction = rdvzWindDirectionFromPointer(event);
    if (direction === null) return;
    setRdvzWindDirection(direction);
  };
  els.rdvzVisualSvg.addEventListener("pointerdown", (event) => {
    if (!rdvzWindAdjustMode || (event.pointerType === "mouse" && event.button !== 0)) return;
    event.preventDefault();
    rdvzWindDragging = true;
    els.rdvzVisualSvg.setPointerCapture?.(event.pointerId);
    updateFromPointer(event);
  });
  els.rdvzVisualSvg.addEventListener("pointermove", (event) => {
    if (!rdvzWindDragging) return;
    event.preventDefault();
    updateFromPointer(event);
  });
  const stopDragging = (event) => {
    if (!rdvzWindDragging) return;
    rdvzWindDragging = false;
    if (event.pointerId !== undefined) els.rdvzVisualSvg.releasePointerCapture?.(event.pointerId);
  };
  els.rdvzVisualSvg.addEventListener("pointerup", stopDragging);
  els.rdvzVisualSvg.addEventListener("pointercancel", stopDragging);
}

function updateRdvzVisualization() {
  const enteredTrack = Number(els.rdvzTrack.value);
  const hasTrack = els.rdvzTrack.value !== "" && Number.isFinite(enteredTrack);
  const track = hasTrack ? ((enteredTrack % 360) + 360) % 360 : 0;
  const orbit = els.rdvzOrbit.value === "right" ? "right" : "left";
  const wind = parseRdvzWind(els.rdvzWind.value);
  const radians = track * Math.PI / 180;
  const forward = { x: Math.sin(radians), y: -Math.cos(radians) };
  const left = { x: forward.y, y: -forward.x };
  const side = orbit === "left" ? left : { x: -left.x, y: -left.y };
  const center = { x: 160, y: 160 };
  const point = (along, across = 0) => ({
    x: center.x + (forward.x * along) + (side.x * across),
    y: center.y + (forward.y * along) + (side.y * across)
  });
  const arip = point(-84);
  const arcp = point(84);
  const downwindStart = point(84, 60);
  const downwindEnd = point(0, 60);
  const cpTurnControlOne = point(124, 0);
  const cpTurnControlTwo = point(124, 60);
  const turnControlOne = point(-40, 60);
  const turnControlTwo = point(-40, 0);

  setSvgLine(els.rdvzTrackLine, arip, arcp);
  els.rdvzCpTurnPath.setAttribute("d", `M ${arcp.x.toFixed(1)} ${arcp.y.toFixed(1)} C ${cpTurnControlOne.x.toFixed(1)} ${cpTurnControlOne.y.toFixed(1)} ${cpTurnControlTwo.x.toFixed(1)} ${cpTurnControlTwo.y.toFixed(1)} ${downwindStart.x.toFixed(1)} ${downwindStart.y.toFixed(1)}`);
  setSvgLine(els.rdvzDownwindLine, downwindStart, downwindEnd);
  els.rdvzTurnPath.setAttribute("d", `M ${downwindEnd.x.toFixed(1)} ${downwindEnd.y.toFixed(1)} C ${turnControlOne.x.toFixed(1)} ${turnControlOne.y.toFixed(1)} ${turnControlTwo.x.toFixed(1)} ${turnControlTwo.y.toFixed(1)} ${center.x.toFixed(1)} ${center.y.toFixed(1)}`);
  setSvgLabel(els.rdvzAripLabel, { x: arip.x - (side.x * 8), y: arip.y - (side.y * 8) + 4 }, orbit === "left" ? "start" : "end");
  setSvgLabel(els.rdvzArcpLabel, { x: arcp.x - (side.x * 8), y: arcp.y - (side.y * 8) + 4 }, orbit === "left" ? "start" : "end");

  if (wind && wind.speed > 0 && hasTrack) {
    const relative = signedHeadingDifference(wind.direction, track);
    const along = wind.speed * Math.cos(relative * Math.PI / 180);
    const crosswind = Math.abs(wind.speed * Math.sin(relative * Math.PI / 180));
    const alongLabel = along < -.5 ? "TW" : "HW";
    els.rdvzCompassXw.textContent = `${formatK(crosswind, 0)} kt`;
    els.rdvzCompassAlongLabel.textContent = alongLabel;
    els.rdvzCompassAlong.textContent = `${formatK(Math.abs(along), 0)} kt`;
    els.rdvzCompassAngle.textContent = `${Math.round(Math.abs(relative))}°`;
  } else {
    els.rdvzCompassXw.textContent = "--";
    els.rdvzCompassAlongLabel.textContent = "HW";
    els.rdvzCompassAlong.textContent = "--";
    els.rdvzCompassAngle.textContent = "--";
  }

  if (wind && wind.speed > 0) {
    const windRadians = wind.direction * Math.PI / 180;
    const windVector = { x: Math.sin(windRadians), y: -Math.cos(windRadians) };
    setSvgLine(els.rdvzWindGuide, center,
      { x: center.x + (windVector.x * 134), y: center.y + (windVector.y * 134) });
    setSvgLine(els.rdvzWindLine,
      { x: center.x + (windVector.x * 156), y: center.y + (windVector.y * 156) },
      { x: center.x + (windVector.x * 137), y: center.y + (windVector.y * 137) });
    els.rdvzWindGuide.hidden = false;
    els.rdvzWindLine.hidden = false;
    const trackAngle = Math.abs(signedHeadingDifference(wind.direction, track));
    const reciprocal = (track + 180) % 360;
    const reciprocalAngle = Math.abs(signedHeadingDifference(wind.direction, reciprocal));
    const anglePoint = (bearing, radius) => {
      const angleRadians = bearing * Math.PI / 180;
      return { x: center.x + (Math.sin(angleRadians) * radius), y: center.y - (Math.cos(angleRadians) * radius) };
    };
    const primarySide = signedHeadingDifference(track, wind.direction) >= 0 ? 1 : -1;
    let secondarySide = signedHeadingDifference(reciprocal, wind.direction) >= 0 ? 1 : -1;
    if (secondarySide === primarySide) secondarySide = -primarySide;
    const primaryPoint = anglePoint(wind.direction + (primarySide * 23), 72);
    const secondaryPoint = anglePoint(wind.direction + (secondarySide * 23), 72);
    setSvgLabel(els.rdvzWindAnglePrimary, primaryPoint);
    setSvgLabel(els.rdvzWindAngleSecondary, secondaryPoint);
    els.rdvzWindAnglePrimary.textContent = `${Math.round(trackAngle)}°`;
    els.rdvzWindAngleSecondary.textContent = `${Math.round(reciprocalAngle)}°`;
    els.rdvzWindAnglePrimary.hidden = false;
    els.rdvzWindAngleSecondary.hidden = false;
  } else {
    els.rdvzWindGuide.hidden = true;
    els.rdvzWindLine.hidden = true;
    els.rdvzWindAnglePrimary.hidden = true;
    els.rdvzWindAngleSecondary.hidden = true;
  }

  els.rdvzVisual.classList.toggle("is-incomplete", !hasTrack);
  els.rdvzVisualTrack.textContent = `Track ${hasTrack ? String(Math.round(track)).padStart(3, "0") : "--"}°`;
  els.rdvzVisualWind.textContent = wind && wind.speed > 0
    ? `Wind ${String(wind.direction).padStart(3, "0")}° / ${wind.speed} kt`
    : "Wind calm";
  els.rdvzVisualOrbit.textContent = `Orbit ${orbit === "left" ? "Left" : "Right"}`;
}

function rdvzBracketIndices(values, value) {
  if (!Number.isFinite(value) || !values.length) return [];
  const exact = values.findIndex((item) => Math.abs(item - value) < 0.0001);
  if (exact >= 0) return [exact];
  for (let index = 0; index < values.length - 1; index += 1) {
    const start = values[index];
    const end = values[index + 1];
    if ((value > start && value < end) || (value < start && value > end)) return [index, index + 1];
  }
  const firstDistance = Math.abs(value - values[0]);
  const lastDistance = Math.abs(value - values[values.length - 1]);
  return [firstDistance <= lastDistance ? 0 : values.length - 1];
}

function rdvzChartCell(bounds, index, total) {
  const boundedIndex = clamp(index, 0, bounds.length - 2);
  const start = bounds[boundedIndex];
  const end = bounds[boundedIndex + 1];
  return { position: (start / total) * 100, size: ((end - start) / total) * 100 };
}

function addRdvzChartGuide(chartName, x, y, width, height, cross = true) {
  const frame = document.querySelector(`[data-rdvz-chart="${chartName}"]`);
  if (!frame || ![x, y, width, height].every(Number.isFinite)) return;
  const add = (className, styles) => {
    const guide = document.createElement("span");
    guide.className = `rdvz-chart-guide ${className}`;
    Object.assign(guide.style, styles);
    frame.appendChild(guide);
  };
  const percent = (value) => `${value}%`;
  if (cross) {
    add("row", { top: percent(y), height: percent(height) });
    add("column", { left: percent(x), width: percent(width) });
  }
  const insetXPixels = 1;
  const insetY = 0;
  add("cell", {
    left: `calc(${percent(x)} + ${insetXPixels}px)`,
    top: percent(y + insetY),
    width: `calc(${percent(width)} - ${insetXPixels * 2}px)`,
    height: percent(height - (insetY * 2))
  });
}

function updateRdvzChartGuides() {
  document.querySelectorAll(".rdvz-chart-guide").forEach((guide) => guide.remove());
  const result = calculateRdvz();
  if (!result) return;

  const orbit = els.rdvzOrbit.value || "left";
  const driftColumn = clamp(rdvzDriftColumn(result.drift, orbit), 0, 6);
  const turnRows = rdvzBracketIndices(RDVZ_TURN_RANGE_25.map(([value]) => value), result.closure);
  const offsetRows = rdvzBracketIndices(RDVZ_OFFSET_25.map(([value]) => value), result.tankerTas);
  const driftCell = rdvzChartCell([150, 209, 267, 327, 386, 444, 503, 562], driftColumn, 695);
  const turnY = [136, 161, 187, 213, 239, 265, 291, 317, 343, 369, 395, 421, 447, 473, 501, 525, 551, 577, 603, 629, 655, 681, 709];
  const offsetY = [136, 160, 186, 212, 238, 264, 292, 316, 342, 368, 394, 422, 446, 472, 498, 524, 552, 576, 602, 628, 654, 682];
  turnRows.forEach((row) => {
    const cell = rdvzChartCell(turnY, row, 842);
    addRdvzChartGuide("turn", driftCell.position, cell.position, driftCell.size, cell.size, false);
  });
  offsetRows.forEach((row) => {
    const cell = rdvzChartCell(offsetY, row, 692);
    addRdvzChartGuide("offset", driftCell.position, cell.position, driftCell.size, cell.size, false);
  });

  const closureColumns = rdvzBracketIndices(RDVZ_TIMING_CHART.closures, result.closure);
  const timingGroupX = [76, 169, 261, 353, 445, 537, 629, 722];
  const timingCenterOffsets = [19, 38, 57, 77];
  const timingY = [68, 131, 193, 257, 321, 378, 435, 494, 553, 610, 672, 737, 800, 862, 925, 987];
  const timingRows = [12, 14];
  timingRows.forEach((row) => closureColumns.forEach((column) => {
    const group = Math.floor(column / 4);
    const center = timingGroupX[group] + timingCenterOffsets[column % 4];
    const xCell = { position: ((center - 15) / 768) * 100, size: (30 / 768) * 100 };
    const yCell = rdvzChartCell(timingY, row, 1130);
    addRdvzChartGuide("timing", xCell.position, yCell.position, xCell.size, yCell.size, false);
  }));

  const tasRows = RDVZ_TAS_TABLE.rows.map(([altitude]) => altitude);
  const tasPoints = [
    { fl: result.receiverFl / 10, kias: Number(els.rdvzKias.value) },
    { fl: result.tankerFl / 10, kias: Number(els.rdvzTankerKias.value) }
  ];
  tasPoints.forEach(({ fl, kias }) => {
    const rows = rdvzBracketIndices(tasRows, fl);
    const upperBlock = kias >= 300;
    const columns = upperBlock ? RDVZ_TAS_TABLE.kias.slice(13) : RDVZ_TAS_TABLE.kias.slice(0, 13);
    const columnIndices = rdvzBracketIndices(columns, kias);
    const tasX = [53, 109, 164, 221, 276, 332, 388, 444, 500, 556, 612, 665, 718, 772];
    const tasY = upperBlock
      ? [653, 670, 686, 704, 721, 737, 755, 772, 790, 807, 824, 840, 856, 874, 891, 908, 924, 940, 958, 975, 992, 1008, 1024, 1040, 1057]
      : [163, 181, 197, 214, 232, 248, 266, 283, 301, 318, 334, 351, 367, 385, 402, 418, 435, 451, 469, 486, 502, 519, 535, 551, 568];
    rows.forEach((row) => columnIndices.forEach((column) => {
      const xCell = rdvzChartCell(tasX, column, 774);
      const yCell = rdvzChartCell(tasY, row, 1061);
      addRdvzChartGuide("tas", xCell.position, yCell.position, xCell.size, yCell.size, false);
    }));
  });
}

function rdvzDigitalTable(headers, rows, highlighted = new Set(), firstHeader = "", includeHeader = true) {
  const tableClass = headers.length <= 7 ? ' class="fills-viewport"' : "";
  const tableHeader = includeHeader
    ? `<thead><tr><th>${escapeHtml(firstHeader)}</th>${headers.map((header) => `<th>${escapeHtml(String(header))}</th>`).join("")}</tr></thead>`
    : "";
  return `<table${tableClass}>${tableHeader}<tbody>${rows.map((row, rowIndex) => `<tr><th>${escapeHtml(String(row[0]))}</th>${row.slice(1).map((value, columnIndex) => `<td${highlighted.has(`${rowIndex}:${columnIndex}`) ? ' class="is-source"' : ""}>${escapeHtml(String(value))}</td>`).join("")}</tr>`).join("")}</tbody></table>`;
}

function renderRdvzDigitalCharts() {
  const result = calculateRdvz();
  const targets = Object.fromEntries([...document.querySelectorAll("[data-rdvz-digital]")].map((element) => [element.dataset.rdvzDigital, element]));
  const references = Object.fromEntries([...document.querySelectorAll("[data-rdvz-reference]")].map((element) => [element.dataset.rdvzReference, element]));
  if (!result) {
    Object.values(targets).forEach((target) => { target.innerHTML = '<p class="rdvz-chart-empty">Enter valid calculator inputs to display the digital table.</p>'; });
    Object.values(references).forEach((reference) => { reference.textContent = "No valid lookup inputs"; });
    return;
  }

  const receiverKias = Number(els.rdvzKias.value);
  const tankerKias = Number(els.rdvzTankerKias.value);
  const orbit = els.rdvzOrbit.value || "left";
  references.tas.classList.add("has-lines");
  references.tas.innerHTML = `<span class="rdvz-tas-reference-row"><span>Tanker:</span><span>${formatFlightLevel(result.tankerFl)}</span><span>•</span><span>${formatK(tankerKias, 0)} KIAS</span><span>→</span><span>${formatK(result.tankerTas, 0)} KTAS</span></span><span class="rdvz-tas-reference-row"><span>Receiver:</span><span>${formatFlightLevel(result.receiverFl)}</span><span>•</span><span>${formatK(receiverKias, 0)} KIAS</span><span>→</span><span>${formatK(result.receiverTas, 0)} KTAS</span></span>`;
  references.turn.textContent = `Closure ${formatK(result.closure, 0)} kt • Drift ${formatDrift(result.drift)} → Turn Range ${formatK(result.turnRange, 1)} NM • ${rdvzRolloutLabel(result)}`;
  references.turn.classList.remove("has-c130-badge");
  references.offset.classList.add("has-orbit");
  references.offset.innerHTML = `<span>T TAS ${formatK(result.tankerTas, 0)} kt • Drift ${formatDrift(result.drift)} → Offset ${formatK(result.offset, 1)} NM</span><span class="rdvz-reference-orbit">Orbit ${orbit === "right" ? "Right" : "Left"}</span>`;
  references.timing.textContent = `Closure ${formatK(result.closure, 0)} kt • 40 NM → ${formatTimerMinutes(result.chartTime40)} | 30 NM → ${formatTimerMinutes(result.chartTime30)}`;
  const tasRows = RDVZ_TAS_TABLE.rows.map(([altitude]) => altitude);
  const tasSelections = [
    { fl: result.receiverFl / 10, kias: receiverKias },
    { fl: result.tankerFl / 10, kias: tankerKias }
  ];
  const renderTasBlock = (start, end) => {
    const kiasColumns = RDVZ_TAS_TABLE.kias.slice(start, end);
    const marks = new Set();
    tasSelections.forEach(({ fl, kias }) => {
      if (kias < kiasColumns[0] || kias > kiasColumns[kiasColumns.length - 1]) return;
      rdvzBracketIndices(tasRows, fl).forEach((row) => rdvzBracketIndices(kiasColumns, kias).forEach((column) => marks.add(`${row}:${column}`)));
    });
    const rows = RDVZ_TAS_TABLE.rows.map(([altitude, values]) => [altitude, ...values.slice(start, end)]);
    return rdvzDigitalTable(kiasColumns, rows, marks, "FL");
  };
  targets.tas.innerHTML = `<div class="rdvz-table-block"><div class="rdvz-table-kicker"><span>KIAS 200-290</span><span class="rdvz-table-scroll-hint">Click table to scroll horizontally</span><span class="rdvz-table-source">ATP-3.3.4.2 Ed D V1</span></div>${renderTasBlock(0, 13)}</div><div class="rdvz-table-block"><div class="rdvz-table-kicker">KIAS 300-360</div>${renderTasBlock(13, 26)}</div>`;

  const driftColumns = rdvzBracketIndices(RDVZ_DRIFT_BUCKETS, rdvzOrbitDrift(result.drift, orbit));
  const driftHeaders = orbit === "left" ? ["15L", "10L", "5L", "0", "5R", "10R", "15R"] : ["15R", "10R", "5R", "0", "5L", "10L", "15L"];
  const displayedMainTurnRange = result.isC130Receiver
    ? RDVZ_TURN_RANGE_25.filter(([closure]) => closure > 575)
    : RDVZ_TURN_RANGE_25;
  const displayedTurnRange = result.isC130Receiver
    ? [...displayedMainTurnRange, ...RDVZ_TURN_RANGE_C130_25]
    : displayedMainTurnRange;
  const selectedTurnClosures = new Set(
    rdvzBracketIndices(displayedTurnRange.map(([value]) => value), result.closure)
      .map((row) => displayedTurnRange[row][0])
  );
  const turnMarks = new Set(displayedMainTurnRange.flatMap(([value], row) => (
    selectedTurnClosures.has(value) ? driftColumns.map((column) => `${row}:${column}`) : []
  )));
  const c130TurnMarks = new Set(RDVZ_TURN_RANGE_C130_25.flatMap(([value], row) => (
    result.isC130Receiver && selectedTurnClosures.has(value) ? driftColumns.map((column) => `${row}:${column}`) : []
  )));
  const offsetMarks = new Set(rdvzBracketIndices(RDVZ_OFFSET_25.map(([value]) => value), result.tankerTas).flatMap((row) => driftColumns.map((column) => `${row}:${column}`)));
  const c130TableHtml = result.isC130Receiver
    ? `<div class="rdvz-table-block rdvz-c130-table is-active"><div class="rdvz-table-kicker"><span>1 NM Rollout Behind C-130</span></div>${rdvzDigitalTable(driftHeaders, RDVZ_TURN_RANGE_C130_25.map(([value, cells]) => [value, ...cells]), c130TurnMarks, "Closure", false)}</div>`
    : "";
  targets.turn.innerHTML = `<div class="rdvz-table-block">${rdvzDigitalTable(driftHeaders, displayedMainTurnRange.map(([value, cells]) => [value, ...cells]), turnMarks, "Closure")}</div>${c130TableHtml}`;
  targets.offset.innerHTML = rdvzDigitalTable(driftHeaders, RDVZ_OFFSET_25.map(([value, cells]) => [value, ...cells]), offsetMarks, "T TAS");

  const timingMarks = new Set();
  const closureRows = rdvzBracketIndices(RDVZ_TIMING_CHART.closures, result.closure);
  const timingDistanceRows = [...RDVZ_TIMING_TABLE].reverse();
  const timingDistances = timingDistanceRows.map(([distance]) => distance);
  [timingDistances.indexOf(40), timingDistances.indexOf(30)].forEach((column) => {
    closureRows.forEach((row) => timingMarks.add(`${row}:${column}`));
  });
  const timingRows = RDVZ_TIMING_CHART.closures.map((closure, closureIndex) => [
    closure,
    ...timingDistanceRows.map(([, values]) => values[closureIndex])
  ]);
  targets.timing.innerHTML = `<div class="rdvz-timing-distance-label">Distance (NM) &rarr;</div>${rdvzDigitalTable(timingDistances, timingRows, timingMarks, "Closure")}`;

}

function updateRdvzPreview() {
  updateCalculatorEmptyHighlights();
  updateRdvzInputWarnings();
  const result = calculateRdvz();
  const approximate = (value, estimated) => estimated ? `<span class="rdvz-estimate-mark" aria-label="Estimated">~</span>${value}` : value;
  const tableValue = (value, estimated, outOfRange) => outOfRange ? "OUT OF RANGE" : approximate(value, estimated);
  const rows = result
    ? [
      [rdvzTurnRangeOutputLabel(result), tableValue(`${formatK(result.turnRange, 1)} NM`, result.estimates.turnRange, result.outOfRange.turnRange)],
      ["Offset", tableValue(`${formatK(result.offset, 1)} NM`, result.estimates.offset, result.outOfRange.offset)],
      ["Tanker Alt", formatFlightLevel(result.tankerFl)],
      ["Receiver Alt", formatFlightLevel(result.receiverFl)],
      ["Tanker TAS", tableValue(`${formatK(result.tankerTas, 0)} kt`, result.estimates.tankerTas, result.outOfRange.tankerTas)],
      ["Receiver TAS", tableValue(`${formatK(result.receiverTas, 0)} kt`, result.estimates.receiverTas, result.outOfRange.receiverTas)],
      ["Closure", tableValue(`${formatK(result.closure, 0)} kt`, result.estimates.closure, result.outOfRange.closure)],
      ["Drift", formatDrift(result.drift)],
      ["40 NM (Chart)", tableValue(formatTimerMinutes(result.chartTime40), result.estimates.chartTime, result.outOfRange.chartTime)],
      ["30 NM (Chart)", tableValue(formatTimerMinutes(result.chartTime30), result.estimates.chartTime, result.outOfRange.chartTime)],
      ['40 NM <button class="rdvz-wind-time-info" type="button" data-rdvz-wind-info aria-label="About wind-corrected timing" title="Wind-corrected timing">&#127788;&#65039;</button>', tableValue(formatTimerMinutes(result.windTime40), result.estimates.windTime, result.outOfRange.windTime)],
      ['30 NM <button class="rdvz-wind-time-info" type="button" data-rdvz-wind-info aria-label="About wind-corrected timing" title="Wind-corrected timing">&#127788;&#65039;</button>', tableValue(formatTimerMinutes(result.windTime30), result.estimates.windTime, result.outOfRange.windTime)]
    ]
    : [
      ["Turn Range", "--"], ["Offset", "--"], ["Tanker Alt", "--"], ["Receiver Alt", "--"],
      ["Tanker TAS", "--"], ["Receiver TAS", "--"],
      ["Closure", "--"], ["Drift", "--"], ["40 NM (Chart)", "--"], ["30 NM (Chart)", "--"],
      ['40 NM <button class="rdvz-wind-time-info" type="button" data-rdvz-wind-info aria-label="About wind-corrected timing" title="Wind-corrected timing">&#127788;&#65039;</button>', "--"],
      ['30 NM <button class="rdvz-wind-time-info" type="button" data-rdvz-wind-info aria-label="About wind-corrected timing" title="Wind-corrected timing">&#127788;&#65039;</button>', "--"]
    ];
  const turnMetrics = result
    ? [["Rate of Turn", tableValue(`${formatK(result.turnRate25, 1)}°/sec`, result.estimates.turnMetrics, result.outOfRange.turnMetrics)], ["180° Turn Time", tableValue(formatTimerMinutes(result.turnTime180), result.estimates.turnMetrics, result.outOfRange.turnMetrics)], ["SR Bank / ½ Bank", tableValue(`${formatK(result.standardRateBank, 0)}°/${formatK(result.halfStandardRateBank, 0)}°`, result.estimates.turnMetrics, result.outOfRange.turnMetrics)]]
    : [["Rate of Turn", "--"], ["180° Turn Time", "--"], ["SR Bank / ½ Bank", "--/--"]];
  const overrun = result ? tableValue(`&lt;${formatK(result.turnRange / 3, 1)} NM`, result.estimates.overrun, result.outOfRange.turnRange) : "--";
  const hasOutOfRange = result && Object.values(result.outOfRange).some(Boolean);
  const warning = result?.tableWarnings.length
    ? `<span class="rdvz-table-warning">&#9888; ${hasOutOfRange ? "Outside supported range" : "Estimated outside ATP table"}: ${escapeHtml(result.tableWarnings.join(", "))}</span>`
    : "";
  const c130MathWarning = result?.c130OutsideChart
    ? `<span class="rdvz-table-warning rdvz-c130-math-warning">&#9888; Outside C-130 1 NM in-trail chart.<br>Geometric estimate: TR ~${formatK(result.geometricTurnRange, 1)} NM &bull; OFF ~${formatK(result.geometricOffset, 1)} NM</span>`
    : "";
  const geometricReference = result && !result.c130OutsideChart
    ? `<span class="rdvz-geometric-reference">Geometric estimate: TR ~${formatK(result.geometricTurnRange, 1)} NM &bull; OFF ~${formatK(result.geometricOffset, 1)} NM</span>`
    : "";
  els.rdvzResults.innerHTML = `${rows.map(([label, value]) => `<div><span>${label}</span><b>${value}</b></div>`).join("")}<div class="rdvz-overrun-result"><div class="rdvz-overrun-heading"><span>Overrun</span><b>${overrun}</b></div><div class="rdvz-turn-metrics" aria-label="Turn reference metrics">${turnMetrics.map(([label, value]) => `<div><span>${label}</span><b>${value}</b></div>`).join("")}</div></div><div class="rdvz-timer-result"><span class="rdvz-timer-heading"><span>Timer</span><b id="rdvzTimerDisplay">0:00</b></span><div class="rdvz-timer-actions"><button class="mini-btn cg-info-btn rdvz-chart-btn" type="button" data-rdvz-charts aria-label="View source charts" title="View source charts">&#9638;</button><button class="mini-btn cg-info-btn" type="button" data-rdvz-info aria-label="Turn range assumptions" title="Turn range assumptions">i</button><button id="rdvzTimerBtn" class="mini-btn burn-time-timer-btn" type="button" tabindex="-1" aria-label="Start rendezvous timer" title="Start rendezvous timer">&#9201;</button></div></div><div class="rdvz-assumptions"><span>25° AOB • Standard atmosphere</span><span class="rdvz-wind-override-status"${rdvzWindAdjustMode ? "" : " hidden"}>WIND OVERRIDE - SCROLL OFF</span>${geometricReference}${c130MathWarning}${warning}</div>`;
  updateRdvzWindComponents();
  updateRdvzVisualization();
  renderRdvzTimer();
}

function setRdvzInputWarning(input, isSuspect) {
  input.classList.toggle("is-suspect-parameter", isSuspect);
  input.closest(".unit-input")?.classList.toggle("is-suspect-parameter", isSuspect);
  input.setAttribute("aria-invalid", String(isSuspect));
}

function updateRdvzInputWarnings() {
  const receiverKias = Number(els.rdvzKias.value);
  const tankerKias = Number(els.rdvzTankerKias.value);
  const arFl = Number(els.rdvzArFl.value);
  setRdvzInputWarning(els.rdvzKias, els.rdvzKias.value !== "" && (!Number.isFinite(receiverKias) || receiverKias < 200 || receiverKias > 360));
  setRdvzInputWarning(els.rdvzTankerKias, els.rdvzTankerKias.value !== "" && (!Number.isFinite(tankerKias) || tankerKias < 200 || tankerKias > 360));
  setRdvzInputWarning(els.rdvzArFl, els.rdvzArFl.value !== "" && (!Number.isFinite(arFl) || arFl < 40 || arFl > 350));
  const windText = els.rdvzWind.value.trim();
  setRdvzInputWarning(els.rdvzWind, windText !== "" && parseRdvzWind(windText) === null);
}

function formatCountUpTimer(seconds) {
  const total = Math.max(0, Math.floor(seconds));
  return `${Math.floor(total / 60)}:${String(total % 60).padStart(2, "0")}`;
}

function currentRdvzTimerSeconds() {
  return rdvzTimerBaseSeconds + (rdvzTimerInterval ? Math.floor((Date.now() - rdvzTimerStartedAt) / 1000) : 0);
}

function renderRdvzTimer() {
  const display = $("rdvzTimerDisplay");
  const button = $("rdvzTimerBtn");
  if (display) display.textContent = formatCountUpTimer(currentRdvzTimerSeconds());
  if (button) {
    button.classList.toggle("active", Boolean(rdvzTimerInterval));
    button.setAttribute("aria-label", rdvzTimerInterval ? "Pause rendezvous timer" : "Start rendezvous timer");
    button.title = rdvzTimerInterval ? "Pause rendezvous timer" : "Start rendezvous timer";
  }
}

function stopRdvzTimer() {
  if (rdvzTimerInterval) {
    rdvzTimerBaseSeconds = currentRdvzTimerSeconds();
    clearInterval(rdvzTimerInterval);
  }
  rdvzTimerInterval = null;
  renderRdvzTimer();
}

function resetRdvzTimer() {
  if (rdvzTimerInterval) clearInterval(rdvzTimerInterval);
  rdvzTimerInterval = null;
  rdvzTimerStartedAt = 0;
  rdvzTimerBaseSeconds = 0;
  renderRdvzTimer();
}

function toggleRdvzTimer() {
  if (rdvzTimerInterval) {
    stopRdvzTimer();
    return;
  }
  rdvzTimerStartedAt = Date.now();
  rdvzTimerInterval = setInterval(renderRdvzTimer, 1000);
  renderRdvzTimer();
}

function applyRdvzProfile() {
  const profile = state.receiverProfiles.find((item) => item.id === els.rdvzProfile.value);
  if (!profile) {
    updateRdvzPreview();
    return;
  }
  els.rdvzKias.value = profile.kias;
  updateRdvzPreview();
}

function restoreRdvzWorkingInputs() {
  const saved = state.rdvzInputs;
  if (!saved) return false;
  if (state.receiverProfiles.some((profile) => profile.id === saved.profileId)) {
    els.rdvzProfile.value = saved.profileId;
    updateRdvzProfileOptions();
  }
  els.rdvzKias.value = saved.kias;
  els.rdvzArFl.value = saved.arFl;
  els.rdvzTankerKias.value = saved.tankerKias ?? "275";
  els.rdvzTrack.value = saved.track;
  els.rdvzWind.value = saved.wind;
  els.rdvzOrbit.value = saved.orbit === "right" ? "right" : "left";
  syncRdvzOrbitControl();
  updateRdvzPreview();
  return true;
}

function saveRdvzProfile() {
  const type = els.rdvzType.value.trim().toUpperCase().slice(0, 48);
  const kias = Math.round(Number(els.rdvzNewKias.value) || 0);
  if (!type || kias <= 0) {
    openConfirm("Receiver Profile", "Enter a receiver type and RDVZ KIAS before saving.", null, { hideCancel: true, hideOk: true, danger: false });
    return;
  }
  const existing = state.receiverProfiles.find((profile) => profile.id === editingRdvzProfileId)
    || state.receiverProfiles.find((profile) => profile.type === type);
  if (existing) Object.assign(existing, { type, kias });
  else state.receiverProfiles.push({ id: id(), type, kias, notes: "" });
  state.receiverProfiles = normalizeRdvzProfiles(state.receiverProfiles);
  const saved = state.receiverProfiles.find((profile) => profile.type === type);
  saveState();
  updateRdvzProfileOptions();
  if (saved) els.rdvzProfile.value = saved.id;
  updateRdvzProfileOptions();
  els.rdvzKias.value = kias;
  closeModal("rdvzProfileModal");
  editingRdvzProfileId = null;
  updateRdvzPreview();
  saveRdvzWorkingInputs();
}

function deleteRdvzProfile(profileId) {
  const profile = state.receiverProfiles.find((item) => item.id === profileId);
  if (!profile) return;
  closeRdvzMenus();
  openConfirm("Delete Receiver Type", `Delete ${profile.type} from saved receiver types?`, () => {
    state.receiverProfiles = state.receiverProfiles.filter((item) => item.id !== profileId);
    saveState();
    updateRdvzProfileOptions();
    if (state.receiverProfiles.length) applyRdvzProfile();
    else {
      els.rdvzKias.value = "";
      updateRdvzPreview();
    }
    saveRdvzWorkingInputs();
    if (!els.rdvzLibraryModal.hidden) renderRdvzLibrary();
  }, { okText: "Delete", danger: true });
}

function calculateCg() {
  const inputs = [els.cgFb, els.cgCw, els.cgAb, els.cgRes, els.cgUd];
  if (inputs.some((input) => input.value === "")) return null;
  const values = inputs.map((input) => Number(input.value));
  if (values.some((value) => !Number.isFinite(value))) return null;
  const [fb, cw, ab, res, ud] = values;
  return 33 - fb - (cw / 3) + ((2 / 3) * (ab + res)) + ((3 / 2) * ud);
}

function calculateAlternateCg() {
  const inputs = [els.cgFb, els.cgCw, els.cgAb, els.cgRes];
  if (inputs.some((input) => input.value === "")) return null;
  const values = inputs.map((input) => Number(input.value));
  if (values.some((value) => !Number.isFinite(value))) return null;
  const [fb, cw, ab, res] = values;
  return 33 - fb - (cw / 3) + ((2 / 3) * ab) + ((4 / 3) * res);
}

function updateCgResultColor(el, cg) {
  const isCgExceeded = cg !== null && (cg < 16 || cg > 35);
  const isCgNearLimit = cg !== null && !isCgExceeded && (cg <= 18 || cg >= 34);
  el.classList.toggle("is-negative", isCgExceeded);
  el.classList.toggle("is-warning", isCgNearLimit);
}

function updateCgPreview() {
  const cg = calculateCg();
  const altCg = calculateAlternateCg();
  Object.entries(CG_MAX_VALUES).forEach(([id, max]) => {
    const input = els[id];
    const labelNote = document.querySelector(`label[for="${id}"] .label-note`);
    const value = Number(input.value);
    const isOverMax = input.value !== "" && Number.isFinite(value) && value > max;
    input.classList.toggle("is-over-max", isOverMax);
    input.setAttribute("aria-invalid", isOverMax ? "true" : "false");
    labelNote?.classList.toggle("is-over-max", isOverMax);
    document.querySelectorAll(`[data-cg-input="${id}"]`).forEach((token) => {
      token.classList.toggle("is-over-max", isOverMax);
    });
  });
  els.cgResult.textContent = cg === null ? "--" : formatK(cg, 1);
  updateCgResultColor(els.cgResult, cg);
  els.cgAltResult.textContent = altCg === null ? "--" : formatK(altCg, 1);
  updateCgResultColor(els.cgAltResult, altCg);
  els.cgAltUdWarning.hidden = !(Number(els.cgUd.value) > 1);
}

function calculateBurnTimeMinutes() {
  const burnRate = Number(els.burnTimeRate.value);
  const amount = Number(els.burnTimeAmount.value);
  if (els.burnTimeRate.value === "" || els.burnTimeAmount.value === "") return null;
  if (![burnRate, amount].every(Number.isFinite) || burnRate <= 0 || amount < 0) return null;
  return (amount / burnRate) * 60;
}

function updateBurnTimePreview() {
  const minutes = calculateBurnTimeMinutes();
  if (!burnTimerInterval && !burnTimerCompleted) {
    burnTimerRequiredSeconds = minutes === null ? 0 : Math.round(minutes * 60);
    burnTimerRemainingSeconds = burnTimerRequiredSeconds;
  }
  renderBurnTimerDisplay();
  els.burnTimeFormula.textContent = minutes === null
    ? "Amount to burn / burn rate x 60"
    : `${formatK(els.burnTimeAmount.value)} K / ${formatK(els.burnTimeRate.value)} K/hr x 60`;
}

function parseFragFlightHours(value) {
  const text = String(value || "").trim();
  if (!text) return null;
  if (text.includes(":")) {
    const match = text.match(/^(\d+):([0-5]?\d)$/);
    if (!match) return null;
    return Number(match[1]) + (Number(match[2]) / 60);
  }
  if (/^\d{3,4}$/.test(text)) {
    const hours = Number(text.slice(0, -2));
    const minutes = Number(text.slice(-2));
    if (minutes >= 60) return null;
    return hours + (minutes / 60);
  }
  const hours = Number(text);
  return Number.isFinite(hours) && hours >= 0 ? hours : null;
}

function calculateFrag() {
  const inputs = [els.fragRampFuel, els.fragLandFuel, els.fragBurnRate, els.fragOffload];
  if (inputs.some((input) => input.value === "")) return null;
  const [rampFuel, landFuel, burnRate, offload] = inputs.map((input) => Number(input.value));
  const flightHours = parseFragFlightHours(els.fragFlightTime.value);
  if (flightHours === null || [rampFuel, landFuel, burnRate, offload].some((value) => !Number.isFinite(value) || value < 0)) return null;
  return { rampFuel, landFuel, burnRate, flightHours, offload, frag: rampFuel - offload - (flightHours * burnRate) - landFuel };
}

function updateFragPreview() {
  const result = calculateFrag();
  if (!result) {
    els.fragResult.textContent = "--";
    els.fragResult.classList.remove("is-negative", "is-zero");
    els.fragFormula.textContent = "Ramp Fuel - Offload - (Flight Time × Burn Rate) - Land Fuel";
    return;
  }
  const roundedFrag = Math.abs(result.frag) < .0005 ? 0 : result.frag;
  const sign = roundedFrag < 0 ? "−" : "+";
  els.fragResult.textContent = `FRAG ${sign} ${formatK(Math.abs(roundedFrag), 1)}K`;
  els.fragResult.classList.toggle("is-negative", roundedFrag < 0);
  els.fragResult.classList.toggle("is-zero", roundedFrag === 0);
  els.fragFormula.textContent = `${formatK(result.rampFuel, 1)} - ${formatK(result.offload, 1)} - (${els.fragFlightTime.value.trim()} × ${formatK(result.burnRate, 1)}) - ${formatK(result.landFuel, 1)} = ${formatK(roundedFrag, 1)}K`;
}

function openFragInfo() {
  openConfirm(
    "Frag",
    `<p>Frag is the amount of fuel, if any, that differs from the fragged plan. A positive value means more fuel is available than planned; a negative value means less fuel is available.</p>
     <p>Example: if you are fragged to offload 50K but can provide only 45K, the result is <strong>FRAG − 5K</strong>.</p>
     <p>If your station time is extended, include the additional airborne time so the calculator accounts for the extra fuel burned.</p>`,
    null,
    { hideCancel: true, hideOk: true, danger: false, html: true }
  );
}

function formatBurnTimerMinutes(seconds) {
  return `${formatK(Math.max(0, seconds) / 60, 1)} min`;
}

function renderBurnTimerDisplay() {
  const requiredText = burnTimerRequiredSeconds > 0 ? formatBurnTimerMinutes(burnTimerRequiredSeconds) : "--";
  const remainingText = burnTimerRequiredSeconds > 0 ? formatBurnTimerMinutes(burnTimerRemainingSeconds) : "--";
  els.burnTimeResult.innerHTML = burnTimerHasStarted
    ? `<span class="burn-time-left${burnTimerBlinking ? " is-complete" : ""}">${remainingText}</span> / <span class="burn-time-required">${requiredText}</span>`
    : `<span class="burn-time-required">${requiredText}</span>`;
}

function setBurnTimerRunning(isRunning) {
  els.burnTimeTimerBtn.classList.toggle("active", isRunning);
  els.burnTimeTimerBtn.setAttribute("aria-label", isRunning ? "Pause main tank burn timer" : "Start main tank burn timer");
  els.burnTimeTimerBtn.title = isRunning ? "Pause main tank burn timer" : "Start main tank burn timer";
}

function resetBurnTimer() {
  if (burnTimerInterval) clearInterval(burnTimerInterval);
  burnTimerInterval = null;
  burnTimerCompleted = false;
  burnTimerHasStarted = false;
  burnTimerBlinking = false;
  setBurnTimerRunning(false);
  const minutes = calculateBurnTimeMinutes();
  burnTimerRequiredSeconds = minutes === null ? 0 : Math.round(minutes * 60);
  burnTimerRemainingSeconds = burnTimerRequiredSeconds;
  renderBurnTimerDisplay();
}

function updateBurnTimerCountdown() {
  const elapsedSeconds = Math.floor((Date.now() - burnTimerStartedAt) / 1000);
  burnTimerRemainingSeconds = Math.max(0, burnTimerRemainingSeconds - elapsedSeconds);
  burnTimerStartedAt = Date.now();
  if (burnTimerRemainingSeconds <= 0) {
    clearInterval(burnTimerInterval);
    burnTimerInterval = null;
    burnTimerCompleted = true;
    burnTimerBlinking = true;
    setBurnTimerRunning(false);
  }
  renderBurnTimerDisplay();
}

function toggleBurnTimer() {
  if (burnTimerInterval) {
    updateBurnTimerCountdown();
    clearInterval(burnTimerInterval);
    burnTimerInterval = null;
    setBurnTimerRunning(false);
    return;
  }
  if (burnTimerRequiredSeconds <= 0 || burnTimerCompleted || burnTimerRemainingSeconds <= 0) resetBurnTimer();
  if (burnTimerRequiredSeconds <= 0) return;
  burnTimerHasStarted = true;
  burnTimerStartedAt = Date.now();
  burnTimerInterval = setInterval(updateBurnTimerCountdown, 1000);
  setBurnTimerRunning(true);
  renderBurnTimerDisplay();
}

function openCgCalculator() {
  collapseCalculatorSections();
  updateRdvzProfileOptions();
  if (!restoreRdvzWorkingInputs()) {
    if (state.receiverProfiles.length) applyRdvzProfile();
    else updateRdvzPreview();
  }
  updateCgPreview();
  updateFragPreview();
  updateBurnTimePreview();
  updateCalculatorEmptyHighlights();
  openModal("cgModal");
}

function updateCalculatorEmptyHighlights() {
  const requiredInputs = [
    els.rdvzKias, els.rdvzArFl, els.rdvzTankerKias, els.rdvzTrack, els.rdvzWind,
    els.fragRampFuel, els.fragLandFuel, els.fragBurnRate, els.fragFlightTime, els.fragOffload,
    els.burnTimeAmount, els.burnTimeRate,
    els.cgFb, els.cgCw, els.cgAb, els.cgRes, els.cgUd
  ];
  requiredInputs.forEach((input) => {
    const isEmpty = input.value.trim() === "";
    input.classList.toggle("is-empty-required", isEmpty);
    input.closest(".unit-input")?.classList.toggle("is-empty-required", isEmpty);
  });
}

function setCalculatorSectionExpanded(section, expanded) {
  if (!section) return;
  section.classList.toggle("is-collapsed", !expanded);
  const header = section.querySelector(":scope > .calculator-section-header");
  header?.setAttribute("aria-expanded", String(expanded));
  const toggle = section.querySelector(":scope > .calculator-section-header .calculator-section-toggle");
  if (!toggle) return;
  toggle.setAttribute("aria-expanded", String(expanded));
  toggle.textContent = expanded ? "−" : "+";
}

function collapseCalculatorSections() {
  els.cgModal.querySelectorAll(".cg-collapsible").forEach((section) => setCalculatorSectionExpanded(section, false));
}

function setCgMaxValues() {
  Object.entries(CG_FILL_VALUES).forEach(([id, value]) => {
    els[id].value = value;
  });
  updateCgPreview();
}

function clearCgInputs() {
  [
    els.rdvzType, els.rdvzNewKias, els.rdvzArFl, els.rdvzTrack, els.rdvzWind,
    els.cgFb, els.cgCw, els.cgAb, els.cgRes, els.cgUd, els.fragRampFuel, els.fragLandFuel,
    els.fragBurnRate, els.fragFlightTime, els.fragOffload, els.burnTimeRate, els.burnTimeAmount
  ].forEach((input) => {
    input.value = "";
  });
  els.rdvzTankerKias.value = "275";
  els.rdvzOrbit.value = "left";
  syncRdvzOrbitControl();
  updateRdvzPreview();
  saveRdvzWorkingInputs();
  updateCgPreview();
  updateFragPreview();
  resetBurnTimer();
  resetRdvzTimer();
}

function handleBurnTimeInput() {
  resetBurnTimer();
  updateBurnTimePreview();
}

function openBurnTimeInfo() {
  openConfirm(
    "Main Tank Burn Time",
    `
      <p>When balancing the fuel panel, the primary method is to feed the lighter main tank's respective engine from fuselage fuel while the heavier main tank continues feeding its respective engine.</p>
      <p>This lets the heavier main tank decrease over time while the lighter main tank stays about constant.</p>
      <p>This timer estimates when the tanks will balance by calculating how long it takes to burn the difference between the main tanks.</p>
      <p>Example: Main 1 = 10.0K, Main 4 = 9.2K. The difference is 0.8K. If Engine 1 fuel flow is about 2.5 K/hr, enter <span class="inline-input-chip">0.8</span> and <span class="inline-input-chip">2.5</span> to display the time required to equalize those tanks.</p>
    `,
    null,
    { hideCancel: true, hideOk: true, danger: false, html: true, technique: true }
  );
}

function openCgInfo() {
  openConfirm(
    `CG Formula <span class="technique-word">technique</span>`,
    `
      <p class="technique-purpose">Purpose: familiarization of fuel impacts on CG. Real world calculations come from aircraft systems and official guidance.</p>
      <p>There are two commonly accepted CG methods, so the app shows both outputs.</p>
      <p>CG (%MAC) uses the tank-by-tank method with RES and UD included.</p>
      <p>ALT CG (%MAC) uses the RES full/empty method:</p>
      <table class="cg-info-table">
        <tbody>
          <tr><td>RES full:</td><td>37 - FB - 1/3(CW) + 2/3(AB)</td></tr>
          <tr><td>RES empty:</td><td>33 - FB - 1/3(CW) + 2/3(AB)</td></tr>
        </tbody>
      </table>
      <p>For in-between RES, ALT CG scales 0.0K to 3.0K RES across the 33 to 37 base.</p>
      <p>That becomes:<br>33 - FB - 1/3(CW) + 2/3(AB) + 4/3(RES).</p>
      <p>ALT CG does not account for UD.</p>
      <p>This does not account for airplane configuration or cargo loading.</p>
    `,
    null,
    { hideCancel: true, hideOk: true, danger: false, html: true, titleHtml: true, technique: true }
  );
}

function openFeedback() {
  openConfirm(
    "Feedback",
    "Send feedback or suggestions to SIMBA?",
    () => {
      window.location.href = "mailto:simbaworksapps@gmail.com?subject=Fuel%20Tracker%20Feedback";
    },
    { okText: "Email", cancelText: "Cancel", danger: false }
  );
}

function render() {
  updateRdvzProfileOptions();
  updateRdvzPreview();
  const entries = currentEntries();
  const groups = groupEntries(entries);
  const totalOffload = entries.reduce((sum, entry) => sum + entry.offload, 0);
  const contacts = entries.reduce((sum, entry) => sum + (Number(entry.contacts) || 0), 0);
  const trackedContacts = entries.some((entry) => Number(entry.contacts) > 0);

  els.totalOffload.textContent = entries.length ? formatFuel(totalOffload) : "--";
  els.totalOffload.classList.toggle("is-negative", totalOffload < 0);
  els.receiverCount.textContent = entries.length ? String(groups.length) : "--";
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
  const blockMode = validBlockMode(entry.blockMode) || "MAN";
  const hasBoomTime = entry.boomMinutes !== null && entry.boomMinutes !== undefined && Number.isFinite(Number(entry.boomMinutes));
  const boomText = hasBoomTime ? ` - ${formatBoomTime(entry.boomMinutes)}` : "";
  const details = blockMode === "DIR"
    ? `DIR - Direct entry${boomText}${contacts}`
    : `MAN - ${formatK(entry.fuelStart)} to ${formatK(entry.fuelEnd)} K - ${formatBoomTime(entry.boomMinutes)}${contacts}`;
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

function compareTimelineEntries(a, b) {
  return (entryTimestamp(a.date) - entryTimestamp(b.date))
    || String(a.callsign || "").localeCompare(String(b.callsign || ""))
    || entryTail(a).localeCompare(entryTail(b));
}

function buildTimelineText(entries = currentEntries()) {
  const sorted = [...entries].sort(compareTimelineEntries);
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
    stopBoomTimer();
    editingEntryId = null;
    addToReceiver = null;
  }
  if (idName === "cgModal") {
    saveRdvzWorkingInputs();
    setRdvzWindAdjustMode(false);
    resetBurnTimer();
    resetRdvzTimer();
  }
  if (idName === "confirmModal") confirmAction = null;
  if (!document.querySelector(".modal:not([hidden])")) document.body.classList.remove("modal-open");
}

function resetForm() {
  stopBoomTimer();
  els.offloadForm.reset();
  els.entryDateSyncStatus.hidden = true;
  clearTimeout(entryDateSyncTimer);
  els.entryDate.value = zuluDatetimeValue();
  els.burnRate.value = DEFAULT_BURN_RATE;
  els.contacts.value = 1;
  els.deleteEntryBtn.hidden = true;
  editingEntryId = null;
  addToReceiver = null;
  setBlockMode(state.lastBlockMode || "MAN");
  updatePreview();
}

function setBlockMode(mode) {
  activeBlockMode = validBlockMode(mode) === "DIR" ? "DIR" : "MAN";
  const isB45 = activeBlockMode === "DIR";
  els.blockB40.classList.toggle("active", !isB45);
  els.blockB45.classList.toggle("active", isB45);
  els.blockB40.setAttribute("aria-pressed", String(!isB45));
  els.blockB45.setAttribute("aria-pressed", String(isB45));
  document.querySelectorAll(".b40-field").forEach((field) => { field.hidden = isB45; });
  document.querySelectorAll(".b45-field").forEach((field) => { field.hidden = !isB45; });
  [els.burnRate, els.fuelStart, els.fuelEnd].forEach((input) => {
    input.required = !isB45;
    input.disabled = isB45;
  });
  els.boomTime.required = !isB45;
  els.boomTime.disabled = false;
  els.boomTimerBtn.disabled = false;
  els.fuelOffload.required = isB45;
  els.fuelOffload.disabled = !isB45;
  if (isB45) {
    const directOffload = Number(els.fuelOffload.value);
    if (els.fuelOffload.value !== "" && Number.isFinite(directOffload)) {
      els.fuelOffload.value = formatOneDecimalInput(directOffload);
    } else {
      const b40Result = calculateB40Offload(currentFormValues());
      if (b40Result) els.fuelOffload.value = formatOneDecimalInput(b40Result.offload);
    }
  }
  updatePreview();
}

function focusForKeyboard(el, options = {}) {
  if (!el) return;
  try {
    el.focus(options.preventScroll ? { preventScroll: true } : undefined);
  } catch {
    el.focus();
  }
}

function focusAndSelect(el, options = {}) {
  const modalCard = options.keepModalTop ? el?.closest(".modal-card") : null;
  focusForKeyboard(el, options);
  if (modalCard) modalCard.scrollTop = 0;
  selectInputValue(el);
  if (modalCard) {
    requestAnimationFrame(() => {
      modalCard.scrollTop = 0;
    });
  }
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

function bindNumberOnlyInput(el, onInput, { allowDecimal = true, maxDigits = null, minValue = null, maxValue = null } = {}) {
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
    let cleaned = sanitizeNumberText(el.value, allowDecimal);
    if (Number.isInteger(maxDigits) && maxDigits > 0) cleaned = cleaned.slice(0, maxDigits);
    if (cleaned !== "") {
      const numericValue = Number(cleaned);
      if (Number.isFinite(maxValue) && numericValue > maxValue) cleaned = String(maxValue);
      if (Number.isFinite(minValue) && numericValue < minValue) cleaned = String(minValue);
    }
    if (el.value !== cleaned) el.value = cleaned;
    onInput();
  });
}

function setBoomTimerRunning(isRunning) {
  els.boomTimerBtn.classList.toggle("active", isRunning);
  els.boomTimerBtn.setAttribute("aria-label", isRunning ? "Pause boom timer" : "Start boom timer");
  els.boomTimerBtn.title = isRunning ? "Pause boom timer" : "Start boom timer";
}

function updateBoomTimerInput() {
  const elapsedSeconds = Math.floor((Date.now() - boomTimerStartedAt) / 1000);
  els.boomTime.value = formatBoomTimerInput(boomTimerBaseSeconds + elapsedSeconds);
  updatePreview();
}

function stopBoomTimer() {
  if (boomTimerInterval) clearInterval(boomTimerInterval);
  boomTimerInterval = null;
  setBoomTimerRunning(false);
}

function resetBoomTimer() {
  stopBoomTimer();
  boomTimerBaseSeconds = 0;
  boomTimerStartedAt = 0;
  els.boomTime.value = "0";
  updatePreview();
}

function toggleBoomTimer() {
  if (boomTimerInterval) {
    boomTimerBaseSeconds = parseBoomSeconds(els.boomTime.value);
    stopBoomTimer();
    return;
  }
  boomTimerBaseSeconds = parseBoomSeconds(els.boomTime.value);
  boomTimerStartedAt = Date.now();
  updateBoomTimerInput();
  boomTimerInterval = setInterval(updateBoomTimerInput, 1000);
  setBoomTimerRunning(true);
}

function adjustContacts(delta) {
  const current = Math.max(1, Math.round(Number(els.contacts.value) || 1));
  els.contacts.value = Math.max(1, current + delta);
  updatePreview();
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
    setBlockMode(receiver.entries[0]?.blockMode || "MAN");
  }
  openModal("offloadModal");
  const focusTarget = receiver ? (activeBlockMode === "DIR" ? els.fuelOffload : els.fuelStart) : els.callsign;
  focusAndSelect(focusTarget, { preventScroll: true, keepModalTop: true });
}

function submitOffloadForm() {
  if (typeof els.offloadForm.requestSubmit === "function") {
    els.offloadForm.requestSubmit();
    return;
  }
  els.offloadForm.querySelector('button[type="submit"]')?.click();
}

function setEntryDateToNow() {
  els.entryDate.value = zuluDatetimeValue();
  els.entryDateSyncStatus.hidden = false;
  clearTimeout(entryDateSyncTimer);
  entryDateSyncTimer = setTimeout(() => {
    els.entryDateSyncStatus.hidden = true;
  }, 1800);
  updatePreview();
}

function offloadEnterTargets() {
  const blockFields = activeBlockMode === "DIR"
    ? [els.fuelOffload, els.boomTime]
    : [els.burnRate, els.fuelStart, els.fuelEnd, els.boomTime];
  return [
    els.entryDate,
    els.callsign,
    els.tail,
    els.receiverType,
    ...blockFields,
    els.contacts,
    els.receiverInfo
  ].filter((input) => !input.disabled && !input.closest("[hidden]"));
}

function handleOffloadEnter(event) {
  if (event.key !== "Enter") return;
  event.preventDefault();
  const targets = offloadEnterTargets();
  const index = targets.indexOf(event.currentTarget);
  const next = targets[index + 1];
  if (next) focusAndSelect(next);
  else submitOffloadForm();
}

function openEditEntry(entryId) {
  const entry = state.entries.find((item) => item.id === entryId);
  if (!entry) return;
  resetForm();
  editingEntryId = entry.id;
  els.modalTitle.textContent = "Edit Offload";
  els.entryDate.value = entry.date || zuluDatetimeValue();
  setBlockMode(entry.blockMode || "MAN");
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
  if (boomTimerInterval) {
    updateBoomTimerInput();
    boomTimerBaseSeconds = parseBoomSeconds(els.boomTime.value);
    stopBoomTimer();
  }
  if (!els.offloadForm.reportValidity()) return;
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
    openConfirm("Summary", "No receiver fuel logged yet.", null, { hideCancel: true, hideOk: true, danger: false });
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
  els.confirmModal.classList.toggle("technique-modal", Boolean(options.technique));
  els.confirmCard.classList.toggle("technique-card", Boolean(options.technique));
  if (options.titleHtml) els.confirmTitle.innerHTML = title;
  else els.confirmTitle.textContent = title;
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
  } else if (options.html) {
    els.confirmBody.innerHTML = body;
  } else {
    els.confirmBody.textContent = body;
  }
  els.confirmCancelBtn.hidden = Boolean(options.hideCancel);
  els.confirmCancelBtn.textContent = options.cancelText || "Cancel";
  els.confirmOkBtn.hidden = Boolean(options.hideOk);
  els.confirmOkBtn.textContent = options.okText || "Confirm";
  els.confirmOkBtn.disabled = Boolean(options.okDisabled);
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
  if (!currentEntries().length) {
    openConfirm(
      "Export Backup",
      "There are no receivers or offloads to export yet.",
      null,
      { okText: "Export", hideCancel: true, okDisabled: true, danger: false }
    );
    return;
  }
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
      const importedProfiles = normalizeRdvzProfiles(parsed.receiverProfiles);
      const profileMap = new Map(state.receiverProfiles.map((profile) => [profile.type, profile]));
      importedProfiles.forEach((profile) => {
        profileMap.set(profile.type, { ...profileMap.get(profile.type), ...profile, id: profileMap.get(profile.type)?.id || profile.id });
      });
      state.entries = [...state.entries, ...newEntries];
      state.receiverProfiles = normalizeRdvzProfiles([...profileMap.values()]);
      saveState();
      render();
      openConfirm(
        "Import Complete",
        `Added ${newEntries.length} new offload entr${newEntries.length === 1 ? "y" : "ies"}. Skipped ${duplicateCount} duplicate entr${duplicateCount === 1 ? "y" : "ies"}. Imported ${importedProfiles.length} RDVZ profile${importedProfiles.length === 1 ? "" : "s"}.`,
        null,
        { okText: "OK", hideCancel: true, danger: false }
      );
    } catch {
      openConfirm("Import Failed", "That file did not look like a Fuel Tracker export.", null, { hideCancel: true, hideOk: true, danger: false });
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

function watchServiceWorker(worker) {
  if (!worker) return;
  const reconcileWorkerState = () => {
    if (worker.state === "installed" && navigator.serviceWorker.controller) showUpdate(worker);
  };
  reconcileWorkerState();
  worker.addEventListener("statechange", reconcileWorkerState);
}

function registerServiceWorker() {
  if (!("serviceWorker" in navigator)) {
    refreshMessageCenter();
    return;
  }
  navigator.serviceWorker.register("service-worker.js", { updateViaCache: "none" }).then((reg) => {
    if (reg.waiting) showUpdate(reg.waiting);
    watchServiceWorker(reg.installing);
    reg.addEventListener("updatefound", () => watchServiceWorker(reg.installing));
    reg.update().then(() => {
      if (reg.waiting) showUpdate(reg.waiting);
      watchServiceWorker(reg.installing);
    }).catch(() => {});
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
  els.cgInfoBtn.addEventListener("click", (event) => {
    event.stopPropagation();
    openCgInfo();
  });
  els.burnTimeInfoBtn.addEventListener("click", (event) => {
    event.stopPropagation();
    openBurnTimeInfo();
  });
  els.feedbackBtn.addEventListener("click", (event) => {
    event.stopPropagation();
    openFeedback();
  });
  els.cgClearBtn.addEventListener("click", (event) => {
    event.stopPropagation();
    clearCgInputs();
  });
  els.rdvzProfileButton.addEventListener("click", openRdvzLibrary);
  els.rdvzProfileMenu.addEventListener("click", (event) => {
    const editButton = event.target.closest("[data-edit-profile]");
    if (editButton) {
      const profile = state.receiverProfiles.find((item) => item.id === editButton.dataset.editProfile);
      if (profile) openRdvzProfileEditor(profile);
      return;
    }
    const deleteButton = event.target.closest("[data-delete-profile]");
    if (deleteButton) {
      deleteRdvzProfile(deleteButton.dataset.deleteProfile);
      return;
    }
    const option = event.target.closest("[data-select-profile]");
    if (!option) return;
    els.rdvzProfile.value = option.dataset.selectProfile;
    closeRdvzMenus();
    updateRdvzProfileOptions();
    applyRdvzProfile();
    saveRdvzWorkingInputs();
  });
  els.rdvzAddProfile.addEventListener("click", () => openRdvzProfileEditor());
  els.rdvzLibrarySearch.addEventListener("input", renderRdvzLibrary);
  els.rdvzLibraryModal.addEventListener("click", (event) => {
    const tanker = event.target.closest("[data-library-tanker]");
    if (tanker) {
      rdvzLibraryTanker = tanker.dataset.libraryTanker;
      rdvzLibraryCategory = Object.keys(RDVZ_RECEIVER_LIBRARY[rdvzLibraryTanker])[0];
      renderRdvzLibrary();
      return;
    }
    const category = event.target.closest("[data-library-category]");
    if (category) {
      rdvzLibraryCategory = category.dataset.libraryCategory;
      renderRdvzLibrary();
    }
  });
  els.rdvzLibraryList.addEventListener("click", (event) => {
    const editButton = event.target.closest("[data-edit-profile]");
    if (editButton) {
      const profile = state.receiverProfiles.find((item) => item.id === editButton.dataset.editProfile);
      if (profile) {
        closeModal("rdvzLibraryModal");
        openRdvzProfileEditor(profile);
      }
      return;
    }
    const deleteButton = event.target.closest("[data-delete-profile]");
    if (deleteButton) {
      deleteRdvzProfile(deleteButton.dataset.deleteProfile);
      return;
    }
    const savedButton = event.target.closest("[data-select-profile]");
    if (savedButton) {
      els.rdvzProfile.value = savedButton.dataset.selectProfile;
      updateRdvzProfileOptions();
      applyRdvzProfile();
      closeModal("rdvzLibraryModal");
      saveRdvzWorkingInputs();
      return;
    }
    const catalogButton = event.target.closest("[data-library-type]");
    if (catalogButton) selectLibraryReceiver(catalogButton.dataset.libraryType, catalogButton.dataset.libraryKias);
  });
  els.rdvzLibraryCustom.addEventListener("click", () => {
    closeModal("rdvzLibraryModal");
    openRdvzProfileEditor();
  });
  els.rdvzSaveProfile.addEventListener("click", saveRdvzProfile);
  els.rdvzCancelProfile.addEventListener("click", () => {
    editingRdvzProfileId = null;
    closeModal("rdvzProfileModal");
    updateRdvzProfileOptions();
    if (state.receiverProfiles.length) applyRdvzProfile();
  });
  els.rdvzType.addEventListener("input", () => {
    const cursor = els.rdvzType.selectionStart;
    els.rdvzType.value = els.rdvzType.value.toUpperCase().slice(0, 48);
    if (cursor !== null) els.rdvzType.setSelectionRange(Math.min(cursor, 48), Math.min(cursor, 48));
    updateRdvzPreview();
  });
  [els.rdvzKias, els.rdvzArFl, els.rdvzTankerKias].forEach((el) => {
    bindNumberOnlyInput(el, () => {
      updateRdvzPreview();
      saveRdvzWorkingInputs();
    }, { allowDecimal: false, maxDigits: 3 });
  });
  bindNumberOnlyInput(els.rdvzTrack, () => {
    const track = Number(els.rdvzTrack.value);
    const isSuspect = els.rdvzTrack.value !== "" && (!Number.isFinite(track) || track < 0 || track > 360);
    setRdvzInputWarning(els.rdvzTrack, isSuspect);
    updateRdvzPreview();
    saveRdvzWorkingInputs();
  }, { allowDecimal: false, maxDigits: 3 });
  bindNumberOnlyInput(els.rdvzNewKias, updateRdvzPreview, { allowDecimal: false, maxDigits: 3 });
  els.rdvzWind.addEventListener("input", () => {
    const cursor = els.rdvzWind.selectionStart;
    els.rdvzWind.value = els.rdvzWind.value.replace(/[^\d/]/g, "");
    if (cursor !== null) els.rdvzWind.setSelectionRange(cursor, cursor);
    updateRdvzPreview();
    saveRdvzWorkingInputs();
  });
  els.rdvzWind.addEventListener("blur", normalizeRdvzWind);
  els.rdvzWind.addEventListener("change", normalizeRdvzWind);
  els.rdvzWindAdjustBtn.addEventListener("click", () => setRdvzWindAdjustMode(!rdvzWindAdjustMode));
  initRdvzWindDrag();
  els.rdvzOrbitButton.addEventListener("click", () => toggleRdvzMenu(els.rdvzOrbitMenu, els.rdvzOrbitButton));
  els.rdvzOrbitMenu.addEventListener("click", (event) => {
    const option = event.target.closest("[data-value]");
    if (!option) return;
    els.rdvzOrbit.value = option.dataset.value;
    syncRdvzOrbitControl();
    closeRdvzMenus();
    updateRdvzPreview();
    saveRdvzWorkingInputs();
  });
  document.addEventListener("click", (event) => {
    if (!event.target.closest(".themed-select, .select-add-control")) closeRdvzMenus();
  });
  const profileInputs = [els.rdvzType, els.rdvzNewKias];
  profileInputs.forEach((el, index) => {
    el.addEventListener("focus", () => selectInputValue(el));
    el.addEventListener("click", () => selectInputValue(el));
    el.addEventListener("keydown", (event) => {
      if (event.key !== "Enter") return;
      event.preventDefault();
      event.stopImmediatePropagation();
      const next = profileInputs[index + 1];
      if (next) focusAndSelect(next);
      else saveRdvzProfile();
    });
  });
  const rdvzInputs = [els.rdvzKias, els.rdvzArFl, els.rdvzTankerKias, els.rdvzTrack, els.rdvzWind];
  rdvzInputs.forEach((el, index) => {
    el.addEventListener("focus", () => selectInputValue(el));
    el.addEventListener("click", () => selectInputValue(el));
    el.addEventListener("keydown", (event) => {
      if (event.key !== "Enter") return;
      event.preventDefault();
      const next = rdvzInputs[index + 1];
      if (next) focusAndSelect(next);
      else el.blur();
    });
  });
  els.rdvzResults.addEventListener("click", (event) => {
    if (event.target.closest("[data-rdvz-charts]")) {
      event.preventDefault();
      renderRdvzDigitalCharts();
      openModal("rdvzChartsModal");
      return;
    }
    if (event.target.closest("[data-rdvz-info]")) {
      event.preventDefault();
      openConfirm(
        "Turn Range Assumptions",
        "Turn Range and Offset use the ATP 25° AOB tables with interpolation. TAS assumes standard atmosphere and is not temperature-corrected. Receiver altitude is modeled 1,000 feet below tanker altitude. Drift is estimated from the entered wind; use tanker navigation-system ARIP-to-ARCP drift when available. Chart timing is the published nil-wind backup; wind-symbol timing is supplemental. Inputs up to two table intervals beyond a published limit are linearly extrapolated and identified by a yellow ~. Values farther outside the table display OUT OF RANGE.",
        null,
        { hideCancel: true, hideOk: true, danger: false }
      );
      return;
    }
    if (event.target.closest("[data-rdvz-wind-info]")) {
      event.preventDefault();
      openConfirm(
        "Wind-Corrected Timing",
        "These supplemental times use the entered wind and the resulting drift-adjusted turn range. The chart times above are interpolated from ATP-3.3.4.2 Table 2-13 (Nil Wind) and remain the published student reference.",
        null,
        { hideCancel: true, hideOk: true, danger: false }
      );
      return;
    }
    if (!event.target.closest("#rdvzTimerBtn")) return;
    event.preventDefault();
    if (rdvzTimerIgnoreClick) {
      rdvzTimerIgnoreClick = false;
      return;
    }
    toggleRdvzTimer();
  });
  els.rdvzChartsModal.addEventListener("click", (event) => {
    const selectedTable = event.target.closest(".rdvz-digital-table");
    document.querySelectorAll(".rdvz-digital-table.is-horizontal-scroll").forEach((table) => {
      if (table !== selectedTable) table.classList.remove("is-horizontal-scroll");
    });
    if (selectedTable && selectedTable.scrollWidth > selectedTable.clientWidth + 1) {
      selectedTable.classList.add("is-horizontal-scroll");
    }
  });
  els.rdvzResults.addEventListener("pointerdown", (event) => {
    if (!event.target.closest("#rdvzTimerBtn")) return;
    clearTimeout(rdvzTimerHold);
    rdvzTimerIgnoreClick = false;
    rdvzTimerHold = setTimeout(() => {
      rdvzTimerIgnoreClick = true;
      resetRdvzTimer();
    }, 650);
  });
  ["pointerup", "pointercancel", "pointerleave"].forEach((eventName) => {
    els.rdvzResults.addEventListener(eventName, () => clearTimeout(rdvzTimerHold));
  });
  els.offloadForm.addEventListener("submit", saveEntry);
  els.deleteEntryBtn.addEventListener("click", deleteCurrentEntry);
  [els.fuelStart, els.fuelEnd, els.burnRate, els.fuelOffload].forEach((el) => {
    bindNumberOnlyInput(el, updatePreview, { allowDecimal: true });
  });
  [els.boomTime, els.contacts].forEach((el) => {
    bindNumberOnlyInput(el, updatePreview, { allowDecimal: false });
  });
  els.boomTime.addEventListener("input", stopBoomTimer);
  els.boomTimerBtn.addEventListener("click", (event) => {
    event.preventDefault();
    if (boomTimerIgnoreClick) {
      boomTimerIgnoreClick = false;
      return;
    }
    toggleBoomTimer();
  });
  els.boomTimerBtn.addEventListener("pointerdown", () => {
    clearTimeout(boomTimerHold);
    boomTimerIgnoreClick = false;
    boomTimerHold = setTimeout(() => {
      boomTimerIgnoreClick = true;
      resetBoomTimer();
    }, 650);
  });
  ["pointerup", "pointercancel", "pointerleave"].forEach((eventName) => {
    els.boomTimerBtn.addEventListener(eventName, () => clearTimeout(boomTimerHold));
  });
  els.contactsUpBtn.addEventListener("click", () => adjustContacts(1));
  els.burnTimeTimerBtn.addEventListener("click", (event) => {
    event.preventDefault();
    if (burnTimerIgnoreClick) {
      burnTimerIgnoreClick = false;
      return;
    }
    toggleBurnTimer();
  });
  els.burnTimeTimerBtn.addEventListener("pointerdown", () => {
    clearTimeout(burnTimerHold);
    burnTimerIgnoreClick = false;
    burnTimerHold = setTimeout(() => {
      burnTimerIgnoreClick = true;
      resetBurnTimer();
    }, 650);
  });
  ["pointerup", "pointercancel", "pointerleave"].forEach((eventName) => {
    els.burnTimeTimerBtn.addEventListener(eventName, () => clearTimeout(burnTimerHold));
  });

  const cgInputs = [els.cgFb, els.cgCw, els.cgAb, els.cgRes, els.cgUd];
  cgInputs.forEach((el, index) => {
    bindNumberOnlyInput(el, updateCgPreview, { allowDecimal: true });
    el.addEventListener("focus", () => selectInputValue(el));
    el.addEventListener("click", () => selectInputValue(el));
    el.addEventListener("keydown", (event) => {
      if (event.key !== "Enter") return;
      event.preventDefault();
      event.stopImmediatePropagation();
      const next = cgInputs[index + 1];
      if (next) focusAndSelect(next);
      else el.blur();
    });
  });
  const burnTimeInputs = [els.burnTimeAmount, els.burnTimeRate];
  burnTimeInputs.forEach((el, index) => {
    bindNumberOnlyInput(el, handleBurnTimeInput, { allowDecimal: true });
    el.addEventListener("focus", () => selectInputValue(el));
    el.addEventListener("click", () => selectInputValue(el));
    el.addEventListener("keydown", (event) => {
      if (event.key !== "Enter") return;
      event.preventDefault();
      const next = burnTimeInputs[index + 1];
      if (next) focusAndSelect(next);
      else el.blur();
    });
  });

  const fragInputs = [els.fragRampFuel, els.fragLandFuel, els.fragBurnRate, els.fragFlightTime, els.fragOffload];
  fragInputs.forEach((el, index) => {
    if (el === els.fragFlightTime) {
      el.addEventListener("input", () => {
        const isSuspect = el.value.trim() !== "" && parseFragFlightHours(el.value) === null;
        el.classList.toggle("is-suspect-time", isSuspect);
        el.setAttribute("aria-invalid", String(isSuspect));
        updateFragPreview();
      });
    } else bindNumberOnlyInput(el, updateFragPreview, { allowDecimal: true });
    el.addEventListener("focus", () => selectInputValue(el));
    el.addEventListener("click", () => selectInputValue(el));
    el.addEventListener("keydown", (event) => {
      if (event.key !== "Enter") return;
      event.preventDefault();
      const next = fragInputs[index + 1];
      if (next) focusAndSelect(next);
      else el.blur();
    });
  });
  els.fragInfoBtn.addEventListener("click", (event) => {
    event.stopPropagation();
    openFragInfo();
  });

  els.cgModal.querySelectorAll(".calculator-section-header").forEach((header) => {
    header.setAttribute("role", "button");
    header.setAttribute("tabindex", "0");
    header.setAttribute("aria-expanded", "false");
    const indicator = header.querySelector(".calculator-section-toggle");
    if (indicator) indicator.tabIndex = -1;
  });
  els.cgModal.addEventListener("input", updateCalculatorEmptyHighlights);
  const toggleCalculatorHeader = (header) => {
    const section = header?.closest(".cg-collapsible");
    if (!section) return;
    setCalculatorSectionExpanded(section, header.getAttribute("aria-expanded") !== "true");
  };
  els.cgModal.addEventListener("click", (event) => {
    const header = event.target.closest(".calculator-section-header");
    if (header) toggleCalculatorHeader(header);
  });
  els.cgModal.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    const header = event.target.closest(".calculator-section-header");
    if (!header || event.target !== header) return;
    event.preventDefault();
    toggleCalculatorHeader(header);
  });

  els.blockB40.addEventListener("click", () => setBlockMode("MAN"));
  els.blockB45.addEventListener("click", () => setBlockMode("DIR"));

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
    el.addEventListener("keydown", handleOffloadEnter);
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

  els.entryDateNowBtn.addEventListener("click", setEntryDateToNow);
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
          lastBlockMode: validBlockMode(state.lastBlockMode) || "MAN",
          receiverProfiles: state.receiverProfiles || []
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
