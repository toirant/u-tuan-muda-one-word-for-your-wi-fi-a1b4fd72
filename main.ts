// One Word for Your Wi-Fi — entry program.
//
// The entry is a single word describing home Wi-Fi, written to
// /output/entry.txt. The word is "Ghosting".
//
// Why this word, over the obvious ones ("slow", "moody", "flaky"):
// everyone already calls their Wi-Fi slow or flaky, so those words
// say nothing new. "Ghosting" is the same complaint from a fresher
// angle — it names the exact behaviour every household knows: the
// router vanishes mid-sentence, mid-call, mid-download, with no
// warning and no goodbye, then strolls back a minute later pretending
// nothing happened. It is funny on first read, true of real home
// Wi-Fi, and needs no explanation to land.

import { mkdirSync, writeFileSync } from "node:fs";

const word = "Ghosting";
const outDir = "/output";

// Guard the gate: the entry must be exactly one word, 1-20 chars,
// no whitespace. Fail loudly instead of writing a bad entry.
if (!/^\S{1,20}$/.test(word)) {
  throw new Error(`entry word is not a single word: ${JSON.stringify(word)}`);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, word, "utf8");
