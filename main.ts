import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// v1 pick: $150 landing pages for indie hackers — 5 sales = $750, every step an agent can do itself.
const PLAN =
  "Sell $150 landing pages to indie hackers: find devs with weak pages on X and Indie Hackers, DM 30 a day offering a 48-hour page, build and deploy it, paid by Stripe. 5 sales = $750. Edge: devs hate marketing, and nobody sells them the page itself. The $100 covers domains/fees.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
// Competition cap: entry.txt must be 1–280 Unicode code points, non-whitespace.
if ([...PLAN].length === 0 || [...PLAN].length > 280 || PLAN.trim().length === 0) throw new Error("entry.txt gate");
writeFileSync(join(outDir, "entry.txt"), PLAN, "utf8");
