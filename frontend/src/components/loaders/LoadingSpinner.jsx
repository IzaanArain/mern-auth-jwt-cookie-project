import "./loader.css";
import { Spinner } from "react-bootstrap";
const LoadingSpinner = () => {
  return (
    <>
      <Spinner 
      animation="border" 
      role="status"
      variant="info"
      style={{
        width:"100px",
        height:"100px",
        margin:"auto",
        display:"block"
      }}
      >
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </>
  );
};

export default LoadingSpinner;
