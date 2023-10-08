//Redirect to this page when animal clicked. Open page that has additional information. Include 2 funfacts. 
//look at page line 60ish on how to access the database then use common name to find info -hectorS
//find out how to extract url info -hectorS
'use client'
import React, { useState, useEffect } from 'react';
import speciesLink from '../../public/Species.json';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
export default function AnimalDetail() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
    const  name  = 5;
    const creatureName = name ? decodeURIComponent(name.toString()) : 'Loading...';

    // Placeholder Data (Replace with real data)
    const [animalData] = useState({
        image: "URL_TO_IMAGE", //need to replace with real image
        name: creatureName,
        description: "This is a description about the animal...",
        funFact: "Did you know? ...",
        threat: "Endangered",
        location: "Atlantic Ocean"
    });

    return (
        <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center p-4">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-2xl space-y-6">
                
                {/* Image */}
                <div className="w-full h-64 bg-gray-300 mb-4 rounded-md overflow-hidden border-4 border-blue-500">
                    {/* Replace with actual image */}
                    <img src={animalData.image} alt={creatureName} className="w-full h-full object-cover"/>
                </div>

                {/* Name */}
                <h1 className="text-2xl font-bold text-center mb-4">{animalData.name}</h1>
                
                {/* Description */}
                <p className="text-gray-600 text-center">
                    {animalData.description}
                </p>

                {/* Fun Fact */}
                <div className="text-sm text-gray-500 border-t pt-4 space-y-4">
                    <p><span className="font-semibold">Fun Fact:</span> {animalData.funFact}</p>
                </div>

                {/* Threat and Location */}
                <div className="flex justify-between items-center mt-4">
                    <div className="text-sm text-red-600">
                        <span className="font-semibold">Threat:</span> {animalData.threat}
                    </div>
                    <div className="text-sm text-blue-600">
                        <span className="font-semibold">Location:</span> {animalData.location}
                    </div>
                </div>

            </div>
        </div>
    );
}

    

  //   //OpenAI Implementation
  //   // Replace 'YOUR_API_KEY' with your actual OpenAI API key
  //   const apiKey = process.env.OPENAI_API_KEY; // dont post api key on live code goes in enviornment variables

  //   // Define the text you want to send to the API
    

  //   // Make a POST request to the OpenAI API
  //   function generateTextWithPrompt(prompt) {
  //     axios({
  //       method: 'post',
  //       url: 'https://api.openai.com/v1/engines/text-davinci-002/completions',
  //       headers: {
  //         'Content-Type': 'application/json',
  //         'Authorization': `Bearer ${apiKey}`,
  //       },
  //       data: {
  //         prompt,
  //         max_tokens: 50, // You can adjust this to control the response length
  //       },
  //     })
  //     .then((response:any) => {
  //       return response.data.choices[0].text;
  //     })
  //     .catch((error:any) => {
  //       console.error('Error:', error);
  //     });
  //   }
  //   const prompt = `Give a 2 sentences response about a fun fact about ${creatureName}`;
  //   const prompt2 = `Give a 2 sentences response about a fun fact about ${creatureName}`;
  //   const prompt3 = `Give a 2 sentences response about a fun fact about ${creatureName}`;
  //   let funFact = generateTextWithPrompt(prompt);
  //   let description = generateTextWithPrompt(prompt);
  //   let threat = generateTextWithPrompt(prompt);
  //   //use fetch to get images by name
  //   //need scientific name and image
    
  //  const { features } = speciesLink;

  // return (
  //   <div>animal-detail</div>
  // );
//}

//Description British Columbia id data-v-1c3849da data-v-a8b7d12a
//British Columbia data-v-1c3849da data-v-1c3849da
//data-v-1c3849da data-v-a8b7d12a
