// Share Card Generator
(function() {
  const shareCanvas = document.createElement('canvas');
  shareCanvas.id = 'shareCanvas';
  shareCanvas.style.display = 'none';
  document.body.appendChild(shareCanvas);
  const sCtx = shareCanvas.getContext('2d');

  // Add share button next to sound toggle
  const shareBtn = document.createElement('div');
  shareBtn.className = 'corner';
  shareBtn.id = 'shareCorner';
  shareBtn.textContent = '\u2B07';
  shareBtn.title = 'Download quote card';
  shareBtn.style.cssText = 'top:2.4rem;left:5.5rem;pointer-events:auto;cursor:pointer;z-index:3';

  const soundToggle = document.getElementById('soundToggle');
  if (soundToggle && soundToggle.parentNode) {
    soundToggle.parentNode.insertBefore(shareBtn, soundToggle.nextSibling);
  }

  async function generateShareCard() {
    const W = 1080, H = 1350;
    shareCanvas.width = W; shareCanvas.height = H;

    const g = sCtx.createRadialGradient(W/2, H/2, 0, W/2, H/2, W*0.7);
    g.addColorStop(0, '#0f0f1a'); g.addColorStop(0.5, '#0a0a12'); g.addColorStop(1, '#050508');
    sCtx.fillStyle = g; sCtx.fillRect(0, 0, W, H);

    for (let i = 0; i < 300; i++) {
      sCtx.beginPath();
      sCtx.arc(Math.random()*W, Math.random()*H, Math.random()*2.5+0.3, 0, Math.PI*2);
      sCtx.fillStyle = 'rgba(255,255,255,' + (Math.random()*0.6+0.1) + ')';
      sCtx.fill();
    }

    sCtx.font = '600 280px "Noto Serif SC", serif';
    sCtx.textAlign = 'center'; sCtx.textBaseline = 'middle';
    sCtx.fillStyle = 'rgba(255,255,255,0.03)';
    sCtx.fillText('\u7a7a', W/2, H*0.35);

    const q = (document.getElementById('quote') || {}).textContent || '\u7a7a';
    const src = (document.getElementById('source') || {}).textContent || '';
    const qSize = q.length > 30 ? 36 : q.length > 20 ? 42 : 48;

    sCtx.font = '200 ' + qSize + 'px "Noto Serif SC", serif';
    sCtx.fillStyle = 'rgba(255,255,255,0.75)';

    const maxW = W*0.7; let lines = [], line = '';
    for (const ch of q) {
      const t = line + ch;
      if (sCtx.measureText(t).width > maxW && line) { lines.push(line); line = ch; }
      else { line = t; }
    }
    if (line) lines.push(line);

    let y = H/2 - lines.length*qSize*1.6/2 - 40;
    for (const l of lines) { sCtx.fillText(l, W/2, y); y += qSize*1.6; }

    sCtx.font = '200 22px "Inter", sans-serif';
    sCtx.fillStyle = 'rgba(255,255,255,0.2)';
    sCtx.fillText('\u2014 ' + src, W/2, y + 50);

    sCtx.font = '200 14px "Inter", sans-serif';
    sCtx.fillStyle = 'rgba(255,255,255,0.06)';
    sCtx.fillText('KONG \u00B7 \u7A7A', W/2, H-60);
    sCtx.strokeStyle = 'rgba(255,255,255,0.03)'; sCtx.lineWidth = 1;
    sCtx.strokeRect(40, 40, W-80, H-80);
  }

  shareBtn.addEventListener('click', async function() {
    await generateShareCard();
    var l = document.createElement('a');
    l.download = 'kong-' + Date.now() + '.png';
    l.href = shareCanvas.toDataURL('image/png');
    l.click();
  });
})();
