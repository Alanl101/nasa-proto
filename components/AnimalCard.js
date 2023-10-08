import Link from 'next/link';
import React from 'react';

function AnimalCard(props) {
  const {
    imageUrl,
    commonName,
    scientificName,
    waterBody,
    ecoType,
    status,
    leadRegion,
  } = props;

  return (
    <div className="bg-white p-4 rounded-lg border border-black shadow-md mx-auto my-4 w-1/2 cursor-pointer flex">
      {/* Left column for the image */}
      <div className="w-1/2">
        <Link href="../app/animal-detail.tsx">
            <img src={imageUrl} alt={commonName} className="w-full rounded-lg" />
        </Link>
      </div>
      
      {/* Right column for the text data */}
      <div className="w-1/2 p-4">
        <Link href="../app/animal-detail.tsx">
            
            <h2 className="text-xl font-semibold mb-2 text-center">{commonName}</h2>
            <p className="text-center">Scientific Name: {scientificName}</p>
            <p className="text-center">Water Body: {waterBody}</p>
            <p className="text-center">Ecotype: {ecoType}</p>
            <p className="text-center">Status: {status}</p>
            <p className="text-center">Lead Region: {leadRegion}</p>            
        </Link>
        
      </div>
    </div>
  );
}

export default AnimalCard;
