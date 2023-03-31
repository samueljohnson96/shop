import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";
import { IoIosArrowBack } from "react-icons/io";
import { AiOutlineSearch } from "react-icons/ai";
import { BiMessage } from "react-icons/bi";
import { BsFlagFill } from "react-icons/bs";
import { FiUpload } from "react-icons/fi";
import { FaYenSign } from "react-icons/fa";
import CardData from "@/data/card-data";

export function Detail() {

  const { id } = useParams()
  const item = CardData.find((el) => el.id === id * 1);

  return (
    <>
      <div className="flex w-full bg-white justify-between gap-2 pt-10 px-4 z-30 fixed">
        <div className="flex justify-center items-center">
          <Link to={'/listpage'}>
            <IoIosArrowBack size="1.5rem" opacity="0.3" />
          </Link>
          <p className="text-2xl">{item.name}</p>
        </div>
        <div className="flex justify-center items-center gap-4">
          <AiOutlineSearch size="1.5rem" opacity="0.3" />
          <FiUpload size="1.5rem" opacity="0.3" />
        </div>
      </div>
      <div className="relative w-full px-4 py-20 flex flex-col justify-center items-center">
        <div className="max-w-[400px] flex flex-col">
          <img src={item.image} alt="" />
          <p className="text-2xl mb-5">{item.name}</p>
          <div className="items-center">
            <div className="flex items-center justify-between gap-2 mb-5">
              <div className="flex items-center gap-2">
                <div className="py-[0.2rem] px-2 bg-[#ececec] rounded-full">
                  <div className="flex items-center opacity-30">
                    <AiOutlineHeart />
                    <p>いいね</p>
                  </div>
                </div>
                <p>{item.like_count}</p>
              </div>
              <div className="py-[0.2rem] px-2 bg-[#ececec] rounded-full">
                <div className="flex items-center gap-2 opacity-30">
                  <BiMessage />
                  <p>コメント</p>
                </div>
              </div>
              <BsFlagFill opacity="0.3" />
            </div>
            <p className="text-2xl">{item.description}</p>
          </div>
        </div>
        <div className="flex justify-between items-center w-full bottom-0 py-1 px-3 bg-[#3E2722] fixed">
          <div className="flex place-items-end">
            <FaYenSign size="1.5rem" color="white" className="mb-1.5" />
            <p className="text-3xl text-white">{item.price}</p>
            <p className="text-sm text-white mb-1 mx-2">{item.shipping_fee}</p>
          </div>
          <button className="bg-[#D13038] rounded-sm w-24 h-12 text-[12px] text-white">購入手続きヘ</button>
        </div>
      </div>
    </>
  );
}

export default Detail;
