import React from "react";
import { Link } from "react-router-dom";

function CourseCard() {
  return (
    <>
      <div className="flex justify-center  md:fixed md:right-4 lg:right-14 top-[9rem] z-10 px-4 mt-4 cursor-pointer">
        <div className=" w-[24rem] md:w-[20rem] lg:w-[26rem] rounded-xl pb-9  bg-white ">
          <div className="w-full p-2 pt-3 rounded-xl mb-5">
            <img
              className="rounded-xl"
              src="https://d2bps9p1kiy4ka.cloudfront.net/5eb393ee95fab7468a79d189/ecf8833b-a333-40fb-a399-61ba2d7db877.png"
              alt="img"
            />
          </div>

          <div className="flex flex-col  items-center">
            <div>
              <p className="mb-2 text-sm font-bold ">Special Discount Price</p>
            </div>
            <div className="flex items-center pb-2">
              <p className="px-2 text-3xl font-bold">Rs 20000</p>
              <p className="mx-3 line-through">Rs50000</p>
              <p className="bg-[#46b284] rounded-3xl px-2 py-1 text-white">
                55%OFF
              </p>
            </div>
            <Link to="#">
              {" "}
              <button className=" mt-3 md:w-72 lg:w-80 shadow-[0_4px_5px_rgba(0,0,0,0.3)] bg-[#0d6efd]  text-white px-8 py-3 rounded-xl  duration-500 hover:scale-105">
                Buy Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default CourseCard;
