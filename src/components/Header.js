import "./Header.css";
import Container from "./Container.js";

function Header() {

    return (
        <div className="header">
            <Container>
                <div className="navbar">
                    <a className="nav-button" href="">Time</a>
                    <a className="logo" href="">
                        <img src="/logo.svg" alt="Logo"/>
                    </a>
                    <a className="nav-button" href="">Contact</a>
                </div>
            </Container>
        </div>
    )
}

export default Header;