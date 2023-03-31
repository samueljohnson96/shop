import { Link } from "react-router-dom";
import Listpage from "../components/listpage";
import Header from "../components/header"
import { FaAngleUp } from "react-icons/fa"
import { TbPhoneCall } from "react-icons/tb"

export function Home() {

  return(
      <div className="relative w-full flex flex-col items-center justify-center bg-white">
        
        <div className="absolute bottom-5 right-[-100px] flex flex-col gap-5 ">
          <Link to = "/">
            <FaAngleUp size="60px" color="#5e5d5a" className="p-3 rounded-full bg-[#bcbab5]"/>
          </Link>
          <button>
            <TbPhoneCall size="60px" color="#5e5d5a" className="p-3 rounded-full bg-[#bcbab5]"/>
          </button>
        </div>
        <Header/>
        <Listpage/> 
      </div>
  )
}
export default Listpage;


