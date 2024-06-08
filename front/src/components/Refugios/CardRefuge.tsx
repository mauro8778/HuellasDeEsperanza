import React from 'react';
import Image from 'next/image';
import { IRefugios } from '@/interface/IRefugios';

const truncateDescription = (text: string, maxLength: number) => {
  if (text.length <= maxLength) return text;
  return text.substr(0, maxLength) + '...';
};

const CardRefuge: React.FC<{ refugio: IRefugios }> = ({ refugio }) => {
  const truncatedTitle = refugio.shelter_name ? truncateDescription(refugio.shelter_name, 25) : '';
  const truncatedDescription = refugio.description ? truncateDescription(refugio.description, 60) : '';
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 bg-gray-400 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-4 p-5">
      <div className="h-64 relative overflow-hidden rounded-t-lg">
        <Image src={refugio.imgUrl} alt={refugio.name} layout="fill" objectFit="cover" />
      </div>
      <div className="mt-4">
        <h5 className="text-xl font-semibold text-gray-900 dark:text-white">{truncatedTitle}</h5>
        <p className="mt-2 text-gray-700 dark:text-gray-400">{refugio.location} - {refugio.zona}</p>
        <p className="mt-2 text-gray-700 dark:text-gray-400">{truncatedDescription}</p>
        <a href={`/refugios/${refugio.id}`} className="inline-block mt-4 px-4 py-2 text-sm font-semibold text-white bg-pink-600 rounded-lg hover:bg-pink-800 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2">
          Leer más
        </a>
      </div>
    </div>
  );
};

export default CardRefuge;
