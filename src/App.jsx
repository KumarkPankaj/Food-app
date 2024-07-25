
import React, {useState} from 'react';
import Navbar from './Components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Cart from './Pages/Cart/Cart1';
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder';
import Home from './Pages/Home/Home1';
import Footer from './Components/Footer/Footer';
import Login from './Components/LoginPopup/Login';

const App = () => {

  const [showLogin,setShowLogin] = useState(false)
  return (
   <>
    {showLogin?<Login setShowLogin={setShowLogin}/>:<></>}
    <div className='app'>
         <Navbar setShowLogin={setShowLogin}/>
         <Routes>
             <Route path="/" element={<Home/>} />
             <Route path="/Cart" element={<Cart/>} />
             <Route path="/Order" element={<PlaceOrder/>} />
         </Routes>
    </div>
   <Footer/>

    </>
  );
}

export default App;

