import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar/Navbar";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import { MoreAbout, MorePortfolio } from "./pages/index"

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />} exact >
            <Route index element={<Main />} />
            <Route path="/aboutUs" element={<MoreAbout />} />
            <Route path="/portfolio" element={<MorePortfolio />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}


export const Layout = () => {
  return (
    <>
      <Navbar
        home="Home"
        about="About"
        portfolio="Portfolio"
        testimonials="Testimonials"
        contact="Contact"
      />
      <Outlet />
      <Footer />

    </>
  )
}

