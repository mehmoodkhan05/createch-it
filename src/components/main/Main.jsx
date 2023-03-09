import Header from "./header/Header";
import About from "./aboutUs/About";
import Services from "./services/Services";
import Portfolio from "./portfolio/Portfolio";
import Contact from "./contact/Contact";

function Main() {
  return (
    <>
      <main>
        <Header />
        <About />
        <Services />
        <Portfolio />
        <Contact />
      </main>
    </>
  );
}

export default Main;
