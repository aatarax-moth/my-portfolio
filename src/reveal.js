const REVEAL_SELECTOR = "[data-reveal]";

function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    typeof window.matchMedia === "function" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

function ensureJsClass() {
  if (typeof document === "undefined") return;
  document.documentElement.classList.add("js");
}

function makeVisible(element) {
  element.classList.add("reveal--visible");
}

function initRevealOnScroll() {
  if (typeof window === "undefined" || typeof document === "undefined") return;
  if (window.__revealOnScrollInitialized) return;
  window.__revealOnScrollInitialized = true;

  ensureJsClass();

  const elements = Array.from(document.querySelectorAll(REVEAL_SELECTOR));

  if (prefersReducedMotion() || typeof IntersectionObserver !== "function") {
    elements.forEach(makeVisible);
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        makeVisible(entry.target);
        observer.unobserve(entry.target);
      });
    },
    { root: null, threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
  );

  elements.forEach((element) => observer.observe(element));

  const mutationObserver = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        if (!(node instanceof HTMLElement)) return;

        if (node.matches?.(REVEAL_SELECTOR)) {
          observer.observe(node);
        }

        node
          .querySelectorAll?.(REVEAL_SELECTOR)
          .forEach((el) => observer.observe(el));
      });
    });
  });

  mutationObserver.observe(document.body, { childList: true, subtree: true });
}

initRevealOnScroll();

