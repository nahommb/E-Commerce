// App.js
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
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import store from './context/redux/store';
import ProtectedRoute from './components/protected_route/protected_route';
import { AnimatePresence } from 'framer-motion';
import { PageTranstion } from './components/transition/page_transition';

// Custom component to handle routing and animations
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <PageTranstion>
            <Shop />
          </PageTranstion>
        } />
        <Route path="/men" element={
          <PageTranstion>
            <Men />
          </PageTranstion>
        } />
        <Route path="/women" element={
          <PageTranstion>
            <Women />
          </PageTranstion>
        } />
        <Route path="/kids" element={
          <PageTranstion>
            <Kids />
          </PageTranstion>
        } />
        <Route path="/products/:id" element={
          <PageTranstion>
            <Products />
          </PageTranstion>
        } />
        <Route path="/login_signup" element={
          <PageTranstion>
            <LoginSignup />
          </PageTranstion>
        } />
        <Route path="/cart" element={<ProtectedRoute component={Cart} />} />
        <Route path="/retro" element={
          <PageTranstion>
            <Retro />
          </PageTranstion>
        } />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <AnimatedRoutes />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
