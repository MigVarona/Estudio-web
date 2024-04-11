import Link from "next/link";
import "../../app/cabezera.css"



import { Roboto } from "next/font/google";



const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  weight: "500",
});

export default function Cabezera_Seis() {

  
  return (
    <div>
      <nav>
        <div className=" overflow-hidden  flex items-center  justify-center flex-col">
          <div className="small flex items-center  max-w-6xl justify-center">
            
            <div>
              <Link href="/">
              <h1
                className="texto font-bold text-5xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl m-0 p-0 leading-none"
                style={{
                  letterSpacing: "-0.1em",
                  marginBottom: "0",
                  marginTop: "0",
                  color: "darkorange"
                }}
              >
                <span className="hover:text-yellow-300">GITHUB</span>
              </h1>
              </Link>
            </div>
            
            <div className="vertical-line">
              <h1
                className="texto font-bold ml-2 text-5xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl m-0 p-0 leading-none"
                style={{
                  letterSpacing: "-0.1em",
                  marginBottom: "0",
                  marginTop: "0",
                  
                }}
              >
                CONTACT
              </h1>
            </div>
          </div>
          <div className="border-b  border-black w-full max-w-7xl"></div>
        </div>
      </nav>
    </div>
  );
}
