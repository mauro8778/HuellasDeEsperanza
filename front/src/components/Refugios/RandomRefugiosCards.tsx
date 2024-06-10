'use client';
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
    </div>
  );
};

export default RandomRefugiosCards;
