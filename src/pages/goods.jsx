import Listpage from "../components/listpage";
import { PaginationNav1Presentation } from "@/components/pagination";
import Barpagination from "@/components/paginationbar";
import { FaAngleUp } from "react-icons/fa"
import { TbPhoneCall } from "react-icons/tb"
export function Goods() {

  return (
    <div className="w-full flex flex-col items-center justify-center relative bg-white">
      <div className="absolute bottom-5 right-[-100px] flex flex-col gap-5 ">
        <button>
          <FaAngleUp size="60px" color="#5e5d5a" className="p-3 rounded-full bg-[#bcbab5]" />
        </button>
        <button>
          <TbPhoneCall size="60px" color="#5e5d5a" className="p-3 rounded-full bg-[#bcbab5]" />
        </button>
      </div>
      <Barpagination />
      <Listpage />
      <PaginationNav1Presentation />
    </div>
  )
}
export default Goods;


