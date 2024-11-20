import { MainBody } from "./components/main_body/main_body"
import { AddProducts } from "./pages/add_products/add_products"
import '../index.css'
import { NavBar } from "./components/navbar/navbar"
import { Provider } from "react-redux"
import store from './context/redux/store';

function App() {
  

  return (
    <Provider store={store}>
      <NavBar/>
      <MainBody></MainBody>
    </Provider>
  )
}

export default App
