import "./Header.css";
import Container from "./Container.js";
import { Link } from "react-router-dom";

function Header() {

    return (
        <div className="header" data-reveal style={{ "--reveal-delay": "0ms" }}>
            <Container>
                <div className="navbar">
                    <a className="nav-button" href="/resume.pdf" type="download" download>Resume</a>
                    <Link className="logo" to="/" aria-label="Go to home">
                        <img src="/logo.svg" alt="Logo"/>
                    </Link>
                    <a className="nav-button" href="#contact">Contact</a>
                </div>
            </Container>
        </div>
    )
}

export default Header;
