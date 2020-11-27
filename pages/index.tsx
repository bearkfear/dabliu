import Head from "next/head";
import React from "react";
import { Input } from "../components/Input";


const Index = () => {
  const [url, setUrl] = React.useState("");
  const [nick, setNick] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(true);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 10000);
  };


  return <>
    <Head>
      <title>Dabliu.</title>
    </Head>
    <div className="min-h-screen h-screen w-screen">
      <div className="flex flex-col items-center justify-center h-full w-full">
        <div className="w-2/3 bg-yellow-200  rounded-md">
          <div className="space-y-8 m-10 ">
            <h1
              className="font-bold tracking-wide text-4xl text-gray-900 transition transform hover:rotate-1">Dabliu.</h1>
            <div
              className="transform hover:scale-105 transition duration-75 bg-gradient-to-tr from-blue-100 to-indigo-100 rounded-md flex flex-col justify-between overflow-hidden">
              <h3 className="text-blue-600 tracking-normal font-normal text-sm px-2 py-4">Adicione e
                redirecione</h3>
              <div
                className="font-mono font-semibold text-xs bg-blue-700 text-white px-2 py-2 flex items-center space-x-1">
                <img className="w-3 h-3"
                     src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAhklEQVRIie2Vyw2AIBAFLcESLIUSLMUSKMVOoBMowQ7Gi6seQAlw8MMkXHhhB8gSuu4XACNgODCAqlV8Jo6usXNhAoZt6NN8/kkAK8UDmUhsiUDoA9kgYbEgN/+oAFCAu2jNGC6powCfUXyXFF9L8bomaIJ3CJbb5xTHpwgUea/ZU+sbfRQrUvgvmEc05ZkAAAAASUVORK5CYII="
                     alt="oi" />
                <p className="text-blue-100 font-mono font-light">https://nossaurl/</p>
                nick =&gt; sua url
              </div>
            </div>
            <form id="main-form" className="space-y-4 flex flex-col" onSubmit={(e) => onSubmit(e)}>
              <Input
                iconLeft={<img
                  className="w-4 h-4"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAd0lEQVRIiWNgGAWDFfwnEw8+C5DBAyRxByLUk2SBAAN+l5JsATpwQDLkACUG4QINSBZMoIUFB5AsSKCFBR+QLFCgtuEKSIZ/oLbhDAyQIKFpBE9AsqCBFhYcYMCdwagCkDOYALUNd0Ay/AE1DaZaoTZgFowC+gEAv1tYk293kJAAAAAASUVORK5CYII="
                  alt={"oi"}
                />}
                inputMode={"text"} type={"text"}
                placeholder={"Digite o Nick"} value={nick}
                onChange={value => setNick(value)}
                disabled={isLoading}
              />

              <Input
                iconLeft={
                  <img
                    className="w-4 h-4"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAA6UlEQVRIie2U3RGCMBCEvxIoISVQCiWkA+mAdKAdSAfSAXagnWgH+pBjOGPiJIBv7Ewmw11u728H2PEnGOAAdHKbLckd8Iqc49bkg3wPytauTVABd8AG9kYSPNh4XBpTJ01poGFeaAfUiXdOErgS8ikoPOfI2yuFHfSKsJdk2qYrtWJ7krkDTWQDXy3VVgF5toraCHkFjHzPX5P3OeQGL7Wwcsfn/Du5i8hh1vMQ8Z2IL9zlkutKU0G1+Bx+lKaEHH53sAkMXmoxPVvgxqyexdAquuAXOrJw5imkFrr6b6lhhNCxcKE7svAGCbRf+QepEBkAAAAASUVORK5CYII="
                    alt={"oi"}
                  />
                }
                inputMode={"url"} type={"url"}
                placeholder={"Digite a URL"} value={url}
                onChange={value => setUrl(value)}
                disabled={isLoading}
              />
            </form>

            <button
              className="flex items-center justify-center space-x-2 bg-blue-500 text-white hover:border-blue-800 hover:bg-blue-600 disabled:opacity-80 transform transition duration-75 hover:scale-105 px-4 py-2 w-full rounded-md shadow border-b-4 border-transparent disabled:scale-100"
              type="submit" form="main-form" disabled={isLoading}
            >
              <span>Salvar</span>
              <svg
                className="animate-spin fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M2 11H7V13H2zM17 11H22V13H17zM11 17H13V22H11zM11 2H13V7H11z" />
                <path transform="rotate(-45.001 6.697 6.697)" d="M5.697 4.197H7.697V9.197H5.697z" />
                <path transform="rotate(134.999 17.303 17.303)" d="M16.303 14.803H18.303V19.803H16.303z" />
                <path transform="rotate(45.001 6.697 17.303)" d="M5.697 14.803H7.697V19.803H5.697z" />
                <path transform="rotate(-44.992 17.303 6.697)" d="M14.803 5.697H19.803V7.697H14.803z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </>;
};

export default Index;