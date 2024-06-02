import { useState } from 'react';
import { IMascotas } from '@/interface/IMascotas';
import Mascotas from '@/utils/mascotas';
import Refugios from '@/utils/refugios';

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
    const [filteredMascotas, setFilteredMascotas] = useState<IMascotas[]>(Mascotas);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleFilter = (edad: string, sexo: string, category: string, refugio: string) => {
    console.log("Filtrando con los siguientes criterios:", { edad, sexo, category, refugio });

    const refugioMap = Refugios.reduce((map, refugio) => {
      map[refugio.id] = refugio.name;
      return map;
    }, {} as { [key: string]: string });

    console.log("Mapa de refugios:", refugioMap);

    const filtered = Mascotas.filter(mascota => {
    const mascotaEdad = parseAge(mascota.edad);
    const refugioName = refugioMap[refugio] || '';
    console.log("Mascota:", mascota.name, "Edad (en años):", mascotaEdad, "Refugio:", mascota.refugio, "Refugio Filtro:", refugioName);
    
    const matchesEdad = (edad === '' || 
                        (edad === '<1' && mascotaEdad < 1) || 
                        (edad === '1-4' && mascotaEdad >= 1 && mascotaEdad <= 4) || 
                        (edad === '>4' && mascotaEdad > 4));
    const matchesSexo = (sexo === '' || mascota.sexo === sexo);
    const matchesCategory = (category === '' || mascota.category === category);
    const matchesRefugio = (refugio === '' || mascota.refugio.trim().toLowerCase() === refugioName.trim().toLowerCase());
    
    console.log("matchesEdad:", matchesEdad, "matchesSexo:", matchesSexo, "matchesCategory:", matchesCategory, "matchesRefugio:", matchesRefugio);

    return matchesEdad && matchesSexo && matchesCategory && matchesRefugio;
    });

    console.log("Filtered Mascotas:", filtered);

    setFilteredMascotas(filtered);
    closeModal();
  };

  return {
    isModalOpen,
    openModal,
    closeModal,
    filteredMascotas,
    handleFilter
  };
};