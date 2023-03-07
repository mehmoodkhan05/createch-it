import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import About from "./components/aboutUs/About";
import Services from "./components/services/Services";

function App() {
  return (
    <>
      <Navbar
        home="Home"
        about="About"
        portfolio="Portfolio"
        testimonials="Testimonials"
        contact="Contact"
      />
      <Header />
      <About />
      <Services />
      <Footer />
    </>
  );
}

export default App;
