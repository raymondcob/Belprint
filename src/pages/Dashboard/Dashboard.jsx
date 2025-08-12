import Shirt from "../../assets/shirtsample.jpg";
import { useNavigate } from 'react-router-dom'; 
import React, {useState} from "react"

const Dashboard = () => {
const [isCartModalOpen, setIsCartModalOpen] = useState(false);

const toggleCartModal =  ()  => {
    
    setIsCartModalOpen(!isCartModalOpen);
  }
  const navigate = useNavigate();
  const cartItems=[
  {
       product:"T-shirt",
       color:"Black",
       printon:"Front",
       total:33.75

  },
  {
       product:"T-shirt",
       color:"Black",
       printon:"Front",
       total:33.75

  },
   
]
  return (
    <div className="max-w-full p-10 ">
      <h1 className="text-3xl font-bold text-gray-900 mb-14 text-center md:text-start mt-4 ">
        Welcome Back , User
      </h1>

      <div className="grid md:grid-cols-2 gap-6 mb-8 md:justify-between content-center items-center ">
        <div className=" p-3 rounded-lg shadow-md w-[90%] md:w-[95%] lg:w-[45%] ">
          <h3 className="text-2xl font-semibold text-gray-700 mb-5">
            Recent Orders
          </h3>
          <p className="text-6xl font-bold text-blue-600 text-center">12</p>
        </div>

        <div className="flex flex-col w-[90%] md:w-[95%] lg:w-[60%] shadow-md rounded-lg bg-white p-6">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">
            Cart Summary
          </h3>
          <div className="flex flex-col gap-4">
            {cartItems.map((item, index) => (
              <div key={index} className="flex items-center gap-4 border-b border-gray-200 pb-4 last:border-b-0 last:pb-0">
                <img src={Shirt} alt={item.product} className="w-16 h-16 rounded-md object-cover flex-shrink-0" />
                <div className="flex-grow">
                  <h4 className="font-semibold text-gray-800">{item.product}</h4>
                  <p className="text-sm text-gray-500">Color: {item.color}</p>
                  <p className="text-sm text-gray-500">Print: {item.printon}</p>
                </div>
                <h4 className="font-bold text-gray-900">${item.total.toFixed(2)}</h4>
              </div>
            ))}
          </div>
          <div className="flex justify-end mt-4"> {/* Added margin top for spacing */}
                  <button
                      className=' text-blue-600 flex items-center justify-center gap-2 px-4 py-2 rounded-lg border-2 border-blue-600 font-medium hover:bg-blue-600 hover:text-white transition-colors hover:cursor-pointer'
                      onClick={()=>navigate("/cart")}
                   >
                          View Cart
                  </button>
                  </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;