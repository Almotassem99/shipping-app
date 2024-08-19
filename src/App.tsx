import NavBar from "./components/NavBar";
import Homepage from "./components/Homepage";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import imagePath from "../PHOTO-2024-08-11-21-50-39.jpg";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Router } from "react-router-dom";


function App() {
  const navItems = ["Home","Our services","Contact Us"];

  return (
    <>
       <NavBar 
        brandName="Shipping Company"
        imageSrcPath={imagePath} 
        navItems={navItems}
      />
      <Homepage />
      <ContactUs/>
      <Footer/>
    </>
  );
}

export default App;
