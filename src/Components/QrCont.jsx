import React from "react";
import InfoCard from "./InfoCard";
import qr from "../assets/qr.jpeg";
import { FaArrowCircleRight } from "react-icons/fa";
const QrCont = () => {
  const infoobj = [
    {
      width: "60%",
      heading: "why we monitor",
      reasons: [
        "Enhancing the overall security of the airport",
        "Ensuring Compiliance with Security protocols",
        "Helping to identify and respond to any potential Threat",
      ],
    },
    {
      width: "40%",
      heading: "your rights",
      reasons: [
        "Request Access to the recordings",
        "Understan how your dat is being used",
        "Contact airport security for any concerns",
      ],
    },
  ];

  return (
    <div className="w-[40%] flex flex-col h-full rounded-xl p-1 gap-2 ">
      <div className="flex w-full h-[42%] justify-center gap-5  rounded-xl">
        {infoobj.map((e, i) => (
          <InfoCard key={i} e={e} />
        ))}
      </div>
      <div className="flex w-full h-[60%] justify-center items-center gap-5  rounded-xl">
        <div className="qrinfo w-[40%] h-full flex flex-col p-3 shadow-glow rounded-xl">
          <h1 className="text-xl capitalize font-semibold text-center">
            How to scan qr
          </h1>

          <ul className="mx-auto w-[100%] text-sm font-medium mt-4 px-1 tracking-tighter leading-none ">
            <li className="w-full mb-3">
              {" "}
              Open your device's camera or QR code scanner app.
            </li>
            <li className="mb-3">
              {" "}
              Point your camera at the QR code displayed on the screen.
            </li>
            <li className="mb-3"> A notification will appear with a link.</li>
            <li className="mb-3">
              Click on the link to connect to the admin's server.
            </li>
          </ul>
          <p className="text-xs mt-2 font-semibold flex justify-end items-center gap-2">
            Scan the OR Code
            <FaArrowCircleRight />
          </p>
        </div>
        <div className="qr w-[60%]  p-5 h-full flex flex-col items-center  shadow-glow-hover rounded-xl object-contain">
          <img src={qr} className="w-[85%] h-[100%]" alt="" />
        </div>
      </div>
    </div>
  );
};

export default QrCont;
