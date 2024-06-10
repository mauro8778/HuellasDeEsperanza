import React from 'react';
import { IMascotas } from '@/interface/IMascotas';

interface Props {
  editedMascota: IMascotas;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSelectChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  handleSaveChanges: () => void;
  handleModalClose: () => void;
}

const EditMascota: React.FC<Props> = ({
  editedMascota,
  handleInputChange,
  handleSelectChange,
  handleSaveChanges,
  handleModalClose
}) => {
  return (
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
        {/* <div className="mb-2">
          <label htmlFor="age" className="block text-xs text-gray-600">Edad</label>
          <input
            type="number"
            name="age"
            id="age"
            value={editedMascota.age}
            onChange={handleInputChange}
            className="border border-gray-300 p-2 mb-2 rounded-lg w-full"
          />
        </div> */}
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
  );
};

export default EditMascota;
