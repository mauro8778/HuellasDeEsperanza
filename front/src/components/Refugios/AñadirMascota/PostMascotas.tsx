import { IMascotas } from '@/interface/IMascotas';
import { useState } from 'react';

interface FormularioMascotaProps {
  onClose: () => void;
  onAddMascota: (mascota: IMascotas) => void;
}


const FormularioMascota: React.FC<FormularioMascotaProps> = ({ onClose, onAddMascota }) => {
  const [nombre, setNombre] = useState('');
  const [edadAños, setEdadAños] = useState<number | null>(null);
  const [edadMeses, setEdadMeses] = useState<number | null>(null);
  const [sexo, setSexo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [tipo, setTipo] = useState('');
  const [imagen, setImagen] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (nombre && sexo && descripcion && tipo && imagen && (edadAños !== null || edadMeses !== null)) {
      const nuevaMascota: IMascotas = {
        id: Date.now(),
        name: nombre,
        edad: `${edadAños} años ${edadMeses} meses`,
        sexo: sexo,
        description: descripcion,
        category: tipo,
        image: URL.createObjectURL(imagen)
      };
      onAddMascota(nuevaMascota);
      onClose();
    } else {
      alert('Por favor complete todos los campos obligatorios.');
    }
  };
  

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImagen(e.target.files[0]);
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
        <div className="w-1/2 pr-2">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="edadAnios">
            Edad de la Mascota
          </label>
          <input
            id="edadAños"
            type="number"
            value={edadAños || ''}
            onChange={(e) => {
              const value = parseInt(e.target.value);
              if (value <= 20) {
                setEdadAños(value);
              }
            }}
            min={0}
            max={20}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Años"/>
        </div>

        <div className="w-1/2 pl-2">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="edadMeses">
            .
          </label>
          <input
              id="edadMeses"
              type="number"
              value={edadMeses || ''}
              onChange={(e) => {
                const value = parseInt(e.target.value);
                if (value <= 12) {
                  setEdadMeses(value);
                }
              }}
              min={0}
              max={12}
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
          value={tipo}
          onChange={(e) => setTipo(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        >
          <option value="">Seleccione una opción</option>
          <option value="Gato">Gato</option>
          <option value="Perro">Perro</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="imagen">
          Imagen
        </label>
        <input
          id="imagen"
          type="file"
          onChange={handleFileChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="flex items-center justify-between">
      <button type="submit" className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
        Enviar</button>

      </div>
    </form>
  );
};

export default FormularioMascota;

