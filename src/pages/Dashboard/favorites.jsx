import { useState } from "react";
import Banner from "../../assets/Banner.jpg";
import { MdOutlineFavorite, MdFavoriteBorder } from "react-icons/md";

export default function Favorites() {
  

  return (
    <div className="max-w-full ">
      <h1 className="text-3xl font-bold text-gray-900 mb-14 text-start ">
        Your Favorites
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8 content-center">

        <div class="max-w-sm rounded overflow-hidden shadow-lg p-6 bg-white">
          <div className="relative w-full border-b-1 border-gray-200">
            <img src={Banner} alt="BannerImg"/>
             <span class="absolute p-1 top-1 right-0 z-2 " onClick={()=> setIsActive(!IsActive)}>
              <MdOutlineFavorite size={30} style={{color:'red'}}/>
              </span>
          </div>
          <div class="font-bold text-xl mb-2 mt-2">Sign & Banners </div>
          <p class="text-gray-700 text-base">
            This is some example text within the card body. It provides a brief
            description or content related to the card's purpose.
          </p>
          <button className="bg-blue-500 rounded-lg text-white font-medium p-2 mt-3 hover:text-gray-100 hover:bg-blue-600 hover:cursor-pointer">Add to Cart</button>
        </div>
        <div class="max-w-sm rounded overflow-hidden shadow-lg p-6 bg-white">
          <div className="relative w-full border-b-1 border-gray-200">
            <img src={Banner} alt="BannerImg"/>
             <span class="absolute p-1 top-1 right-0 z-2 " onClick={()=> setIsActive(!IsActive)}>
              <MdOutlineFavorite size={30} style={{color:'red'}}/>
              </span>
          </div>
          <div class="font-bold text-xl mb-2 mt-2">Sign & Banners </div>
          <p class="text-gray-700 text-base">
            This is some example text within the card body. It provides a brief
            description or content related to the card's purpose.
          </p>
          <button className="bg-blue-500 rounded-lg text-white font-medium p-2 mt-3 hover:text-gray-100 hover:bg-blue-600 hover:cursor-pointer">Add to Cart</button>
        </div>
        <div class="max-w-sm rounded overflow-hidden shadow-lg p-6 bg-white">
          <div className="relative w-full border-b-1 border-gray-200">
            <img src={Banner} alt="BannerImg"/>
             <span class="absolute p-1 top-1 right-0 z-2 " onClick={()=> setIsActive(!IsActive)}>
              <MdOutlineFavorite size={30} style={{color:'red'}}/>
              </span>
          </div>
          <div class="font-bold text-xl mb-2 mt-2">Sign & Banners </div>
          <p class="text-gray-700 text-base">
            This is some example text within the card body. It provides a brief
            description or content related to the card's purpose.
          </p>
          <button className="bg-blue-500 rounded-lg text-white font-medium p-2 mt-3 hover:text-gray-100 hover:bg-blue-600 hover:cursor-pointer">Add to Cart</button>
        </div>
        <div class="max-w-sm rounded overflow-hidden shadow-lg p-6 bg-white">
          <div className="relative w-full border-b-1 border-gray-200">
            <img src={Banner} alt="BannerImg"/>
             <span class="absolute p-1 top-1 right-0 z-2 ">
              <MdOutlineFavorite size={30} style={{color:'red'}}/>
              </span>
          </div>
          <div class="font-bold text-xl mb-2 mt-2 ">Sign & Banners </div>
          <p class="text-gray-700 text-base">
            This is some example text within the card body. It provides a brief
            description or content related to the card's purpose.
          </p>
          <button className="bg-blue-500 rounded-lg text-white font-medium p-3 mt-3 hover:text-gray-100 hover:bg-blue-600 hover:cursor-pointer">Add to Cart</button>
        </div>
        
        
      </div>
    </div>
  );
}
