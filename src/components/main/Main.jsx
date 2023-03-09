import Header from "./header/Header";
import About from "./aboutUs/About";
import Services from "./services/Services";
import Portfolio from "./portfolio/Portfolio";
import Contact from "./contact/Contact";
import Testimonial from "./testimonials/Testimonial";

function Main() {
  return (
    <>
      <main>
        <Header />
        <About />
        <Services />
        <Portfolio />
        <Contact />
        <Testimonial />
      </main>
    </>
  );
}

export default Main;
