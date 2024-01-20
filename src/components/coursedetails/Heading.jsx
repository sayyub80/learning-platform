import React from "react";

function Heading() {
  return (
    <div className="md:px-2 lg:px-[6rem] bg-black  text-white py-5">
      <div className="md:w-[40rem] lg:w-[50rem] px-4">
        <h1 className="px- md:text-5xl text-3xl py-8 font-semibold mr-2">
          UPSC NCERT FOUNDATION (HINDI){" "}
        </h1>
        <p className=" py-2">Special Discount Price</p>
      </div>

      <div className="lg:px-4 px-4 flex items-center relative   pb-6 ">
        <p className="font-bold text-2xl">Rs 20000</p>
        <p className="mx-7 text-gray-500 line-through">Rs 50000</p>
        <p className="bg-[#46b284] rounded-3xl px-2 py-1 text-white">55% OFF</p>
      </div>
    </div>
  );
}

export default Heading;
