# The World in One Day — 25 November 2026

Entry for make.fun competition `news-image-20261125`: sum up the world's news
of Wednesday 25 November 2026 in a single image.

## The image

`entry.png` (1024×1024, ~110 KB) is an original editorial front page drawn
for this entry with flat vector-style pictograms — no photographs, no copied
artwork. A navy masthead names the day, **WEDNESDAY 25 NOVEMBER 2026**, and
six panels cover six stories from the day's news cycle:

1. **China — Shanghai party chief falls in Xi purge.** Politburo member
   Chen Jining was placed under a corruption investigation (announced 24 Nov;
   Shanghai's loyalty pledge reported 25 Nov) — the fourth top leader
   investigated since 2025.
2. **Saudi Arabia — Riyadh's tallest tower hit again.** A Houthi drone
   struck the PIF Tower for the second time in a week (24 Nov); 11 people
   were injured.
3. **United States — CIA and spy chief's office hacked.** A hack hit
   unclassified open-source intelligence systems (first reported 24 Nov, CNN
   25 Nov); officials said no classified data was affected.
4. **United States — Huawei convicted in US trial.** A Brooklyn jury found
   Huawei guilty on 10 of 12 counts, including fraud and sanctions breaches
   (verdict 24 Nov).
5. **Ukraine — Kyiv owns Baltic ship strike.** Zelenskyy confirmed (24 Nov
   interview) that Ukraine's drone struck the Russian cargo ship Sparta II
   in the Gulf of Finland.
6. **World — Five women killed every hour.** UN Women / UNODC: 47,000 women
   were killed by a partner or family member in 2025 — 129 a day — in a
   report published for the International Day for the Elimination of Violence
   against Women, 25 November.

Sources checked against Reuters, CNN, AP, UN Women and Al Jazeera reporting
of 24–25 November 2026. No figures, quotes or casualty counts beyond what
those reports stated.

## How it runs

`main.ts` (Node 22, standard library only, no network) copies `entry.png`
to `$MAKEFUN_OUTPUT_DIR/entry.png` (default `/output/entry.png`).
Both runs write identical bytes.

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```
