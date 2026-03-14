import React from "react";
import Heading from "./Heading";

const Winners = () => {
  const trophy = [
    {
      winnerImages: "/images/teams/vr.png",
      name: "VanajaBhavi Rulers",
      Year: "2024",
      Seasion: "First",
    },
    {
      winnerImages: "/images/teams/rcw.png",
      name: "Royal Challengers",
      Year: "2025",
      Seasion: "Second Season",
    },
  ];

  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4 text-center">
        <Heading title="Champion Teams" className="text-center" className1="mx-auto" />

        {/* Added 'flex justify-center' wrap or 'justify-center' to the grid */}
        <div className="flex justify-center"> 
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-wrap lg:justify-center gap-6 mt-6">
            {trophy.map((item, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 w-full max-w-xs"
              >
                <img
                  src={item.winnerImages}
                  alt={item.name}
                  className="w-full h-auto object-cover"
                />
                <div className="p-4">
                  <h3 className="text-black font-semibold text-center mb-2">
                    {item.name}
                  </h3>
                  <p className="text-gray-700 text-center">Year: {item.Year}</p>
                  <p className="text-gray-700 text-center">Season: 🏆 {item.Seasion}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Winners;