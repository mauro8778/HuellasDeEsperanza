'use client';
import { useEffect, useState } from 'react';
import Mascotas from '@/utils/mascotas'; 
import { IMascotas } from '@/interface/IMascotas';

const MascotasPage: React.FC = () => {
  const [mascotas, setMascotas] = useState<IMascotas[]>([]);

  useEffect(() => {
    // Seteo todas las mascotas en el estado al cargar la página
    setMascotas(Mascotas);
  }, []);

  return (
    <div>
      <h1>Todas las Mascotas</h1>
      <ul>
        {mascotas.map((mascota) => (
          <li key={mascota.id}>{mascota.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default MascotasPage;
