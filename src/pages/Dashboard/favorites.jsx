import React, { useState } from "react";
import Banner from "../../assets/Banner.jpg";
import { MdOutlineFavorite, MdFavorite } from "react-icons/md";

// Dummy data to simulate fetching from an API
const favoriteItems = [
  {
    id: 1,
    image: Banner,
    title: "Signs & Banners",
    description: "This is some example text within the card body. It provides a brief description or content related to the card's purpose.",
    isFavorite: true,
  },
  {
    id: 2,
    image: Banner,
    title: "Business Cards",
    description: "This is some example text within the card body. It provides a brief description or content related to the card's purpose.",
    isFavorite: true,
  },
  {
    id: 3,
    image: Banner,
    title: "Flyers & Brochures",
    description: "This is some example text within the card body. It provides a brief description or content related to the card's purpose.",
    isFavorite: true,
  },
  {
    id: 4,
    image: Banner,
    title: "Custom Decals",
    description: "This is some example text within the card body. It provides a brief description or content related to the card's purpose.",
    isFavorite: true,
  },
];

const FavoriteCard = ({ item }) => {
  const [isFavorite, setIsFavorite] = useState(item.isFavorite);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    
  };

  return (
    <div className="group relative transform overflow-hidden rounded-xl bg-white p-6 shadow-lg transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-2xl">
      <div className="relative overflow-hidden rounded-lg">
        <img src={item.image} alt={item.title} className="w-full object-cover transition-transform duration-300 group-hover:scale-110" />
        <button
          onClick={toggleFavorite}
          className="absolute right-3 top-3 transform rounded-full bg-white p-2 text-red-500 shadow-md transition-all duration-300 hover:scale-110 focus:outline-none"
        >
          {isFavorite ? <MdFavorite size={24} /> : <MdOutlineFavorite size={24} />}
        </button>
      </div>
      <div className="mt-4">
        <h3 className="mb-2 text-xl font-bold text-gray-800">{item.title}</h3>
        <p className="text-sm text-gray-600">{item.description}</p>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <button className="flex-1 rounded-full bg-blue-600 py-2 text-lg font-medium text-white shadow-md transition-colors duration-200 hover:bg-blue-700 hover:cursor-pointer">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default function Favorites() {
  return (
    <div className="max-w-full">
      <h1 className="mb-14 text-center md:text-start text-3xl font-bold text-gray-900">
        Your Favorites
      </h1>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {favoriteItems.map((item) => (
          <FavoriteCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}