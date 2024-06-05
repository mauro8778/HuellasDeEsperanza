import React from 'react';
import { IMascotas } from '@/interface/IMascotas';

interface ListaRefugiosProps {
  refugios: IMascotas[];
}

const ListaRefugios: React.FC<ListaRefugiosProps> = ({ refugios }) => {
  return (
    <div>
      {refugios.map((mascota, index) => (
        <div key={index} className="mb-4 p-4 border rounded shadow">
          <h2 className="text-2xl font-bold">{mascota.name}</h2>
          <p>Sexo: {mascota.sexo}</p>
          <p>Raza: {mascota.breed}</p>
          <p>Edad: {mascota.age}</p>
          <p>Tamaño: {mascota.pet_size}</p>
          <p>Descripción: {mascota.description}</p>
          {mascota.imgUrl && (
            <img src={mascota.imageUrl} alt={mascota.name} className="mt-4 w-full h-auto rounded-lg" />
          )}
        </div>
      ))}
    </div>
  );
};

export default ListaRefugios;
