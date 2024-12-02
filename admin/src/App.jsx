import { MainBody } from "./components/main_body/main_body"
import { AddProducts } from "./pages/add_products/add_products"
import '../index.css'
import { NavBar } from "./components/navbar/navbar"
import { Provider } from "react-redux"
import store from './context/redux/store';
import { Login } from "./pages/login/login"
import {BrowserRouter, Router,Routes,Route} from 'react-router-dom'
import { ProtectedRoute } from "./components/protected_route/protected_route"


function App() {
  

  return (
    <Provider store={store}>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/dashboard" element={<ProtectedRoute children={<MainBody/>}/>}/>
      </Routes>
         {/* <NavBar/>
      <Login/>
      <MainBody></MainBody> */}
     </BrowserRouter>
   
    </Provider>
  )
}

export default App
