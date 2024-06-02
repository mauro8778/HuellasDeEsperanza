'use client';
import { useFilter } from "@/components/Card-Animals/FiltroMascotas/useFilter";
import ListaMascotas from "@/components/Card-Animals/ListaMascotas";
import Modal from '@/components/Card-Animals/FiltroMascotas/Modal';

export default function Adopta() {
  const { isModalOpen, openModal, closeModal, handleFilter, filteredMascotas } = useFilter();

  return (
    <main>
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-10">
        <button 
          onClick={openModal} 
          className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Filtrar Mascotas
          </span>
        </button>
      </div>
      <div className="mt-16"> 
        <ListaMascotas mascotas={filteredMascotas} />
      </div>
      {isModalOpen && (
        <Modal onClose={closeModal} onFilter={handleFilter} />
      )}
    </main>
  );
}
