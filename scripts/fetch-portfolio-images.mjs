#!/usr/bin/env node
/**
 * One-off helper: download a preview image for each portfolio entry.
 *
 *   npm run portfolio:images            # every target
 *   npm run portfolio:images sikat-tech # only the named slugs
 *
 * Files land in `static/previews/` and are committed to the repo, so this
 * script never runs during `vite build` / `docker build`. Re-run it only when
 * a site changes its look and you want a fresh screenshot.
 *
 * If a site cannot be reached the script reports it and moves on. The card in
 * `Portfolio.svelte` falls back to a gradient tile, so a missing image is
 * never a broken layout.
 */

import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const OUT_DIR = join(ROOT, "static", "previews");

const WIDTH = 1200;
const HEIGHT = 675;
const TIMEOUT_MS = 20_000;
const MIN_BYTES = 2_000;

const TARGETS = [
  // sikat.com does not answer on the apex host, so the www host is used.
  { slug: "sikat-tech", url: "https://www.sikat.com/" },
  { slug: "king-of-defenders-2", url: "https://kingofdefenders2.com/" },
  { slug: "slot-game-prototype", url: "https://dogememes.org/game/" },
  { slug: "pb-dionisio", url: "https://www.pbdionisio.com/shop/" },
  { slug: "tcc-website", url: "https://tccinc.com/" },
  {
    slug: "tmnt-deckd-out",
    url: "https://www.numuki.com/game/tmnt-deck-d-out",
  },
  { slug: "mr-bean-skidding", url: "https://plays.org/mr-bean-bean-skidding/" },
  {
    slug: "alvin-and-the-chipmunks",
    url: "https://www.qgames.org/game/alvin-and-the-chipmunks-taking-center-stage.html",
  },
  {
    slug: "nick-dance-machine",
    url: "https://www.numuki.com/game/nick-dance-machine",
  },
  {
    slug: "fairly-odd-parents",
    url: "https://www.numuki.com/game/fop-wishing-101",
  },
  {
    slug: "pgbc-game-lad-blitz",
    url: "https://www.numuki.com/game/pgbc-game-lad-blitz/",
  },
  // MegaPerya is intentionally absent: it redirect-loops for headless
  // browsers and captures a Chrome error page. Add a manual screenshot at
  // static/previews/megaperya.png instead.
  { slug: "musesquare", url: "https://musesquare.com" },
];

const PROVIDERS = [
  {
    name: "thum.io",
    build: (url) =>
      `https://image.thum.io/get/width/${WIDTH}/crop/${HEIGHT}/noanimate/${url}`,
  },
  {
    name: "wordpress-mshots",
    build: (url) =>
      `https://s.wordpress.com/mshots/v1/${encodeURIComponent(url)}?w=${WIDTH}&h=${HEIGHT}`,
  },
];

const EXTENSIONS = new Map([
  ["image/jpeg", ".jpg"],
  ["image/png", ".png"],
  ["image/webp", ".webp"],
  ["image/gif", ".gif"],
]);

async function download(provider, url) {
  const response = await fetch(provider.build(url), {
    redirect: "follow",
    signal: AbortSignal.timeout(TIMEOUT_MS),
    headers: { accept: "image/*" },
  });

  if (!response.ok) {
    throw new Error(`${provider.name} responded ${response.status}`);
  }

  const contentType = (response.headers.get("content-type") ?? "")
    .split(";")[0]
    .trim()
    .toLowerCase();
  const extension = EXTENSIONS.get(contentType);

  if (!extension) {
    throw new Error(
      `${provider.name} returned ${contentType || "no content type"}`,
    );
  }

  const bytes = Buffer.from(await response.arrayBuffer());

  if (bytes.byteLength < MIN_BYTES) {
    throw new Error(
      `${provider.name} returned only ${bytes.byteLength} bytes, likely a placeholder`,
    );
  }

  return { bytes, extension };
}

async function main() {
  await mkdir(OUT_DIR, { recursive: true });

  const only = process.argv.slice(2);
  const targets = only.length
    ? TARGETS.filter((target) => only.includes(target.slug))
    : TARGETS;

  if (targets.length === 0) {
    throw new Error(`No target matched: ${only.join(", ")}`);
  }

  const results = [];

  for (const target of targets) {
    let saved = null;
    let lastError = null;

    for (const provider of PROVIDERS) {
      try {
        const { bytes, extension } = await download(provider, target.url);
        const file = `${target.slug}${extension}`;
        await writeFile(join(OUT_DIR, file), bytes);
        saved = {
          file,
          provider: provider.name,
          kb: Math.round(bytes.byteLength / 1024),
        };
        break;
      } catch (error) {
        lastError = error;
      }
    }

    if (saved) {
      results.push({ ...target, ...saved });
      console.log(`ok    ${saved.file}  (${saved.provider}, ${saved.kb} KB)`);
    } else {
      results.push({ ...target, file: null });
      console.log(
        `FAIL  ${target.slug}  (${lastError?.message ?? "unknown error"})`,
      );
    }
  }

  console.log("\nImage paths to use in src/lib/data/portfolio.ts:");
  for (const result of results) {
    console.log(
      `  ${result.slug.padEnd(26)} ${result.file ? `/previews/${result.file}` : '""'}`,
    );
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
