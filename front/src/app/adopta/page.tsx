// 'use client'
// import React, { useState, useEffect } from 'react';
// import ListaMascotas from '@/components/Card-Animals/ListaMascotas';
// import { IMascotas } from '@/interface/IMascotas';

// export default function Adopta() {
//   const [mascotas, setMascotas] = useState<IMascotas[]>([]);

//   useEffect(() => {
//     const fetchMascotas = async () => {
//       try {
//         const response = await fetch('https://backpf-prueba.onrender.com/pets');
//         if (!response.ok) {
//           throw new Error('Error al obtener los datos de las mascotas');
//         }
//         const data: IMascotas[] = await response.json();
//         setMascotas(data);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchMascotas();
//   }, []);

//   return (
//     <main>
//       <h1>Nuestras Mascotas</h1>
//       <ListaMascotas mascotas={mascotas} />
//     </main>
//   );
// }
'use client'
import React, { useState, useEffect } from 'react';
import ListaMascotas from '@/components/Card-Animals/ListaMascotas';
import { IMascotas } from '@/interface/IMascotas';
import { useFilter } from '@/components/Card-Animals/FiltroMascotas/useFilter';
import Modal from '@/components/Card-Animals/FiltroMascotas/Modal';

export default function Adopta() {
  const { filteredMascotas, isModalOpen, openModal, closeModal, handleFilter, setMascotas } = useFilter();
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
      <button onClick={openModal}>Filtrar</button>
      <ListaMascotas mascotas={isModalOpen ? filteredMascotas : mascotasState} />
      {isModalOpen && (
        <Modal
          onClose={closeModal}
          onFilter={handleFilter}
        />
      )}
    </main>
  );
}
