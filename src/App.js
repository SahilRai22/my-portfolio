import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import BackToTop from "./components/backToTop/BackToTop";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <BackToTop />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
