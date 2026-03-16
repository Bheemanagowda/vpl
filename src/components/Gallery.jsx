import React from "react";
import Heading from "./Heading";

const Gallery = ({ limit }) => {

  const pictures = [
     { img: "/images/gallery/26.jpg" },
        { img: "/images/gallery/27.jpg" },
            { img: "/images/gallery/28.jpg" },
                   { img: "/images/gallery/29.jpg" },
                          { img: "/images/gallery/30.jpg" },
                              { img: "/images/gallery/31.jpg" },
                               { img: "/images/gallery/32.jpg" },
      { img: "/images/gallery/23.jpg" },
      { img: "/images/gallery/24.jpg" },
       { img: "/images/gallery/25.jpg" },
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

  const galleryImages = limit ? pictures.slice(0, limit) : pictures;

  return (
    <section className="w-full bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-4">

        <Heading title="Our Gallery" className="text-center" className1="mx-auto" />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
          {galleryImages.map((items, index) => (
            <div key={index} className="overflow-hidden rounded-xl shadow-lg group">
              <img
                src={items.img}
                alt="VPL"
                className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Gallery;