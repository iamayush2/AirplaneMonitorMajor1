import React from "react";
import Donts from "./Components/Donts";
import QrCont from "./Components/QrCont";
import airport from "./assets/airport.jpg";
import logobgr from "./assets/logobgr.png";

const App = () => {
  return (
    <div className=" h-screen w-screen ">
      <div className="w-full flex justify-center p-2 px-10 items-center h-[35%] gap-4">
        <div className="w-[60%] h-full ">
          <nav className="h-[35%] -ml-6  w-full items-center  flex ">
            <div className="w-[15%] flex h-[75%] p-1 items-center justify-start rounded-full">
              <img src={logobgr} alt="" className="  h-[220%] " />
            </div>

            <h1 className=" -ml-6 text-4xl font-bold  text-sky-700 ">
              Urban Transit Vigilance & Defence System
            </h1>
          </nav>
          <div className="w-full flex flex-col h-[60%] items-start px-8 justify-center text-base gap-3 ">
            <h1>
              We are delighted to have you here. Your safety and comfort are our
              top priorities as you embark on your journey. Our dedicated team
              is here to assist you at every step, ensuring a smooth and
              pleasant experience.
            </h1>
            <p className="font-medium">
              We wish you a wonderful and safe journey ahead! 🌏
            </p>
            <p className="font-medium">
              {" "}
              Thank you for choosing Us. Happy travels! 🌟
            </p>
          </div>
        </div>
        <div className="w-[40%] h-full object-contain rounded-xl  bg-sky-400">
          <img
            src={airport}
            alt=""
            className="w-[100%] h-[100%] rounded-xl shadow-inner-glow object-cover"
          />
        </div>
      </div>
      <div className="w-full flex gap-2  h-[65%]  p-3">
        <Donts />
        <QrCont />
      </div>
    </div>
  );
};

export default App;
