import Container from "./Container";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <Container>
      <div
        className="mt-24 mb-8 flex flex-row items-end justify-between gap-4 text-orange"
        data-reveal
        style={{ "--reveal-delay": "80ms" }}
      >
        <p className="m-0 font-semibold">K2Y LAB © {new Date().getFullYear()}</p>
        <Link className="group" to="/" aria-label="Go to home">
          <img className="block transition duration-220 ease-portfolio group-hover:rotate-[-2deg] group-hover:scale-[1.03] group-hover:drop-shadow-[0_8px_18px_rgba(254,119,67,0.25)]" src="/logo.svg" alt="Logo" loading="lazy" decoding="async" />
        </Link>
      </div>
    </Container>
  );
}

export default Footer;

