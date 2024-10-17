import './App.css'
import { Navbar } from './components/navbar/navbar'
import { Men } from './pages/men/men';
import { Shop } from './pages/shop/shop'
import { Routes, Route, Link } from 'react-router-dom';
import { Women } from './pages/women/women';
import { Kids } from './pages/kids/kids';
import { Products } from './pages/products/products';
import { LoginSignup } from './pages/login_signup/login_signup';
import { Cart } from './pages/cart/cart';

function App() {
  

  return (
      <div>
      <Routes>
        <Route path="/" element={<Shop/>} />
        <Route path="/men" element={<Men/>} />
        <Route path="/women" element={<Women/>} />
        <Route path="/kids" element={<Kids/>} />
        <Route path="/products/:index" element={<Products/>} />
        <Route path="/login_signup" element={<LoginSignup/>} />
        <Route path="/cart" element={<Cart/>} />

      </Routes>   
      </div>
  )
}

export default App

