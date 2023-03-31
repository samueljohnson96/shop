import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { TiPlusOutline } from "react-icons/ti";
import { TiMinusOutline } from "react-icons/ti";


import { IoIosArrowBack } from "react-icons/io";
import { AiOutlineSearch } from "react-icons/ai";
import { BiMessage } from "react-icons/bi";
import { BsFlagFill } from "react-icons/bs";
import { FiUpload } from "react-icons/fi";
import { FaYenSign } from "react-icons/fa";
import CardData from "@/data/card-data";
import Listpage from "./home";
import { TbPhoneCall } from "react-icons/tb"
import { FaAngleUp } from "react-icons/fa"
import { FaAngleLeft } from "react-icons/fa"

export function Detail() {

  const { id } = useParams()
  const item = CardData.find((el) => el.id === id * 1);

  return (
    <div className="relative">
      <div className="absolute top-0 left-[-100px] flex flex-col gap-5 ">
        <Link to = "/goods">
          <FaAngleLeft size="60px" color="#5e5d5a" className="p-3 rounded-full bg-[#bcbab5]" />
        </Link>
      </div>
      <div className="absolute bottom-5 right-[-100px] flex flex-col gap-5 ">
        <button>
          <FaAngleUp size="60px" color="#5e5d5a" className="p-3 rounded-full bg-[#bcbab5]" />
        </button>
        <button>
          <TbPhoneCall size="60px" color="#5e5d5a" className="p-3 rounded-full bg-[#bcbab5]" />
        </button>
      </div>
      <div className="relative">

        <div className="flex flex-col gap-2">
          <div className="flex gap-5">
            <button className="text-[15px] font-normal border-black focus:border-b-2">Основна інформація</button>
            <button className="text-[15px] font-normal border-black focus:border-b-2">Характеристики</button>
            <button className="text-[15px] font-normal border-black focus:border-b-2">Характеристики пакування</button>
          </div>
          <p className="text-[30px] font-bold mb-8">{item.style}</p>
        </div>
        <div className="grid grid-cols-2">
          <img className="w-full h-full" src={item.image} alt="..." />
          <div className="py-8">
            <p>{item.useful}</p>
            <div className="mb-8">
              <p className="text-[36px] font-bold underline">{item.ex_price}₴/шт</p>
              <p className="text-[24px] font-bold">{item.price}$/шт</p>
            </div>
            <div className="mb-8">
              <p className="text-[16px] font-bold">Мінімальне замовлення від: {item.order} шт.</p>
              <p className="text-[16px] font-bold">Мінімальне замовлення від: {item.stock} шт.</p>
              <button className="border-2 border-[#808080] rounded-lg px-2 py-1 shadow-md shadow-[#434343]">Запитати доступ</button>
            </div>
            <div className="mb-8">
              <p className="text-[18px] font-bold mb-2">Оберіть кількость товару:</p>
              <div className="flex items-center gap-3">
                <TiMinusOutline />
                <p className="text-[18px] text-center font-bold border-2 border-black w-14 h-6">{item.order}</p>
                <TiPlusOutline />
              </div>
            </div>
            <div className="flex items-start gap-2 mb-8">
              <p className="text-[24px]">Сума:</p>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2  text-[24px] font-bold ">
                  <p className="border-2 text-center font-bold border-black rounded-md w-32 h-9"> 150 000 </p>₴
                </div>
                <div className="flex items-center gap-2 text-[24px] font-bold ">
                  <p className="border-2 text-center items-center m-0 rounded-md border-black w-24 h-9"> 4 500 </p>$
                </div>
              </div>
            </div>

            <button className="w-52 h-11 bg-[#333030] text-[18px] text-white font-bold rounded-md">Додати до кошика</button>
            <p className="text-[#8a8a8a] text-[16px] font-bold">*Кількость товару ви зможете відредагувати при підтвердженні замовлення!</p>
          </div>
        </div>
        <div className="mb-10">
          <p className="text-[30px] pl-[40px] font-bold mb-5">Основна інформація:</p>
          <p className="text-[16px] font-bold">{item.description}</p>
        </div>
        <div className="mb-10">
          <p className="text-[30px] pl-[40px] font-bold mb-5">Характеристики:</p>
          <div className="flex flex-col gap-5">
            <div className="flex">
              <p className="text-[16px] font-bold">Висота</p>
              <p>..........................................................................................................</p>
              <p className="text-[16px] font-bold">{item.height} CM.</p>
            </div>
            <div className="flex">
              <p className="text-[16px] font-bold">Ширина</p>
              <p>........................................................................................................</p>
              <p className="text-[16px] font-bold">{item.width} CM.</p>
            </div>
            <div className="flex">
              <p className="text-[16px] font-bold">Глибина</p>
              <p>.......................................................................................................</p>
              <p className="text-[16px] font-bold">{item.depth} CM.</p>
            </div>
          </div>
        </div>
        <div className="mb-10">
          <p className="text-[30px] pl-[40px] font-bold mb-5">Характеристики пакування:</p>
          <div className="flex flex-col gap-5">
            <div className="flex">
              <p className="text-[16px] font-bold">Кількість в коробці</p>
              <p>.................................................................................</p>
              <p className="text-[16px] font-bold">{item.Qb} шт.</p>
            </div>
            <div className="flex">
              <p className="text-[16px] font-bold">Кількість в упаковці</p>
              <p>...............................................................................</p>
              <p className="text-[16px] font-bold">{item.Qp} шт.</p>
            </div>
            <div className="flex">
              <p className="text-[16px] font-bold">Розмір коробки</p>
              <p>........................................................................................</p>
              <p className="text-[16px] font-bold">{item.size} CM.</p>
            </div>
          </div>
        </div>
      </div>
      <Listpage />
    </div>
  );
}

export default Detail;
