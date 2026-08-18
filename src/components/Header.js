import "./Header.css";
import Container from "./Container.js";
import { Link } from "react-router-dom";

function Header() {

    return (
        <div className="header" data-reveal style={{ "--reveal-delay": "0ms" }}>
            <Container>
                <nav className="navbar" aria-label="Primary">
                    <a className="nav-link nav-link--ghost nav-link--resume" href="/resume.pdf" download>
                        Resume
                    </a>

                    <Link className="logo" to="/" aria-label="Go to home">
                        <img src="/logo.svg" alt="Logo" loading="lazy" decoding="async" />
                    </Link>

                    <a className="nav-link nav-link--primary nav-link--contact" href="#contact">
                        Contact
                    </a>
                </nav>
            </Container>
        </div>
    )
}

export default Header;
