import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  weight: "100",
});

function Cabezera_dos() {
    return ( 

        <nav className="">
        <div className="flex items-center  justify-center flex-col">
          <div className="flex items-center  max-w-5xl justify-center">
           
              <h1
                className="font-bold mr-17 text-5xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl m-0 p-0 leading-none"
                style={{
                  letterSpacing: "-0.1em",
                  marginBottom: "0",
                  marginTop: "0",
                }}
              >
                CSS
              </h1>
           
            <div className="vertical-line">
              <h1
                className="font-bold ml-2 text-5xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl m-0 p-0 leading-none"
                style={{
                  letterSpacing: "-0.1em",
                  marginBottom: "0",
                  marginTop: "0",
                  color: "darkorange"
                }}
              >
                WORK
              </h1>
            </div>
            <div className="vertical-line">
              <h1
                className="font-bold ml-2 text-5xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl m-0 p-0 leading-none"
                style={{
                  letterSpacing: "-0.1em",
                  marginBottom: "0",
                  marginTop: "0",
                }}
              >
                JS
              </h1>
            </div>
            <div className="vertical-line">
              <h1
                className="font-bold ml-2 text-5xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl m-0 p-0 leading-none"
                style={{
                  letterSpacing: "-0.1em",
                  marginBottom: "0",
                  marginTop: "0",
                  color: "darkorange",
                }}
              >
                GITHUB
              </h1>
            </div>
          </div>
          <div className="border-b  border-black w-full max-w-6xl"></div>
        </div>
      </nav>
     );
}

export default Cabezera_dos;