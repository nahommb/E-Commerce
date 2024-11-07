import './App.css';
import { Navbar } from './components/navbar/navbar';
import { Men } from './pages/men/men';
import { Shop } from './pages/shop/shop';
import { Women } from './pages/women/women';
import { Kids } from './pages/kids/kids';
import { Products } from './pages/products/products';
import { LoginSignup } from './pages/login_signup/login_signup';
import { Cart } from './pages/cart/cart';
import { Retro } from './pages/retro/retro';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import store from './context/redux/store';


function App() {
  return (
    <Provider store={store}>
      
      <BrowserRouter>
        <Navbar /> Navbar will display on all pages
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path="/kids" element={<Kids />} />
          <Route path="/products/:index" element={<Products />} />
          <Route path="/login_signup" element={<LoginSignup />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/retro" element={<Retro />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
