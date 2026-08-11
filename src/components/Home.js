import Header from "../components/Header";
import Hero from "../components/Hero";
import Description from "../components/Description";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

function Home() {
    return (
        <>
            <Header />
            <Hero />
            <Description />
            <Projects />
            <Experience />
            <ContactForm />
            <Footer />
        </>
    );
}

export default Home;