import React from 'react';
import Link from "next/link";

function index() {
     const items = [
       {
         id: "1",
         title: "Lace Cross",
         title2: "Trainers For Boys",
         desc: "Taking the classic look of heritage Nike Running into a new realm, the Nike Air Max Pre-Day brings you a fast-paced look that's ready for today's world.A true nod to the past with a design made from at least 20% recycled material by weight.",
         price: "₹ 11,495.00",
         img: "/kids1.png",
       },
       {
         id: "2",
         title: "Lace",
         title2: "Running Shoe",
         desc: "Taking the classic look of heritage Nike Running into a new realm, the Nike Air Max Pre-Day brings you a fast-paced look that's ready for today's world.A true nod to the past with a design made from at least 20% recycled material by weight.",
         price: "₹ 11,495.00",
         img: "/kids2.png",
       },
       {
         id: "2",
         title: "Velcro",
         title2: "Basketball Shoes",
         desc: "Taking the classic look of heritage Nike Running into a new realm, the Nike Air Max Pre-Day brings you a fast-paced look that's ready for today's world.A true nod to the past with a design made from at least 20% recycled material by weight.",
         price: "₹ 11,495.00",
         img: "/kids3.png",
       },
     ];
  return (
    <div className="lg:h-screen ">
      <navbar className="flex lg:absolute z-50 lg:p-8 p-3 w-screen">
        <div className="lg:mx-8 mx-3 lg:block hidden absolute">
          <Link href="/">
            <a>
              <img src="/3.png" className="h-12" />
            </a>
          </Link>
        </div>
        <ul className="flex lg:justify-start w-full justify-between lg:pl-36">
          <li className="lg:mx-8 mx-3 cursor-pointer font-bold underline">
            <Link href="/">
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
      {items.map((d, i) => (
        <div
          className="h-screen lg:flex flex-nowrap overflow-hidden relative left-0"
          key={i}
        >
          <div className=" w-screen lg:h-4/5 lg:flex flex-nowrap transition-all duration-700 ease-in-out ">
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
}

export default index