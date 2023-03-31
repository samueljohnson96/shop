import { Routes, Route } from "react-router-dom";
import Detail from "./pages/detail";
import Listpage from "./components/listpage";
import Goods from "./pages/goods";
import Topbar from "./widgets/Topbar";
import Footer from "./widgets/footer";
import { Home } from "./pages/home";
function App() {
  return (
    <>
      <div className="top-0 w-full fixed z-50">
        <Topbar />
      </div>
      <div className="flex w-full justify-center pt-32">
        <div className="w-full md:w-[80%] ">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/goods" element={<Goods />} />
            <Route path="/detail/:id" element={<Detail />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
