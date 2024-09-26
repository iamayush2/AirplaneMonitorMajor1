import React from "react";
import DontCard from "./DontCard";
import securityins from "../assets/securityins.jpeg";
import image from "../assets/Image.png";
import mobile from "../assets/mobile.jpeg";
import secsys from "../assets/secsys.jpg";
import joke from "../assets/joke.jpeg";

const Donts = () => {
  const br = <br />;
  console.log(br);
  const DontInfo = [
    {
      heading: "Don't Use Profanity",
      exp: "Using offensive language can result in immediate action by security. Be Mindful and Respectful",
      img: "https://t4.ftcdn.net/jpg/05/08/77/91/240_F_508779142_tsgdNTrLxUZ2c01DZ9o7I7CvTqm3fRii.jpg",
    },
    {
      heading: "Don't Leave Loguage Unattended",
      exp: " Unattended luggage will be confiscated by airport security. Always keep an eye on your belongings.",
      img: "https://t3.ftcdn.net/jpg/07/84/84/50/240_F_784845041_YWwgIZLbqKQCuD8sG2V7l9JmpXTwGwjg.jpg",
    },
    {
      heading: "Dont't Ignore Security Instructions",
      exp: "Faling to follow the instructions can lead to delay and penalties. Pay attention and comply all instructions",
      img: securityins,
    },
    {
      heading: "Don't Tamper Security Equipment ",
      exp: "Tampering with Security Cameras  or other security equpment is a serious offense. Avoid touching the devices",
      img: secsys,
    },
    {
      heading: "Dont Make Joke About Security",
      exp: `Jokes about security ,weapons or threat will be not tolerated and can ${(
        <br />
      )} lead to serve  `,
      img: joke,
    },
    {
      heading: "Don't Use Your Gadget on Restricted Areas",
      exp: "Some Areas may restrict access to digital devices, Observe sign and follow all the measures",
      img: mobile,
    },
  ];

  return (
    <div className="w-[60%] h-full flex flex-wrap  pb-8 gap-1 items-center justify-center bg-sky-300 rounded-xl">
      <h1 className="text-xl font-bold mt-2">
        Important Guidelines Dont's While Being Monitored
      </h1>
      <div className=" w-full flex h-[95%] justify-center  items-center  flex-wrap  gap-3">
        {DontInfo.map((e, i) => (
          <DontCard key={i} e={e} />
        ))}
      </div>
    </div>
  );
};

export default Donts;
