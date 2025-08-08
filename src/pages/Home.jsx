import React from "react";

const Home = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        Welcome to BelPrint
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        Your trusted printing partner in Belize. Quality printing services for
        all your needs.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-3">Printing Services</h3>
          <p className="text-gray-600">
            Professional printing for business and personal needs.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-3">Design Services</h3>
          <p className="text-gray-600">
            Custom design work for your printing projects.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-3">Quick Turnaround</h3>
          <p className="text-gray-600">
            Fast and reliable service when you need it most.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
