import React from "react";

const Blog = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Blog</h1>
      <p className="text-lg text-gray-600 mb-8">
        Latest news and tips from BelPrint.
      </p>

      <div className="space-y-8">
        <article className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-3">
            Printing Tips for Small Businesses
          </h2>
          <p className="text-gray-600 mb-4">
            Learn how to make the most of your printing budget...
          </p>
          <span className="text-sm text-gray-500">March 15, 2024</span>
        </article>

        <article className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-3">Design Trends 2024</h2>
          <p className="text-gray-600 mb-4">
            Stay ahead with the latest design trends...
          </p>
          <span className="text-sm text-gray-500">March 10, 2024</span>
        </article>
      </div>
    </div>
  );
};

export default Blog;
