import React, { useState } from 'react';

interface FavoriteStarProps {
  isFavorite: boolean;
  onToggleFavorite: (petId: string) => void; 
  isLoggedIn: boolean;
  petId: string; 
}

const FavoriteStar: React.FC<FavoriteStarProps> = ({ isFavorite, onToggleFavorite, isLoggedIn, petId }) => {
  const [showLoginPrompt, setShowLoginPrompt] = useState(false);

  const handleClick = () => {
    if (!isLoggedIn) {
      setShowLoginPrompt(true); 
      return;
    }
    console.log("petId:", petId);

    fetch('https://huellasdesperanza.onrender.com/users/pet/favorite/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ petId: petId, isFavorite: !isFavorite }),
    })
    .then(response => {
      if (response.ok) {
        onToggleFavorite(petId); 
      } else {
        throw new Error('Error al almacenar el favorito');
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
  };

  const handleLogin = () => {
    window.location.href = '/login';
  };

  return (
    <>
      <button onClick={handleClick} className="focus:outline-none">
          <svg
            className={`h-7 w-7 ${isFavorite ? 'text-yellow-500' : 'text-gray-400'} transition-transform duration-200 transform hover:scale-125 hover:text-yellow-500`}
            viewBox="0 0 24 24"
            fill="currentColor"
            stroke="none">
            <path d="M12 20l-7 -7a4 4 0 0 1 6.5 -6a.9 .9 0 0 0 1 0a4 4 0 0 1 6.5 6l-7 7" />
          </svg>
        </button>

      {showLoginPrompt && (
        <div className="bg-yellow-200 p-2 mt-2 rounded-md">
          <p className="text-sm text-yellow-800">
            Debes iniciar sesión para marcar como favorito. ¿Quieres iniciar sesión ahora?
          </p>
          <button onClick={handleLogin} className="mt-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Iniciar sesión
          </button>
        </div>
      )}
    </>
  );
};

export default FavoriteStar;
