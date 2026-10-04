(function (root, factory) {
  const api = factory();
  if (typeof module === "object" && module.exports) module.exports = api;
  else root.PlannerCore = api;
})(typeof globalThis !== "undefined" ? globalThis : this, function () {
  "use strict";

  const STORAGE_KEY = "weekly-study-planner-state-v2";
  const MS_WEEK = 7 * 24 * 60 * 60 * 1000;
  const MUSCAT_OFFSET = 4 * 60 * 60 * 1000;

  function muscatNow(date = new Date()) {
    return new Date(date.getTime() + MUSCAT_OFFSET);
  }

  function getWeekAnchor(date = new Date()) {
    const shifted = muscatNow(date);
    const sundayNoon = Date.UTC(
      shifted.getUTCFullYear(),
      shifted.getUTCMonth(),
      shifted.getUTCDate() - shifted.getUTCDay(),
      12
    );
    return shifted.getTime() < sundayNoon ? sundayNoon - MS_WEEK : sundayNoon;
  }

  function createEmptyState(date = new Date()) {
    return {
      version: 2,
      weekAnchor: getWeekAnchor(date),
      completed: {},
      updatedAt: date.toISOString()
    };
  }

  function normalizeState(value, date = new Date()) {
    const currentAnchor = getWeekAnchor(date);
    if (!value || value.version !== 2 || value.weekAnchor !== currentAnchor ||
        !value.completed || typeof value.completed !== "object" || Array.isArray(value.completed)) {
      return createEmptyState(date);
    }

    const completed = {};
    for (const [id, checked] of Object.entries(value.completed)) {
      if (/^[a-z]+-\d+$/.test(id) && checked === true) completed[id] = true;
    }
    return { version: 2, weekAnchor: currentAnchor, completed, updatedAt: value.updatedAt || date.toISOString() };
  }

  function loadState(storage, date = new Date()) {
    let parsed;
    try { parsed = JSON.parse(storage.getItem(STORAGE_KEY)); }
    catch { parsed = null; }
    const state = normalizeState(parsed, date);
    if (!parsed || parsed.weekAnchor !== state.weekAnchor || parsed.version !== state.version) {
      saveState(storage, state);
    }
    return state;
  }

  function saveState(storage, state, date = new Date()) {
    const normalized = normalizeState(state, date);
    normalized.updatedAt = date.toISOString();
    storage.setItem(STORAGE_KEY, JSON.stringify(normalized));
    return normalized;
  }

  function toggleActivity(storage, id, date = new Date()) {
    const state = loadState(storage, date);
    if (state.completed[id]) delete state.completed[id];
    else state.completed[id] = true;
    return saveState(storage, state, date);
  }

  function resetState(storage, date = new Date()) {
    return saveState(storage, createEmptyState(date), date);
  }

  function cleanupLegacyKeys(storage) {
    const legacy = [];
    for (let index = 0; index < storage.length; index += 1) {
      const key = storage.key(index);
      if (key && key.startsWith("study-planner-")) legacy.push(key);
    }
    legacy.forEach(key => storage.removeItem(key));
  }

  function millisecondsUntilReset(date = new Date()) {
    return Math.max(0, getWeekAnchor(date) + MS_WEEK - muscatNow(date).getTime());
  }

  return {
    STORAGE_KEY,
    MS_WEEK,
    muscatNow,
    getWeekAnchor,
    createEmptyState,
    normalizeState,
    loadState,
    saveState,
    toggleActivity,
    resetState,
    cleanupLegacyKeys,
    millisecondsUntilReset
  };
});
