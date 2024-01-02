import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContectUs";
import Return from "./pages/Return";
import Privacy from "./pages/Privacy";
import TermsConditions from "./pages/TermsConditions";
import Shipping from "./pages/Shipping";
import TrackYourOrder from "./pages/TrackYourOrder";
import Faq from "./pages/Faq";
import ReturnRequest from "./pages/ReturnRequest";
import NewArrivals from "./pages/NewArrivals";
import CartCheckout from "./components/CartCheckout";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import Signin from "./pages/Signin";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav/>
        {/* <ProductPage/> */}
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/return" element={<Return />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="/shipping" element={<Shipping />} />
          <Route path="/track-your-order" element={<TrackYourOrder />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/return-request" element={<ReturnRequest />} />
          <Route path="/new-arrivals" element={<NewArrivals />} />
          <Route path="/cart" element={<CartCheckout />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
