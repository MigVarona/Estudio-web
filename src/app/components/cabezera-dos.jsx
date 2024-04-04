import Link from "next/link";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  weight: "100",
});

function Cabezera_dos() {
  return (
    <nav className="">
      <div className="overflow-hidden flex items-center  justify-center flex-col">
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
            <Link href="work">
              <h1
                className="font-bold ml-2 text-5xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl m-0 p-0 leading-none"
                style={{
                  letterSpacing: "-0.1em",
                  marginBottom: "0",
                  marginTop: "0",
                  color: "darkorange",
                }}
              >
                <span className="hover:text-yellow-300">WORK</span>
              </h1>
            </Link>
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
            <Link href="https://github.com/MigVarona">
              <h1
                className="font-bold ml-2 text-5xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl m-0 p-0 leading-none transition-colors duration-300 ease-in-out"
                style={{
                  letterSpacing: "-0.1em",
                  marginBottom: "0",
                  marginTop: "0",
                  color: "darkorange",
                }}
              >
                <span className="hover:text-yellow-300">GITHUB</span>
              </h1>
            </Link>
          </div>
        </div>
        <div className="border-b  border-black w-full max-w-6xl"></div>
      </div>
    </nav>
  );
}

export default Cabezera_dos;
