import { Inter } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import metadata from "./metadata"
import HiddenNavBar from "@/components/hidden_navbar/HiddenNavBar";
import  Navbar  from "@/components/NavBar/NavBar";



const inter = Inter({ subsets: ["latin"] });

export const metadataa = metadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
       
       
        <HiddenNavBar> 
          <Navbar/>
        </HiddenNavBar>
          {children}
        
       
      </body>
    </html>
  );
}
