import Header from "./components/header/Header"
import HeaderOffcanvas from "./components/header/HeaderOffcanvas"
import { Outlet } from "react-router-dom"
import { Container } from "react-bootstrap"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <>
    <Header/>
    <ToastContainer/>
    {/* <HeaderOffcanvas/> */}
   <Outlet/>
    </>
  )
}

export default App