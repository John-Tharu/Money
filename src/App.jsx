import "./App.css";
import { Content } from "./components/Content";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

function App() {
  return (
    <>
      <div className="h-screen grid grid-rows-[auto_1fr_auto]">
        <Header />
        <Content />
        <Footer />
      </div>
    </>
  );
}

export default App;
