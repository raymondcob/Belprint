const Dashboard = () => {
  return (
    <div className="max-w-full ">
      <h1 className="text-3xl font-bold text-gray-900 mb-14 text-start ">
        Welcome Back , User
      </h1>

      <div className="grid md:grid-cols-2 gap-6 mb-8 justify-between ">
        <div className=" p-3 rounded-lg shadow-md w-[35%] ">
          <h3 className="text-2xl font-semibold text-gray-700 mb-5">
            Recent Orders
          </h3>
          <p className="text-6xl font-bold text-blue-600 text-center">12</p>
        </div>

        <div className="flex flex-col w-[45%] shadow-md rounded-lg bg-gray-400 p-3 ">
          <h3 className="text-2xl font-semibold text-gray-700 text-start mt-2 ml-2  ">
            Cart Summary
          </h3>
          <div className="flex flex-col content-center items-center mt-3 p-3">
            <h4 className="font-semibold mt-2">
              You Don't have anything in your Cart
            </h4>
            <p className="">Ready to shop? so are we!</p>
            <a href="#">Shop Now</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
