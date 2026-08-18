import "./Description.css";
import "../index.css";
import Container from "./Container";

function Description() {
  return (
    <Container>
      <div
        className="margin-top-6 flex-row description gap-4"
        data-reveal
        style={{ "--reveal-delay": "80ms" }}
      >
        <div className="flex-column">
          <p>
            My work sits between user-facing design and core technical
            execution. I handle everything from UI wireframing and 3D modeling
            to full-stack development, database logic, and code management,
            ensuring every product is both visually engaging and technically
            sound. Here is an overview of what I do:
          </p>
          <div className="point-container">
            <div className="point" data-reveal style={{ "--reveal-delay": "140ms" }}>
              <span className="point-number">1</span>
              <div className="point-content">
                <h3 className="point-heading">Analysis & Wireframing</h3>
                <p className="point-paragraph">
                  The Blueprint Phase: Strategy & Wireframing
                </p>
              </div>
              <div className="point-icons">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-waypoints-icon lucide-waypoints"
                >
                  <path d="m10.586 5.414-5.172 5.172" />
                  <path d="m18.586 13.414-5.172 5.172" />
                  <path d="M6 12h12" />
                  <circle cx="12" cy="20" r="2" />
                  <circle cx="12" cy="4" r="2" />
                  <circle cx="20" cy="12" r="2" />
                  <circle cx="4" cy="12" r="2" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-search-icon lucide-search"
                >
                  <path d="m21 21-4.34-4.34" />
                  <circle cx="11" cy="11" r="8" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-file-chart-column-icon lucide-file-chart-column"
                >
                  <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
                  <path d="M14 2v5a1 1 0 0 0 1 1h5" />
                  <path d="M8 18v-1" />
                  <path d="M12 18v-6" />
                  <path d="M16 18v-3" />
                </svg>
              </div>
            </div>
            <div className="point" data-reveal style={{ "--reveal-delay": "200ms" }}>
              <span className="point-number">2</span>
              <div className="point-content">
                <h3 className="point-heading">End-to-End Asset Development</h3>
                <p className="point-paragraph">
                  Creating Anything: High-Fidelity Digital Assets & Physical
                  Products
                </p>
              </div>
              <div className="point-icons">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-hammer-icon lucide-hammer"
                >
                  <path d="m15 12-9.373 9.373a1 1 0 0 1-3.001-3L12 9" />
                  <path d="m18 15 4-4" />
                  <path d="m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172v-.344a2 2 0 0 0-.586-1.414l-1.657-1.657A6 6 0 0 0 12.516 3H9l1.243 1.243A6 6 0 0 1 12 8.485V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-pencil-icon lucide-pencil"
                >
                  <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
                  <path d="m15 5 4 4" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-vector-square-icon lucide-vector-square"
                >
                  <path d="M19.5 7a24 24 0 0 1 0 10" />
                  <path d="M4.5 7a24 24 0 0 0 0 10" />
                  <path d="M7 19.5a24 24 0 0 0 10 0" />
                  <path d="M7 4.5a24 24 0 0 1 10 0" />
                  <rect x="17" y="17" width="5" height="5" rx="1" />
                  <rect x="17" y="2" width="5" height="5" rx="1" />
                  <rect x="2" y="17" width="5" height="5" rx="1" />
                  <rect x="2" y="2" width="5" height="5" rx="1" />
                </svg>
              </div>
            </div>
            <div className="point" data-reveal style={{ "--reveal-delay": "260ms" }}>
              <span className="point-number">3</span>
              <div className="point-content">
                <h3 className="point-heading">Digital Development</h3>
                <p className="point-paragraph">
                  Building and maintaining software, web systems, mobile apps,
                  and manufacture-ready products.
                </p>
              </div>
              <div className="point-icons">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-code-icon lucide-code"
                >
                  <path d="m16 18 6-6-6-6" />
                  <path d="m8 6-6 6 6 6" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-laptop-minimal-icon lucide-laptop-minimal"
                >
                  <rect width="18" height="12" x="3" y="4" rx="2" ry="2" />
                  <line x1="2" x2="22" y1="20" y2="20" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-binary-icon lucide-binary"
                >
                  <rect x="14" y="14" width="4" height="6" rx="2" />
                  <rect x="6" y="4" width="4" height="6" rx="2" />
                  <path d="M6 20h4" />
                  <path d="M14 10h4" />
                  <path d="M6 14h2v6" />
                  <path d="M14 4h2v6" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="profile" aria-label="Profile image">
          <img
            className="profile-img"
            src="/profile.png"
            alt="Profile portrait"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </Container>
  );
}

export default Description;
