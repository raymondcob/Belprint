

const Shop = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Shop</h1>
      <p className="text-lg text-gray-600 mb-8">
        Browse our printing services and products.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-3">Business Cards</h3>
          <p className="text-gray-600 mb-4">Professional business cards</p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded">
            Order Now
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-3">Banners</h3>
          <p className="text-gray-600 mb-4">Large format printing</p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded">
            Order Now
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-3">Flyers</h3>
          <p className="text-gray-600 mb-4">Marketing materials</p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Shop;
