import "./App.css";
import AboutUs from "./Component/AboutUs/AboutUs";
import Banner from "./Component/Banner/Banner";
import Cart from "./Component/Cart/Cart";
import Footer from "./Component/Footer/Footer";
import Franchies from "./Component/Franchies/Franchies";
import LaundryProcess from "./Component/LaundryProcess/LaundryProcess";
import Login from "./Component/Login/Login";
import MainPage from "./Component/MainPage/MainPage";
import MensComponent from "./Component/MensComponent/MensComponent";
import NavBar from "./Component/NavBar/NavBar";
import Pricing from "./Component/Pricing/Pricing";
import Question from "./Component/Question/Question";
import ServicePage from "./Component/ServicePage/ServicePage";
import SignUp from "./Component/SignUp/SignUp";
import WorkInfo from "./Component/WorkInfo/WorkInfo";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Banner />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/franchies" element={<Franchies />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
