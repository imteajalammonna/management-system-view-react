import { Outlet, useLocation } from "react-router-dom";
import "./App.css"
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  const location = useLocation();
  const login = location.pathname === '/login'

  return (
    <>
      {login ? null : <Header></Header>}
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
}

export default App
