import { useState } from "react";
import Shirt from "../../assets/shirtsample.jpg";
import { CiCreditCard1, CiBank } from "react-icons/ci";

function CartCheckOut() {
  const [shippingMethod, setShippingMethod] = useState("ship");

  // Sample data for demonstration
  const cartItems = [
    {
      id: 1,
      product: "T-shirt",
      color: "Black",
      printon: "Front",
      size: "Small",
      quantity: 2,
      price: 14.99,
    },
   
    
    
  ];
  
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const gst = subtotal * 0.125; // 12.5% GST
  const total = subtotal + gst;

  return (
    <div className="flex flex-col lg:flex-row gap-6 p-4 md:p-8">
      {/* Billing Details Section */}
      <div className="flex flex-col bg-white shadow-lg rounded-lg w-full lg:w-[60%] p-6">
        <h3 className="text-3xl font-bold mb-8 text-gray-800">
          Billing Details
        </h3>

        {/* Shipping/Pickup Toggle */}
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div
            className={`border-2 p-4 rounded-lg cursor-pointer transition-colors ${
              shippingMethod === "ship"
                ? "border-blue-400 bg-blue-100"
                : "border-gray-300 hover:border-blue-400"
            }`}
            onClick={() => setShippingMethod("ship")}
          >
            <h4 className="font-bold text-lg">Ship To Me</h4>
            <p className="text-sm text-gray-500">Select a carrier or airline</p>
          </div>
          <div
            className={`border-2 p-4 rounded-lg cursor-pointer transition-colors ${
              shippingMethod === "pickup"
                ? "border-blue-400 bg-blue-100"
                : "border-gray-300 hover:border-blue-400"
            }`}
            onClick={() => setShippingMethod("pickup")}
          >
            <h4 className="font-bold text-lg">Pick Up</h4>
            <p className="text-sm text-gray-500">Pick up at our office</p>
          </div>
        </div>

        {/* Form Inputs */}
        <form className="flex flex-col gap-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label
                htmlFor="user"
                className="text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="user"
                className="w-full rounded-md border border-gray-300 px-4 py-2 mt-1 focus:border-red-500 focus:ring-red-500"
                defaultValue="SPHS"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="country"
                className="text-sm font-medium text-gray-700"
              >
                Country
              </label>
              <input
                type="text"
                id="country"
                className="w-full rounded-md border border-gray-300 px-4 py-2 mt-1 focus:border-red-500 focus:ring-red-500"
                defaultValue="BELIZE"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="company"
              className="text-sm font-medium text-gray-700"
            >
              Company (required for business)
            </label>
            <input
              type="text"
              id="company"
              className="w-full rounded-md border border-gray-300 px-4 py-2 mt-1 focus:border-red-500 focus:ring-red-500"
              placeholder="Company"
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full rounded-md border border-gray-300 px-4 py-2 mt-1 focus:border-red-500 focus:ring-red-500"
              defaultValue="secretary@sphs.edu.bz"
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="phone"
              className="text-sm font-medium text-gray-700"
            >
              Phone Number*
            </label>
            <input
              type="tel"
              id="phone"
              className="w-full rounded-md border border-gray-300 px-4 py-2 mt-1 focus:border-red-500 focus:ring-red-500"
              placeholder="Phone Number*"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="city" className="text-sm font-medium text-gray-700">
              City/Town*
            </label>
            <input
              type="text"
              id="city"
              className="w-full rounded-md border border-gray-300 px-4 py-2 mt-1 focus:border-red-500 focus:ring-red-500"
              placeholder="City/Town*"
            />
          </div>
        </form>
      </div>

      {/* Your Orders & Payment Section */}
      <div className="flex flex-col bg-white md:ml-20 shadow-lg rounded-lg w-full lg:w-[20%] p-6 h-fit">
        <h3 className="text-3xl font-bold mb-8 text-gray-800">Your Orders</h3>

        <div className="flex justify-between border-gray-300  border-b pb-3 mb-4">
          <h4 className="text-lg font-bold text-gray-600">PRODUCT</h4>
          <h4 className="text-lg font-bold text-gray-600">SUBTOTAL</h4>
        </div>

        {cartItems.map((item) => (
          <div key={item.id} className="flex justify-between items-center py-4">
            <div className="flex items-center gap-4">
              <div>
                <div className=" flex items-center justify-center left-14 bg-blue-400 text-white rounded-full w-7 h-7 relative top-4">{item.quantity}</div>
                <img
                  src={Shirt}
                  alt="Shirt"
                  className="w-20 h-20 rounded object-cover"
                />
              </div>

              <div className="flex flex-col">
                <h4 className="font-bold">{item.product}</h4>
                <p className="text-gray-500 text-sm">
                  Color:{" "}
                  <span className="font-semibold text-black">{item.color}</span>
                </p>
                <p className="text-gray-500 text-sm">
                  Size:{" "}
                  <span className="font-semibold text-black">
                    {item.size} 
                  </span>
                </p>
              </div>
            </div>
            <div className="flex">
              <h4 className="text-lg font-semibold">
                ${(item.price * item.quantity).toFixed(2)}
              </h4>
            </div>
          </div>
        ))}

        <div className="flex flex-col mt-6 border-gray-300  border-t pt-4">
          <div className="flex justify-between py-2">
            <h4 className="text-xl font-bold">Subtotal</h4>
            <h4 className="text-xl font-bold">${subtotal.toFixed(2)}</h4>
          </div>
          <div className="flex justify-between py-2">
            <h4 className="text-xl font-bold">GST (12.5%)</h4>
            <h4 className="text-xl font-bold">${gst.toFixed(2)}</h4>
          </div>
          <div className="flex justify-between py-2 border-t border-gray-300 mt-2">
            <h4 className="text-2xl font-bold text-blue-500">Total</h4>
            <h4 className="text-2xl font-bold text-blue-500">
              ${total.toFixed(2)}
            </h4>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="flex flex-col mt-8 gap-4">
          <button className="w-full flex items-center justify-center gap-2 p-4 rounded-lg border-2 border-blue-500 font-medium text-blue-600 hover:bg-blue-600 hover:text-white hover:cursor-pointer transition-colors">
            <CiCreditCard1 size={24} />
            Credit Card
          </button>
          <button className="w-full flex items-center justify-center gap-2 p-4 rounded-lg border-2 border-blue-500 font-medium text-blue-600 hover:bg-blue-600 hover:text-white hover:cursor-pointer transition-colors">
            <CiBank size={24} />
            Bank Deposit
          </button>
          <button className="w-full bg-blue-600 text-white flex items-center justify-center p-4 rounded-lg font-medium hover:bg-blue-700 transition-colors hover:cursor-pointer mt-2">
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartCheckOut;
