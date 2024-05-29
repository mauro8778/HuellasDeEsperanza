'use client';
import { useEffect, useState } from 'react';
import Mascotas from '@/utils/mascotas'; 
import { IMascotas } from '@/interface/IMascotas';

export const PerrosPage: React.FC = () => {
  const [dogs, setDogs] = useState<IMascotas[]>([]);

  useEffect(() => {
    
    const filterDogs = Mascotas.filter(mascota => mascota.category === 'Perro');
    setDogs(filterDogs);
  }, []);

  return (
    <div>
      <h1>Perros</h1>
      <ul>
        {dogs.map((perro) => (
          <li key={perro.id}>{perro.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default PerrosPage;
