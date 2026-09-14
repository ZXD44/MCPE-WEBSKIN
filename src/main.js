/**
 * Main Application Controller
 * Handles Navigation, Global Drag & Drop, Ctrl+V Clipboard Paste, and Minecraft Web Audio SFX
 */
import './style.css';
import { HidePartEditor } from './modules/hidepart.js';
import { StandaloneAddonGenerator } from './modules/standalone.js';
import { WardrobeMultiEditor } from './modules/wardrobe.js';
import { initMinecraftFireParticles } from './modules/mcfire.js';
import { sfx } from './modules/sfx.js';
import { showToast } from './modules/utils.js';

document.addEventListener('DOMContentLoaded', () => {
  // 0. App Launch & Refresh Loading Screen Management
  const appLoader = document.getElementById('app-loader');
  const dismissLoader = () => {
    if (!appLoader || appLoader.classList.contains('loader-hidden')) return;
    appLoader.classList.add('loader-hidden');
    setTimeout(() => {
      appLoader.style.display = 'none';
    }, 450);
  };

  // Ensure a smooth transition with 400ms minimum display
  const minTimer = new Promise(res => setTimeout(res, 400));
  const pageReady = new Promise(res => {
    if (document.readyState === 'complete') res();
    else window.addEventListener('load', res, { once: true });
  });

  Promise.all([minTimer, pageReady]).then(() => {
    dismissLoader();
  });

  // Immediately display loader on refresh / page unload (F5, Ctrl+R, reload)
  window.addEventListener('beforeunload', () => {
    if (appLoader) {
      appLoader.style.display = 'flex';
      appLoader.classList.remove('loader-hidden');
    }
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'F5' || (e.ctrlKey && e.key.toLowerCase() === 'r')) {
      if (appLoader) {
        appLoader.style.display = 'flex';
        appLoader.classList.remove('loader-hidden');
      }
    }
  });

  // 1. Initialize Minecraft Fire Particles on zirconx.xyz credit button & developer badge
  initMinecraftFireParticles();

  // 2. Initialize modules
  const hidePartModule = new HidePartEditor();
  const standaloneModule = new StandaloneAddonGenerator();
  const wardrobeModule = new WardrobeMultiEditor();

  let currentTab = 'home';

  // 3. Navigation Tabs Switcher (Desktop & Mobile)
  const tabButtons = document.querySelectorAll('.nav-tab-btn, .mobile-nav-item, .stage-nav-item, .desktop-nav-btn');
  const sections = document.querySelectorAll('.page-section');

  function switchTab(targetTabId) {
    currentTab = targetTabId;
    sfx.playClick();

    tabButtons.forEach(btn => {
      const isTarget = btn.dataset.tab === targetTabId || btn.dataset.goto === targetTabId;
      btn.classList.toggle('active', isTarget);
    });

    sections.forEach(sec => {
      sec.classList.toggle('active', sec.id === `section-${targetTabId}`);
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Trigger 3D viewer resize when tab becomes visible
    setTimeout(() => {
      if (targetTabId === 'hidepart' && hidePartModule.viewer) {
        const c = document.getElementById('hidepart-3d-container');
        if (c && c.clientWidth) hidePartModule.viewer.width = c.clientWidth;
      } else if (targetTabId === 'standalone' && standaloneModule.viewer) {
        const c = document.getElementById('standalone-3d-container');
        if (c && c.clientWidth) standaloneModule.viewer.width = c.clientWidth;
      }
    }, 100);
  }

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const tabId = btn.dataset.tab;
      switchTab(tabId);
    });
  });

  // Feature Card Links on Home
  document.querySelectorAll('[data-goto]').forEach(el => {
    el.addEventListener('click', (e) => {
      // Prevent parent trigger if child also has data-goto
      e.stopPropagation();
      const target = el.dataset.goto;
      if (target) switchTab(target);
    });
  });

  // 3.1 Dragon Year NEWEST Circular Buttons & Slider Track Controller
  const circlePrevBtn = document.getElementById('circle-nav-prev');
  const circleNextBtn = document.getElementById('circle-nav-next');
  const slideCards = document.querySelectorAll('.newest-slide-card');
  const indicatorDots = document.querySelectorAll('.indicator-dot');
  let currentSlide = 0;
  const totalSlides = slideCards.length;

  function setActiveSlide(index) {
    if (totalSlides === 0) return;
    currentSlide = (index + totalSlides) % totalSlides;

    slideCards.forEach((card, idx) => {
      const isActive = idx === currentSlide;
      card.classList.toggle('active', isActive);
      if (isActive) {
        card.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    });

    indicatorDots.forEach((dot, idx) => {
      dot.classList.toggle('active', idx === currentSlide);
    });
  }

  if (circlePrevBtn) {
    circlePrevBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      sfx.playClick();
      setActiveSlide(currentSlide - 1);
    });
  }

  if (circleNextBtn) {
    circleNextBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      sfx.playClick();
      setActiveSlide(currentSlide + 1);
    });
  }

  indicatorDots.forEach(dot => {
    dot.addEventListener('click', () => {
      const idx = parseInt(dot.dataset.idx, 10);
      sfx.playClick();
      setActiveSlide(idx);
    });
  });


  // 4. Sound Effects (SFX) Toggle
  const sfxToggleBtn = document.getElementById('sfx-toggle-btn');
  const iconOn = document.getElementById('sfx-icon-on');
  const iconOff = document.getElementById('sfx-icon-off');

  function updateSfxUi(muted) {
    if (sfxToggleBtn) {
      sfxToggleBtn.classList.toggle('muted', muted);
    }
    if (iconOn && iconOff) {
      iconOn.style.display = muted ? 'none' : 'block';
      iconOff.style.display = muted ? 'block' : 'none';
    }
  }

  if (sfxToggleBtn) {
    updateSfxUi(sfx.isMuted());
    sfxToggleBtn.addEventListener('click', () => {
      const muted = sfx.toggleMute();
      updateSfxUi(muted);
      if (!muted) {
        sfx.playClick();
        showToast('เปิดเสียงเอฟเฟกต์', 'info');
      } else {
        showToast('ปิดเสียงเอฟเฟกต์', 'info');
      }
    });
  }

  // 5. Global & Dropzone Drag & Drop
  function setupDropzone(dropzoneEl, onFileDrop) {
    if (!dropzoneEl) return;

    ['dragenter', 'dragover'].forEach(eventName => {
      dropzoneEl.addEventListener(eventName, (e) => {
        e.preventDefault();
        e.stopPropagation();
        dropzoneEl.classList.add('drag-over');
      });
    });

    ['dragleave', 'drop'].forEach(eventName => {
      dropzoneEl.addEventListener(eventName, (e) => {
        e.preventDefault();
        e.stopPropagation();
        dropzoneEl.classList.remove('drag-over');
      });
    });

    dropzoneEl.addEventListener('drop', (e) => {
      const files = e.dataTransfer?.files;
      if (files && files.length > 0) {
        onFileDrop(files[0]);
      }
    });
  }

  setupDropzone(document.getElementById('hidepart-dropzone'), (file) => {
    hidePartModule.loadFile(file);
  });

  setupDropzone(document.getElementById('standalone-dropzone'), (file) => {
    standaloneModule.loadFile(file);
  });

  // Global Drag & Drop on window
  window.addEventListener('dragover', (e) => e.preventDefault());
  window.addEventListener('drop', (e) => {
    e.preventDefault();
    const files = e.dataTransfer?.files;
    if (!files || files.length === 0) return;
    const file = files[0];

    // Deliver to active module or switch to hidepart/standalone if on home
    if (currentTab === 'hidepart') {
      hidePartModule.loadFile(file);
    } else if (currentTab === 'standalone') {
      standaloneModule.loadFile(file);
    } else {
      switchTab('hidepart');
      setTimeout(() => hidePartModule.loadFile(file), 150);
    }
  });

  // 6. Global Clipboard Paste (Ctrl + V)
  window.addEventListener('paste', async (e) => {
    const items = e.clipboardData?.items;
    if (!items) return;

    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      if (item.type.indexOf('image') !== -1) {
        const blob = item.getAsFile();
        if (blob) {
          showToast('วางสกินจาก Clipboard (Ctrl+V)', 'info');
          if (currentTab === 'standalone') {
            standaloneModule.loadFile(blob);
          } else {
            if (currentTab !== 'hidepart') switchTab('hidepart');
            setTimeout(() => hidePartModule.loadFile(blob), 150);
          }
          break;
        }
      }
    }
  });

  // Global button click SFX
  document.addEventListener('click', (e) => {
    const target = e.target.closest('button, .tool-card, .mc-tool-card, .preset-chip, .slot-select-btn, .model-select-btn, .part-toggle-item');
    if (target && !target.id?.includes('sfx-toggle')) {
      sfx.playClick();
    }
  });
});
