#!/usr/bin/env node
const fs = require("fs");
const path = require("path");

const DATA = path.join(__dirname, "..", "data.json");
const QUOTES = [
  ["大音希声，大象无形。", "老子 · 道德经"],
  ["道生一，一生二，二生三，三生万物。", "老子 · 道德经"],
  ["致虚极，守静笃。", "老子 · 道德经"],
  ["天地之间，其犹橐龠乎？虚而不屈，动而愈出。", "老子 · 道德经"],
  ["空故纳万境，静故了群动。", "苏轼 · 送参寥师"],
  ["色不异空，空不异色；色即是空，空即是色。", "般若波罗蜜多心经"],
  ["菩提本无树，明镜亦非台。本来无一物，何处惹尘埃。", "慧能 · 六祖坛经"],
  ["一切有为法，如梦幻泡影，如露亦如电，应作如是观。", "金刚经"],
  ["宇宙便是吾心，吾心即是宇宙。", "陆九渊"],
  ["江畔何人初见月？江月何年初照人？", "张若虚 · 春江花月夜"],
  ["行到水穷处，坐看云起时。", "王维 · 终南别业"],
  ["千江有水千江月，万里无云万里天。", "嘉泰普灯录"],
  ["Empty your mind, be formless, shapeless — like water.", "Bruce Lee"],
  ["We are made of star stuff.", "Carl Sagan"],
  ["天下万物生于有，有生于无。", "老子 · 道德经"],
  ["上善若水。水善利万物而不争。", "老子 · 道德经"],
  ["天地有大美而不言。", "庄子 · 知北游"],
  ["至人之用心若镜，不将不迎，应而不藏。", "庄子 · 应帝王"],
  ["独与天地精神往来。", "庄子 · 天下"],
  ["人法地，地法天，天法道，道法自然。", "老子 · 道德经"],
];

const STARS = [
  "    *    ",
  "   ***   ",
  "  *****  ",
  " ******* ",
  "*********",
  " ******* ",
  "  *****  ",
  "   ***   ",
  "    *    ",
];

function randomQuote() {
  const i = Math.floor(Math.random() * QUOTES.length);
  return QUOTES[i];
}

function showQuote() {
  const [q, s] = randomQuote();
  console.log(`\n  ${STARS[Math.floor(Math.random()*STARS.length)]}`);
  console.log(`\n  "${q}"`);
  console.log(`  — ${s}\n`);
}

function showStatus() {
  try {
    const raw = fs.readFileSync(DATA, "utf-8");
    const d = JSON.parse(raw);
    const updated = d.updated ? new Date(d.updated).toLocaleString("zh-CN") : "unknown";
    console.log(`\n  ┌─ 空 · Kong ─────────────────────┐`);
    console.log(`  │ Index:   #${d.index}`);
    console.log(`  │ Updated: ${updated}`);
    console.log(`  │ Quote:   ${(d.quote || "").slice(0, 30)}…`);
    console.log(`  │ Source:  ${d.source || ""}`);
    console.log(`  └──────────────────────────────────┘\n`);
  } catch {
    console.log("  (no data yet — run from project root)");
  }
}

function showTimer() {
  const now = new Date();
  const next = new Date(now);
  next.setMinutes(0, 0, 0);
  next.setHours(next.getHours() + 1);
  const ms = next - now;
  const m = Math.floor(ms / 60000);
  const s = Math.floor((ms % 60000) / 1000);
  console.log(`\n  next update in ${m}m ${s}s\n`);
}

function showHelp() {
  console.log(`
  kong — 空 · 宇宙冥想

  usage: kong <command>

  commands:
    quote     show a random quote
    status    show current data.json state
    timer     countdown to next hourly update
    sky       print an ASCII universe
    help      show this message
  `);
}

function showSky() {
  const lines = [];
  for (let i = 0; i < 20; i++) {
    let line = "";
    for (let j = 0; j < 40; j++) {
      line += Math.random() < 0.02 ? "*" : " ";
    }
    lines.push(line);
  }
  console.log("\n" + lines.join("\n") + "\n");
}

const cmd = process.argv[2] || "help";
switch (cmd) {
  case "quote": showQuote(); break;
  case "status": showStatus(); break;
  case "timer": showTimer(); break;
  case "sky": showSky(); break;
  default: showHelp(); break;
}
