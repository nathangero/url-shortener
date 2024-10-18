// import './index.css'
import UrlForm from "./components/UrlForm"

function App() {

  const debugRedirect: { [key: string]: string } = {
    "aHR0cHM6": "https://www.youtube.com/"
  }

  const params = window.location.pathname.slice(1);
  console.log(params);

  if (params) {
    // If the url exists in the db, send the user to the url in the same tab
    if (debugRedirect[params]) {
      window.open(debugRedirect[params], "_self", "noreferrer");
    } else {
      console.error("This isn't a valid url")
    }
  }

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
