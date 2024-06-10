import { IRefugios } from '@/types';
import React from 'react';

interface ShelterCardProps {
  refugio: IRefugios;
}

const ShelterCard: React.FC<ShelterCardProps> = ({ refugio }) => {
  return (
    <div className='bg-white rounded-lg shadow p-4 mb-4'>
      <h2 className="text-xl font-semibold mb-2">{refugio.name}</h2>
      <p><strong>Provincia:</strong> {refugio.provincia}</p>
      <p><strong>Zona:</strong> {refugio.zona}</p>
      <p><strong>Descripción:</strong> {refugio.description}</p>
      {/* Añade más campos según sea necesario */}
    </div>
  );
};

export default ShelterCard;
