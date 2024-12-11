import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import About from "./pages/About";
import Project from "./pages/ProjectPage";
import ContactPage from "./pages/ContactPage";
import AchivementPage from "./pages/AchivementPage";

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
    element: <Project />,
  },
  {
    path: "/achievement",
    element: <AchivementPage />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },
];

function AppRoute() {
  return (
    <>
      <HashRouter>
        <Navbar />
        <Routes>
          {router.map((route, index) => (
            <Route key={index} path={route?.path} element={route?.element} />
          ))}
        </Routes>
        <Footer />
      </HashRouter>
    </>
  );
}

export default AppRoute;
