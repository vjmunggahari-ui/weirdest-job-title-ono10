import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TITLE = "Senior Translator of Dog Barking into HR Policy";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? join(process.cwd(), "output");
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TITLE, "utf8");

// Read-back self-check: the file must hold exactly the title, 1-60 chars, no trailing newline.
const back = readFileSync(join(outDir, "entry.txt"), "utf8");
if (back !== TITLE) throw new Error("entry.txt does not match the title");
if (back.length < 1 || back.length > 60) throw new Error("entry.txt outside 1-60 chars");
if (back !== back.trim()) throw new Error("entry.txt has leading/trailing whitespace");
