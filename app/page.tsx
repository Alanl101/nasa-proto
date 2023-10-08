'use client'

import speciesData from '../public/Species.json';
import speciesData2 from '../public/Species2.json';
import AnimalCard from '../components/AnimalCard.js'; 
import React, { useState } from 'react';


export default function Home() {
  /*Search Bar Filter*/
  const [inputValue, setInputValue] = useState('');
  const [filteredResults, setFilteredResults] = useState<string[]>([]);

  let SpeciesLocation = [""];
  
  for (var feature of speciesData2.features) {
    if(feature.attributes.Population_EN != null)
      if(!SpeciesLocation.includes(feature.attributes.Population_EN)){
        SpeciesLocation.push(feature.attributes.Population_EN);
      }
    if(!SpeciesLocation.includes(feature.attributes.Waterbody)){

      SpeciesLocation.push(feature.attributes.Waterbody);
    }
    if(!SpeciesLocation.includes(feature.attributes.Lead_Region)){
      SpeciesLocation.push(feature.attributes.Lead_Region);
    }
    if(!SpeciesLocation.includes(feature.attributes.Common_Name_EN)){
      SpeciesLocation.push(feature.attributes.Common_Name_EN);
    }
  }

  const handleInputChange = (event: any) => {
    const value: string = event.target.value;

    setInputValue(value);

    // Perform filtering logic here based on your requirements
    const filtered = filterResults(value).slice(0, 5);

    // Update the filtered results state
    setFilteredResults(filtered);
  };

  const handleResultClick = (result: string) => {
    // Update the inputValue when a result is clicked
    setInputValue(result);
  };

  const filterResults = (value: string) => {
    // Replace this with your actual filtering logic
    const keywords = value.toLowerCase();
    const filtered = SpeciesLocation.filter((item) =>
      item.toLowerCase().includes(keywords)
    );
    return filtered;
  };

   // Access the features array from the imported JSON data
   const { features } = speciesData;

  const [selectedStatusFilter, setSelectedStatusFilter] = useState();
  const [selectedLocationFilter, setSelectedLocationFilter] = useState();

  // Function to handle status filter selection
  const handleStatusFilterChange = (event: any) => {
    setSelectedStatusFilter(event.target.value);
  };

  // Function to handle location filter selection
  const handleLocationFilterChange = (event: any) => {
    setSelectedLocationFilter(event.target.value);
  };



  // Function to filter animal cards based on selected filters
  const filteredAnimalCards = features.filter((feature) => {
    const statusFilterMatch =
      !selectedStatusFilter || feature.attributes.SARA_Status === selectedStatusFilter;

    
    const locationFilterMatch =
      !selectedLocationFilter || feature.attributes.Lead_Region === selectedLocationFilter;

    // Return true if both filters match, otherwise, return false
    return statusFilterMatch || locationFilterMatch;
  });

  return (
    <div className="min-h-screen flex flex-col">
      {/* Title with blue background */}
      <header className="bg-blue-600 py-4 text-white text-center">
        <h1 className="text-2xl font-semibold">Operation Save Them Sea Critters</h1>
      </header>
      
      {/* Search bar */}
      <div className="search-box p-4 mx-auto my-4 w-1/2 ">
        <div className="flex items-center justify-between">
          <input
            type="text"
            id="input-box"
            placeholder="Find Endangered Species Near Me"
            className="w-full p-2 border rounded-lg border border-black focus:outline-none focus:border-blue-400"
            value={inputValue}
            onChange={handleInputChange}
            onKeyUp={handleInputChange}
          />
          <button className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
            Search
          </button>
        </div>
        {inputValue !== '' && (
        <ul className="result-box">
          {filteredResults.map((result, index) => (
           <li
           key={index}
           className="result-item"
           onClick={() => handleResultClick(result)}
          >
          {result}
            </li>
          ))}
        </ul>
      )}
      </div>

     
      {/* Filters */}
      <div className="p-4 mx-auto w-1/2">
        <label htmlFor="statusfilter">Filter by Status:</label>
        <select
          id="statusfilter"
          className="ml-2 p-2 border rounded-lg border border-black focus:outline-none focus:border-blue-400"
          onChange={handleStatusFilterChange}
          value={selectedStatusFilter}
        >
          <option value="Endangered">Endangered</option>
          <option value="Threatened">Threatened</option>
          <option value="Special Concern">Special Concern</option>
          <option value="Data Deficient">Data Deficient</option>
          <option value="Non-active">Non-active</option>
          <option value="Not at Risk">Not at Risk</option>
          <option value="Extirpated">Extirpated</option>
          <option value="Extinct">Extinct</option>
        </select>
      </div>

      {/* Filters */}
      <div className="p-4 mx-auto w-1/2">
        <label htmlFor="locationfilter">Filter by Location:</label>
        <select
          id="locationfilter"
          className="ml-2 p-2 border rounded-lg border border-black focus:outline-none focus:border-blue-400"
          onChange={handleLocationFilterChange}
          value={selectedLocationFilter}
        >
          <option value="Range">Range</option>
          <option value="Ontario">Ontario</option>
          <option value="Atlantic Ocean">Atlantic Ocean</option>
          <option value="British Columbia">British Columbia</option>
          <option value="Northwest Territories">Northwest Territories</option>
          <option value="Saskatchewan">Saskatchewan</option>
          <option value="Quebec">Quebec</option>
          <option value="Alberta">Alberta</option>
          <option value="Manitoba">Manitoba</option>
          <option value="Yukon">Yukon</option>
          <option value="Pacific Ocean">Pacific Ocean</option>
          <option value="Newfoundland and Labrador">Newfoundland and Labrador</option>
          <option value="Arctic Ocean">Arctic Ocean</option>
          <option value="Prince Edward Island">Prince Edward Island</option>
          <option value="Nova Scotia">Nova Scotia</option>
          <option value="Nunavut">Nunavut</option>
          <option value="New Brunswick">New Brunswick</option>
          <option value="Central and Artic">Central and Artic</option>
        </select>
      </div>

      {/* Animal Cards */}
    <div className="grid grid-cols-1 gap-4">
      {filteredAnimalCards.map((feature, index) => (
        <AnimalCard
          key={index}
          commonName={feature.attributes.Common_Name_EN}
          scientificName={feature.attributes.Scientific_Name}
          waterBody={feature.attributes.Waterbody}
          ecoType={feature.attributes.Eco_Type}
          status={feature.attributes.SARA_Status}
          leadRegion={feature.attributes.Lead_Region}
          imageUrl={feature.attributes.Image}
          
        />
      ))}
    </div>

      

    </div>
  );
}
