/**
 * Minecraft Gentle Fire Embers & Motes System
 * Runs continuously in the background with soft, aesthetic pixel embers & sparks
 * rising gently from elements at all times.
 */

const PALETTE = [
  { color: '#ffffff', alpha: 0.95 }, // Core hot glint
  { color: '#fef08a', alpha: 0.90 }, // Soft yellow
  { color: '#facc15', alpha: 0.85 }, // Golden amber
  { color: '#fb923c', alpha: 0.80 }, // Warm orange
  { color: '#f87171', alpha: 0.70 }, // Soft coral red
  { color: '#e11d48', alpha: 0.55 }, // Crimson ember
  { color: '#9f1239', alpha: 0.35 }  // Fading rose ash
];

function setupMoteEmitter(btnId, canvasId, moteCount = 18) {
  const btn = document.getElementById(btnId);
  const canvas = document.getElementById(canvasId);
  if (!btn || !canvas) return;

  const ctx = canvas.getContext('2d', { alpha: true });
  let particles = [];
  let isHovered = false;

  const EXTRA_W = 60;
  const EXTRA_H = 75;

  function resize() {
    const w = (btn.offsetWidth || 100) + EXTRA_W;
    const h = (btn.offsetHeight || 32) + EXTRA_H;

    if (canvas.width !== w || canvas.height !== h) {
      canvas.width = w;
      canvas.height = h;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
    }
  }

  resize();
  window.addEventListener('resize', resize);
  document.addEventListener('click', () => {
    // Re-check size if tabs switch
    setTimeout(resize, 60);
  });

  class GentleMote {
    constructor() {
      this.init(true);
    }

    init(randomInitialLife = false) {
      const btnW = btn.offsetWidth || 100;
      const btnH = btn.offsetHeight || 32;

      this.x = (EXTRA_W / 2) + Math.random() * (btnW - 8) + 4;
      this.y = EXTRA_H - 8 + (Math.random() * (btnH * 0.65));

      this.vx = (Math.random() - 0.5) * 0.35;
      this.vy = -(Math.random() * 0.65 + 0.45);

      const randSize = Math.random();
      this.size = randSize > 0.6 ? 3 : (randSize > 0.25 ? 2 : 1);

      this.maxLife = Math.floor(Math.random() * 35) + 35;
      this.life = randomInitialLife ? Math.floor(Math.random() * this.maxLife) : 0;

      this.wobblePhase = Math.random() * Math.PI * 2;
      this.wobbleSpeed = 0.08 + Math.random() * 0.07;
      this.wobbleAmp = 0.25 + Math.random() * 0.25;
    }

    update() {
      this.life++;
      this.wobblePhase += this.wobbleSpeed;

      this.x += this.vx + Math.sin(this.wobblePhase) * this.wobbleAmp;
      this.y += this.vy;

      if (this.life >= this.maxLife || this.y < 0) {
        this.init(false);
      }
    }

    draw() {
      const progress = this.life / this.maxLife;
      const colorIndex = Math.min(
        Math.floor(progress * PALETTE.length),
        PALETTE.length - 1
      );
      const entry = PALETTE[colorIndex];

      let alpha = entry.alpha;
      if (progress < 0.15) {
        alpha *= (progress / 0.15);
      } else if (progress > 0.65) {
        alpha *= (1 - (progress - 0.65) / 0.35);
      }

      ctx.save();
      ctx.globalAlpha = Math.max(0, Math.min(1, alpha));
      ctx.fillStyle = entry.color;
      ctx.imageSmoothingEnabled = false;

      const px = Math.round(this.x);
      const py = Math.round(this.y);
      const sz = this.size;

      ctx.fillRect(px, py, sz, sz);

      if (sz >= 2 && progress < 0.5) {
        ctx.globalAlpha = alpha * 0.25;
        ctx.fillStyle = '#fbbf24';
        ctx.fillRect(px - 1, py - 1, sz + 2, sz + 2);
      }

      ctx.restore();
    }
  }

  for (let i = 0; i < moteCount; i++) {
    particles.push(new GentleMote());
  }

  function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();
    }

    requestAnimationFrame(loop);
  }

  loop();

  btn.addEventListener('mouseenter', () => {
    isHovered = true;
    if (particles.length < moteCount + 6) {
      particles.push(new GentleMote());
      particles.push(new GentleMote());
    }
  });

  btn.addEventListener('mouseleave', () => {
    isHovered = false;
    if (particles.length > moteCount) {
      particles.splice(moteCount);
    }
  });
}

export function initMinecraftFireParticles() {
  // Top Header Credit Pill
  setupMoteEmitter('mc-fire-button', 'mc-fire-canvas', 18);

  // Guide Section Creator Badge
  setupMoteEmitter('credit-fire-target', 'credit-fire-canvas', 16);
}
