import React from "react";
import securityins from "../assets/securityins.jpeg";
import image from "../assets/Image.png";
import mobile from "../assets/mobile.jpeg";
import secsys from "../assets/secsys.jpg";
import joke from "../assets/joke.jpeg";

const DontCard = ({ e }) => {
  return (
    <div className="w-[30%] h-[45%] flex p-2   justify-center flex-col bg-red-200 rounded-xl shadow-xl">
      <div className="w-full h-  flex flex-col gap-2 ">
        <h1 className="text-base  font-black leading-none tracking-tighter">
          {e.heading}
        </h1>
        <p className=" w-[100%] text-sm font-semibold tracking-tighter leading-none">
          {e.exp}
        </p>
      </div>
      <div className=" relative img h-[45%] flex justify-end rounded-lg">
        <img
          src={e.img}
          alt=""
          className=" absolute mt-2 -top-2 right-3 object-cover w-[30%] rounded-xl shadow-inner-glow"
        />
      </div>
    </div>
  );
};

export default DontCard;
