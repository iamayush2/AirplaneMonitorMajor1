import React from "react";

const InfoCard = ({ e }) => {
  return (
    <div
      className={`w-[${e.width}] flex flex-col gap-3 h-full p-2 rounded-xl shadow-glow-hover `}
    >
      <h1 className="text-xl capitalize text-center font-bold">{e.heading}</h1>
      <div className="mx-1 flex flex-col gap-2">
        {e.reasons.map((e, i) => (
          <p
            className="text-base  font-semibold tracking-tighter leading-none "
            key={i}
          >
            {e}
          </p>
        ))}
      </div>
    </div>
  );
};

export default InfoCard;
