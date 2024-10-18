// import './index.css'
import UrlForm from "./components/UrlForm"

function App() {

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
