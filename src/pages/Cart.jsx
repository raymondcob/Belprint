import { useState } from "react";
import Shirt from "../assets/shirtsample.jpg";
import { IoBagCheckOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { RiDeleteBin6Line } from "react-icons/ri";

const sizes = ["Small", "Medium", "Large", "X-Large", "XX-Large"];

function Cart() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState(null);

  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      product: "T-shirt",
      color: "Black",
      printon: "Front",
      price: 14.99,
      printsize: "3.5in X 3.5in",
      size: "Medium",
      quantity: 2,
    },
    {
      id: 2,
      product: "T-shirt",
      color: "White",
      printon: "Back",
      price: 14.99,
      printsize: "4in X 6in",
      size: "Large",
      quantity: 1,
    },
  ]);

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const gst = subtotal * 0.13;
  const total = subtotal + gst;

  const openModal = (item) => {
    setEditingItem({ ...item });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingItem(null);
  };

  const handleUpdate = () => {
    if (editingItem) {
      setCartItems(
        cartItems.map((item) => (item.id === editingItem.id ? editingItem : item))
      );
      closeModal();
    }
  };

  const handleSizeChange = (e) => {
    setEditingItem({ ...editingItem, size: e.target.value });
  };

  const handleQuantityChange = (e) => {
    setEditingItem({ ...editingItem, quantity: parseInt(e.target.value) || 1 });
  };

  const handleDeleteItem = (itemId) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId));
  };

  return (
    <div className="flex flex-col w-full px-4 md:px-8 lg:px-12 py-6">
      <h3 className="text-4xl font-bold text-black mb-6">My Cart</h3>
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="bg-white w-full lg:w-[60%] rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl p-6">
          <div className="hidden md:flex items-center text-gray-500 font-semibold border-b pb-3">
            <div className="w-[45%]">Product</div>
            <div className="w-[55%] flex justify-between items-center text-center px-4">
              <div className="w-1/4">Price</div>
              <div className="w-1/4">Print Size</div>
              <div className="w-1/4">Quantity</div>
              <div className="w-1/4">Subtotal</div>
            </div>
          </div>

          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col md:flex-row items-center border-t border-gray-200 py-6"
            >
              <div className="w-full md:w-[45%] flex items-center gap-4">
                <img src={Shirt} alt="Shirt" className="w-24 h-24 rounded-md object-cover" />
                <div className="flex flex-col">
                  <h4 className="font-bold text-lg">{item.product}</h4>
                  <p className="text-gray-500 text-sm">
                    Color: <span className="font-semibold text-black">{item.color}</span>
                  </p>
                  <p className="text-gray-500 text-sm">
                    Print On: <span className="font-semibold text-black">{item.printon}</span>
                  </p>
                  <button
                    className="text-red-500 text-sm font-semibold mt-2 self-start hover:cursor-pointer"
                    onClick={() => openModal(item)}
                  >
                    Edit Quantity & Size
                  </button>
                  <button
                    className="text-gray-400 hover:text-red-600 transition-colors mt-2 flex items-center gap-1 text-sm self-start hover:cursor-pointer"
                    onClick={() => handleDeleteItem(item.id)}
                  >
                    <RiDeleteBin6Line /> Remove
                  </button>
                </div>
              </div>
              <div className="w-full md:w-[55%] flex flex-col md:flex-row justify-between items-center text-center mt-4 md:mt-0 px-4">
                <div className="w-full md:w-1/4 my-2 md:my-0">
                  <span className="md:hidden font-semibold">Price: </span>
                  <span className="font-semibold">${item.price.toFixed(2)}</span>
                </div>
                <div className="w-full md:w-1/4 my-2 md:my-0">
                  <span className="md:hidden font-semibold">Print Size: </span>
                  <span className="font-semibold">{item.printsize}</span>
                </div>
                <div className="w-full md:w-1/4 my-2 md:my-0 flex flex-col items-center">
                  <span className="md:hidden font-semibold">Quantity: </span>
                  <span className="font-semibold">
                    {item.size} ({item.quantity})
                  </span>
                </div>
                <div className="w-full md:w-1/4 my-2 md:my-0">
                  <span className="md:hidden font-semibold">Subtotal: </span>
                  <span className="font-semibold text-lg">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white w-full lg:w-[40%] rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl p-6 h-fit">
          <h3 className="text-2xl font-bold text-start mb-5">Order Summary</h3>
          <div className="flex flex-col">
            <div className="flex justify-between border-t-2 border-gray-200 py-4">
              <h4 className="text-lg font-medium">Subtotal</h4>
              <p className="font-bold text-lg">${subtotal.toFixed(2)}</p>
            </div>
            <div className="flex justify-between py-4">
              <h4 className="text-lg font-medium">GST (13%)</h4>
              <p className="font-bold text-lg">${gst.toFixed(2)}</p>
            </div>
            <div className="flex justify-between border-t-2 border-gray-200 pt-4">
              <h4 className="text-xl font-bold">Total (GST INCLUDED)</h4>
              <p className="font-bold text-xl">${total.toFixed(2)}</p>
            </div>
          </div>
          <div className="flex justify-end w-full mt-6">
            <button
              className="text-red-600 flex items-center justify-center gap-2 px-6 py-3 rounded-lg border-2 border-red-600 font-medium hover:bg-red-600 hover:text-white hover:cursor-pointer transition-colors"
              onClick={() => navigate("/cart-checkout")}
            >
              <IoBagCheckOutline />
              Checkout
            </button>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-2xl relative">
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-2xl"
            >
              &times;
            </button>
            <h3 className="text-2xl font-bold mb-4">Edit Item</h3>
            {editingItem && (
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <img src={Shirt} alt="Shirt" className="w-20 h-20 rounded-md" />
                  <div>
                    <h4 className="font-bold">{editingItem.product}</h4>
                    <p className="text-gray-500 text-sm">
                      Color: <span className="font-semibold text-black">{editingItem.color}</span>
                    </p>
                  </div>
                </div>
                <div>
                  <label htmlFor="size" className="block text-gray-700 font-medium mb-1">
                    Size
                  </label>
                  <select
                    id="size"
                    value={editingItem.size}
                    onChange={handleSizeChange}
                    className="w-full p-2 border border-gray-300 rounded-md"
                  >
                    {sizes.map((size) => (
                      <option key={size} value={size}>
                        {size}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="quantity" className="block text-gray-700 font-medium mb-1">
                    Quantity
                  </label>
                  <input
                    type="number"
                    id="quantity"
                    value={editingItem.quantity}
                    onChange={handleQuantityChange}
                    min="1"
                    className="w-full p-2 border border-gray-300 rounded-md"
                  />
                </div>
                <div className="flex justify-end gap-2 mt-4">
                  <button
                    onClick={closeModal}
                    className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleUpdate}
                    className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                  >
                    Update
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;