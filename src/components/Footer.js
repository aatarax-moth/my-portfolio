import "./Footer.css";
import Container from "./Container";
import "../index.css";

function Footer() {
    return(
        <Container>
            <div className="footer flex-row space-between vert-end">
                <p>K2Y LAB © {new Date().getFullYear()}</p>
                <a className="logo" href="">
                    <img src="/logo.svg" alt="Logo"/>
                </a>
            </div>
        </Container>
    )
}

export default Footer;