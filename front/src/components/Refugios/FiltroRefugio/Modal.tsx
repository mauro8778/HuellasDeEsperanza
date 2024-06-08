// import React, { useState, useEffect } from 'react';

// interface ModalProps {
//   onClose: () => void;
//   onFilter: (name: string, provincia: string, zona: string) => void;
// }

// const Modal: React.FC<ModalProps> = ({ onClose, onFilter }) => {
//   const [name, setName] = useState('');
//   const [provincia, setProvincia] = useState('');
//   const [zona, setZona] = useState('');
//   const [isOpen, setIsOpen] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsOpen(true);
//     }, 100);
//     return () => clearTimeout(timer);
//   }, []);

//   const refugioOptions = Refugios.map(refugio => refugio.name);

//   const handleFilter = () => {
//     onFilter(name, provincia, zona);
//   };

//   const handleClose = () => {
//     setIsOpen(false);
//     setTimeout(() => {
//       onClose();
//     }, 300);
//   };

//   return (
//     <div className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
//       <div className={`bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-300 ${isOpen ? 'scale-100' : 'scale-90'}`}>
//         <h2 className="text-2xl font-bold mb-4">Filtrar Refugios</h2>
//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700 mb-2">Nombre</label>
//           <select
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             className="w-full p-2 border border-gray-300 rounded"
//           >
//             <option value="">Todos</option>
//             {refugioOptions.map(option => (
//               <option key={option} value={option}>{option}</option>
//             ))}
//           </select>
//         </div>
//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700 mb-2">Provincia</label>
//           <select
//             value={provincia}
//             onChange={(e) => setProvincia(e.target.value)}
//             className="w-full p-2 border border-gray-300 rounded"
//           >
//             <option value="">Todas</option>
//             <option value="Buenos Aires">Buenos Aires</option>
//           </select>
//         </div>
//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700 mb-2">Zona</label>
//           <select
//             value={zona}
//             onChange={(e) => setZona(e.target.value)}
//             className="w-full p-2 border border-gray-300 rounded"
//           >
//             <option value="">Todas</option>
//             <option value="Zona Sur">Zona Sur</option>
//             <option value="Zona Norte">Zona Norte</option>
//             <option value="Zona Oeste">Zona Oeste</option>
//             <option value="CABA">CABA</option>
//           </select>
//         </div>
//         <div className="flex justify-end space-x-2">
//           <button onClick={handleFilter} className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">Aplicar Filtro</button>
//           <button onClick={handleClose} className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600">Cerrar</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Modal;
