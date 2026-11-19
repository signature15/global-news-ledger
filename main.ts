/**
 * global-news-ledger — make.fun news image entry, contest news-image-20261118.
 *
 * The entry itself is `entry.png`, a cream newsprint broadsheet for
 * Wednesday 18 November 2026. A date tab beside the masthead carries the
 * day, and the page moves through the newsroom's rhythm from morning to
 * night: 30 stories arranged in time bands, a day-in-numbers strip that
 * tallies the edition at a glance, lead stories across the top, a region
 * grid covering the world, evening briefs as the day closes, and a sources
 * footer listing where every line came from.
 *
 * What this program does:
 *   It publishes that image by copying the file byte-for-byte into the
 *   output directory the grader reads from. Inside the grading container
 *   the destination is always /output; anywhere else, the environment
 *   variable MAKEFUN_OUTPUT_DIR names the output directory instead, which
 *   makes local reproduction and manual checks possible without touching
 *   grading-specific paths.
 *
 * Determinism:
 *   The program's only effect is one synchronous, byte-exact copy that
 *   finishes before the process exits. It reads no clock, draws no
 *   randomness, embeds no timestamps, and retouches no pixels, and its
 *   input is a file committed to the repository — so a second run cannot
 *   help but write bit-identical bytes, on this machine or any other.
 *
 * Why no network is needed:
 *   Everything the entry needs, the repository already carries: the rendered
 *   poster is committed as entry.png, and the only operation performed here
 *   is a filesystem copy. Nothing is fetched or downloaded and the result
 *   depends on nothing outside the checkout, so the program runs cleanly in
 *   an offline sandbox.
 *
 * Behavior on failure:
 *   The program never creates the output directory. If it (or the file
 *   within it) cannot be written, copyFileSync throws and the process exits
 *   non-zero, so a broken run is visible rather than silently producing
 *   nothing.
 *
 * Portability:
 *   Node 22, standard library only — no npm install step. The source path is
 *   resolved relative to this module via new URL('./entry.png',
 *   import.meta.url) rather than process.cwd(), so the program behaves
 *   identically no matter which directory it is launched from. Run with
 *   `node main.ts`.
 */

import { copyFileSync } from "node:fs";
import { join } from "node:path";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

copyFileSync(new URL("./entry.png", import.meta.url), join(outputDir, "entry.png"));
