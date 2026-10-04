const schedule = {
  sunday: {
    label: "Sunday",
    summary: "Arabic and Biology class day — keep the spaces between them gentle.",
    items: [
      ["2:35–3:00", "Rest after school", "Rest", "14:35", "15:00"],
      ["3:00–3:35", "Arabic review or urgent homework", "Independent study", "15:00", "15:35"],
      ["3:40–3:50", "Asr prayer", "Prayer", "15:40", "15:50"],
      ["3:50–4:00", "Prepare for Arabic class", "Preparation", "15:50", "16:00"],
      ["4:00–6:00", "Arabic private class", "Private class", "16:00", "18:00"],
      ["6:00–7:00", "Maghrib prayer and dinner", "Prayer & meal", "18:00", "19:00"],
      ["7:00–7:25", "Rest", "Rest", "19:00", "19:25"],
      ["7:30–8:00", "Isha prayer", "Prayer", "19:30", "20:00"],
      ["8:00–10:00", "Biology private class", "Private class", "20:00", "22:00"],
      ["10:00 onward", "Prepare for bed", "Wind down", "22:00", "23:59"]
    ]
  },
  monday: {
    label: "Monday",
    summary: "Your most flexible day — use it to build steady progress across subjects.",
    items: [
      ["2:35–3:00", "Rest after school", "Rest", "14:35", "15:00"],
      ["3:00–3:35", "Advanced Math", "Independent study", "15:00", "15:35"],
      ["3:40–3:50", "Asr prayer", "Prayer", "15:40", "15:50"],
      ["3:50–4:50", "Chemistry", "Independent study", "15:50", "16:50"],
      ["4:50–5:10", "Break", "Rest", "16:50", "17:10"],
      ["5:10–6:00", "Biology", "Independent study", "17:10", "18:00"],
      ["6:00–7:00", "Maghrib prayer and dinner", "Prayer & meal", "18:00", "19:00"],
      ["7:00–7:25", "Light rest", "Rest", "19:00", "19:25"],
      ["7:30–8:00", "Isha prayer", "Prayer", "19:30", "20:00"],
      ["8:00–9:00", "Arabic or school homework", "Independent study", "20:00", "21:00"],
      ["9:00–9:20", "Prepare for Tuesday", "Preparation", "21:00", "21:20"],
      ["9:20 onward", "Relax and prepare for bed", "Wind down", "21:20", "23:59"]
    ]
  },
  tuesday: {
    label: "Tuesday",
    summary: "Chemistry class anchors the afternoon; finish with a short recap while it is fresh.",
    items: [
      ["2:35–3:00", "Rest after school", "Rest", "14:35", "15:00"],
      ["3:00–3:35", "Review Chemistry before class", "Independent study", "15:00", "15:35"],
      ["3:40–3:50", "Asr prayer", "Prayer", "15:40", "15:50"],
      ["3:50–4:00", "Prepare for class", "Preparation", "15:50", "16:00"],
      ["4:00–6:00", "Chemistry private class", "Private class", "16:00", "18:00"],
      ["6:00–7:00", "Maghrib prayer and dinner", "Prayer & meal", "18:00", "19:00"],
      ["7:00–7:25", "Rest", "Rest", "19:00", "19:25"],
      ["7:30–8:00", "Isha prayer", "Prayer", "19:30", "20:00"],
      ["8:00–9:00", "Advanced Math practice", "Independent study", "20:00", "21:00"],
      ["9:00–9:30", "Chemistry recap and organize notes", "Review", "21:00", "21:30"],
      ["9:30 onward", "Relax and prepare for bed", "Wind down", "21:30", "23:59"]
    ]
  },
  wednesday: {
    label: "Wednesday",
    summary: "A lighter afternoon before your Advanced Math class in the evening.",
    items: [
      ["2:35–3:00", "Rest after school", "Rest", "14:35", "15:00"],
      ["3:00–3:35", "Review Advanced Math", "Independent study", "15:00", "15:35"],
      ["3:40–3:50", "Asr prayer", "Prayer", "15:40", "15:50"],
      ["3:50–4:50", "Biology", "Independent study", "15:50", "16:50"],
      ["4:50–5:10", "Break", "Rest", "16:50", "17:10"],
      ["5:10–6:00", "Arabic or unfinished homework", "Independent study", "17:10", "18:00"],
      ["6:00–7:00", "Maghrib prayer and dinner", "Prayer & meal", "18:00", "19:00"],
      ["7:00–7:25", "Rest and prepare for class", "Preparation", "19:00", "19:25"],
      ["7:30–8:00", "Isha prayer", "Prayer", "19:30", "20:00"],
      ["8:00–10:00", "Advanced Math private class", "Private class", "20:00", "22:00"],
      ["10:00 onward", "Prepare for bed", "Wind down", "22:00", "23:59"]
    ]
  },
  thursday: {
    label: "Thursday",
    summary: "Your full rest day. Recharge without feeling behind.",
    items: []
  },
  friday: {
    label: "Friday",
    summary: "A focused morning, then the rest of the day is yours.",
    items: [
      ["8:00–8:50", "Advanced Math practice", "Independent study", "08:00", "08:50"],
      ["8:50–9:00", "Short break", "Rest", "08:50", "09:00"],
      ["9:00–9:50", "Biology review", "Independent study", "09:00", "09:50"],
      ["9:50–10:10", "Breakfast break", "Rest", "09:50", "10:10"],
      ["10:10–11:00", "Chemistry practice", "Independent study", "10:10", "11:00"],
      ["11:00–11:10", "Short break", "Rest", "11:00", "11:10"],
      ["11:10–12:00", "Arabic or unfinished schoolwork", "Independent study", "11:10", "12:00"]
    ]
  },
  saturday: {
    label: "Saturday",
    summary: "Study early, prepare for Physics, and finish your class by noon.",
    items: [
      ["7:00–7:50", "Advanced Math practice", "Independent study", "07:00", "07:50"],
      ["7:50–8:00", "Short break", "Rest", "07:50", "08:00"],
      ["8:00–8:50", "Chemistry review", "Independent study", "08:00", "08:50"],
      ["8:50–9:00", "Short break", "Rest", "08:50", "09:00"],
      ["9:00–9:40", "Physics preparation", "Preparation", "09:00", "09:40"],
      ["9:40–10:00", "Break and get ready for class", "Rest", "09:40", "10:00"],
      ["10:00–12:00", "Physics private class", "Private class", "10:00", "12:00"]
    ]
  }
};

const dayKeys = Object.keys(schedule);
const Core = window.PlannerCore;
const colors = {
  "Private class": "#dc6b4a",
  "Independent study": "#527a91",
  "Prayer": "#7c9a8b",
  "Prayer & meal": "#7c9a8b",
  "Rest": "#e9b949",
  "Preparation": "#9b79a8",
  "Review": "#527a91",
  "Wind down": "#9b8b79"
};
let activeDay = getTodayKey();
let toastTimer;
let lastDay = activeDay;

function muscatNow(date = new Date()) {
  return Core.muscatNow(date);
}

function getTodayKey() {
  const index = muscatNow().getUTCDay();
  return ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"][index];
}

function loadDone() {
  return Core.loadState(localStorage).completed;
}

function saveDone(done) {
  Core.saveState(localStorage, { version: 2, weekAnchor: Core.getWeekAnchor(), completed: done });
  showSavedStatus();
}

function activityId(day, index) { return `${day}-${index}`; }

function renderTabs() {
  const tabs = document.querySelector("#day-tabs");
  const today = getTodayKey();
  tabs.innerHTML = dayKeys.map(day => `
    <button class="day-tab ${day === activeDay ? "active" : ""} ${day === today ? "today" : ""}"
      type="button" data-day="${day}" aria-pressed="${day === activeDay}">${schedule[day].label}</button>
  `).join("");
  tabs.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", () => {
      activeDay = button.dataset.day;
      renderTabs();
      renderSchedule();
    });
  });
}

function renderSchedule() {
  const day = schedule[activeDay];
  const today = getTodayKey();
  const done = loadDone();
  document.querySelector("#day-title").textContent = day.label;
  document.querySelector("#day-kicker").textContent = activeDay === today ? "Today" : "Daily plan";
  document.querySelector("#day-summary").textContent = day.summary;
  const list = document.querySelector("#schedule-list");

  if (!day.items.length) {
    list.innerHTML = `<div class="empty-day"><div><span class="sun">☀</span><h3>Your day is clear.</h3><p>Rest, spend time with family, exercise, or enjoy your hobbies.</p></div></div>`;
    return;
  }

  list.innerHTML = day.items.map((item, index) => {
    const id = activityId(activeDay, index);
    const isDone = Boolean(done[id]);
    const isCurrent = activeDay === today && withinTime(item[3], item[4]);
    return `<article class="schedule-item ${isDone ? "done" : ""} ${isCurrent ? "current" : ""}" style="--item-color:${colors[item[2]] || "#7c9a8b"}">
      <time class="time">${item[0]}</time>
      <div class="activity"><span class="activity-title">${item[1]}</span><span class="activity-kind">${item[2]}${isCurrent ? " · happening now" : ""}</span></div>
      <button class="check-button" type="button" data-id="${id}" aria-label="Mark ${item[1]} as ${isDone ? "not done" : "done"}" aria-pressed="${isDone}">✓</button>
    </article>`;
  }).join("");

  list.querySelectorAll(".check-button").forEach(button => {
    button.addEventListener("click", () => toggleDone(button.dataset.id));
  });
}

function withinTime(start, end) {
  const now = muscatNow();
  const minutes = now.getUTCHours() * 60 + now.getUTCMinutes();
  const toMinutes = value => {
    const [h, m] = value.split(":").map(Number);
    return h * 60 + m;
  };
  return minutes >= toMinutes(start) && minutes < toMinutes(end);
}

function toggleDone(id) {
  const state = Core.toggleActivity(localStorage, id);
  renderSchedule();
  updateProgress();
  showSavedStatus();
  if (state.completed[id]) showToast("Nice work — one more activity complete.");
}

function updateProgress() {
  const total = dayKeys.reduce((sum, day) => sum + schedule[day].items.length, 0);
  const doneCount = Object.keys(loadDone()).length;
  const percent = total ? Math.round(doneCount / total * 100) : 0;
  document.querySelector("#done-count").textContent = doneCount;
  document.querySelector("#total-count").textContent = total;
  document.querySelector("#progress-percent").textContent = `${percent}%`;
  document.querySelector("#progress-bar").style.width = `${percent}%`;
}

function updateClock() {
  const now = new Date();
  document.querySelector("#live-time").textContent = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Muscat", hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: true
  }).format(now);
  document.querySelector("#live-date").textContent = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Muscat", weekday: "long", day: "numeric", month: "long"
  }).format(now);

  const remaining = Core.millisecondsUntilReset(now);
  const days = Math.floor(remaining / 86400000);
  const hours = Math.floor((remaining % 86400000) / 3600000);
  const minutes = Math.floor((remaining % 3600000) / 60000);
  document.querySelector("#reset-countdown").textContent = `${days}d ${hours}h ${minutes}m · Sunday 12:00 PM`;
}

function showSavedStatus() {
  const status = document.querySelector("#save-status");
  status.textContent = "Saved ✓";
  window.setTimeout(() => { status.textContent = "Saved on this device"; }, 1800);
}

function showToast(message) {
  const toast = document.querySelector("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2400);
}

document.querySelector("#clear-week").addEventListener("click", () => {
  if (confirm("Reset every completed activity for this week?")) {
    Core.resetState(localStorage);
    renderSchedule();
    updateProgress();
    showToast("This week has been reset.");
  }
});

window.addEventListener("storage", event => {
  if (event.key === Core.STORAGE_KEY) {
    renderSchedule();
    updateProgress();
    showSavedStatus();
  }
});

document.addEventListener("visibilitychange", () => {
  if (!document.hidden) {
    Core.loadState(localStorage);
    renderSchedule();
    updateProgress();
    updateClock();
  }
});

if (!dayKeys.includes(activeDay)) activeDay = "sunday";
Core.cleanupLegacyKeys(localStorage);
Core.loadState(localStorage);
renderTabs();
renderSchedule();
updateProgress();
updateClock();
setInterval(() => {
  const today = getTodayKey();
  if (today !== lastDay) {
    activeDay = today;
    lastDay = today;
    renderTabs();
  }
  updateClock();
  renderSchedule();
  updateProgress();
}, 30000);
