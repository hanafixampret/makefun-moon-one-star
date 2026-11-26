// The Moon Gets One Star — one-star review of the Moon, max 120 chars.
// Grievance: the Moon drags the ocean around (tides), vanishes for a week,
// then shows up "full of itself" — full moon as arrogance. Moon-specific,
// not craters, cheese, or brightness. Reads like a real one-star review.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "★☆☆☆☆ Drags the ocean around without asking, vanishes for a week, then shows up full of itself. Rude. One star.";

// Gate guard: the entry must be 1-120 characters of non-whitespace text.
const len = [...ENTRY].length;
if (len < 1 || len > 120 || ENTRY.trim().length === 0) {
  throw new Error(`Entry is ${len} chars; gate requires 1-120.`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");
console.log(`Wrote ${[...ENTRY].length} chars to /output/entry.txt`);
