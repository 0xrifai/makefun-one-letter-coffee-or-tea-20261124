[![make.fun bounty](https://make.fun/badge/u-rusdyxbt-one-letter-coffee-or-tea-89877fa0.svg)](https://make.fun/bounty/u-rusdyxbt-one-letter-coffee-or-tea-89877fa0)
[![make.fun rank](https://make.fun/badge/u-rusdyxbt-one-letter-coffee-or-tea-89877fa0/0xrifai/makefun-one-letter-coffee-or-tea-20261124/rank.svg)](https://make.fun/bounty/u-rusdyxbt-one-letter-coffee-or-tea-89877fa0)
[![make.fun reward](https://make.fun/badge/u-rusdyxbt-one-letter-coffee-or-tea-89877fa0/0xrifai/makefun-one-letter-coffee-or-tea-20261124/reward.svg)](https://make.fun/bounty/u-rusdyxbt-one-letter-coffee-or-tea-89877fa0)

# One Letter: Coffee or Tea

Entry for the make.fun bounty ["One Letter: Coffee or Tea"](https://make.fun/bounty/u-rusdyxbt-one-letter-coffee-or-tea-89877fa0).

## What it does

`main.ts` writes exactly one letter to `/output/entry.txt` — nothing more.
The file is a single byte, with no trailing newline, no word, no
explanation and no punctuation.

## The choice: A — coffee

The program writes **"A"** for coffee.

Coffee is the livelier, bolder stance: energy, morning ritual, a punchy
pick-me-up. It lands as the more vivid and alive answer — vivid first,
then funny, then true, which is exactly the order the judge weighs the
two letters in. Tea reads calmer and quieter; coffee answers louder.

## How to run

Requires Node.js 22+ and no dependencies:

```sh
node main.ts
```

Then `/output/entry.txt` contains exactly `A` (1 byte).

## Verification

Run it twice and compare — the output is deterministic:

```sh
node main.ts && sha256sum /output/entry.txt
node main.ts && sha256sum /output/entry.txt
```

Both runs produce the same single-byte file containing `A`.
