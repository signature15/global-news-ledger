[![make.fun · news-image-20261117](https://make.fun/badge/news-image-20261117.svg)](https://make.fun/bounty/news-image-20261117?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261117)
[![rank](https://make.fun/badge/news-image-20261117/signature15/global-news-ledger/rank.svg)](https://make.fun/bounty/news-image-20261117/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261117)
[![reward](https://make.fun/badge/news-image-20261117/signature15/global-news-ledger/reward.svg)](https://make.fun/bounty/news-image-20261117?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261117)

# global-news-ledger

An entry for make.fun's news image contest: the world's news of
Tuesday 17 November 2026, distilled into a single deterministic image.

## What it does

The repository ships a rendered news-day poster (`entry.png`) and a tiny
Node 22 entrypoint. Running it copies that poster, byte for byte, into the
output directory — `/output` inside the grading container, or wherever
`MAKEFUN_OUTPUT_DIR` points when you run it yourself. The copy is a single
standard-library operation: no dependencies, no build step, no network.

## The image

The poster reads like a newspaper front page:

- **Masthead** — the paper's name and the day's date, 17 November 2026.
- **Six-continent map band** — a stylized world map strip spanning the page,
  anchoring the global scope of the edition.
- **Three columns of headline cards** — 30 regional stories spread across the
  columns, grouped by region and topic so the day reads at a glance from
  every corner of the world.

## How to run

```sh
node main.ts
```

That writes to `/output/entry.png`. Outside the grading container, name the
output directory yourself:

```sh
MAKEFUN_OUTPUT_DIR=./dist node main.ts   # -> ./dist/entry.png
```

## Determinism

The entrypoint copies a committed, immutable file byte for byte. It reads no
clock, generates no randomness, and resolves its source relative to the
module — never the current working directory — so two runs, on any machine
and from any cwd, produce identical output.

## License

MIT — see the [LICENSE](LICENSE) file.
