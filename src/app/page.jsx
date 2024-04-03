import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  weight: "100",
});

export default function Home() {
  return (
    <div>
      <nav>
        <div className="flex items-center  justify-center flex-col">
          <div className="border-b mt-6 border-black w-full max-w-6xl"></div>
          <div className="flex items-center max-w-6xl justify-center">
            <div className={roboto.className}>
              <h1
                className="font-bold mr-17 text-5xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl m-0 p-0 leading-none"
                style={{
                  letterSpacing: "-0.1em",
                  marginBottom: "0",
                  marginTop: "0",
                }}
              >
                FLEX
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
                DISPLAY
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
                LOGIN
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
