import './App.css'
import {Route, BrowserRouter, Routes} from "react-router-dom";
import {Home} from "./pages/Home/Home.jsx";
import {FlowerPage} from "./pages/FlowerPage/index.jsx";
import Cart from "./pages/Order/index.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/product/:id" element={<FlowerPage/>}/>
              <Route path="/cart" element={<Cart/>}/>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
