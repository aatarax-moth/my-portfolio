import "./Header.css";

function Header() {

    const name = "Kinesha Kay";

    return (
        <div className="Header">
            <div className="pack">
                <div className="logo"></div>
                <div className="name">{name}</div>
            </div>

            <div className="navbar">
                <div className="nav-button">Works</div>
                <div className="nav-button">About Me</div>
                <div className="pop nav-button">Get In Touch</div>
            </div>
        </div>
    )
}

export default Header;