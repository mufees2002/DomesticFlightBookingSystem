import axios from "axios";
import React, { useState }  from "react";



const UploadFile = () => {
    const [file, setFile] = useState()

    function handleChange(event) {
      setFile(event.target.files[0])
    }
    
    function handleSubmit(event) {
      event.preventDefault()
      const url = 'http://localhost:8009/user/files';
      const formData = new FormData();
      formData.append('file', file);
      formData.append('fileName', file.name);
      const config = {
        headers: {
          'content-type': 'multipart/form-data',
        },
      };
      axios.post(url, formData, config).then((response) => {
        console.log(response.data);
      });
  
    }
  
    return (
      <div className="App">
          <form onSubmit={handleSubmit}>
            <h1>React File Upload</h1>
            <input type="file" onChange={handleChange}/>
            <button type="submit">Upload</button>
          </form>
      </div>
    );
} 

export default UploadFile;