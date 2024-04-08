import Image from "next/image";

function Work() {
  return ( 
    <section className="flex items-center justify-center">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 text-center"> <img src="/work2.png" alt="" /></div>
        <div className="w-full md:w-1/2 text-center"> <img src="/work2.png" alt="" /></div>
      </div>
    </section>
  );
}

export default Work;

