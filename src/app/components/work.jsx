import Image from "next/image";

function Work() {
  return ( 
    <section className="flex items-center justify-center">
      <div className="flex flex-col">
        {/* Primer par de imágenes */}
        <div className="flex flex-col md:flex-row justify-center"> 
          <div className="w-full md:w-1/2 text-center mb-4 md:mb-0"> 
            <Image src="/work2.png" alt="Work 1" width={700} height={500} />
          </div>
          <div className="w-full md:w-1/2 text-center"> 
            <Image src="/work8.png" alt="Work 2" width={700} height={500} />
          </div>
        </div>
        {/* Segundo par de imágenes */}
        <div className="flex flex-col md:flex-row justify-center"> 
          <div className="w-full md:w-1/2 text-center mb-4 md:mb-0"> 
            <Image src="/work9.png" alt="Work 3" width={700} height={500} />
          </div>
          <div className="w-full md:w-1/2 text-center"> 
            <Image src="/work1.png" alt="Work 4" width={700} height={500} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Work;
