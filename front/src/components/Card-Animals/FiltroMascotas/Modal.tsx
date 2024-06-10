
import React, { useState, useEffect } from 'react';

interface ModalProps {
  onClose: () => void;
  onFilter: (edad: string, sexo: string, category: string, petSize: string) => void;
  options: { age: string[], pet_size: string[], breed: string[] };
}

const Modal: React.FC<ModalProps> = ({ onClose, onFilter, options }) => {
  const [edad, setEdad] = useState('');
  const [sexo, setSexo] = useState('');
  const [category, setCategory] = useState('');
  const [petSize, setPetSize] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const handleFilter = () => {
    onFilter(edad, sexo, category.toLowerCase(), petSize.toLowerCase());
  };

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  return (
    <div className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <div className={`bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-300 ${isOpen ? 'scale-100' : 'scale-90'}`}>
        <h2 className="text-2xl font-bold mb-4">Filtrar Mascotas</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">Edad</label>
          <select
            value={edad}
            onChange={(e) => setEdad(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded">
            <option value="">Todas</option>
            {options.age.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">Sexo</label>
          <select
            value={sexo}
            onChange={(e) => setSexo(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded">
            <option value="">Todos</option>
            <option value="Hembra">Hembra</option>
            <option value="Macho">Macho</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">Raza</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="">Todos</option>
            {options.breed.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">Tamaño</label>
          <select
            value={petSize}
            onChange={(e) => setPetSize(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="">Todos</option>
            {options.pet_size.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>
        <div className="flex justify-end space-x-2">
          <button onClick={handleFilter} className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">Aplicar Filtro</button>
          <button onClick={handleClose} className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600">Cerrar</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
