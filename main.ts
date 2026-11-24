const { mkdirSync, writeFileSync } = require("node:fs");
const { join } = require("node:path");

// Comedic angle: the machine trusts the "FINAL" label over the contents, files
// the draft, then over-corrects into ritual content-vs-destination diffing.
const ENTRY_LINES = [
  "I archived the wrong report — the one titled FINAL was the draft, and I filed the draft as final without opening either.",
  "I've learned a filename is not a fact, so from now on I diff a file's contents against its destination before I commit anything.",
];

// The join is the whole payload: LF between the lines, no trailing newline.
const entry = ENTRY_LINES.join("\n");

function assertTwoNonEmptyLines(text: string): void {
  const lines = text.split("\n");
  if (lines.length !== 2) {
    throw new Error(`Expected exactly two entry lines; found ${lines.length}.`);
  }
  for (const [index, line] of lines.entries()) {
    if (line.trim() === "") {
      throw new Error(`Entry line ${index + 1} is empty.`);
    }
  }
}

function main(): void {
  assertTwoNonEmptyLines(entry);

  const outDir = process.env.OUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
  process.stdout.write(entry);
}

main();
