import { IRefugios } from "@/interface/IRefugios";

const Refugios : IRefugios[] = [
    {
        id: 1,
        name: "4 Patas",
        provincia: "Buenos Aires",
        zona: "Zona Oeste",
        image: "/imgs/1.jpg",
        description: "En 4 Patas, somos un equipo dedicado de amantes de los animales comprometidos con la protección y el bienestar de perros y gatos en situación de abandono. Desde nuestros humildes comienzos en 2010, hemos trabajado incansablemente para ofrecer un hogar temporal seguro y cariñoso a aquellos animales que lo necesitan. Nuestro objetivo es encontrar familias permanentes que les proporcionen el amor y el cuidado que merecen. Nos enorgullece contar con un equipo de voluntarios apasionados y con una red de colaboradores que comparten nuestra misión de crear un mundo mejor para estos seres maravillosos.",
    },
    {
        id: 2,
        name: "Refugio Canino",
        provincia: "Buenos Aires",
        zona: "Zona Norte",
        image: "/imgs/2.jpg",
        description: "Refugio Canino es una organización sin fines de lucro dedicada a rescatar, rehabilitar y reubicar perros y gatos en situación de riesgo. Fundada en 2015, nuestra misión es ofrecer una segunda oportunidad a los animales que han sido abandonados o maltratados. Creemos en la importancia de la educación y la conciencia sobre el cuidado responsable de las mascotas, y trabajamos estrechamente con la comunidad para promover la adopción y el bienestar animal. Nuestro refugio es un lugar de esperanza y recuperación, donde cada animal recibe la atención médica y el cariño necesarios para encontrar un hogar definitivo.",
    },
    {
        id: 3,
        name: "Hogar de Perros Felices",
        provincia: "Buenos Aires",
        zona: "Zona Sur",
        image: "/imgs/3.jpg",
        description: "En Hogar de Perros Felices, nos dedicamos a brindar refugio y una nueva oportunidad a perros y gatos abandonados. Desde nuestra fundación en 2012, hemos sido un pilar de apoyo para cientos de animales necesitados, proporcionándoles no solo un techo y alimento, sino también amor, cuidados veterinarios y socialización. Nuestra misión es promover el respeto y la compasión hacia todos los animales, y creemos firmemente en la adopción responsable como el mejor camino para construir un futuro sin abandono. Con la ayuda de nuestros voluntarios y donantes, trabajamos día a día para que cada mascota que llega a nuestro refugio tenga la posibilidad de un nuevo comienzo.",
    },
    {
        id: 4,
        name: "Refugio de Animales Amistad",
        provincia: "Buenos Aires",
        zona: "CABA",
        image: "/imgs/4.jpg",
        description: "Somos una organización sin fines de lucro dedicada al rescate y adopción de perritos y gatitos en situación de calle o abandono. Nuestra misión es ayudar a mejorar la calidad de vida de estos animales y encontrarles hogares amorosos.",
    },
    {
        id: 5,
        name: "Refugio Felino Paz",
        provincia: "Buenos Aires",
        zona: "Zona Sur",
        image: "/imgs/5.jpg",
        description: "Somos una fundación protectora de animales legalmente constituida en Zona Sur, que surge de la necesidad de proteger a animales domésticos en situación de maltrato o abandono, y busca desarrollar una cultura de protección activa de la vida animal.",
    },
    {
        id: 6,
        name: "Hogar de Gatos Felices",
        provincia: "Buenos Aires",
        zona: "Zona Oeste",
        image: "/imgs/6.jpg",
        description: "Hogar de Gatos Felices es una organización sin fines de lucro que nace el año 2015 con el propósito de dar solución a la problemática de Bienestar Animal y Tenencia Responsable de Mascotas y Animales de Compañía en Zona Oeste. Hoy en día hemos crecido mucho como equipo y nos hemos formado en distintas áreas para hacer del mundo un lugar mejor para los animales.",
    },
    {
        id: 7,
        name: "chupa chichis",
        provincia: "Buenos Aires",
        zona: "Zona Oeste",
        image: "/imgs/6.jpg",
        description: "Hogar de Gatos Felices es una organización sin fines de lucro que nace el año 2015 con el propósito de dar solución a la problemática de Bienestar Animal y Tenencia Responsable de Mascotas y Animales de Compañía en Zona Oeste. Hoy en día hemos crecido mucho como equipo y nos hemos formado en distintas áreas para hacer del mundo un lugar mejor para los animales.",
    },
]
export const getRefugioById = (id: string): IRefugios | undefined => {
    return Refugios.find(refugio => refugio.id === parseInt(id));
};


export default Refugios