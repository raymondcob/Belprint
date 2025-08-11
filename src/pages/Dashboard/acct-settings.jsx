import React from 'react';

export default function AccountSettings() {
  return (
    <div className="mx-auto my-8 max-w-2xl rounded-xl bg-white p-6 shadow-lg">
      <h2 className="mb-6 text-2xl font-bold text-gray-800">Account Settings</h2>
      
      {/* Profile Picture Section */}
      <div className="mb-6 border-b border-gray-200 pb-4">
        <h3 className="mb-2 text-xl font-semibold text-gray-700">Profile</h3>
        <div className="flex items-center space-x-4">
          <img
            className="h-16 w-16 rounded-full object-cover"
            src="https://picsum.photos/200/200"
            alt="User profile"
          />
          <div>
            <p className="text-sm font-medium text-gray-900">Change your profile picture</p>
            <button
              className="mt-1 rounded-md border border-gray-300 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Upload New Photo
            </button>
          </div>
        </div>
      </div>
      
      {/* Basic Information Section */}
      <div>
        <h3 className="mb-4 text-xl font-semibold text-gray-700">Personal Information</h3>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="mb-1 block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
              defaultValue="User"
            />
          </div>
          <div>
            <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
              defaultValue="user@example.com"
            />
          </div>
          <div className='grid grid-cols-2 gap-2 '>

            <div>
                  <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-700">
              Change Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
              defaultValue="user@example.com"
            />
            </div>
            <div>
              <label htmlFor="password" className="mb-1 block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
              defaultValue="user@example.com"
            />
            </div>
             
           
          </div>
           
          <div className="flex justify-end pt-4">
            <button
              type="submit"
              className="rounded-lg bg-blue-600 px-6 py-3 text-lg font-medium text-white shadow-md transition-colors hover:cursor-pointer hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}