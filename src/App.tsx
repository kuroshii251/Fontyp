import "./App.css";
import About from "./components/home/about/main";
import Hero from "./components/home/hero/main";
import QnA from "./components/home/qna/main";
import Features from "./components/home/feature/main";
import Navbar from "./components/navbar/main";
import Footer from "./components/footer/main";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Features />
      <QnA />
      <Footer/>
    </>
  );
}

export default App;
