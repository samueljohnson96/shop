import React from "react";
import { useState } from "react";
import { Card } from "@/widgets/cards/card";
import { Categories } from "@/data/categories";
import { TbBellRinging } from "react-icons/tb";
import { AiOutlineCheck } from "react-icons/ai";
import { IconButton, MobileNav } from "@material-tailwind/react";
import CardData from "@/data/card-data";
const Listpage = () => {

  const [openNav, setOpenNav] = useState(false);
  const [select, setSelect] = useState(0)
  const [name, setName]=useState("");

  return(
      <div className="relative">
        <div className=" absolute top-0 right-0 h-full bg-[#ffffff] w-[2px] z-20"></div>
        <div className="w-full grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 place-content-center place-items-center pt-24 z-10">
          {CardData.filter(search => (search.name.toLowerCase().includes(name)|| name == "") && (select == 0 || select == search.category_id)).map((item, key)=> (
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
        </div>
  )
}
export default Listpage;


