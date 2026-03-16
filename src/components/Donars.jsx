import React from "react";
import donarsData from "@/data/donars.json";
import Heading  from "@/components/Heading"

const Donars = () => {
  return (
    <div className="bg-gray-100 py-10">   {/* Gray Background */}
      <div className="container mx-auto px-4 py-8">
    
         <Heading title="Our Donors" className="text-center" className1="mx-auto" />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {donarsData.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={item.donarImage}
                alt={item.name}
                className="w-full h-[500px] object-cover"
              />

              <div className="p-4">
                <h3 className="text-black font-semibold text-center mb-2">
                  {item.name}
                </h3>
                <p className="text-gray-700 text-center">
                  Donated : {item.donated}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Donars;