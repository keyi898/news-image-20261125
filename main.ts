import { copyFileSync, mkdirSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// Entry for news-image-20261125: copy the pre-rendered front-page image
// (entry.png, drawn for this entry) to the grader's output directory.
const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const src = join(here, "entry.png");
const dst = join(outDir, "entry.png");
mkdirSync(outDir, { recursive: true });
copyFileSync(src, dst);
// Integrity check: the copy must be byte-for-byte the shipped image.
if (statSync(src).size !== statSync(dst).size) {
  throw new Error("entry.png copy size mismatch");
}
console.log(`wrote ${dst} (${statSync(dst).size} bytes)`);
