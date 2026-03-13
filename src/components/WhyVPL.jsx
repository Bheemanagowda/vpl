import React from "react";
import { FaBaseballBall, FaUsers, FaTrophy, FaRunning, FaSmile, FaStar } from "react-icons/fa";
import Heading from "./Heading";

const WhyVPL = () => {
  const objectives = [
    {
      icon: <FaBaseballBall />,
      title: "Promoting Cricket Talent",
      desc: "The Vanajabhavi Premier League was started to provide a platform for young cricket players in the village to showcase their talent and passion for the game.",
    },
    {
      icon: <FaRunning />,
      title: "Encouraging Youth Participation",
      desc: "The tournament motivates village youth to actively participate in sports, helping them stay healthy, energetic, and disciplined.",
    },
    {
      icon: <FaUsers />,
      title: "Building Village Unity",
      desc: "VPL brings together people from different parts of Vanajabhavi village, strengthening friendship, teamwork, and community bonding.",
    },
    {
      icon: <FaTrophy />,
      title: "Creating a Competitive Spirit",
      desc: "The league was started to develop a healthy competitive spirit among players while maintaining sportsmanship and respect for the game.",
    },
    {
      icon: <FaSmile />,
      title: "Providing Entertainment for the Village",
      desc: "Cricket is loved by everyone, and the tournament creates excitement and entertainment for the entire village during the matches.",
    },
    {
      icon: <FaStar />,
      title: "Supporting Future Cricket Opportunities",
      desc: "By organizing the league every year, young players get exposure and confidence, which may help them pursue higher-level cricket opportunities in the future.",
    },
  ];

  return (
    <section className="w-full bg-white py-10">
      <div className="max-w-7xl mx-auto px-4">
       <Heading title="Why VPL" className="text-center" className1="mx-auto" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {objectives.map((item, index) => (
            <div
              key={index}
              className="bg-[#03607e] hover:bg-[#eb363a] text-white shadow-lg rounded-xl p-6 text-center hover:shadow-xl transition duration-300"
            >
              <div className="text-4xl text-white flex justify-center mb-4">
                {item.icon}
              </div>

              <h4 className="text-lg font-semibold mb-2">
                {item.title}
              </h4>

              <p className="text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyVPL;