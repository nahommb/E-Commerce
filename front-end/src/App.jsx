import './App.css'
import { Navbar } from './components/navbar/navbar'
import { Men } from './pages/men/men';
import { Shop } from './pages/shop/shop'
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  

  return (
      <div>
      <Routes>
        <Route path="/" element={<Shop/>} />
        <Route path="/men" element={<Men/>} />
      </Routes>   
      </div>
  )
}

export default App
