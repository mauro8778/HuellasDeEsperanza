// import React from 'react';
// import Image from 'next/image';
// import { IRefugios } from '@/interface/IRefugios';

// const truncateDescription = (text: string, maxLength: number) => {
//   if (text.length <= maxLength) return text;
//   return text.substr(0, maxLength) + '...';
// };

// const CardRefuge: React.FC<{ refugio: IRefugios }> = ({ refugio }) => {
//   const truncatedDescription = truncateDescription(refugio.description, 100);
//   return (
//     <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-4">
//       <div style={{ height: '200px', overflow: 'hidden', position: 'relative' }}>
//           <Image src={refugio.image} alt={refugio.name} layout="fill" objectFit="cover" className="rounded-t-lg" />
//         </div>    
//       <div className="p-5">
        
//           <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{refugio.name}</h5>
        
//         <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{refugio.provincia} - {refugio.zona}</p>
//         <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{truncatedDescription}</p>
//         <a href={`/refugios/${refugio.id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
//           Leer más
//           <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
//             <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
//           </svg>
//         </a>
//       </div>
//     </div>
//   );
// };

// export default CardRefuge;


import React from 'react';
import Image from 'next/image';
import { IRefugios } from '@/interface/IRefugios';

const truncateDescription = (text: string, maxLength: number) => {
  if (text.length <= maxLength) return text;
  return text.substr(0, maxLength) + '...';
};

const CardRefuge: React.FC<{ refugio: IRefugios }> = ({ refugio }) => {
  const truncatedDescription = truncateDescription(refugio.description, 100);
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-4">
      <div style={{ height: '200px', overflow: 'hidden', position: 'relative' }}>
        <Image src={refugio.imgUrl} alt={refugio.name} layout="fill" objectFit="cover" className="rounded-t-lg" />
      </div>
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{refugio.name}</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{refugio.location} - {refugio.zona}</p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{truncatedDescription}</p>
        <a href={`/refugios/${refugio.id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-pink-600 rounded-lg hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Leer más
          <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default CardRefuge;
