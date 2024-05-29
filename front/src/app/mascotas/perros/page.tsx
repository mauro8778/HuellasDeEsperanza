/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import { useEffect, useState } from 'react';
import Mascotas from '@/utils/mascotas'; 
import { IMascotas } from '@/interface/IMascotas';
import ListaMascotas from '@/components/Card-Animals/ListaMascotas'; 

export const PerrosPage: React.FC = () => {
  const [dogs, setDogs] = useState<IMascotas[]>([]);
  const [searchParams, setSearchParams] = useState({ edad: '', sexo: '' });

  useEffect(() => {
    // Filtra las mascotas para obtener solo los perros
    const filterDogs = Mascotas.filter(mascota => mascota.category === 'Perro');
    setDogs(filterDogs);
  }, []);

  const handleSearch = () => {
    const { edad, sexo } = searchParams;

    let filteredDogs = Mascotas.filter(mascota => mascota.category === 'Perro');

    if (edad) {
      filteredDogs = filteredDogs.filter(dog => dog.edad.includes(edad));
    }

    if (sexo) {
      filteredDogs = filteredDogs.filter(dog => dog.sexo.toLowerCase() === sexo.toLowerCase());
    }

    setDogs(filteredDogs);
  };

  useEffect(() => {
    handleSearch();
  }, [searchParams]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSearchParams(prevParams => ({ ...prevParams, [name]: value }));
  };

  return (
    <div>
      <h1>Perros</h1>
      {/*//? Barra de búsqueda ,esto esta a prueba */}
      <div>
        <input 
          type="text" 
          name="edad"
          placeholder="Edad" 
          value={searchParams.edad}
          onChange={handleInputChange} 
        />
        <input 
          type="text" 
          name="sexo"
          placeholder="Sexo" 
          value={searchParams.sexo}
          onChange={handleInputChange} 
        />
      </div>
     
      <ListaMascotas mascotas={dogs} />
    </div>
  );
};

export default PerrosPage;
