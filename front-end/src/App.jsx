import './App.css'
import { Navbar } from './components/navbar/navbar'
import { Men } from './pages/men/men';
import { Shop } from './pages/shop/shop'
import { Routes, Route, Link } from 'react-router-dom';
import { Women } from './pages/women/women';
import { Kids } from './pages/kids/kids';
import { Products } from './pages/products/products';
import { Login } from './pages/login/login';

function App() {
  

  return (
      <div>
      <Routes>
        <Route path="/" element={<Shop/>} />
        <Route path="/men" element={<Men/>} />
        <Route path="/women" element={<Women/>} />
        <Route path="/kids" element={<Kids/>} />
        <Route path="/products/:index" element={<Products/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>   
      </div>
  )
}

export default App
