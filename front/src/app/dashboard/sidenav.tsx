'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import NavLinks from './nav_links';
import { FaPowerOff } from 'react-icons/fa';
import ImageLogo from '@/components/ui/imageLogo';
import Image from 'next/image';

const SideNav: React.FC = () => {
  const [userData, setUserData] = useState<any>('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isGoogleAuthenticated, setIsGoogleAuthenticated] = useState(false);

  useEffect(() => {
    const userSession = localStorage.getItem('userSession');
    if (userSession) {
      const { user } = JSON.parse(userSession);
      setUserData(user);
      setIsLoggedIn(true);
      if (user.provider === 'google') {
        setIsGoogleAuthenticated(true);
      }
    } else {
      setIsLoggedIn(false);
      setIsGoogleAuthenticated(false);
    }
  }, []);

  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2 m-0 p-0">
      <Link className="mb-2 flex h-20 items-end justify-start rounded-md bg-pink-600 p-4 md:h-40" href="/">
        <div className="w-32 text-white md:w-40">
          <ImageLogo />
        </div>
      </Link>
      <div className="text-center mb-4">
        {isLoggedIn ? (
          <>
            <div className="flex items-center justify-center mb-4">
              <Image
                className="rounded-full w-1/3 h-auto"
                alt="Avatar de usuario"
                src={isGoogleAuthenticated ? userData.googleProfileImageUrl : `/avatar-placeholder.png`}
              />
            </div>
            <div>
              {userData && (
                <>
                  {userData.name && <p className="text-black"><strong>Nombre:</strong> {userData.name}</p>}
                  {userData.email && <p className="text-black"><strong>Email:</strong> {userData.email}</p>}
                  {userData.phone && <p className="text-black"><strong>Teléfono:</strong> {userData.phone}</p>}
                  {isGoogleAuthenticated && userData.googleUsername && <p className="text-black"><strong>Usuario de Google:</strong> {userData.googleUsername}</p>}
                </>
              )}
            </div>
          </>
        ) : (
          <div className="flex flex-col h-[100px] grow items-center justify-center gap-2 rounded-md bg-gray-200 p-3 text-sm font-medium hover:bg-pink-200 hover:text-pink-600 md:flex-none md:justify-start md:p-2 md:px-3" >
            <p className="text-black"><strong>Nombre:</strong></p>
            <p className="text-black"><strong>Email:</strong></p>
            {/* <p className="text-black"><strong>Teléfono:</strong></p> */}
            <p className="text-black"><strong>Usuario de Google:</strong></p>
          </div>
        )}
      </div>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md bg-gray-200 md:block"></div>
        <form className="w-full">
          <button onClick={() => localStorage.removeItem('userSession')} className="flex h-[48px] w-full items-center justify-center gap-2 rounded-md bg-gray-200 p-3 text-sm font-medium hover:bg-pink-200 hover:text-pink-600 md:flex-none md:justify-start md:p-2 md:px-3">
            <FaPowerOff className="w-6" />
            <div className="hidden md:block">Sign Out</div>
          </button>
        </form>
      </div>
    </div>
  );
}

export default SideNav;