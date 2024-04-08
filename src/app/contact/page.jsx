import Contact from '../components/contact';
import Cabezera from '../components/cabezera-uno';
import Cabezera_dos from '../components/cabezera-dos';
import Cabezera_tres from "../components/cabezera_tres";
import Cabezera_cuatro from "../components/cabezera_cuatro";


export default function Home() {
  return (
    <div>
      <Cabezera />
      <Cabezera_dos />
    <main className='flex  flex-col items-center justify-center  bg-white'>
      <Contact />
      <Cabezera_tres />
      <Cabezera_cuatro />
    </main>
    </div>
  );
}