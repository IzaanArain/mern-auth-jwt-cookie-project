import Header from "../components/header/Header";
import HeaderOffcanvas from "../components/header/HeaderOffcanvas";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Header />
      {/* <HeaderOffcanvas/> */}
      <Outlet />
    </>
  );
};

export default Layout;
