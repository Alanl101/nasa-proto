import speciesData from '../public/Species.json';
import AnimalCard from '../components/AnimalCard.js'; 
//import React, { useState, useEffect } from 'react';

export default function Home() {
  
  const animalData = {
    imageUrl: 'https://wildlife-species.az.ec.gc.ca/species-risk-registry/images/photos/spp1236p1.jpg',
    commonName: 'Common Name',
    scientificName: 'Scientific Name',
    waterBody: 'Water Body',
    ecoType: 'Ecotype',
    status: 'Endangered',
    leadRegion: 'Pacific',
  };

  //console.log(speciesData.features[0]);
  let SpeciesLocation = ["", null];
  
  for (var feature of speciesData.features) {
    // console.log(feature.attributes.Common_Name_EN);
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
  
  //console.log(SpeciesLocation);
  var displayFish = [{}];
  var nameFish = [""];
  let KeySearch2 = "North"
  for (var feature of speciesData.features) {
    // Assuming you want to check if the Common_Name_EN includes the KeySearch
    if(!nameFish.includes(feature.attributes.Common_Name_EN)){
      nameFish.push(feature.attributes.Common_Name_EN);
      if (feature.attributes.Common_Name_EN.includes(KeySearch2 )) {
        displayFish.push(feature);
        continue;
      }
      if (feature.attributes.Waterbody.includes(KeySearch2)) {
        displayFish.push(feature);
        continue;
      }
      if (feature.attributes.Lead_Region.includes(KeySearch2)) {
        displayFish.push(feature);
        continue;
      }
      if(feature.attributes.Population_EN != null){
        if (feature.attributes.Population_EN.includes(KeySearch2)) {
          displayFish.push(feature);
          continue;
        }
      }
    }
  }

  console.log(displayFish);
  //Search Bar implementation Even Handler
  // const [KeySearch, setKeySearch] = useState("");
  // const  [Display, setDisplay] = useState(null);
  // useEffect(() => {
  // var displayFish = [{}];
  // if (SpeciesLocation.includes(KeySearch)) {
  //   console.log("Added Fixes");
  //   for (var feature of speciesData.features) {
  //     // Assuming you want to check if the Common_Name_EN includes the KeySearch
  //     if (feature.attributes.Common_Name_EN.includes(KeySearch)&& !displayFish.includes(feature)) {
  //       displayFish.push(feature);
  //     }
  //     if (feature.attributes.Waterbody.includes(KeySearch)&& !displayFish.includes(feature)) {
  //       displayFish.push(feature);
  //     }
  //     if (feature.attributes.Lead_Region.includes(KeySearch)&& !displayFish.includes(feature)) {
  //       displayFish.push(feature);
  //     }
  //     if(feature.attributes.Population_EN != null){
  //       if (feature.attributes.Population_EN.includes(KeySearch)&& !displayFish.includes(feature)) {
  //         displayFish.push(feature);
  //       }
  //     }
  //   }

  //   // for(var info in displayFish){
  //   //   let animalDataCreation = {
  //   //     imageUrl: 'https://wildlife-species.az.ec.gc.ca/species-risk-registry/images/photos/spp1236p1.jpg',
  //   //     commonName: info.attributes.Common_Name_EN,
  //   //     scientificName: 'Scientific Name',
  //   //     waterBody: 'Water Body',
  //   //     ecoType: 'Ecotype',
  //   //     status: 'Endangered',
  //   //     leadRegion: 'Pacific',
  //   //   };
  //   // }

  // } else {
  //   console.log("Not found");
  // }
  // }, []);
  
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
      <AnimalCard {...animalData} />


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
