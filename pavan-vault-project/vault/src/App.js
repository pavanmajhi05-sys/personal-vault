import React, { useState } from "react";
import "./App.css";

function App() {

const [files, setFiles] = useState([])

const uploadFiles = async (folder) => {

if(files.length === 0){
alert("Please select files first")
return
}

for(let i = 0; i < files.length; i++){

const data = new FormData()

data.append("file", files[i])
data.append("upload_preset", "ml_default")
data.append("folder", folder)

try{

const res = await fetch(
"https://api.cloudinary.com/v1_1/dmiyonbvy/upload",
{
method: "POST",
body: data
})

const result = await res.json()

console.log(result)

}catch(error){
console.error(error)
alert("Upload error")
}

}

alert("All files uploaded successfully")

}

return (

<div className="container">

<h1 className="title">⚡ Pavan Personal Vault</h1>

<div className="grid">

<div className="card">
<h2>📷 Images</h2>
<input
type="file"
multiple
onChange={(e)=>setFiles(e.target.files)}
/>
<button onClick={()=>uploadFiles("vault-images")}>
Upload Images
</button>
</div>

<div className="card">
<h2>📄 Documents</h2>
<input
type="file"
multiple
onChange={(e)=>setFiles(e.target.files)}
/>
<button onClick={()=>uploadFiles("vault-documents")}>
Upload Documents
</button>
</div>

<div className="card">
<h2>💻 Projects</h2>
<input
type="file"
multiple
onChange={(e)=>setFiles(e.target.files)}
/>
<button onClick={()=>uploadFiles("vault-projects")}>
Upload Projects
</button>
</div>

<div className="card">
<h2>🔒 Private Files</h2>
<input
type="file"
multiple
onChange={(e)=>setFiles(e.target.files)}
/>
<button onClick={()=>uploadFiles("vault-private")}>
Upload Private Files
</button>
</div>

</div>

</div>

)

}

export default App;