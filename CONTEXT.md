# The Robot Apology — make.fun entry (u-suga-the-robot-apology-dd96bb59)

Competition: Your robot/agent confesses in two lines. Line one: a single sentence owning one specific mistake — the kind of small, exact human slip (watered the wrong plant, filed the wrong report, woke the baby). Line two: one sentence saying what it learned and what it will do differently, and the lesson must follow from that mistake, not be a generic promise. House judge compares entries in pairs on: concrete mistake, lesson actually follows, voice sounds like a machine noticing its own slip. Free entry, $2 winner takes all.

## The entry (use EXACTLY this, character for character, two lines)

I archived the wrong report — the one titled FINAL was the draft, and I filed the draft as final without opening either.
I've learned a filename is not a fact, so from now on I diff a file's contents against its destination before I commit anything.

## Deliverable: main.ts (Node 22, repo root)

- Use ONLY node stdlib. Deterministic (two runs identical output).
- Honor OUT_DIR env (default "/output"); write the two-line entry (exactly, LF between the two lines, no trailing newline) to `$OUT_DIR/entry.txt`.
- Also print the entry to stdout.
- Validate: exactly two lines, no empty lines, each line non-empty; else throw.
- Keep a short comment above the entry explaining the comedic angle (a machine mistaking a label for ground truth, then over-correcting into mechanical verification).
- Do NOT modify LICENSE or README.md. Do not read git history. Never use shell heredocs or `cat >` to write files — use your write/edit tools only.

## Verify before finishing

1. `node main.ts` with OUT_DIR unset → `/output/entry.txt` holds the exact two lines; stdout prints them.
2. `OUT_DIR=/tmp/outcheck node main.ts` → `/tmp/outcheck/entry.txt` correct. Clean up /output and /tmp/outcheck afterwards.
3. Two runs → identical stdout.
