/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import { useEffect, useState } from 'react';
import Mascotas from '@/utils/mascotas'; 
import { IMascotas } from '@/interface/IMascotas';
import ListaMascotas from '@/components/Card-Animals/ListaMascotas'; 

export const GatosPage: React.FC = () => {
  const [gatos, setGatos] = useState<IMascotas[]>([]);
  const [searchParams, setSearchParams] = useState({ edad: '', sexo: '' });

  useEffect(() => {
    const filterCats = Mascotas.filter(mascota => mascota.category === 'Gato');
    setGatos(filterCats);
  }, []);

  const handleSearch = () => {
    const { edad, sexo } = searchParams;

    let filteredCats = Mascotas.filter(mascota => mascota.category === 'Gato');

    if (edad) {
      filteredCats = filteredCats.filter(cat => cat.edad.includes(edad));
    }

    if (sexo) {
      filteredCats = filteredCats.filter(cat => cat.sexo.toLowerCase() === sexo.toLowerCase());
    }

    setGatos(filteredCats);
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
      <h1>Gatos</h1>
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
      <ListaMascotas mascotas={gatos} />
    </div>
  );
};

export default GatosPage;
