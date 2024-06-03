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
  const [tamaño, setTamaño] = useState('');
  const [descripcion, setDescripcion] = useState('');
  // const [imagen, setImagen] = useState<File | null>(null);


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Nombre:', nombre);
    console.log('Sexo:', sexo);
    console.log('Raza:', raza);
    console.log('Edad:', edad);
    console.log('Tamaño:', tamaño);
    console.log('Descripción:', descripcion);
    // console.log('Imagen:', imagen);

    
    if (nombre && sexo && raza && edad !== null && tamaño && descripcion) {
      const nuevaMascota: IMascotas = {
        name: nombre,
        sexo: sexo,
        breed: raza,
        age: edad,
        pet_size: tamaño,
        description: descripcion
      };
      
        fetch("https://backpf-prueba.onrender.com/pets", {  
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(nuevaMascota),
      })
      .then(response => {
        if (!response.ok) {
          return response.text().then(text => { throw new Error(text) });
        }
        return response.text();
      })
      .then(data => {
        console.log('Mascota agregada con éxito:', data);
        onAddMascota(nuevaMascota);
        setNombre(''); 
        setSexo('');
        setRaza('');
        setEdad(null);
        setTamaño('');
        setDescripcion('');
        onClose(); 
      })
      .catch(error => {
        console.error('Error al agregar mascota:', error.message);
      });
    } else {
      alert('Por favor complete todos los campos.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
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

      <div className="flex mb-4">
        <div className="">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="edad">
            Edad de la Mascota
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
          <option value="Pequeño">Pequeño</option>
          <option value="Mediano">Mediano</option>
          <option value="Grande">Grande</option>
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
          <option value="Gato">Gato</option>
          <option value="Perro">Perro</option>
        </select>
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
