import ".././src/App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./pages/NavbarSection";
import Hero from "./pages/HeroSection";
import Aboutus from "./pages/AboutUS";
import Services from "./pages/ServiceSection";
// import "../src/assets/css/services.css";
import Ourteam from "./pages/TeamSection";
import Client from "./pages/ClientSection";
import Ourproject from "./pages/ProjectSection";
import Footer from "./pages/FooterSection";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Aboutus />
      <Services />
      <Ourteam />
      <Ourproject />
      <Client />
      <Footer />
    </div>
  );
}

export default App;