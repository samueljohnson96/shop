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
      <>
        <div className="w-full grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 place-content-center place-items-center pt-24">
          {CardData.filter(search => (search.name.toLowerCase().includes(name)|| name == "") && (select == 0 || select == search.category_id)).map((item, key)=> (
              <Card
                index={key}
                is_sold_out={item.is_sold_out}
                image={item.image}
                name={item.name}
                price={item.price}
                ex_price={item.ex_price}
                id={item.id}
                CategoriesId={item.category_id}
              />
            ))}
        </div>
      </>
  )
}
export default Listpage;


