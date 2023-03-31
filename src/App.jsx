import { Routes, Route } from "react-router-dom";
import Detail from "./pages/detail";
import Listpage from "./components/listpage";
import Topbar from "./widgets/Topbar";
import { Home } from "./pages/home";
function App() {
  return (
    <>
      <div className="top-0 w-full fixed z-50">
        <Topbar />
      </div>
      <div className="flex w-full justify-center pt-32">
        <div className="w-[80%]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detail/:id" element={<Detail />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
