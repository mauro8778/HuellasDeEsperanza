// import { useState } from 'react';
// import { IMascotas } from '@/interface/IMascotas';

// interface FormularioMascotaProps {
//   onClose: () => void;
//   onAddMascota: (mascota: IMascotas) => void;
// }

// const FormularioMascota: React.FC<FormularioMascotaProps> = ({ onClose, onAddMascota }) => {
//   const [nombre, setNombre] = useState('');
//   const [sexo, setSexo] = useState('');
//   const [raza, setRaza] = useState('');
//   const [edad, setEdad] = useState<number | null>(null);
//   const [mes, setMes] = useState<number | null>(null);
//   const [tamaño, setTamaño] = useState('');
//   const [imagen, setImagen] = useState<File | null>(null);
//   const [descripcion, setDescripcion] = useState('');
//   const [refugio, setRefugio] = useState('');


//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (nombre && sexo && raza && edad !== null && tamaño && descripcion && imagen && refugio && mes) {
//       try {
//         const formData = new FormData();
//         formData.append('file', imagen);

//         const response = await fetch('https://backpf-prueba.onrender.com/files/uploadFile', {
//           method: 'POST',
//           body: formData,
//         });

//         if (!response.ok) {
//           throw new Error('Error al subir la imagen');
//         }

//         const imageUrl = await response.text();

//         const nuevaMascota: IMascotas = {
//           name: nombre,
//           sexo: sexo,
//           breed: raza,
//           age: edad,
//           month: mes,
//           pet_size: tamaño,
//           imgUrl: imageUrl,
//           description: descripcion,
//           shelter: refugio
//         };


//         const mascotaResponse = await fetch("https://backpf-prueba.onrender.com/pets", {  
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify(nuevaMascota),
//         });

//         if (!mascotaResponse.ok) {
//           const errorText = await mascotaResponse.text();
//           throw new Error(errorText);
//         }

//         let mascotaData;
//         const textResponse = await mascotaResponse.text();
//         try {
//           mascotaData = JSON.parse(textResponse);
//         } catch (e) {
//           mascotaData = textResponse; 
//         }

//         console.log('Mascota agregada con éxito:', mascotaData);
//         onAddMascota(nuevaMascota);
//         setNombre(''); 
//         setSexo('');
//         setRaza('');
//         setEdad(null);
//         setMes(null)
//         setTamaño('');
//         setDescripcion('');
//         setImagen(null);
//         setRefugio('')
//         onClose(); 
//       } catch (error: any) {
//         console.error('Error:', error.message);
//       }
      
//     } else {
//       alert('Por favor complete todos los campos.');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="mt-4" encType="multipart/form-data">
//       <div className="mb-4">
//         <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">
//           Nombre de la Mascota
//         </label>
//         <input
//           id="nombre"
//           type="text"
//           value={nombre}
//           onChange={(e) => setNombre(e.target.value)}
//           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//         />
//       </div>

//       <div className="mb-4">
//         <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="refugio">
//           Refugio de la Mascota
//         </label>
//         <input
//           id="refugio"
//           type="text"
//           value={refugio}
//           onChange={(e) => setRefugio(e.target.value)}
//           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//         />
//       </div>

//       <div className="flex mb-4">
//         <div className="">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="edad">
//             Edad de la Mascota
//           </label>
//           <input
//             id="edadAños"
//             type="number"
//             value={edad !== null ? edad : ''}
//             onChange={(e) => setEdad(e.target.value ? parseInt(e.target.value) : null)}
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             placeholder="Años"
//           />
//         </div>
//       </div>

//       <div className="flex mb-4">
//         <div className="">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="mes">
//             Edad de la Mascota
//           </label>
//           <input
//             id="edadMeses"
//             type="number"
//             value={mes !== null ? mes : ''}
//             onChange={(e) => setMes(e.target.value ? parseInt(e.target.value) : null)}
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             placeholder="Meses"
//           />
//         </div>
//       </div>

//       <div className="mb-4">
//         <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="sexo">
//           Sexo
//         </label>
//         <select
//           id="sexo"
//           value={sexo}
//           onChange={(e) => setSexo(e.target.value)}
//           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//         >
//           <option value="">Seleccione una opción</option>
//           <option value="Macho">Macho</option>
//           <option value="Hembra">Hembra</option>
//         </select>
//       </div>

//       <div className="mb-4">
//         <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="tamaño">
//           Tamaño
//         </label>
//         <select
//           id="tamaño"
//           value={tamaño}
//           onChange={(e) => setTamaño(e.target.value)}
//           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//         >
//           <option value="">Seleccione una opción</option>
//           <option value="Pequeño">Pequeño</option>
//           <option value="Mediano">Mediano</option>
//           <option value="Grande">Grande</option>
//         </select>
//       </div>

//       <div className="mb-4">
//         <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="descripcion">
//           Descripción
//         </label>
//         <textarea
//           id="descripcion"
//           value={descripcion}
//           onChange={(e) => setDescripcion(e.target.value)}
//           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//         />
//       </div>

//       <div className="mb-4">
//         <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="tipo">
//           Tipo
//         </label>
//         <select
//           id="tipo"
//           value={raza}
//           onChange={(e) => setRaza(e.target.value)}
//           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//         >
//           <option value="">Seleccione una opción</option>
//           <option value="Gato">Gato</option>
//           <option value="Perro">Perro</option>
//         </select>
//       </div>

//       <div className="mb-4">
//         <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="imagen">
//           Subir Imagen
//         </label>
//         <input
//           id="imagen"
//           type="file"
//           accept="image/*"
//           onChange={(e) => setImagen(e.target.files ? e.target.files[0] : null)}
//           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//         />
//       </div>

//       <div className="flex items-center justify-between">
//         <button type="submit" className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
//           Enviar
//         </button>
//       </div>
//     </form>
//   );
// };

// export default FormularioMascota;


// // {/* <fieldset>
// //       <legend className="sr-only">Edad de la Mascota</legend>
// //       <div className="flex items-center">
// //         <input
// //           id="edad-meses"
// //           type="radio"
// //           name="edad-mascota"
// //           value="meses"
// //           className="mr-1"
// //         />
// //         <label htmlFor="edad-meses" className="text-sm font-medium text-gray-900">Meses</label>
// //       </div>
// //       <div className="flex items-center">
// //         <input
// //           id="edad-años"
// //           type="radio"
// //           name="edad-mascota"
// //           value="años"
// //           className="mr-1"
// //         />
// //         <label htmlFor="edad-anos" className="text-sm font-medium text-gray-900">Años</label>
// //       </div>
// //     </fieldset>
// //   </div>
// // </div> */}



import { useState } from 'react';
import { IMascotas } from '@/interface/IMascotas';

interface FormularioMascotaProps {
  onClose: () => void;
  onAddMascota: (mascota: IMascotas) => void;
}

const FormularioMascota: React.FC<FormularioMascotaProps> = ({ onClose, onAddMascota }) => {
  const [nombre, setNombre] = useState('');
  const [sexo, setSexo] = useState('');
  const [raza, setRaza] = useState('');
  const [edad, setEdad] = useState<number | null>(null);
  const [mes, setMes] = useState<number | null>(null);
  const [tamaño, setTamaño] = useState('');
  const [imagen, setImagen] = useState<File | null>(null);
  const [descripcion, setDescripcion] = useState('');
  const [refugio, setRefugio] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (nombre && sexo && raza && edad !== null && mes !== null && tamaño && refugio) {
      try {
        const formData = new FormData();
        formData.append('file', imagen!);

        const response = await fetch('https://backpf-prueba.onrender.com/files/uploadFile', {
          method: 'POST',
          body: formData,
        });

        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(`Error al subir la imagen: ${errorText}`);
        }

        const imageUrl = await response.text();

        const nuevaMascota: IMascotas = {
          name: nombre,
          sexo: sexo as 'Macho' | 'Hembra',
          breed: raza,
          age: edad,
          month: mes,
          pet_size: tamaño as 'Big' | 'Medium' | 'Little',
          imgUrl: imageUrl,
          description: descripcion,
          shelter: refugio
        };

        const mascotaResponse = await fetch("https://backpf-prueba.onrender.com/pets", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(nuevaMascota),
        });

        if (!mascotaResponse.ok) {
          const errorText = await mascotaResponse.text();
          throw new Error(`Error en el servidor: ${errorText}`);
        }

        const mascotaData = await mascotaResponse.json();
        console.log('Mascota agregada con éxito:', mascotaData);

        onAddMascota(nuevaMascota);
        setNombre('');
        setSexo('');
        setRaza('');
        setEdad(null);
        setMes(null);
        setTamaño('');
        setDescripcion('');
        setImagen(null);
        setRefugio('');
        onClose();
      } catch (error: any) {
        console.error('Error:', error.message);
      }
    } else {
      alert('Por favor complete todos los campos.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4" encType="multipart/form-data">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">
          Nombre de la Mascota
        </label>
        <input
          id="nombre"
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="refugio">
          Refugio de la Mascota
        </label>
        <input
          id="refugio"
          type="text"
          value={refugio}
          onChange={(e) => setRefugio(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="flex mb-4">
        <div className="">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="edad">
            Edad de la Mascota (Años)
          </label>
          <input
            id="edadAños"
            type="number"
            value={edad !== null ? edad : ''}
            onChange={(e) => setEdad(e.target.value ? parseInt(e.target.value) : null)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Años"
          />
        </div>
        <div className="">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="mes">
            Edad de la Mascota (Meses)
          </label>
          <input
            id="edadMeses"
            type="number"
            value={mes !== null ? mes : ''}
            onChange={(e) => setMes(e.target.value ? parseInt(e.target.value) : null)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Meses"
          />
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="sexo">
          Sexo
        </label>
        <select
          id="sexo"
          value={sexo}
          onChange={(e) => setSexo(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        >
          <option value="">Seleccione una opción</option>
          <option value="Macho">Macho</option>
          <option value="Hembra">Hembra</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="tamaño">
          Tamaño
        </label>
        <select
          id="tamaño"
          value={tamaño}
          onChange={(e) => setTamaño(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        >
          <option value="">Seleccione una opción</option>
          <option value="Little">Pequeño</option>
          <option value="Medium">Mediano</option>
          <option value="Big">Grande</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="descripcion">
          Descripción
        </label>
        <textarea
          id="descripcion"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="tipo">
          Tipo
        </label>
        <select
          id="tipo"
          value={raza}
          onChange={(e) => setRaza(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        >
          <option value="">Seleccione una opción</option>
          <option value="Perro">Perro</option>
          <option value="Gato">Gato</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="imagen">
          Subir Imagen
        </label>
        <input
          id="imagen"
          type="file"
          accept="image/*"
          onChange={(e) => setImagen(e.target.files ? e.target.files[0] : null)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="flex items-center justify-between">
        <button type="submit" className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
          Enviar
        </button>
      </div>
    </form>
  );
};

export default FormularioMascota;
