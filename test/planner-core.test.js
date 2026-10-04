const test = require("node:test");
const assert = require("node:assert/strict");
const Core = require("../dist/planner-core.js");

class MemoryStorage {
  constructor() { this.data = new Map(); }
  get length() { return this.data.size; }
  getItem(key) { return this.data.has(key) ? this.data.get(key) : null; }
  setItem(key, value) { this.data.set(key, String(value)); }
  removeItem(key) { this.data.delete(key); }
  key(index) { return [...this.data.keys()][index] ?? null; }
}

test("the week resets exactly at Sunday noon in Muscat", () => {
  const before = new Date("2026-10-04T07:59:59.000Z"); // 11:59:59 AM Muscat
  const after = new Date("2026-10-04T08:00:00.000Z");  // 12:00 PM Muscat
  assert.equal(Core.getWeekAnchor(after) - Core.getWeekAnchor(before), Core.MS_WEEK);
});

test("completed activities persist after a reload", () => {
  const storage = new MemoryStorage();
  const now = new Date("2026-10-05T12:00:00.000Z");
  Core.toggleActivity(storage, "monday-3", now);
  assert.equal(Core.loadState(storage, now).completed["monday-3"], true);
});

test("saved activities clear when a new week begins", () => {
  const storage = new MemoryStorage();
  const saturday = new Date("2026-10-10T12:00:00.000Z");
  const sundayNoon = new Date("2026-10-11T08:00:00.000Z");
  Core.toggleActivity(storage, "saturday-1", saturday);
  assert.deepEqual(Core.loadState(storage, sundayNoon).completed, {});
});

test("invalid saved JSON recovers without breaking the app", () => {
  const storage = new MemoryStorage();
  storage.setItem(Core.STORAGE_KEY, "{broken");
  assert.deepEqual(Core.loadState(storage).completed, {});
});

test("legacy weekly keys are cleaned up", () => {
  const storage = new MemoryStorage();
  storage.setItem("study-planner-2026-10-04", "{}");
  storage.setItem("unrelated", "keep");
  Core.cleanupLegacyKeys(storage);
  assert.equal(storage.getItem("study-planner-2026-10-04"), null);
  assert.equal(storage.getItem("unrelated"), "keep");
});
