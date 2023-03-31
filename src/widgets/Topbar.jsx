import { useState, useEffect } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import logo from '../../public/images/logo/logo.png'
import { VscSearch } from 'react-icons/vsc'
import { GiShoppingCart } from 'react-icons/gi'
import { HiOutlineUserCircle } from 'react-icons/hi'
import { VscThreeBars } from 'react-icons/vsc'
export default function Topbar() {
  const [openNav, setOpenNav] = useState(false);
  const [openDown, setOpenDown] = useState(false);
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 1140 && setOpenNav(false)
    );
  }, []);

  const [value, setValue] = useState("");

  const buttonlist = [
    {name:" Автоаксесуари"},
    {name:" Led та освітлення"},
    {name:" Фари"},
    {name:" Декоративне свiтло"},
    {name:" Електроннi компоненти"},
    {name:" Кабельна продукцiя"},
    {name:" Лазерне обладнання"},
    {name:" Мiкрофони та аксесуари"},
    {name:" Свiтлове обладнання"},
    {name:" Трансляцiйне обладнання"},
  ]
  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-2 text-[16px]">
      <button className="py-2 px-4 rounded-md bg-transparent hover:bg-white focus:bg-white hover:text-[#333030] focus:text-[#333030] ">ПРО НАС</button>
      <button className="py-2 px-4 rounded-md bg-transparent hover:bg-white focus:bg-white hover:text-[#333030] focus:text-[#333030] ">ДЛЯ ПАРТНЕРІВ</button>
      <button className="py-2 px-4 rounded-md bg-transparent hover:bg-white focus:bg-white hover:text-[#333030] focus:text-[#333030] ">ПРО ДЛЯ ПАРТНЕРІВ</button>
      <button className="py-2 px-4 rounded-md bg-transparent hover:bg-white focus:bg-white hover:text-[#333030] focus:text-[#333030] ">ДОСТАВКА</button>
    </ul>
  );
  const dropdown = (
     <div className={`bg-[#2b292a] flex flex-col text-white pt-1 top-[90px] text-[16px] w-[330px] items-center text-start shadow-inner z-0 absolute ${openDown ? "" : "hidden"} `}>
     {buttonlist.map((item, key)=>(
        <button className=" focus:bg-white focus:text-[#333030] w-full border-b-[1px] border-[white] text-start px-5 py-2 ">{item.name}</button>
     ))}
     
    </div>
  );

  return (
    <>
    <div className="w-full py-4 px-4 lg:px-8 bg-[#2b292a]  relative z-10">
      <div className="absolute w-screen left-0 top-[85px] h-5 shadow-md shadow-[#00000086] z-50"></div>
      <div className="max-w-[1600px] z-50  mx-auto">
        <div className="w-full flex items-center justify-between text-white">
          <div className="flex items-center gap-8 relative">
            {/* <button onClick={() => setOpenDown(!openDown)} ><VscThreeBars size="30px" /> </button> */}
            <button onClick={() => setOpenDown(!openDown)} ><VscThreeBars size="30px" /> </button>
             {dropdown}
            <img src={logo} alt="..." />
            <div className="hidden lg:block">{navList}</div>
          </div>
          <div className="hidden xl:block">
            <div className="flex items-center gap-3 ">
              <div className="flex item-center gap-3">
                <VscSearch size="30px" />
                <input
                  type="text"
                  className="input px-3 py-2 outline-0 text-[#5d5b5b] rounded-md"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  placeholder="Пошук..."
                />
              </div>
              <div className=" relative">
              <GiShoppingCart size="60px" />
              <div className="bg-[#f34951] rounded-full h-7 w-7 text-[18px] text-center absolute top-[50%] right-0" >30</div>
              </div>
              <HiOutlineUserCircle size="60px" />
            </div>
          </div>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
        <MobileNav open={openNav}>
          <div className="container mx-auto pt-4 text-white">
            {navList}
            <div className="">
              <div className="flex flex-col items-center gap-3 ">
                <div className="flex item-center gap-3">
                  <VscSearch size="30px"/>
                  <input
                    type="text"
                    className="input px-3 py-2 outline-0 text-[#5d5b5b] rounded-md"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder="Пошук..."
                  />
                </div>
                <div className=" relative">
                <GiShoppingCart size="60px" />
                <div className="bg-[#f34951] rounded-full h-7 w-7 text-[18px] text-center absolute top-[50%] right-0" >30</div>
                </div>
                <HiOutlineUserCircle size="60px" />
              </div>
            </div>
          </div>
        </MobileNav>
      </div>
    </div>
    
    </>
  );
}