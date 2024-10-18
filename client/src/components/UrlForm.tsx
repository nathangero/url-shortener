import { SyntheticEvent, useState } from "react"

export default function UrlForm() {

  const [url, setUrl] = useState<string>('');


  const onChangeUrl = (event: SyntheticEvent) => {
    setUrl(event.currentTarget.textContent ?? "");
  }

  const handleFormSubmit = (event: SyntheticEvent) => {
    // Don't make the page refresh
    event.preventDefault();
    event.stopPropagation();


  }

  return (
    <div>
      <h2 className="text-3xl">Enter your URL below, and click Shorten to shorten.</h2>
      <form onSubmit={handleFormSubmit}>
        <input
          id="sUsername"

          className="border-solid border-2 border-black w-64" required
          name="userName"
          type="url"
          value={url}
          onChange={onChangeUrl}
        />

        <button type="submit" className="bg-blue-500 text-white cursor-pointer rounded text-xl p-2 mx-3">Shorten</button>
      </form>
    </div>
  )
}