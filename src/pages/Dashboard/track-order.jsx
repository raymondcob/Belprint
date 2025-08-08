import React from 'react';

// A creative and simple OrderTracking component
export default function OrderTracking({ currentStatus }) {
  const statuses = ['Processing', 'Shipped', 'Out for Delivery', 'Delivered'];
  const currentIndex = statuses.indexOf(currentStatus);
  const progressPercentage = ((currentIndex + 1) / statuses.length) * 100;

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Processing':
        return '📦';
      case 'Shipped':
        return '🚚';
      case 'Out for Delivery':
        return '🛵';
      case 'Delivered':
        return '✅';
      default:
        return '❓';
    }
  };

  return (
    <div className="mx-auto my-8 max-w-lg rounded-xl bg-gradient-to-br from-blue-50 to-white p-6 shadow-xl">
      <h2 className="mb-6 text-center text-2xl font-extrabold text-gray-900">
        Track Your Order
      </h2>
      <div className="relative h-2 rounded-full bg-gray-200">
        <div
          className="absolute h-full rounded-full bg-blue-500 transition-all duration-700 ease-in-out"
          style={{ width: `${progressPercentage}%` }}
        ></div>
        <div
          className="absolute -top-4 -right-2 transform transition-all duration-700 ease-in-out"
          style={{ left: `calc(${progressPercentage}% - 1rem)` }}
        >
          <span className="text-3xl animate-pulse">{getStatusIcon(currentStatus)}</span>
        </div>
      </div>
      <div className="mt-8 flex justify-between text-center">
        {statuses.map((status, index) => (
          <div key={status}>
            <p
              className={`text-sm font-medium ${
                index <= currentIndex ? 'text-gray-900' : 'text-gray-400'
              }`}
            >
              {status}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-6 text-center">
        <p className="text-xl font-bold text-gray-800">
          Status: <span className="text-blue-600">{currentStatus}</span>
        </p>
      </div>
    </div>
  );
}