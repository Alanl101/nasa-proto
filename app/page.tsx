
import React from 'react';

export default function Home() {
  // Define the URL of your image
  const imageUrl = 'https://wildlife-species.az.ec.gc.ca/species-risk-registry/images/photos/spp134p1.jpg';

  
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
            className="w-full p-2 border rounded-lg border border-black focus:outline-none focus:border-blue-400"
          />
          <button className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
            Search
          </button>
        </div>
      </div>

      {/* Display the image */}
      <div className="mx-auto my-4 w-1/2">
        <img src={imageUrl} alt="Canada Species Registry" className="w-full rounded-lg border border-black shadow-md" />
      </div>

       {/* First fun fact box */}
      <div className="bg-white p-4 rounded-lg border border-black shadow-md mx-auto my-4 w-1/2">
        <h2 className="text-xl font-semibold mb-2 text-center">Fun Fact 1</h2>
        <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>

      {/* Second fun fact box */}
      <div className="bg-white p-4 rounded-lg border border-black shadow-md mx-auto my-4 w-1/2">
        <h2 className="text-xl font-semibold mb-2 text-center">Fun Fact 2</h2>
        <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
  );
}
