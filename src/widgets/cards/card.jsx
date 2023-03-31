import React from "react";
import { Link } from "react-router-dom";
import { MdEuroSymbol } from "react-icons/md";
import { TbCurrencyDollar } from "react-icons/tb";

export const Card = ({ id, is_sold_out, image, name, price, ex_price, like_count }) => {
  return (
    <div className="mb-10">
      <div className="relative w-full h-full border-[1px] border-[#cbcbcb] border-t-0 border-l-0 p-4 ">
        <div>
          <Link to={`/detail/${id}`}>
            <img src={image} alt="" />
          </Link>
        </div>
        <div className="p-1 h-24 flex flex-col justify-between">
          <p className="text-base text-left">{name}</p>
          <div className="flex justify-between items-end">
            <div className="flex justify-center items-center">
              <p className="text-lg font-normal">{price}</p>
              <TbCurrencyDollar size="20px" />
            </div>
            <div>
              <p className="text-base">gggggg</p>
              <div className="flex justify-center items-center">
                <p className=" text-xl font-bold">{ex_price}</p>
                <MdEuroSymbol />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}