import ListaMascotas from "@/components/Card-Animals/ListaMascotas";
import Footer from "@/components/Footer/Footer";
import Mascotas from "@/utils/mascotas";


export default function Adopta() {
  return (
    <main>
      <ListaMascotas mascotas={Mascotas} />
      <Footer/>
    </main>
  );
}
