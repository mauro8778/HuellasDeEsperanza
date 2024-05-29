'use client';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Mascotas from '@/utils/mascotas'; 
import { IMascotas } from '@/interface/IMascotas';
import ListaMascotas from '@/components/Card-Animals/ListaMascotas';

const ResultadosPage: React.FC = () => {
  const [filteredMascotas, setFilteredMascotas] = useState<IMascotas[]>([]);
  const searchParams = useSearchParams();
  const query = searchParams.get('query') || '';

  useEffect(() => {
    const filterMascotas = () => {
      const terms = query.toLowerCase().split(' ');
      let result = Mascotas;

      terms.forEach(term => {
        if (term === 'perro' || term === 'gato') {
          result = result.filter(mascota => mascota.category.toLowerCase() === term);
        } else if (term === 'macho' || term === 'hembra') {
          result = result.filter(mascota => mascota.sexo.toLowerCase() === term);
        } else if (term.includes('año') || term.includes('años')) {
          const age = term.replace('años', '').replace('año', '').trim();
          result = result.filter(mascota => mascota.edad.includes(age));
        } else {
          result = result.filter(mascota => mascota.name.toLowerCase().includes(term));
        }
      });

      setFilteredMascotas(result);
    };

    filterMascotas();
  }, [query]);

  return (
    <div>
      <h1>Resultados de búsqueda</h1>
      <ListaMascotas mascotas={filteredMascotas} />
    </div>
  );
};

export default ResultadosPage;
