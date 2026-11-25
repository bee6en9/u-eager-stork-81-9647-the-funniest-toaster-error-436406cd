// The Funniest Toaster Error Message
// Deterministic: always writes the exact same single line.
// Chosen line: a deadpan error from the toaster itself. The crumb tray is
// the most toaster-specific scene available (only a toaster has one), the
// "94% crumbs" turn makes the appliance the victim of its own job, and
// "Send help, or a vacuum" lands the joke in one read with no setup.
// No meta address to the judge, no bread pun, no trailing newline.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY_TEXT =
  "ERROR: Crumb tray full. I am 94% crumbs now. Send help, or a vacuum.";

// Gate guard: the entry must be 1-120 characters, not whitespace only.
if (ENTRY_TEXT.length < 1 || ENTRY_TEXT.length > 120 || !ENTRY_TEXT.trim()) {
  throw new Error(`ENTRY_TEXT is ${ENTRY_TEXT.length} chars; must be 1-120.`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY_TEXT, "utf8");
