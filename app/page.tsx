
import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Title with blue background */}
      <header className="bg-blue-600 py-4 text-white text-center">
        <h1 className="text-2xl font-semibold">Title</h1>
      </header>
      
      {/* Search bar */}
      <div className="search-box p-4 mx-auto my-4 w-1/2 ">
        <div className="flex items-center justify-between">
          <input
            type="text"
            id="input-box"
            placeholder="Find Endangered Species Near Me"
            className="w-full p-2 border rounded-lg focus:outline-none focus:border-blue-400"
          />
          <button className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
            Search
          </button>
        </div>
      </div>



       {/* First fun fact box */}
      <div className="bg-white p-4 rounded-lg shadow-md mx-auto my-4 w-1/2">
        <h2 className="text-xl font-semibold mb-2 text-center">Fun Fact 1</h2>
        <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>

      {/* Second fun fact box */}
      <div className="bg-white p-4 rounded-lg shadow-md mx-auto my-4 w-1/2">
        <h2 className="text-xl font-semibold mb-2 text-center">Fun Fact 2</h2>
        <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
  );
}
