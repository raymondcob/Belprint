import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const OrderDetailsPage = () => {
  const location = useLocation();
  const { order } = location.state || {}; 

 

  return (
    <div className="min-h-screen bg-gray-50 p-10 font-sans">
      <div className="max-w-4xl mx-auto">
        <Link to="/track-order" className="inline-flex items-center text-blue-500 hover:underline mb-8">
          <FaArrowLeft className="mr-2" /> Back to Orders
        </Link>
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Order: <span className="text-blue-600">{order.invoiceId}</span>
          </h1>
          <p className="text-xl text-gray-600 mb-6">Customer: {order.customer}</p>

          <div className="relative border-l-2 border-gray-200 pl-8">
            <div
              className="absolute left-0 w-2 h-full bg-blue-500 transition-all duration-700"
              style={{
                height: `${(order.trackingTimeline.findIndex(item => item.step === order.currentStatus) + 1) * 10}%`,
              }}
            ></div>

            {order.trackingTimeline.map((item) => (
              <div key={item.step} className="mb-8 flex items-start">
                <div
                  className={`-ml-5 flex items-center justify-center h-10 w-10 rounded-full z-10 transition-colors duration-500
                    ${item.step === order.currentStatus ? 'bg-blue-600 shadow-xl' :
                      item.completed ? 'bg-green-500 shadow-md' : 'bg-gray-300'}`}
                >
                  <span className={`text-xl text-white ${item.step === order.currentStatus ? 'animate-pulse' : ''}`}>
                    {item.completed ? '✔️' : item.icon}
                  </span>
                </div>
                <div
                  className={`ml-4 px-6 py-4 rounded-xl transition-all duration-500 ease-in-out w-full
                    ${item.step === order.currentStatus ? 'bg-blue-500 text-white shadow-md' :
                      item.completed ? 'bg-gray-100 text-gray-800' : 'bg-gray-50 text-gray-500'}`}
                >
                  <p className={`font-semibold text-lg ${item.step === order.currentStatus ? 'text-white' : 'text-gray-900'}`}>
                    {item.step}
                  </p>
                  {item.step === order.currentStatus && (
                    <p className="text-sm font-medium">In Progress...</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetailsPage;