// import './index.css'
import { useEffect } from "react";
import UrlForm from "./components/UrlForm"

function App() {
  const params = window.location.pathname.slice(1);
  console.log(params);

  useEffect(() => {
    const getUrlFromSlug = async (params: string) => {
      try {
        const response = await fetch(`http://localhost:3001/${params}`, {
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
          }
        });

        const url = await response.text();
        console.log("url:", url);
        window.open(url, "_self", "noreferrer");
      } catch (error: Error) {
        console.error("Couldn't fetch url:", error);
        window.location.href = "/"; // remove the slug
      }
    }

    getUrlFromSlug(params);
  }, [])

  return (
    <main className="flex justify-center">
      <div className="text-center">
        <h1 className="text-5xl">URL Shortener</h1>

        {UrlForm()}
      </div>
    </main>
  )
}

export default App
