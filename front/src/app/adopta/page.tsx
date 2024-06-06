'use client'
import React, { useState, useEffect } from 'react';
import ListaMascotas from '@/components/Card-Animals/ListaMascotas';
import { IMascotas } from '@/interface/IMascotas';
import Modal from '@/components/Card-Animals/FiltroMascotas/Modal';

export default function Adopta() {
  const [mascotasState, setMascotasState] = useState<IMascotas[]>([]);
  const [filters, setFilters] = useState({ age: '', pet_size: '', breed: '' });
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchMascotas = async (filters: { age: string, pet_size: string, breed: string }) => {
      try {
        const { age, pet_size, breed } = filters;
        const queryParams = new URLSearchParams();

        if (age) queryParams.append('age', age);
        if (pet_size) queryParams.append('pet_size', pet_size.toLowerCase());
        if (breed) queryParams.append('breed', breed.toLowerCase());

        const response = await fetch(`https://backpf-prueba.onrender.com/search/pets?${queryParams.toString()}`);
        if (!response.ok) {
          throw new Error('Error al obtener los datos de las mascotas');
        }
        const data: IMascotas[] = await response.json();
        setMascotasState(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMascotas(filters);
  }, [filters]);

  const handleFilterChange = (newFilters: { age: string, pet_size: string, breed: string }) => {
    setFilters(newFilters);
  };

  const handleModalFilter = (age: string, sexo: string, category: string, petSize: string) => {
    handleFilterChange({ age, pet_size: petSize.toLowerCase(), breed: category.toLowerCase() });
    setIsModalOpen(false);
  };

  return (
    <main>
      <h1>Nuestras Mascotas</h1>
      <button onClick={() => setIsModalOpen(true)} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Filtrar Mascotas</button>
      <ListaMascotas mascotas={mascotasState} />
      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)} onFilter={handleModalFilter} />
      )}
    </main>
  );
}
