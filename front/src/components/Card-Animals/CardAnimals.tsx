import React from 'react';
import Image from 'next/image';
import { IMascotas } from '@/interface/IMascotas';

const CardAnimals: React.FC<{ mascota: IMascotas }> = ({ mascota }) => {
  return (
    <div className="bg-transparent rounded-lg shadow-2xl p-4 m-2 md:m-4 max-w-xs mx-auto transform transition-transform duration-200 hover:scale-105">
      <div className="flex justify-center"> {/* Agregar esta línea */}
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
        <p className="text-gray-800">{mascota.description}</p>
      </div>
    </div>
  );
};

export default CardAnimals;
