import Cabezera from "./components/cabezera-uno";
import Cabezera_dos from "./components/cabezera-dos";
import Cabezera_tres from "./components/cabezera_tres";
import Cabezera_cuatro from "./components/cabezera_cuatro";

export default function Home() {
  return (
    <div>
      <Cabezera />
      <Cabezera_dos />
      <Cabezera_tres />
      <Cabezera_cuatro />
      <Cabezera />
      <Cabezera_dos />
      <Cabezera_tres />
      <Cabezera_cuatro />
      <Cabezera />
      <div className="lg:hidden">
      <Cabezera_dos />
      <Cabezera_tres />
     
      <Cabezera_cuatro />
      <Cabezera />
      
        <Cabezera_dos />
        <Cabezera_tres />
      </div>
    </div>
  );
}
