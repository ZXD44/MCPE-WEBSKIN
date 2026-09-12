/**
 * Main Application Controller
 */
import './style.css';
import { HidePartEditor } from './modules/hidepart.js';
import { StandaloneAddonGenerator } from './modules/standalone.js';
import { WardrobeMultiEditor } from './modules/multieditor.js';

document.addEventListener('DOMContentLoaded', () => {
  // Initialize modules
  const hidePartModule = new HidePartEditor();
  const standaloneModule = new StandaloneAddonGenerator();
  const wardrobeModule = new WardrobeMultiEditor();

  // Navigation Tabs Switcher (Desktop & Mobile)
  const tabButtons = document.querySelectorAll('.nav-tab-btn, .mobile-nav-item');
  const sections = document.querySelectorAll('.page-section');

  function switchTab(targetTabId) {
    tabButtons.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.tab === targetTabId);
    });

    sections.forEach(sec => {
      sec.classList.toggle('active', sec.id === `section-${targetTabId}`);
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const tabId = btn.dataset.tab;
      switchTab(tabId);
    });
  });

  // Feature Card Links on Home
  document.querySelectorAll('[data-goto]').forEach(el => {
    el.addEventListener('click', () => {
      const target = el.dataset.goto;
      switchTab(target);
    });
  });
});
