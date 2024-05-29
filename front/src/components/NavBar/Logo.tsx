import { nunito } from "@/fonts/fonts";

/* eslint-disable @next/next/no-img-element */
const Logo: React.FC = () => {
    return (
      <div className="flex items-center mb-4 w-40 h-20">
        <img src="/LogoHuellas.svg" alt="Logo" className="w-20 h-auto mr-2" />
        <h1 className={`${nunito.className}  text-black text-center text-lg md:text-3xl lg:text-lg `}>
          Huellas de Esperanzas
        </h1>
      </div>
    );
};

export default Logo;
