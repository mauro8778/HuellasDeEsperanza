'use client'
import React, { useEffect, useState } from 'react';
import CardRefuge from './CardRefuge';
import { IRefugios } from '@/interface/IRefugios';

const RandomRefugiosCards: React.FC<{ refugios: IRefugios[] }> = ({ refugios }) => {
  const [randomRefugios, setRandomRefugios] = useState<IRefugios[]>([]);

  useEffect(() => {
    const selectRandomMascotas = () => {
      const shuffled = refugios.sort(() => 0.5 - Math.random());
      const selected = shuffled.slice(0, 3);
      setRandomRefugios(selected);
    };
  
    selectRandomMascotas(); 
  }, [refugios]); 

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      {randomRefugios.map((refugio, index) => (
        <CardRefuge key={index} refugio={refugio} />
      ))}
      <a href="/refugios">
        <button type="button" className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
          Ver más
        </button>
      </a>

    </div>
  );
};

export default RandomRefugiosCards;
