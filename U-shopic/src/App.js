import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
// import Slider from './components/slider/Slider';
import AllRoutes from "./Pages/AllRoutes";
import Home from "./Pages/Home";
import SignUp from "./Pages/SignUp";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes/>
      <Footer/>
    </div>
  );
}

export default App;
