import RandomAnimalCards from "@/components/Card-Animals/RandomAnimalsCards";
import Mascotas from "@/utils/mascotas";


export default function Home() {
  return (
    <div>
        <h1>pagina principal</h1>
        <RandomAnimalCards mascotas={Mascotas} />

    </div>
    
  );
}
