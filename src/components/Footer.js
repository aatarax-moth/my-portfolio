import "./Footer.css";
import Container from "./Container";
import "../index.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <Container>
      <div
        className="footer flex-row space-between vert-end"
      >
        <p>K2Y LAB © {new Date().getFullYear()}</p>
        <Link className="logo" to="/" aria-label="Go to home">
          <img src="/logo.svg" alt="Logo" />
        </Link>
      </div>
    </Container>
  );
}

export default Footer;

