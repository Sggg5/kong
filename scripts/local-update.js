#!/usr/bin/env node
/**
 * Local data update simulator — same logic as the GitHub Action.
 * Usage: node scripts/local-update.js
 */

const fs = require("fs");
const path = require("path");

const DATA = path.join(__dirname, "..", "data.json");

const QUOTES = [
  ["大音希声，大象无形。", "老子 · 道德经 第四十一章"],
  ["道生一，一生二，二生三，三生万物。", "老子 · 道德经 第四十二章"],
  ["致虚极，守静笃。", "老子 · 道德经 第十六章"],
  ["天地之间，其犹橐龠乎？虚而不屈，动而愈出。", "老子 · 道德经 第五章"],
  ["空故纳万境，静故了群动。", "苏轼 · 送参寥师"],
  ["色不异空，空不异色；色即是空，空即是色。", "般若波罗蜜多心经"],
  ["菩提本无树，明镜亦非台。本来无一物，何处惹尘埃。", "慧能 · 六祖坛经"],
  ["一切有为法，如梦幻泡影，如露亦如电，应作如是观。", "金刚经"],
  ["宇宙便是吾心，吾心即是宇宙。", "陆九渊"],
  ["江畔何人初见月？江月何年初照人？", "张若虚 · 春江花月夜"],
  ["行到水穷处，坐看云起时。", "王维 · 终南别业"],
  ["千江有水千江月，万里无云万里天。", "嘉泰普灯录"],
  ["Empty your mind, be formless, shapeless — like water.", "Bruce Lee"],
  ["The quieter you become, the more you can hear.", "Rumi"],
  ["We are made of star stuff.", "Carl Sagan"],
  ["Look up at the stars and not down at your feet.", "Stephen Hawking"],
  ["天下万物生于有，有生于无。", "老子 · 道德经 第四十章"],
  ["上善若水。水善利万物而不争。", "老子 · 道德经 第八章"],
  ["知者不言，言者不知。", "老子 · 道德经 第五十六章"],
  ["人法地，地法天，天法道，道法自然。", "老子 · 道德经 第二十五章"],
  ["天地有大美而不言。", "庄子 · 知北游"],
  ["至人之用心若镜，不将不迎，应而不藏。", "庄子 · 应帝王"],
  ["独与天地精神往来。", "庄子 · 天下"],
  ["大方无隅，大器晚成，大音希声，大象无形。", "老子 · 道德经 第四十一章"],
];

function main() {
  let current = { index: 0 };
  try { current = JSON.parse(fs.readFileSync(DATA, "utf-8")); } catch {}

  const newIndex = (current.index || 0) + 1;
  const now = new Date().toISOString();
  const pairIdx = ((newIndex - 1) % Math.floor(QUOTES.length / 2)) * 2;
  const quote = QUOTES[pairIdx][0];
  const source = QUOTES[pairIdx + 1] ? QUOTES[pairIdx][1] : QUOTES[pairIdx][1];

  const data = { index: newIndex, quote, source, updated: now };
  fs.writeFileSync(DATA, JSON.stringify(data, null, 2) + "\n", "utf-8");
  console.log(`Updated to #${newIndex}: "${quote.slice(0, 30)}..."`);
}

main();
