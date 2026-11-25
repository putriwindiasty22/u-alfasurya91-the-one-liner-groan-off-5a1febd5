import { mkdirSync, writeFileSync } from "node:fs";

// The One-Liner Groan-Off: one original dad joke, one line, at most 140 chars.
// Setup, turn, groan — all inside a single line, no wasted words.
const JOKE =
  "I told my vacuum it was doing a great job — now it really sucks up to me.";

// Self-check the gate before writing: 1–140 characters, single line,
// not only whitespace. Fail loudly instead of submitting an invalid entry.
if (JOKE.length < 1 || JOKE.length > 140) {
  throw new Error(`Entry is ${JOKE.length} characters, gate needs 1–140.`);
}
if (JOKE.includes("\n") || JOKE.trim().length === 0) {
  throw new Error("Entry must be a single non-blank line.");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
