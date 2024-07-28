import './App.css'
import {Route, BrowserRouter, Routes} from "react-router-dom";
import {Home} from "./pages/Home/Home.jsx";
import {FlowerPage} from "./pages/FlowerPage/index.jsx";
import Orders from "./pages/Order/index.jsx";
import Cart from "./pages/Cart/index.jsx";
import Login from "./pages/Login/index.jsx";
import Registration from "./pages/Registration/index.jsx";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {getUser, setToken} from "./redux/slices/userSlice.js";

function App() {
    const dispatch = useDispatch();

    useEffect( ()  => {
        const token = localStorage.getItem('token');
        if (token) {
            dispatch(setToken(token));

            dispatch(getUser({token}))
        }
    }, [dispatch]);


    return (
    <>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/product/:id" element={<FlowerPage/>}/>
              <Route path="/orders" element={<Orders/>}/>
              <Route path="/cart" element={<Cart/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/reg" element={<Registration/>}/>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
