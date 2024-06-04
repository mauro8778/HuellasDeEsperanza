import { useState } from 'react';
import { IMascotas } from '@/interface/IMascotas';


const parseAge = (edad: string): number => {
    const ageParts = edad.split(' ');
    if (ageParts.length === 2) {
        const value = parseInt(ageParts[0]);
        if (ageParts[1].toLowerCase().includes('mes')) {
            return value / 12; 
        }
        if (ageParts[1].toLowerCase().includes('año')) {
            return value;
        }
    }
    return 0; 
};

export const useFilter = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filteredMascotas, setFilteredMascotas] = useState<IMascotas[]>([]);
  const [mascotas, setMascotas] = useState<IMascotas[]>([]); // Declara mascotas aquí
  
  const openModal = () => {
      setIsModalOpen(true);
  };

  const closeModal = () => {
      setIsModalOpen(false);
  };

  const handleFilter = (edad: string, sexo: string, category: string, refugio: string) => {
      console.log("Filtrando con los siguientes criterios:", { edad, sexo, category, refugio });

      const filtered = mascotas.filter(mascota => {
          const mascotaEdad = parseAge(mascota.age);

          const matchesEdad = (edad === '' || 
                              (edad === '<1' && mascotaEdad < 1) || 
                              (edad === '1-4' && mascotaEdad >= 1 && mascotaEdad <= 4) || 
                              (edad === '>4' && mascotaEdad > 4));
          const matchesSexo = (sexo === '' || mascota.sexo === sexo);
          const matchesCategory = (category === '' || mascota.category === category);
  
          return matchesEdad && matchesSexo && matchesCategory ;
      });

      setFilteredMascotas(filtered);
      closeModal();
  };

  return {
      isModalOpen,
      openModal,
      closeModal,
      filteredMascotas,
      handleFilter,
      setMascotas // Añade esta función para actualizar mascotas
  };
};