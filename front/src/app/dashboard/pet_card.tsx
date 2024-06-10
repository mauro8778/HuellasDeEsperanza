import { IMascotas } from '@/types';
import React from 'react';

interface mascotasCardProps {
  mascotas: IMascotas;
}

const mascotasCard: React.FC<mascotasCardProps> = ({ mascotas }) => {
  return (
    <div className='bg-white rounded-lg shadow p-4'>
      <h2 className="text-xl font-semibold mb-2">{mascotas.name}</h2>
      <p><strong>Edad:</strong> {mascotas.edad}</p>
      <p><strong>Sexo:</strong> {mascotas.sexo}</p>
      <p><strong>Descripción:</strong> {mascotas.description}</p>
      {/* Añade más campos según sea necesario */}
    </div>
  );
};

export default mascotasCard;
