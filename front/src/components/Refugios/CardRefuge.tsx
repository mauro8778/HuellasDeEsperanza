import React from 'react';
import Image from 'next/image';
import { IRefugios } from '@/interface/IRefugios';

const CardRefuge: React.FC<{ refugio: IRefugios }> = ({ refugio }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-2 mb-4 w-64"> 
      <Image src={refugio.image} alt={refugio.name} width={300} height={200} className="w-full h-auto rounded-md mb-2" />
      <h1 className="text-xl font-semibold mb-2 text-black">{refugio.name}</h1>
      <p className="text-gray-600 mb-2">{refugio.provincia} - {refugio.zona}</p>
      {/* <p className="text-gray-800">{refugio.description}</p> */}
    </div>
  );
};

export default CardRefuge;
