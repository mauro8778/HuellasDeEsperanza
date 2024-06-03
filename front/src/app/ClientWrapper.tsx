"use client";

import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/NavBar/NavBar";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";

export default function ClientWrapper({ children }: { children: ReactNode }) {
  const [isMounted, setIsMounted] = useState(false);
  const [pathname, setPathname] = useState("");

  useEffect(() => {
    setIsMounted(true);
    setPathname(window.location.pathname); // Obtener el pathname de la URL actual
  }, []);

  if (!isMounted) {
    return null;
  }

  const showNavAndFooter = pathname !== "/";

  return (
    <>
      {showNavAndFooter && <Navbar />}
      {children}
      {showNavAndFooter && <Footer />}
    </>
  );
}
