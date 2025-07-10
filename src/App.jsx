import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import Homepage from "./routes/Homepage.jsx";
import Portfolio from "./routes/Portfolio.jsx";
import About from "./routes/About.jsx";
import Contact from "./routes/Contact.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={(
              <div className="min-h-screen flex items-center justify-center pt-20">
                <div className="text-center">
                  <h1 className="text-4xl font-light text-gray-800 mb-4">404</h1>
                  <p className="text-gray-600">Sorry, this page does not exist</p>
                </div>
              </div>
            )} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
