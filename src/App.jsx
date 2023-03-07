import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

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
      <main>
        <Header />
      </main>
      <Footer />
    </>
  );
}

export default App;
