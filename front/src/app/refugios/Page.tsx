'use client'
import { useState } from 'react';
import ListaRefugios from '@/components/Refugios/ListaRefugios';
import Modal from '@/components/Filter/Modal';
import { useFilter } from '@/components/Filter/useFilter';
import FormularioMascota from '@/components/Refugios/PostMascotas';
import ModalPost from '@/components/Refugios/ModalPostMascotas';

export default function Refuge() {
  const { isModalOpen, openModal, closeModal, filteredRefugios, handleFilter } = useFilter();
  const [mostrarModal, setMostrarModal] = useState(false);

  return (
    <main className="p-4">
      <h1 className="text-3xl font-bold mb-4">Lista de Refugios</h1>
      
      <div className="relative w-full mb-20">
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <button onClick={openModal} className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Filtrar Refugios
            </span>
          </button>
        </div>
        <div className="absolute right-0">
          <button onClick={() => setMostrarModal(true)} className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Añadir mascota
            </span>
          </button>
        </div>
      </div>

      <ListaRefugios refugios={filteredRefugios} />
      {isModalOpen && (
        <Modal onClose={closeModal} onFilter={handleFilter} />
      )}

      <ModalPost isVisible={mostrarModal} onClose={() => setMostrarModal(false)}>
        <FormularioMascota onClose={() => setMostrarModal(false)} />
      </ModalPost>
    </main>
  );
}
