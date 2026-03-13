import React from "react";
import Heading from "./Heading";

function Comany() {
  const info = [
    {
      img: "/images/ab.jpeg",
      desc: "The Vanajabhavi Premier League (VPL) is a village cricket tournament started in 2024 with the aim of encouraging young cricket talent and bringing the community of Vanajabhavi village together through the spirit of sports.",
      addional: [
        "Since its beginning, the league has successfully completed two thrilling seasons, featuring competitive matches, passionate teams, and strong support from the villagers.",
        "With the overwhelming success of the first two seasons, the 3rd Season of Vanajabhavi Premier League is now set to begin, promising even more excitement and talented players.",
        "The Vanajabhavi Premier League is more than just a tournament — it is a celebration of cricket, community, and village pride."
      ]
    }
  ];

  return (
    <section className="w-full bg-white py-12">

      <div className="max-w-7xl mx-auto px-4">

        {info.map((item, index) => (
          <div
            key={index}
            className="grid md:grid-cols-2 gap-10 items-center"
          >
            
            {/* Left Image */}
            <div>
              <img
                src={item.img}
                alt="VPL Logo"
                className="w-full h-[420px] object-cover rounded-lg shadow-lg"
              />
            </div>

            {/* Right Content */}
            <div className="space-y-4">
         <Heading title="About Us" className="text-left" />

              <p className="text-gray-700 leading-relaxed">
                {item.desc}
              </p>

              {item.addional.map((text, i) => (
                <p key={i} className="text-gray-700 leading-relaxed">
                  {text}
                </p>
              ))}
            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Comany;