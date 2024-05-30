'use client';
import Logo from './Logo';
import Search from './Search';
import NavMenu from './NavMenu';
import { useState } from 'react';
import Desplegable from './Desplegable';

const Navbar: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginLogout = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <header className="bg-pink-600 h-20 flex items-center justify-between px-4 shadow-md">
      <Logo />
      <NavMenu />
      <Desplegable />
      <Search />
      <div className="flex items-center">
        {isLoggedIn ? (
          <>
            
            <button onClick={handleLoginLogout} className="text-white">Logout</button>
          </>
        ) : (
          <button onClick={handleLoginLogout} className="text-white">Login</button>
        )}
      </div>
    </header>
  );
};

export default Navbar;
