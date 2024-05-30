import { saira } from "@/fonts/fonts";

/* eslint-disable @next/next/no-img-element */
const Logo: React.FC = () => {
    return (
      <div className="flex items-center mb-3 w-40 h-20">
        <img src="/LogoHuellas.svg" alt="Logo" className="w-24 h-auto " />
        <h1 className={`${saira.className} text-white text-center text-lg md:text-3xl lg:text-lg ml-2 relative`}>
          Huellas de Esperanzas
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white"></span>
        </h1>
      </div>
    );
};

export default Logo;
