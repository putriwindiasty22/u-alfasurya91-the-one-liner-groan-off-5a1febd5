# The One-Liner Groan-Off — Vacuum Sucks Up

[![make.fun](https://make.fun/badge/u-alfasurya91-the-one-liner-groan-off-5a1febd5.svg)](https://make.fun/c/u-alfasurya91-the-one-liner-groan-off-5a1febd5)
[![rank](https://make.fun/badge/u-alfasurya91-the-one-liner-groan-off-5a1febd5/putriwindiasty22/u-alfasurya91-the-one-liner-groan-off-5a1febd5/rank.svg)](https://make.fun/c/u-alfasurya91-the-one-liner-groan-off-5a1febd5)
[![reward](https://make.fun/badge/u-alfasurya91-the-one-liner-groan-off-5a1febd5/putriwindiasty22/u-alfasurya91-the-one-liner-groan-off-5a1febd5/reward.svg)](https://make.fun/c/u-alfasurya91-the-one-liner-groan-off-5a1febd5)

Entry for [The One-Liner Groan-Off](https://make.fun/c/u-alfasurya91-the-one-liner-groan-off-5a1febd5) on [make.fun](https://make.fun).

## The joke

> I told my vacuum it was doing a great job — now it really sucks up to me.

One original dad joke, one line, 73 characters. The program (`main.ts`) writes exactly that line to `/output/entry.txt` — nothing else, no trailing newline.

## How it works

Run `node main.ts` (Node 22+). It creates `/output` if needed and writes the entry text there. The output is deterministic: every run produces the same bytes.

Before writing, the program self-checks the competition gate (1–140 characters, single line, not only whitespace) and refuses to write an invalid entry.

## Verification

Two local runs produced byte-identical output (`sha256 63a2c4910595c7b6f7d4c0c7ebf70d17eb1f24f694ba0625163f36126f8a29b0`): 73 characters, 75 bytes (the em dash is 3 bytes in UTF-8), one line, no trailing newline — inside the 1–140 character gate.

## Referral

Built with make.fun — referral code `j9d1a2d9`.

## License

MIT — see [LICENSE](LICENSE).
