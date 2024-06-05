'use client'
import React, { useState, useEffect } from 'react';
import ListaMascotas from '@/components/Card-Animals/ListaMascotas';
import { IMascotas } from '@/interface/IMascotas';

export default function Adopta() {
  const [mascotasState, setMascotasState] = useState<IMascotas[]>([]);

  useEffect(() => {
    const fetchMascotas = async () => {
      try {
        const response = await fetch('https://backpf-prueba.onrender.com/pets');
        if (!response.ok) {
          throw new Error('Error al obtener los datos de las mascotas');
        }
        const data: IMascotas[] = await response.json();
        setMascotasState(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMascotas();
  }, []);

  return (
    <main>
      <h1>Nuestras Mascotas</h1>
      <ListaMascotas mascotas={mascotasState} />
    </main>
  );
}
