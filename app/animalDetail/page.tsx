'use client';
import species from '../../public/Species.json';
import React from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';

export default function AnimalDetail() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Function to navigate back
  const goBack = () => {
    router.back(); // This takes you back to the previous page
  };


  const name = searchParams.get('commonName');
  const creatureName = name ? decodeURIComponent(name.toString()) : 'Loading...';
  const { features } = species;

  const creatureIndex = features.findIndex((feature) => {
    return feature.attributes.Common_Name_EN === creatureName;
  });

  const animalData = {
    image: features[creatureIndex]?.attributes.Image,
    name: creatureName,
    description: features[creatureIndex]?.attributes.Description,
    funFact: features[creatureIndex]?.attributes.Fun_Fact,
    threat: features[creatureIndex]?.attributes.SARA_Status,
    threatReason: features[creatureIndex]?.attributes.Reason,
    moreInfoLink: features[creatureIndex]?.attributes.Species_Link,
    location: features[creatureIndex]?.attributes.Population_EN,
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-2xl space-y-6">
        {/* Add a button to navigate back */}
        <button onClick={goBack} className="text-blue-500 mb-4">
        <span className="mr-2">&#8592;</span>
        </button>

        {/* Name */}
        <h1 className="text-2xl font-bold text-center mb-4">{animalData.name}</h1>

        {/* Image */}
        <div className="w-full h-64 bg-gray-300 mb-4 rounded-md overflow-hidden border-4 border-blue-500">
          <img src={animalData.image} alt={creatureName} className="w-full h-full object-cover" />
        </div>


        {/* Description */}
        {animalData.description !== undefined && animalData.description !== null && (
          <div>{animalData.description}</div>
        )}

        {/* Fun Fact */}
        <div className="text-sm text-gray-500 border-t pt-4 space-y-4">
          <p>
            <span className="font-semibold">Fun Fact:</span> {animalData.funFact}
          </p>
        </div>

        {/* Threat, Reason, and Location */}
        <div className="flex flex-col sm:flex-row justify-between items-center mt-4">
          <div className="text-sm text-red-600 mb-4 sm:mb-0">
            <span className="font-semibold">Threat:</span> {animalData.threat}
            <p className="mt-2">
              {animalData.threatReason !== undefined && animalData.threatReason !== null && (
                <span className="font-semibold">Reason: {animalData.threatReason}</span>
              )}
            </p>
          </div>
          <div className="text-sm text-blue-600">
            <span className="font-semibold">Location:</span> {animalData.location}
          </div>
        </div>

        {/* Hyperlink for more information */}
        <div className="mt-4 text-center">
          <a href={animalData.moreInfoLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
            More Information
          </a>
        </div>
      </div>
    </div>
  );
}
