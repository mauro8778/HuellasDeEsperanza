// Search.tsx
import { useState } from 'react';
import { RiSearchLine } from 'react-icons/ri';

const Search: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    // Lógica de búsqueda aquí
  };

  return (
    <div className="hidden lg:flex items-center">
      <form onSubmit={handleSearch} className="flex w-full">
        <input
          type="text"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          placeholder="Buscar..."
          className="flex-grow px-2 text-gray-700 focus:outline-none rounded-l-lg"
        />
        <button type="submit" className="flex items-center justify-center px-4 text-white bg-black rounded-r-lg focus:outline-none">
          <RiSearchLine className="w-5 h-5" />
        </button>
      </form>
    </div>
  );
};

export default Search;
