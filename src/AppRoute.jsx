import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import About from "./pages/About";

const router = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/project",
    element: <Home />,
  },
  {
    path: "/achievement",
    element: <Home />,
  },
  {
    path: "/contact",
    element: <Home />,
  },
];

function AppRoute() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {router.map((route, index) => (
            <Route key={index} path={route?.path} element={route?.element} />
          ))}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default AppRoute;
