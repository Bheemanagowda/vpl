import React from "react";
import Heading from "./Heading";

const Video = () => {
  const videos = [
    { vid: "/images/videos/1.mp4" },
    { vid: "/images/videos/2.mp4" },
    { vid: "/images/videos/3.mp4" },
    { vid: "/images/videos/4.mp4" },
  ];

  return (
    <div className="bg-[#004a68] py-10">
            <Heading title="  Real Stories,Real Experiences" className="text-center"  textColor="text-white" className1="mx-auto" />
      
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {videos.map((video, index) => (
            <div key={index} className="rounded-lg overflow-hidden shadow-lg">
              <video
                src={video.vid}
                controls
                className="w-full h-[500px] object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Video;