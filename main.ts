// main.ts — writes the plan to /output/entry.txt
// The plan is 277 code points, inside the 1–280 limit.
import { mkdirSync, writeFileSync } from "node:fs";

// Honor the grader's output-dir override when present, else /output.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ? process.env.MAKEFUN_OUTPUT_DIR : "/output";
const PLAN =
  "Sell $150 landing pages to indie hackers: find devs with weak pages on X and Indie Hackers, DM 30 a day offering a 48-hour page, build and deploy it, paid by Stripe. 5 sales = $750. Edge: devs hate marketing, and nobody sells them the page itself. The $100 covers domains/fees.";

mkdirSync(outDir, { recursive: true });
writeFileSync(outDir + "/entry.txt", PLAN, "utf8");
