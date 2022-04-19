import "./App.css";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Resume from "./components/Resume";

function App() {
  return (
    <>
      <NavBar />
      <div className="App">
        <Resume />
      </div>
      <Footer />
    </>
  );
}

export default App;
