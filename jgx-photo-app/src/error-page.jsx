import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-500 to-gray-900 text-white p-4">
      <h1 className="text-6xl font-bold mb-4 animate-bounce">Oops!</h1>
      <p className="text-xl mb-2">Sorry, an unexpected error has occurred.</p>
      <p className="text-6xl text-yellow-500 p-3 text-center">
        <i>{error?.statusText || error?.message || "Unknown error"}</i>
      </p>
      <a
        href="/"
        className="mt-6 px-4 py-2 bg-gray-500 text-white font-semibold rounded-md shadow hover:bg-yellow-500 transition duration-300"
      >
        Ir al inicio
      </a>
    </div>
  );
}
