import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Main from "./components/main/Main";

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
      <Main />
      <Footer />
    </>
  );
}

export default App;
