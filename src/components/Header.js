import Container from "./Container.js";
import { Link } from "react-router-dom";

function Header() {

    return (
        <div className="mt-8" data-reveal style={{ "--reveal-delay": "0ms" }}>
            <Container>
                <nav className="grid grid-cols-[1fr_auto_1fr] items-center gap-4 text-orange font-medium max-[767px]:grid-cols-2 max-[767px]:grid-rows-[auto_auto] max-[767px]:gap-3" aria-label="Primary">
                    <a className="relative inline-flex w-fit items-center justify-center justify-self-start rounded-full border border-orange/35 bg-orange/4 px-4 py-2.5 text-orange no-underline after:absolute after:bottom-[0.45rem] after:left-4 after:right-4 after:h-0.5 after:origin-left after:scale-x-0 after:bg-current after:opacity-90 after:transition-transform after:duration-220 after:ease-portfolio hover:-translate-y-px hover:border-orange/55 hover:bg-orange/8 hover:after:scale-x-100 max-[767px]:row-start-2" href="/resume.pdf" download>
                        Resume
                    </a>

                    <Link className="justify-self-center max-[767px]:col-span-2 max-[767px]:row-start-1" to="/" aria-label="Go to home">
                        <img className="block origin-center transition duration-220 ease-portfolio hover:rotate-[-2deg] hover:scale-[1.03] hover:drop-shadow-[0_8px_18px_rgba(254,119,67,0.25)]" src="/logo.svg" alt="Logo" loading="lazy" decoding="async" />
                    </Link>

                    <a className="relative inline-flex w-fit items-center justify-center justify-self-end rounded-full bg-orange px-4 py-2.5 text-bg no-underline after:absolute after:bottom-[0.45rem] after:left-4 after:right-4 after:h-0.5 after:origin-left after:scale-x-0 after:bg-current after:opacity-70 after:transition-transform after:duration-220 after:ease-portfolio hover:-translate-y-px hover:bg-orange-hover hover:shadow-[0_10px_26px_rgba(254,119,67,0.18)] hover:after:scale-x-100 max-[767px]:row-start-2" href="#contact">
                        Contact
                    </a>
                </nav>
            </Container>
        </div>
    )
}

export default Header;
