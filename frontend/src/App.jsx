import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "./layouts/Layout"

const App = () => {
  return (
    <>
    <Layout/>
    <Outlet />
    <ToastContainer />
    </>
  )
}

export default App