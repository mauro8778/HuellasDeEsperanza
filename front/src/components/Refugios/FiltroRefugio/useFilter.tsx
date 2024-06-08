
// import { useState } from 'react';
// import { IRefugios } from '@/interface/IRefugios';

// export const useFilter = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [filteredRefugios, setFilteredRefugios] = useState<IRefugios[]>(Refugios);

//   const openModal = () => {
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   const handleFilter = (name: string, provincia: string, zona: string) => {
//     const filtered = Refugios.filter(refugio => {
//       return (
//         (name === '' || refugio.name === name) &&
//         (provincia === '' || refugio.provincia === provincia) &&
//         (zona === '' || refugio.zona === zona)
//       );
//     });
//     setFilteredRefugios(filtered);
//     closeModal();
//   };

//   return {
//     isModalOpen,
//     openModal,
//     closeModal,
//     filteredRefugios,
//     handleFilter
//   };
// };
