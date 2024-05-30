'use client';
import React, { useEffect, useState } from 'react';
import CardAnimals from './CardAnimals';
import { IMascotas } from '@/interface/IMascotas';

const RandomAnimalCards: React.FC<{ mascotas: IMascotas[] }> = ({ mascotas }) => {
  const [randomMascotas, setRandomMascotas] = useState<IMascotas[]>([]);

  const selectRandomMascotas = () => {
    const shuffled = [...mascotas].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 3);
    setRandomMascotas(selected);
  };

  useEffect(() => {
    selectRandomMascotas();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mascotas]);

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      {randomMascotas.map((mascota, index) => (
        <CardAnimals key={index} mascota={mascota} />
      ))}
      <button 
        type="button" 
        className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        onClick={selectRandomMascotas}
      >
        Ver más
      </button>
    </div>
  );
};

export default RandomAnimalCards;
