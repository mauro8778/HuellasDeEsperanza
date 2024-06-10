import { saira } from "@/fonts/fonts";

/* eslint-disable @next/next/no-img-element */
const Logo: React.FC = () => {
    return (
      <div className="flex items-center justify-center mr-9 ">
        <img src="/LogoHuellas.svg" alt="Logo" className="w-28 h-auto " />
        <h1 className="text-3xl font-semibold relative  ">
            Huellas de Esperanzas
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white"></span>
        </h1>
      </div>
    );
};

export default Logo;
// {`${saira.className} text-white text-center text-lg md:text-3xl lg:text-lg ml-2 relative`}