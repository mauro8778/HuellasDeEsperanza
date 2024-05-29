import React from 'react';
import Image from 'next/image';
import { IMascotas } from '@/interface/IMascotas';

const CardAnimals: React.FC<{ mascota: IMascotas }> = ({ mascota }) => {  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <Image src={mascota.image} alt={mascota.name} width={500} height={500} className="w-full h-auto rounded-md mb-4" />
      <h1 className="text-xl font-semibold mb-2 text-black">{mascota.name}</h1>
      <p className="text-gray-600 mb-2">{mascota.edad} - {mascota.sexo}</p>
      {/* <p className="text-gray-800">{mascota.description}</p> */}
    </div>
  );
};


export default CardAnimals;
