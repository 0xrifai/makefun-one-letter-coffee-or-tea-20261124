// One Letter: Coffee or Tea — entry for make.fun
// Writes exactly one letter, "A" (coffee), to /output/entry.txt.
// No trailing newline, no extra output in the file.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const OUTPUT_DIR = "/output";
const OUTPUT_FILE = join(OUTPUT_DIR, "entry.txt");

// Coffee: the livelier, bolder stance — energy, morning ritual,
// a punchy pick-me-up. That vividness is the whole answer.
// Tea reads calmer and quieter; coffee answers louder.
const LETTER = "A";

mkdirSync(OUTPUT_DIR, { recursive: true });
// writeFileSync with a plain string writes exactly these bytes:
// one ASCII letter, no newline appended.
writeFileSync(OUTPUT_FILE, LETTER, "utf8");
