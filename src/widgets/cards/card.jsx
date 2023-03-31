import React from "react";
import { Link } from "react-router-dom";
import { MdEuroSymbol } from "react-icons/md";
import { TbCurrencyDollar } from "react-icons/tb";

export const Card = ({ id, image, name, price, ex_price, view, useful ,review}) => {
  return (
    <div className="mb-20 relative">
      <div className="w-full  border-[1px] border-t-0 border-[#cbcbcb] px-4 py-3">
      {/* <div className="w-[250px] h-full px-4 py-3"> */}
        <p className="absolute top-[-30px] flex justify-start text-[24px] font-medium underline">{review}</p>
        <div>
          <Link to={`/detail/${id}`}>
            <img src={image} alt="" />
          </Link>
        </div>
        <div className="p-1 h-28 flex flex-col justify-between">
          <p className="text-base text-left">{name}</p>
          <div className="flex justify-between items-end">
            <div className="flex justify-center items-center">
              <p className="text-lg font-normal">{price}</p>
              <TbCurrencyDollar size="20px" />
            </div>
            <div className="flex flex-col items-end">
              <p className="text-base">{useful}</p>
              <div className="flex justify-center items-center">
                <p className=" text-xl font-bold">{ex_price}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {view ? (<button className="absolute border-[1px] right-[0] border-[#cbcbcb] p-2">{view}</button>):(<></>)}
      
    </div>
  )
}