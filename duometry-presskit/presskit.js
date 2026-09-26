(() => {
  'use strict';

  const normalize = (element) => element.textContent.trim().replace(/\s+/g, ' ');

  function plainText(element) {
    if (element.hasAttribute('data-copy-ui')) return '';

    switch (element.tagName) {
      case 'A': {
        const label = normalize(element);
        const href = element.getAttribute('href');
        if (!href || href.startsWith('mailto:') || label === href) return label;
        return `${label}: ${href}`;
      }
      case 'UL':
        return Array.from(element.children, (item) => `• ${plainText(item)}`).join('\n');
      case 'DL':
        return Array.from(element.children, (item) =>
          `${normalize(item.querySelector('dt'))}: ${normalize(item.querySelector('dd'))}`
        ).join('\n\n');
      case 'DIV':
      case 'ADDRESS':
        return Array.from(element.children, plainText).filter(Boolean).join('\n\n');
      case 'LI':
        return element.querySelector('a') ? plainText(element.querySelector('a')) : normalize(element);
      default:
        return normalize(element);
    }
  }

  function legacyCopy(text) {
    const activeElement = document.activeElement;
    const selection = window.getSelection();
    const ranges = selection
      ? Array.from({ length: selection.rangeCount }, (_, index) => selection.getRangeAt(index).cloneRange())
      : [];
    const buffer = document.createElement('textarea');
    buffer.value = text;
    buffer.readOnly = true;
    buffer.className = 'clipboard-buffer';
    buffer.setAttribute('aria-label', 'Text to copy');
    document.body.append(buffer);

    try {
      buffer.focus({ preventScroll: true });
      buffer.select();
      buffer.setSelectionRange(0, buffer.value.length);
      if (!document.execCommand('copy')) throw new Error('Copy unavailable');
    } finally {
      buffer.remove();
      activeElement?.focus({ preventScroll: true });
      if (selection) {
        selection.removeAllRanges();
        ranges.forEach((range) => selection.addRange(range));
      }
    }
  }

  async function copyText(text) {
    if (navigator.clipboard?.writeText) {
      try {
        await navigator.clipboard.writeText(text);
        return;
      } catch {
        // Older browsers and restricted clipboard contexts may need a selection.
      }
    }
    legacyCopy(text);
  }

  document.querySelectorAll('[data-copy-target]').forEach((button) => {
    const target = document.getElementById(button.dataset.copyTarget);
    if (!target) return;

    const controls = button.closest('[data-copy-ui]');
    const status = controls.querySelector('[role="status"]');
    let pending = false;
    let resetTimer;
    controls.hidden = false;

    button.addEventListener('click', async () => {
      if (pending) return;
      pending = true;
      clearTimeout(resetTimer);
      status.textContent = '';

      try {
        await copyText(plainText(target));
        status.textContent = 'Copied!';
        resetTimer = setTimeout(() => { status.textContent = ''; }, 3000);
      } catch {
        status.textContent = 'Copy failed. Select the text and copy it manually.';
      } finally {
        pending = false;
      }
    });
  });
})();
