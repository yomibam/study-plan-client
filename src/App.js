// App.jsx
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Faq from "./pages/Faq";
import About from "./pages/About";
import Error404 from "./pages/Error404";
import { HomeSharedLayout } from "./pages/HomeSharedLayout";
import { Result } from "./pages/Result";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeSharedLayout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="faq" element={<Faq />} />
          <Route path="about" element={<About />} />
          <Route path="result" element={<Result />} />
        </Route>
        <Route path="*" element={<Error404 />} />
      </Routes>
      <ToastContainer theme="dark" />
    </BrowserRouter>
  );
}

export default App;
