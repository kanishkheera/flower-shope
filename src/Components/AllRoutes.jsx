import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import AboutUs from "../Pages/AboutUs";
import ContactUs from "../Pages/ContactUs";
import TrackOrder from "../Pages/TrackOrder";

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/track-order" element={<TrackOrder />} />
    </Routes>
  );
}
