import React, { useState } from 'react';

interface ModalProps {
  onClose: () => void;
  onFilter: (edad: string, raza: string, tamaño: string) => void;
  isOpen: boolean;
  edades: number[];
  razas: string[];
  tamaños: string [];
}

const ModalFilterMascotas: React.FC<ModalProps> = ({ onClose, onFilter, isOpen, edades, razas, tamaños }) => {
  const [edad, setEdad] = useState('');
  const [raza, setRaza] = useState('');
  const [tamaño, setTamaño] = useState('');

  const handleFilter = () => {
    onFilter(edad, raza, tamaño);
    onClose();
  };

  return (
    <div className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <div className={`bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-300 ${isOpen ? 'scale-100' : 'scale-90'}`}>
        <h2 className="text-2xl font-bold mb-4">Filtrar Mascota</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">Edad</label>
          <select
            value={edad}
            onChange={(e) => setEdad(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded">
            <option value="">Todas</option>
            {edades.map((edade, index) => (
              <option key={index} value={edade}>{edade}</option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">Raza</label>
          <select
            value={raza}
            onChange={(e) => setRaza(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded">
            <option value="">Todas</option>
            {razas.map((zon, index) => (
              <option key={index} value={zon}>{zon}</option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">Tamaño</label>
          <select
            value={tamaño}
            onChange={(e) => setTamaño(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded">
            <option value="">Todas</option>
            {tamaños.map((tam, index) => (
              <option key={index} value={tam}>{tam}</option>
            ))}
          </select>
        </div>
        <div className="flex justify-end space-x-2">
          <button onClick={handleFilter} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Aplicar Filtro</button>
          <button onClick={onClose} className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600">Cerrar</button>
        </div>
      </div>
    </div>
  );
};

export default ModalFilterMascotas;
