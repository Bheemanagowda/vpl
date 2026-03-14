import React from "react";
import Heading from "./Heading";

const Gallery = () => {
  const pictures = [
    { img: "/images/gallery/1.jpeg" },
    { img: "/images/gallery/2.jpeg" },
  { img: "/images/gallery/3.jpeg" },
  { img: "/images/gallery/4.jpeg" },
   { img: "/images/gallery/5.jpeg" },
     { img: "/images/gallery/6.jpeg" },
  
   
    { img: "/images/gallery/7.jpeg" },
    { img: "/images/gallery/8.jpeg" },
    { img: "/images/gallery/9.jpeg" },
    
         { img: "/images/gallery/11.jpg" },
           { img: "/images/gallery/12.jpg" },
            { img: "/images/gallery/13.jpg" },
             { img: "/images/gallery/14.jpg" },
              { img: "/images/gallery/15.jpg" },
              { img: "/images/gallery/16.jpg" },
              { img: "/images/gallery/17.jpg" },
               { img: "/images/gallery/18.jpg" },
                 { img: "/images/gallery/19.jpg" },
                  { img: "/images/gallery/20.jpg" },
  ];

  return (
    <section className="w-full bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-4">

        {/* Title */}
        <h2 className="text-3xl font-bold text-center mb-10">
           <Heading title="Our Gallery" className="text-center" className1="mx-auto" />
        </h2>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {pictures.map((items, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl shadow-lg group"
            >
              <img
                src={items.img}
                alt="VPL"
                className="w-full h-[100%] object-cover group-hover:scale-110 transition duration-300"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Gallery;