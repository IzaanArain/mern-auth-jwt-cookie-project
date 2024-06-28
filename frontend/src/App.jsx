import Header from "./components/header/Header"
import HeaderOffcanvas from "./components/header/HeaderOffcanvas"
import { Outlet } from "react-router-dom"
import { Container } from "react-bootstrap"
const App = () => {
  return (
    <>
    <Header/>
    {/* <HeaderOffcanvas/> */}
   <Outlet/>
    </>
  )
}

export default App