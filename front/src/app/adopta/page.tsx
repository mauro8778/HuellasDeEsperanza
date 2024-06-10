// 'use client';
// import React, { useState, useEffect, lazy, Suspense } from 'react';
// import { IMascotas } from '@/interface/IMascotas';
// import Modal from '@/components/Card-Animals/FiltroMascotas/Modal';

// const ListaMascotas = lazy(() => import('@/components/Card-Animals/ListaMascotas'));

// export default function Adopta() {
//   const [mascotasState, setMascotasState] = useState<IMascotas[]>([]);
//   const [filters, setFilters] = useState({ age: '', pet_size: '', breed: ''});
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [filterOptions, setFilterOptions] = useState({
//     age: [],
//     pet_size: [],
//     breed: []
//   });

//   useEffect(() => {
//     const fetchMascotas = async (filters: { age: string, pet_size: string, breed: string }) => {
//       try {
//         const { age, pet_size, breed } = filters;
//         const queryParams = new URLSearchParams();

//         if (age) queryParams.append('age', age);
//         if (pet_size) queryParams.append('pet_size', pet_size.toLowerCase());
//         if (breed) queryParams.append('breed', breed.toLowerCase());

//         const response = await fetch(`https://backpf-prueba.onrender.com/search/pets?${queryParams.toString()}`);
//         if (!response.ok) {
//           throw new Error('Error al obtener los datos de las mascotas');
//         }
//         const data: IMascotas[] = await response.json();
//         setMascotasState(data);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchMascotas(filters);
//   }, [filters]);

//   useEffect(() => {
//     const fetchFilterOptions = async () => {
//       try {
//         const response = await fetch(`https://backpf-prueba.onrender.com/search/pets`);
//         if (!response.ok) {
//           throw new Error('Error al obtener las opciones de filtro');
//         }
//         const data: IMascotas[] = await response.json();
//         extractFilterOptions(data);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchFilterOptions();
//   }, []);

//   const extractFilterOptions = (data: IMascotas[]) => {
//     const ageOptions = Array.from(new Set(data.map(mascota => mascota.age))).sort();
//     const petSizeOptions = Array.from(new Set(data.map(mascota => mascota.pet_size))).sort();
//     const breedOptions = Array.from(new Set(data.map(mascota => mascota.breed))).sort();

//     setFilterOptions({
//       age: ageOptions,
//       pet_size: petSizeOptions,
//       breed: breedOptions
//     });
//   };

//   const handleFilterChange = (newFilters: { sexo: string, age: string, pet_size: string, breed: string }) => {
//     setFilters(newFilters);
//   };

//   const handleModalFilter = (sexo: string, category: string, petSize: string) => {
//     handleFilterChange({ age, pet_size: petSize.toLowerCase(), breed: category.toLowerCase() });
//     setIsModalOpen(false);
//   };

//   const updateMascota = (updatedMascota: IMascotas) => {
//     setMascotasState(prevState =>
//       prevState.map(mascota =>
//         mascota.id === updatedMascota.id ? updatedMascota : mascota
//       )
//     );
//   };

//   return (
//     <main className="flex flex-col items-center bg-gray-300">
//       <button onClick={() => setIsModalOpen(true)} className="px-4 py-2 bg-green-700 text-white rounded hover:bg-green-800 mt-4">
//         Filtrar Mascotas
//       </button>
//       <Suspense fallback={<div>Cargando mascotas...</div>}>
//         <ListaMascotas mascotas={mascotasState} updateMascota={updateMascota} />
//       </Suspense>
//       {isModalOpen && (
//         <Modal 
//           onClose={() => setIsModalOpen(false)} 
//           onFilter={handleModalFilter}
//           options={filterOptions} 
//         />
//       )}
//     </main>
//   );
// }
// 'use client';
// import React, { useState, useEffect, lazy, Suspense } from 'react';
// import { IMascotas } from '@/interface/IMascotas';
// import Modal from '@/components/Card-Animals/FiltroMascotas/ModalFilterMascotas';
// import ModalFilterMascotas from '@/components/Card-Animals/FiltroMascotas/ModalFilterMascotas';

// const ListaMascotas = lazy(() => import('@/components/Card-Animals/ListaMascotas'));

// export default function Adopta() {
//   const [mascotasState, setMascotasState] = useState<IMascotas[]>([]);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [addMascotaModalVisible, setAddMascotaModalVisible] = useState(false);
//   const [filterModalVisible, setFilterModalVisible] = useState(false);
//   const [mascotas, setMascotas] = useState<IMascotas[]>([]);
//   const [filtroEdad, setFiltroEdad] = useState('');
//   const [filtroTamaño, setFiltroTamaño] = useState('');
//   const [filtroRaza, setFiltroRaza] = useState('');
//   const [edadDisponibles, setEdadDisponibles] = useState<string[]>([]);
//   const [tamañoDisponibles, setTamañoDisponibles] = useState<string[]>([]);
//   const [razaDisponibles, setRazaDisponibles] = useState<string[]>([]);


//   useEffect(() => {
//     // const fetchMascotas = async () => {
//     //   try {
//     //     const response = await fetch(`https://backpf-prueba.onrender.com/search/pets`);
//     //     if (!response.ok) {
//     //       throw new Error('Error al obtener los datos de las mascotas');
//     //     }
//     //     const data: IMascotas[] = await response.json();
//     fetch('https://backpf-prueba.onrender.com/search/pets')
//       .then(response => response.json())
//       .then((data: IMascotas[]) => {
//         setMascotasState(data);
//         const edades = Array.from(new Set(data.map(mascota => mascota.age)));
//         const tamaños = Array.from(new Set(data.map(mascota => mascota.pet_size)));
//         const razas = Array.from(new Set(data.map(mascota => mascota.breed)));
//         setEdadesDisponibles(edades);
//         setTamañosDisponibles(tamaños);
//         setRazasDisponibles(razas);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchMascotas();
//   }, []);

//   const updateMascota = (updatedMascota: IMascotas) => {
//     setMascotasState(prevState =>
//       prevState.map(mascota =>
//         mascota.id === updatedMascota.id ? updatedMascota : mascota
//       )
//     );
//   };
//   const handleOpenFilterModal = () => {
//     setFilterModalVisible(true);
//   };

//   const handleCloseFilterModal = () => {
//     setFilterModalVisible(false);
//   };

//   const handleFilter = ( edad: string, tamaño: string, raza: string) => {
//     setFiltroEdad(edad);
//     setFiltroTamaño(tamaño);
//     setFiltroRaza(raza);
//     setFilterModalVisible(false);
//   };

//   const handleOpenAddMascotaModal = () => {
//     setAddMascotaModalVisible(true);
//   };

//   const handleCloseAddMascotaModal = () => {
//     setAddMascotaModalVisible(false);
//   };

//   const handleAddMascota = (mascota: IMascotas) => {
//   };

//   const filtrarMascotas = () => {
//     return mascotas.filter(mascotas => {
//       const edadCoincide = filtroEdad ? mascotas.age.toLowerCase().includes(filtroEdad.toLowerCase()) : true;
//       const tamañoCoincide = filtroTamaño ? mascotas.breed.toLowerCase().includes(filtroTamaño.toLowerCase()) : true;
//       const razaCoincide = filtroRaza ? mascotas.pet_size.toLowerCase().includes(filtroRaza.toLowerCase()) : true;
//       return edadCoincide && tamañoCoincide && razaCoincide;
//     });
//   };

//   return (
//     <main className="flex flex-col items-center bg-gray-300">
//       <div className="flex justify-center space-x-2">
//         <button onClick={handleOpenFilterModal} className="mt-3 text-white bg-green-700 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
//           Filtrar Refugios
//         </button>
//       </div>
//       <Suspense fallback={<div>Cargando mascotas...</div>}>
//         <ListaMascotas mascotas={mascotasState} updateMascota={updateMascota} />
//       </Suspense>
//       <ModalFilterMascotas
//         isOpen={filterModalVisible}
//         onClose={handleCloseFilterModal}
//         onFilter={handleFilter}
//         edades={edadDisponibles}
//         razas={tamañoDisponibles}
//         tamaños={razaDisponibles}
//       />
//     </main>
//   );
// }
'use client';
import React, { useState, useEffect, lazy, Suspense } from 'react';
import { IMascotas } from '@/interface/IMascotas';
import ModalFilterMascotas from '@/components/Card-Animals/FiltroMascotas/ModalFilterMascotas';
const ListaMascotas = lazy(() => import('@/components/Card-Animals/ListaMascotas'));

export default function Adopta() {
  const [mascotasState, setMascotasState] = useState<IMascotas[]>([]);
  const [filterModalVisible, setFilterModalVisible] = useState<boolean>(false);
  const [filters, setFilters] = useState<{ edad: string; tamaño: string; raza: string }>({ edad: '', tamaño: '', raza: '' });
  const [filterOptions, setFilterOptions] = useState<{ edades: number[]; tamaños: string[]; razas: string[] }>({ edades: [], tamaños: [], razas: [] });

  useEffect(() => {
    const fetchMascotas = async () => {
      try {
        const response = await fetch('https://backpf-prueba.onrender.com/search/pets');
        if (!response.ok) {
          throw new Error('Error al obtener los datos de las mascotas');
        }
        const data: IMascotas[] = await response.json();
        setMascotasState(data);
        const edades = Array.from(new Set(data.map(mascota => mascota.age || 0))); // Manejamos el posible valor undefined
        const tamaños = Array.from(new Set(data.map(mascota => mascota.pet_size || ''))); // Manejamos el posible valor undefined
        const razas = Array.from(new Set(data.map(mascota => mascota.breed || ''))); // Manejamos el posible valor undefined
        setFilterOptions({ edades, tamaños, razas });
      } catch (error) {
        console.error(error);
      }
    };
    fetchMascotas();
  }, []);

  const handleFilter = (edad: string, tamaño: string, raza: string) => {
    setFilters({ edad, tamaño, raza });
    setFilterModalVisible(false);
  };

  const filtrarMascotas = () => {
    return mascotasState.filter(mascota => {

      const edadCoincide = filters.edad ? String(mascota.age)?.toLowerCase().includes(filters.edad.toLowerCase()) : true;
      const tamañoCoincide = filters.tamaño ? mascota.pet_size?.toLowerCase().includes(filters.tamaño.toLowerCase()) : true; // Manejamos el posible valor undefined
      const razaCoincide = filters.raza ? mascota.breed?.toLowerCase().includes(filters.raza.toLowerCase()) : true; // Manejamos el posible valor undefined
      return edadCoincide && tamañoCoincide && razaCoincide;
    });
  };

  const updateMascota = (updatedMascota: IMascotas) => {
    setMascotasState(prevState =>
      prevState.map(mascota =>
        mascota.id === updatedMascota.id ? updatedMascota : mascota
      )
    );
  };

  return (
    <main className="flex flex-col items-center bg-gray-300">
      <div className="flex justify-center space-x-2">
        <button onClick={() => setFilterModalVisible(true)} className="mt-3 text-white bg-green-700 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
          Filtrar Refugios
        </button>
      </div>
      <Suspense fallback={<div>Cargando mascotas...</div>}>
        <ListaMascotas mascotas={filtrarMascotas()} updateMascota={updateMascota} />
      </Suspense>
      <ModalFilterMascotas
        isOpen={filterModalVisible}
        onClose={() => setFilterModalVisible(false)}
        onFilter={handleFilter}
        edades={filterOptions.edades}
        tamaños={filterOptions.tamaños}
        razas={filterOptions.razas}
      />
    </main>
  );
}
