import Image from "next/image";

function Work() {
  return ( 
    <section className="flex items-center justify-center">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 text-center"> 
          <Image src="/work2.png" alt="Work 1" width={600} height={500} />
        </div>
        <div className="w-full md:w-1/2 text-center"> 
          <Image src="/work2.png" alt="Work 2" width={600} height={500} />
        </div>
      </div>
    </section>
  );
}

export default Work;
