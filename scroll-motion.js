(() => {
  const root = document.documentElement;
  const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
  const header = document.querySelector(".header");
  const hero = document.querySelector(".hero");
  const sections = document.querySelectorAll("[data-scroll-reveal]");
  let observer;
  let frame = 0;

  function renderScroll() {
    frame = 0;
    const height = window.innerHeight;
    const y = Math.max(0, window.scrollY);
    const range = root.scrollHeight - height;
    const progress = range > 0 ? Math.min(y / range, 1) : 0;
    header.style.setProperty("--page-progress", progress);
    if (hero && y <= hero.offsetHeight + height) {
      const shift = Math.min(y * 0.27, window.innerWidth < 651 ? 84 : 158);
      hero.style.setProperty("--hero-shift", shift + "px");
    }
  }

  function queueScroll() {
    if (!frame) frame = window.requestAnimationFrame(renderScroll);
  }

  function updateMotionPreference() {
    if (motionPreference.matches) {
      observer?.disconnect();
      observer = undefined;
      sections.forEach(section => section.classList.remove("scroll-pending"));
      root.classList.remove("scroll-motion");
      window.removeEventListener("scroll", queueScroll);
      window.removeEventListener("resize", queueScroll);
      if (frame) window.cancelAnimationFrame(frame);
      frame = 0;
      return;
    }

    root.classList.add("scroll-motion");
    window.addEventListener("scroll", queueScroll, { passive: true });
    window.addEventListener("resize", queueScroll, { passive: true });
    queueScroll();

    if (!("IntersectionObserver" in window)) return;
    observer = new IntersectionObserver((entries, activeObserver) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.remove("scroll-pending");
        activeObserver.unobserve(entry.target);
      }
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.03 });

    for (const section of sections) {
      if (section.getBoundingClientRect().top <= window.innerHeight) continue;
      section.classList.add("scroll-pending");
      observer.observe(section);
    }
  }

  window.addEventListener("pageshow", queueIfEnabled);
  function queueIfEnabled() {
    if (!motionPreference.matches) queueScroll();
  }

  motionPreference.addEventListener("change", updateMotionPreference);
  updateMotionPreference();
})();
