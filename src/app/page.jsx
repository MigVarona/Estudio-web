import Cabezera from "./components/cabezera";



export default function Home() {
  return (
    <div>
      <Cabezera />
      <nav className="hidden md:block">
        <div className="flex items-center  justify-center flex-col">
          <div className="flex items-center  max-w-5xl justify-center">
           
              <h1
                className="font-bold mr-17 text-5xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl m-0 p-0 leading-none"
                style={{
                  letterSpacing: "-0.1em",
                  marginBottom: "0",
                  marginTop: "0",
                  color: "red"
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
                }}
              >
                HOLA
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
                GRID
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
                HOME
              </h1>
            </div>
          </div>
          <div className="border-b  border-black w-full max-w-6xl"></div>
        </div>
      </nav>
    </div>
  );
}
