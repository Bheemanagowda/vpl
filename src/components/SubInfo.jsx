import React from "react";
import Heading from "./Heading";
const SubInfo = () => {
  const info = [
    {
      img: "/images/ab1.jpeg",
      desc1:
        "The Vanajabhavi Premier League (VPL) is more than just a cricket tournament; it is a celebration of unity, passion, and village pride. The entire Vanajabhavi community comes together to support the event with great enthusiasm. From young children to elders, everyone eagerly waits for the league season every year.",
      desc2:
        "People from the village actively participate by cheering for their favorite teams, helping with event arrangements, and encouraging the players on the field. Women of the village also play a wonderful role by supporting the teams and contributing to the success of the tournament.",
      desc3:
        "Many generous villagers and supporters contribute through donations and voluntary efforts to make the tournament bigger and better every season. Their support helps in organizing matches, arranging facilities, and rewarding the players for their performance.",
      desc4:
        "VPL is not organized by just a few individuals. It is a collective effort of the entire village. With everyone joining hands and working together, the league has grown into a grand cricket event that brings joy, entertainment, and unforgettable memories to the people of Vanajabhavi.",
    },
  ];

  return (
    <section className="w-full bg-white py-10">

      <div className="max-w-7xl mx-auto px-6">
        {info.map((item, index) => (
          <div key={index} className="grid md:grid-cols-2 gap-10 items-center">
            
            {/* Image */}
            <div>
              <img
                src={item.img}
                alt="VPL"
                className="w-full rounded-lg shadow-lg h-[500px] object-cover"
              />
            </div>

            {/* Description */}
            <div className="space-y-4 text-gray-700 leading-relaxed">
                 <Heading title="The Heart of VPL: Village Unity" className="text-left" />
              <p>{item.desc1}</p>
              <p>{item.desc2}</p>
              <p>{item.desc3}</p>
              <p>{item.desc4}</p>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
};

export default SubInfo;