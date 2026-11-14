/* Progressive enhancements; content and source links also work without JS. */
(() => {
  'use strict';
  const topLink = document.querySelector('.back-to-top');
  const links = [...document.querySelectorAll('.section-nav a, .toc a')];
  const sections = links.map(link => ({link, section: document.querySelector(link.getAttribute('href'))})).filter(item => item.section);
  let queued = false;
  function update() {
    queued = false;
    if (topLink) topLink.hidden = window.scrollY < 600;
    let current = null;
    const threshold = window.matchMedia('(max-width: 700px)').matches ? 150 : 160;
    for (const item of sections) {
      if (item.section.getBoundingClientRect().top <= threshold) current = item;
    }
    for (const item of sections) {
      if (item === current) item.link.setAttribute('aria-current', 'location');
      else item.link.removeAttribute('aria-current');
    }
  }
  addEventListener('scroll', () => {
    if (!queued) { queued = true; requestAnimationFrame(update); }
  }, {passive: true});
  addEventListener('resize', update);
  update();
})();
