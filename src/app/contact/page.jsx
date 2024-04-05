import Contact from '../components/contact';
import Cabezera from '../components/cabezera-uno';
import Cabezera_dos from '../components/cabezera-dos';


export default function Home() {
  return (
    <div>
      <Cabezera />
      <Cabezera_dos />
    <main className='flex  flex-col items-center justify-center  bg-white'>
      <Contact />
    </main>
    </div>
  );
}