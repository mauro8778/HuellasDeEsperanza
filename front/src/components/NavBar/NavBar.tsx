'use client';
import Logo from './Logo';
import Search from './Search';
import NavMenu from './NavMenu';
import { useState } from 'react';

const Navbar: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginLogout = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <header className="bg-white h-20 flex items-center justify-between px-4 shadow-md">
      <Logo />
      <NavMenu />
      <Search />
      <div className="flex items-center">
        {isLoggedIn ? (
          <>
            <img src="/avatar.png" alt="Avatar" className="w-10 h-10 rounded-full mr-2" />
            <button onClick={handleLoginLogout} className="text-black">Logout</button>
          </>
        ) : (
          <button onClick={handleLoginLogout} className="text-black">Login</button>
        )}
      </div>
    </header>
  );
};

export default Navbar;
