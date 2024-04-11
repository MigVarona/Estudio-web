import Contact from '../components/contact';

import Cabezera_Seis from "../components/cabezera_seis";
import Cabezera_Cinco from "../components/cabezera-cinco"


export default function Home() {
  return (
    <div>
      <Cabezera_Cinco />
      <Cabezera_Seis />
    <main className='flex  flex-col items-center justify-center  bg-white'>
      <Contact />
    
    </main>
    </div>
  );
}