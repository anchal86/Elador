import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Home from "./components/Home";
import Header from "./components/header/Header";
import Footer from "./components/Footer";

import {AboutUs, ContactUs, Return, Privacy,TermsConditions,Shipping,TrackYourOrder,
  Faq,ReturnRequest,NewArrivals,Signin,Signup,ForgotPassword
} from './pages/'


import CartCheckout from "./components/CartCheckout";
import ProductPage from './components/ProductPage'
import Loader from "./components/loader/Loader";
import Admin from "./pages/admin/Admin";
import {AdminOnlyLink} from "./components/adminOnlyRoute/AdminOnlyRoute";

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
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

          <Route path="/admin/*" element={<AdminOnlyLink><Admin /></AdminOnlyLink>} />


        </Routes>
        <Footer/>
        
          
        
      </Router>
      <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
      />
    </div>
  );
}

export default App;
