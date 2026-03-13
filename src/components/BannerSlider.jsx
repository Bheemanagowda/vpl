"use client";

import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";

const BannerSlider = () => {
  const swiperRef = useRef(null);

  const slides = [
    { id: 1, image: "/images/banners/anjanadri.png" },
    { id: 2, image: "/images/banners/vrr.png" },
    { id: 3, image: "/images/banners/rcv.png" },
    { id: 4, image: "/images/banners/vw.png" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (swiperRef.current?.swiper) {
        swiperRef.current.swiper.slideNext();
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full">
      <Swiper ref={swiperRef} slidesPerView={1} loop={true}>
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full aspect-[1920/800]">
              <Image
                src={slide.image}
                alt={`Slide ${slide.id}`}
                fill
                priority
                sizes="100vw"
                style={{ objectFit: "cover" }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BannerSlider;