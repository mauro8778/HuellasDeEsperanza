"use client";
import Logo from "./Logo";
import Search from "./Search";
import NavMenu from "./NavMenu";
import { useState } from "react";
import { RiLoginCircleLine,RiLogoutCircleLine } from "react-icons/ri";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginLogout = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <header className="bg-pink-600 h-20 flex items-center justify-between px-4 shadow-xl">
      <Logo />
      <NavMenu />

      <Search />
      <div className="flex items-center">
        {isLoggedIn ? (
          <>
            <button onClick={handleLoginLogout} className="text-white mr-3 ">
              <RiLogoutCircleLine />
            </button>
          </>
        ) : (
          <button onClick={handleLoginLogout} className="text-white mr-3">
            <Link href={"/login"}>
            <RiLoginCircleLine />
            </Link>
          </button>
        )}
      </div>
    </header>
  );
};

export default Navbar;
