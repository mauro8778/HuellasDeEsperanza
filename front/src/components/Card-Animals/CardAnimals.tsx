import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IMascotas } from '@/interface/IMascotas';

const truncateDescription = (text: string, maxLength: number) => {
  if (text.length <= maxLength) return text;
  return text.substr(0, maxLength) + '...';
};

const CardAnimals: React.FC<{ mascota: IMascotas }> = ({ mascota }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedMascota, setEditedMascota] = useState<IMascotas>(mascota);
  const [reloadPage, setReloadPage] = useState(false); 

  const truncatedDescription = mascota.description ? truncateDescription(mascota.description, 25) : '';

  useEffect(() => {
    setEditedMascota(mascota);
  }, [mascota]);

  const imgUrl = mascota.imgUrl!.startsWith('http://') || mascota.imgUrl!.startsWith('https://') 
    ? mascota.imgUrl 
    : `/${mascota.imgUrl}`;

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleModalClose = () => {
    setIsEditing(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedMascota(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setEditedMascota(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSaveChanges = async () => {
    try {
      const response = await fetch(`https://backpf-prueba.onrender.com/pets/${mascota.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(editedMascota)
      });
      
      if (response.ok) {
        console.log('Mascota actualizada exitosamente');
        setIsEditing(false);
        setEditedMascota(editedMascota);
        setReloadPage(true); 
      } else {
        console.error('Error al actualizar la mascota:', response.statusText);
      }
      
    } catch (error) {
      console.error('Error al actualizar la mascota:', error);
    }
  };

  useEffect(() => {
    if (reloadPage) {

      setTimeout(() => {
        setReloadPage(false); 
      }, 1000);
    }
  }, [reloadPage]);

  return (
    <>
      <div className="bg-transparent rounded-lg shadow-2xl p-4 m-2 md:m-4 max-w-xs mx-auto transform transition-transform duration-200 hover:scale-105">
        <div className="absolute top-2 right-2">
          <button onClick={handleEditClick} className="group">
            <svg 
                className="h-8 w-8 text-green-700 group-hover:text-rose-500" 
                viewBox="0 0 24 24"  
                fill="none"  
                stroke="currentColor"  
                stroke-width="2"  
                stroke-linecap="round"  
                stroke-linejoin="round">  
                <circle cx="12" cy="12" r="1" />  
                <circle cx="19" cy="12" r="1" />  
                <circle cx="5" cy="12" r="1" />
            </svg>
          </button>

        </div>
        <Link href={`/adopta/${mascota.id}`}>
          <div className="flex justify-center mt-5">
            {mascota.imgUrl && (
              <Image
                src={imgUrl!}
                alt={mascota.name!}
                width={150}
                height={150}
                className="w-full h-48 object-cover rounded-t-md" 
                priority
              />
            )}
          </div>
          <div className="p-4">
            <h1 className="text-lg font-semibold mb-2 text-black">{mascota.name}</h1>
            <p className="text-gray-600 mb-2">{mascota.age} años - {mascota.sexo}</p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 min-h-10">{truncatedDescription}</p>
          </div>
        </Link>
      </div>

      {isEditing && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75 z-50">
        <div className="bg-white rounded-lg p-4 max-w-xs w-full"> 
          <h2 className="text-lg font-semibold mb-4">Editar Mascota</h2>
          <div className="mb-2">
            <label htmlFor="name" className="block text-xs text-gray-600">Nombre</label>
            <input
              type="text"
              name="name"
              id="name"
              value={editedMascota.name}
              onChange={handleInputChange}
              className="border border-gray-300 p-2 mb-2 rounded-lg w-full"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="breed" className="block text-xs text-gray-600">Raza</label>
            <input
              type="text"
              name="breed"
              id="breed"
              value={editedMascota.breed}
              onChange={handleInputChange}
              className="border border-gray-300 p-2 mb-2 rounded-lg w-full"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="age" className="block text-xs text-gray-600">Edad</label>
            <input
              type="number"
              name="age"
              id="age"
              value={editedMascota.age}
              onChange={handleInputChange}
              className="border border-gray-300 p-2 mb-2 rounded-lg w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="pet_size" className="block text-xs text-gray-600">Tamaño de Mascota</label>
            <select
              name="pet_size"
              id="pet_size"
              value={editedMascota.pet_size}
              onChange={handleSelectChange} 
              className="border border-gray-300 p-2 mb-2 rounded-lg w-full"
            >
              <option value="small">Pequeño</option>
              <option value="medium">Mediano</option>
              <option value="large">Grande</option>
            </select>
          </div>
          <div className="flex justify-between">
            <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700" onClick={handleSaveChanges}>Guardar</button>
            <button className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-700" onClick={handleModalClose}>Cerrar</button>
          </div>
        </div>
      </div>
      
    )}
  </>
);
};

export default CardAnimals;
