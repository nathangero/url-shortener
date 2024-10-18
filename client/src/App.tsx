// import './index.css'
import UrlForm from "./components/UrlForm"

function App() {

  return (
    <main className="flex-col items-center justify-center">
      <h1 className="text-5xl">URL Shortener</h1>

      {UrlForm()}
    </main>
  )
}

export default App
