import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/Nike logo.svg";
import Shoe1 from "../../public/shoe1.svg";
import Shoe2 from "../../public/shoe2.svg";
import Shoe3 from "../../public/shoe3.svg";
import { useState } from "react";

const index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const items = [
    {
      id: "1",
      title: "Feather Air",
      title2: "Max Pre-Day",
      desc: "Taking the classic look of heritage Nike Running into a new realm, the Nike Air Max Pre-Day brings you a fast-paced look that's ready for today's world.A true nod to the past with a design made from at least 20% recycled material by weight.",
      price: "₹ 11,495.00",
      img: "/Shoe100.png",
    },
    {
      id: "2",
      title: "Feather Light",
      title2: "Max",
      desc: "Taking the classic look of heritage Nike Running into a new realm, the Nike Air Max Pre-Day brings you a fast-paced look that's ready for today's world.A true nod to the past with a design made from at least 20% recycled material by weight.",
      price: "₹ 11,495.00",
      img: "/Shoe101.png",
    },
    {
      id: "2",
      title: "Feather Water",
      title2: "Max pre-wing",
      desc: "Taking the classic look of heritage Nike Running into a new realm, the Nike Air Max Pre-Day brings you a fast-paced look that's ready for today's world.A true nod to the past with a design made from at least 20% recycled material by weight.",
      price: "₹ 11,495.00",
      img: "/Shoe102.png",
    },
  ];
  const handleClick = (i) => {
    setCurrentSlide(i);
  };
  return (
    <div className="lg:h-screen">
      <navbar className="flex lg:absolute z-50 lg:p-8 p-3 w-screen">
        <div className="lg:mx-8 mx-3 lg:block hidden absolute">
          <Link href="/home">
            <a>
              <Logo className="h-6" />
            </a>
          </Link>
        </div>
        <ul className="flex lg:justify-start w-full justify-between lg:pl-36">
          <li className="lg:mx-8 mx-3 cursor-pointer font-bold underline">
            <Link href="/home">
              <a>Men</a>
            </Link>
          </li>
          <li className=" lg:mx-8 mx-3 cursor-pointer">
            <Link href="/women">
              <a>Women</a>
            </Link>
          </li>
          <li className="lg:mx-8 mx-3 cursor-pointer">
            <Link href="/kids">
              <a>Kids</a>
            </Link>
          </li>
          <li className="lg:mx-8 mx-3 cursor-pointer">
            <Link href="/collection">
              <a>Collection</a>
            </Link>
          </li>
        </ul>
      </navbar>
      {/* <div className="absolute top-20 left-0 lg:m-16 ml-4 z-50">
        <div className="lg:block hidden">
          {items.map((item, i) => (
            <div
              className={
                "px-8 py-5 text-xl cursor-pointer  transition-all border-l-2 border-black " +
                (currentSlide === i ? " active" : "")
              }
              key={i}
            >
              <h2 onClick={() => handleClick(i)} className="cursor-pointer">
                0{i + 1}
              </h2>
            </div>
          ))}
        </div>
      </div> */}
      {items.map((d, i) => (
        <div className="h-screen lg:flex flex-nowrap overflow-hidden relative left-0">
          <div
            className=" w-screen lg:h-4/5 lg:flex flex-nowrap transition-all duration-700 ease-in-out "
            style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
          >
            <div className="lg:flex w-screen">
              <div className="right-0 flex lg:justify-end justify-center z-50 w-full lg:w-1/2 lg:order-last">
                <img src={d.img} className="h-full object-cover" />
              </div>
              <div className="left flex w-full lg:w-1/2 p-6 lg:pl-48">
                <div className="flex justify-center items-center">
                  <div className="w-full">
                    <h2 className="text-5xl font-bold">{d.title}</h2>
                    <h2 className="text-5xl font-bold pb-6">{d.title2}</h2>
                    <p className="pb-6">{d.desc}</p>
                    <div className="w-full flex">
                      <button className="bg-black text-white p-3 w-1/2 rounded-xl">
                        Add to Bag
                      </button>
                      <p className="w-1/2 p-3 font-bold text-xl">{d.price}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default index;