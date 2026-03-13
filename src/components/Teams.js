import React from "react";
import Heading from "./Heading";

const Teams = () => {
  const teams = [
    {
      img: "/images/teams/aw.png",
      title: "Anjanadri Warriors",
    },
    {
      img: "/images/teams/vw-logo.png",
      title: "Vanajabhavi Warriors",
    },
    {
      img: "/images/teams/vr.png",
      title: "Vanajabhavi Rulers",
    },
    {
      img: "/images/teams/rcv1.png",
      title: "Royal Challengers Vanajabhavi",
    },
  ];

  return (
    <section className="bg-gray-100 w-full py-12">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
      <Heading title="Our Teams" className="text-center" className1="mx-auto" />

        {/* Teams Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-10">
          {teams.map((item, index) => (
            <div
              key={index}
              className="text-center bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-40 h-40 object-contain mx-auto mb-4"
              />

              <h4 className="text-lg font-semibold text-black">
                {item.title}
              </h4>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Teams;