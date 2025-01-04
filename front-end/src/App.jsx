import {Routes , Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './screens/Home/Home';
import Cart from './screens/Cart/Cart';
import PlaceOrder from './screens/PlaceOrder/PlaceOrder';
import MyOrders from './screens/MyOrders/MyOrders';
import Footer from './components/Footer/Footer';
import LoginPopup from './components/LoginPopup/LoginPopup';
import { useState } from 'react';
import Verify from './screens/Verify/Verify';

import {ToastContainer} from 'react-toastify';
import 'react-toastify/ReactToastify.css';

const App=()=>{
  const [showLogin,setShowLogin]=useState(false);
  return(
    <>
    {
      showLogin ? <LoginPopup setShowLogin={setShowLogin}/> : <></>
    }

  <div className='app'>
    <ToastContainer/>
    <Navbar setShowLogin={setShowLogin}/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Cart' element={<Cart/>}/>
      <Route path='/Order' element={<PlaceOrder/>}/>
      <Route path='/verify' element={<Verify/>}/>
      <Route path='/myorders' element={<MyOrders/>} />
    </Routes>
  </div>
  <Footer/>
  </>
  )
}
export default App;