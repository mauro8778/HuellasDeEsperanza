'use client'
import { useEffect, useState } from 'react';
import Mascotas from '@/utils/mascotas'; 
import { IMascotas } from '@/interface/IMascotas';

export const GatosPage: React.FC = () => {
  const [gatos, setGatos] = useState<IMascotas[]>([]);

  useEffect(() => {
    
    const gatosFiltrados = Mascotas.filter((mascota) => mascota.category === 'Gato');
    setGatos(gatosFiltrados);
  }, []);

  return (
    <div>
      <h1>Gatos</h1>
      <ul>
        {gatos.map((gato) => (
          <li key={gato.id}>{gato.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default GatosPage;
