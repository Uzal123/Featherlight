import React from 'react';
import Link from "next/link";

function index() {
     const items = [
       {
         id: "1",
         title: "Asian Tokyo",
         title2: "Sports Shoe",
         desc: "Lace up Lightweight pink shoes for jogging, walking, gym & party Running Shoes For Women. Running shoes for girls stylish latest design new fashion.",
         price: "₹ 9,825.00",
         img: "/women1.png",
       },
       {
         id: "2",
         title: "Hustle V2",
         title2: "Wns Running Shoes",
         desc: "Taking the classic look of heritage Running into a new realm, the Wns Running Shoes brings you a fast-paced look that's ready for today's world.A true nod to the past with a design made from at least 20% recycled material by weight.",
         price: "₹ 10,200.00",
         img: "/women2.png",
       },
       {
         id: "2",
         title: "Pacific Maze",
         title2: "Wn's Running Shoes",
         desc: "Crafted with fine technology and futuristic design, this shoe is surely here to uplift your style and track games. Kick off on street and field in this shoe from the worlds leading and much loved sports brand.",
         price: "₹ 6,905.00",
         img: "/women3.png",
       },
     ];
  return (
    <div className="lg:h-screen ">
      <navbar className="flex lg:absolute z-50 lg:p-8 p-3 w-screen">
        <div className="lg:mx-8 mx-3 lg:block hidden absolute">
          <Link href="/home">
            <a>
              <img src="/3.png" className="h-12" />
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