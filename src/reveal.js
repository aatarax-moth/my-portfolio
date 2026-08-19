const REVEAL_SELECTOR = "[data-reveal]";
const PENDING_CLASS = "reveal--pending";
const VISIBLE_CLASS = "reveal--visible";

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
  if (element.classList.contains(VISIBLE_CLASS)) return;
  element.classList.remove(PENDING_CLASS);
  element.classList.add(VISIBLE_CLASS);
}

function initRevealOnScroll() {
  if (typeof window === "undefined" || typeof document === "undefined") return;
  if (window.__revealOnScrollInitialized) return;
  window.__revealOnScrollInitialized = true;

  ensureJsClass();

  const supportsObserver =
    !prefersReducedMotion() && typeof IntersectionObserver === "function";

  const observer = supportsObserver
    ? new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            makeVisible(entry.target);
            observer.unobserve(entry.target);
          });
        },
        { root: null, threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
      )
    : null;

  const observeElement = (element) => {
    if (!(element instanceof HTMLElement)) return;
    if (!element.matches?.(REVEAL_SELECTOR)) return;

    if (!element.classList.contains(PENDING_CLASS) && !element.classList.contains(VISIBLE_CLASS)) {
      element.classList.add(PENDING_CLASS);
    }

    if (!supportsObserver) {
      makeVisible(element);
      return;
    }
    observer.observe(element);
  };

  const elements = Array.from(document.querySelectorAll(REVEAL_SELECTOR));
  elements.forEach((element) => observeElement(element));

  const mutationObserver = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        if (!(node instanceof HTMLElement)) return;

        observeElement(node);
        node.querySelectorAll?.(REVEAL_SELECTOR).forEach((el) => observeElement(el));
      });
    });
  });

  mutationObserver.observe(document.body, { childList: true, subtree: true });
}

initRevealOnScroll();

