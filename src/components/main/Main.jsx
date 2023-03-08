import Header from "./header/Header";
import About from "./aboutUs/About";
import Services from "./services/Services";
import Portfolio from "./portfolio/Portfolio";

function Main() {
  return (
    <>
      <main>
        <Header />
        <About />
        <Services />
        <Portfolio />
      </main>
    </>
  );
}

export default Main;
