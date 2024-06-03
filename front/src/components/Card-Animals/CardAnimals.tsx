import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IMascotas } from '@/interface/IMascotas';

const truncateDescription = (text: string, maxLength: number) => {
  if (text.length <= maxLength) return text;
  return text.substr(0, maxLength) + '...';
};

const CardAnimals: React.FC<{ mascota: IMascotas }> = ({ mascota }) => {
  const truncatedDescription = truncateDescription(mascota.description, 50);
  return (
    <Link href={`/adopta/${mascota.id}`}>
        <div className="bg-transparent rounded-lg shadow-2xl p-4 m-2 md:m-4 max-w-xs mx-auto transform transition-transform duration-200 hover:scale-105">
          <div className="flex justify-center"> 
            <Image 
              src={mascota.image} 
              alt={mascota.name} 
              width={300} 
              height={300} 
              className="w-full h-48 object-cover rounded-t-md" 
            />
          </div>
          <div className="p-4">
            <h1 className="text-lg font-semibold mb-2 text-black">{mascota.name}</h1>
            <p className="text-gray-600 mb-2">{mascota.edad} - {mascota.sexo}</p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{truncatedDescription}</p>
          </div>
        </div>
    </Link>
  );
};

export default CardAnimals;
