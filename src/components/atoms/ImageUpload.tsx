import { useState } from "react"
import Input from "./Input"

const ImageUpload = () => {
  const [url, setUrl] = useState('')
  const fetchPreview = (e) => {
    //const url = URL.createObjectURL(e.target.value) //for file upload
    setUrl(e.target.value)
  }

  return (
    <div>
      <h2>Picture</h2>
      <img src={url} />
      <label>Image url</label>
      <input onChange={fetchPreview} placeholder='Enter img url' />
    </div>
  )
}

export default ImageUpload