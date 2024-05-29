import { useState } from 'react';

const Search: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    // Manejar la lógica de búsqueda
  };

  return (
    <div className="flex items-center bg-red-500 h-10">
      <form onSubmit={handleSearch} className="flex w-full">
        <input
          type="text "
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          placeholder="Buscar..."
          className="flex-grow px-2  "
        />
        <button type="submit" className="px-4 text-white bg-black">Buscar</button>
      </form>
    </div>
  );
};

export default Search;
