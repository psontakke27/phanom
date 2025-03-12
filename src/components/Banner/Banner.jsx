import React from "react";
// import banner from "../../src/assets/Frame 104.png";
import image1 from "../../../src/assets/Frame 104.png"; 
import image2 from "../../../src/assets/Frame 105.png"; 
import image3 from "../../../src/assets/Frame 106.png";
import image4 from "../../../src/assets/Frame 107.png";


function Banner() {
  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row items-center justify-between my-10">
      
      {/* Left Text Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-center md:pr-12">
        <h1 className="text-2xl md:text-4xl font-bold">
          Let’s innovation meets your excellence
        </h1>
        <p className="text-sm md:text-xl mt-4">
          Excellence refined, innovation ignited, the future starts here
        </p>
        <button className="btn mt-6 btn-secondary">Get Started</button>
      </div>

      {/* Right Image Section */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-end">
        {/* <img src={banner} className="w-[550px] h-[460px]" alt="Banner" /> */}
        <img src={image1} className="animated-img img1" alt="Image 1" />
        <img src={image2} className="animated-img img2" alt="Image 2" />
        <img src={image3} className="animated-img img3" alt="Image 3" />
        <img src={image4} className="animated-img img4" alt="Image 4" />

      </div>

    </div>
  );
}

export default Banner;
