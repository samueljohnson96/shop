import React from "react";
import { useState } from "react";
import { Card } from "@/widgets/cards/card";

import CardData from "@/data/card-data";
import { PaginationNav1Presentation } from "./pagination";
const Listpage = () => {

  const [openNav, setOpenNav] = useState(false);
  const [select, setSelect] = useState(0)
  const [name, setName] = useState("");

  return (
    <div className="relative w-full flex flex-col justify-center items-center">
      {/* <div className=" absolute top-0 right-0 h-full bg-[#ffffff] w-[2px] z-20"></div> */}
      <div className="flex w-full justify-between border-b-[1px] border-black">
        <div className="flex gap-2 items-center">
          <p className="text-2xl">Спочатку:</p>
          <div className=" shadow-sm shadow-black rounded-lg">
            <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 blockl py-2 w-[150px] text-center dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 shadow-sm">
              <option selected>Нове1</option>
              <option value="US">Нове2</option>
              <option value="CA">Нове3</option>
              <option value="FR">Нове4</option>
              <option value="DE">Нове5</option>
            </select>
          </div>
        </div>
        <PaginationNav1Presentation />
        <div className="flex items-center gap-2">
          <p className=" text-2xl font-bold">Тільки<span className="text-[#f63737]"> в наявності:</span></p>
          <input id="default-checkbox" type="checkbox" value="" class="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
        </div>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 laptop:grid-cols-6 place-content-center place-items-center pt-24 z-10">
        {CardData.filter(search => (search.name.toLowerCase().includes(name) || name == "") && (select == 0 || select == search.category_id)).map((item, key) => (
          <Card
            index={key}
            review={item.review}
            view={item.view}
            useful={item.useful}
            image={item.image}
            name={item.name}
            price={item.price}
            ex_price={item.ex_price}
            id={item.id}
            CategoriesId={item.category_id}
          />
        ))}
      </div>
      <PaginationNav1Presentation />
    </div>
  )
}
export default Listpage;


