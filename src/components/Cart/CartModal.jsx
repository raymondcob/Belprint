import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SideModal from "../common/SideModal";
import { IoBagCheckOutline } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaTimes } from "react-icons/fa";
import Shirt from "../../assets/shirtsample.jpg";

const sizes = ["Small", "Medium", "Large", "X-Large", "XX-Large"];

const CartModal = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
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

  const openEditModal = (item) => {
    setEditingItem({ ...item });
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
    setEditingItem(null);
  };

  const handleUpdate = () => {
    if (editingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === editingItem.id ? editingItem : item
        )
      );
      closeEditModal();
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

  const handleCheckout = () => {
    onClose();
    setTimeout(() => navigate("/cart-checkout"), 100);
  };

  return (
    <>
      <SideModal isOpen={isOpen} onClose={onClose}>
        {/* Header Content */}
        <div className="flex  flex-col justify-start p-4 border-b border-gray-300">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white text-2xl hover:text-gray-500 focus:outline-none hover:cursor-pointer"
          >
            <FaTimes size={24} />
          </button>
          <h3 className="font-bold  text-2xl md:text-3xl mt-2">
            My Cart
            <span className="text-2xl md:text-3xl text-gray-500 ml-2">
              ({cartItems.length} item{cartItems.length !== 1 ? "s" : ""})
            </span>
          </h3>
        </div>
        {/* Main Cart Content */}
        <div className="flex flex-col  w-full px-4 py-6 text-white ">
          <div className="flex flex-col w-full gap-6">
            {/* Cart Items List */}
            <div className=" w-full  rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl p-6">
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
                  className="flex flex-col md:flex-row items-center rouned-lg bg-black/30 mt-4 gap-8 border rounded-lg border-gray-800 p-6"
                >
                  <div className="w-full md:w-[45%] flex items-center gap-4 ">
                    <img
                      src={Shirt}
                      alt="Shirt"
                      className="w-24 h-24 rounded-md object-cover"
                    />
                    <div className="flex flex-col">
                      <h4 className="font-bold text-lg">{item.product}</h4>
                      <p className="text-gray-500 text-sm">
                        Color:{" "}
                        <span className="font-semibold text-white">
                          {item.color}
                        </span>
                      </p>
                      <p className="text-gray-500 text-sm">
                        Print On:{" "}
                        <span className="font-semibold text-white">
                          {item.printon}
                        </span>
                      </p>
                      <button
                        className="text-sm font-semibold mt-2 self-start hover:cursor-pointer transition-colors border border-blue rounded-md p-1"
                        style={{ color: "var(--primary)" }}
                        onClick={() => openEditModal(item)}
                        onMouseEnter={(e) =>
                          (e.target.style.color = "var(--primary-hover)")
                        }
                        onMouseLeave={(e) =>
                          (e.target.style.color = "var(--primary)")
                        }
                      >
                        Edit Qty & Size
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
                      <span className="font-semibold">
                        ${item.price.toFixed(2)}
                      </span>
                    </div>
                    <div className="w-full md:w-1/4 my-2 md:my-0">
                      <span className="md:hidden font-semibold">
                        Print Size:{" "}
                      </span>
                      <span className="font-semibold">{item.printsize}</span>
                    </div>
                    <div className="w-full md:w-1/4 my-2 md:my-0 flex flex-col items-center">
                      <span className="md:hidden font-semibold">
                        Quantity:{" "}
                      </span>
                      <span className="font-semibold">
                        {item.size} ({item.quantity})
                      </span>
                    </div>
                    <div className="w-full md:w-1/4 my-2 md:my-0">
                      <span className="md:hidden font-semibold">
                        Subtotal:{" "}
                      </span>
                      <span className="font-semibold text-lg">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="bg-black/30 mt-4  border border-gray-800  w-full md:w-[90%] mx-auto  rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl p-6 h-fit">
              <h3 className="text-2xl font-bold text-start mb-5">
                Order Summary
              </h3>
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
                  className="animated-border-button "
                  onClick={handleCheckout}
                >
                  <div className="button-content flex items-center justify-center gap-2">
                    <IoBagCheckOutline />
                    Checkout
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </SideModal>

      {/* The Edit Item Modal - Now a standalone component */}
      {isEditModalOpen && (
        <div className="fixed inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center z-[10001] p-4">
          <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-2xl relative">
            <button
              onClick={closeEditModal}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-2xl"
            >
              &times;
            </button>
            <h3 className="text-2xl font-bold mb-4">Edit Item</h3>
            {editingItem && (
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <img
                    src={Shirt}
                    alt="Shirt"
                    className="w-20 h-20 rounded-md"
                  />
                  <div>
                    <h4 className="font-bold">{editingItem.product}</h4>
                    <p className="text-gray-500 text-sm">
                      Color:{" "}
                      <span className="font-semibold text-black">
                        {editingItem.color}
                      </span>
                    </p>
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="size"
                    className="block text-gray-700 font-medium mb-1"
                  >
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
                  <label
                    htmlFor="quantity"
                    className="block text-gray-700 font-medium mb-1"
                  >
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
                    onClick={closeEditModal}
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
    </>
  );
};

export default CartModal;
