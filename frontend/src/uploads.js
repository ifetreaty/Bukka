// import React, { useState } from "react";

// const Uploads = () => {
//   const [ image, setImage ] = useState("");
//   const [ url, setUrl ] = useState("");

//   const uploadImage = () => {
//     const data = new FormData()
//     data.append("file", image)
//     data.append("upload_preset", "nsq1zhoq")
//     data.append("cloud_name", "ifetreaty")
//     fetch("https://api.cloudinary.com/v1_1/ifetreaty/image/upload", {
//       method: "post",
//       body: data
//     })
//     .then(resp => resp.json())
//     .then(data => {
//       setUrl(data.url)
//     })
//     .catch(err => console.log(err))

//   }
//   return (
//     <div>
//       <div>
//         <input type="file" onChange={(e) => setImage(e.target.files[0])}></input>
//         <button onClick={uploadImage}>Add A Meal</button>
//       </div>
//       <div>
//         <h1>Uploaded Image will be here</h1>
//         <img src={url}/>
//       </div>
//     </div>
//   )
// }

// export default Uploads;