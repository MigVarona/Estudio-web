import Image from "next/image";


function Work() {
    return ( 
<div className="flex justify-center w-full items-center">
    <div className="mb-2 ">
    <Image className="mb-2 " src="/work1.png" width="300" height="500" layout="responsive"></Image>
    <Image src="/work2.png" width="500" height="500"></Image>
</div>
</div>


     );
}

export default Work;