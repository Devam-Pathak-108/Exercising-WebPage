import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const FileUploder = (props) => {

  const [file, setFile] = useState()
  const handleUpload = (e) => {
    const formData = new FormData()
    formData.append("file", file)
    axios.post("http://localhost:5000/UploadPic", formData).then((res) => {
      console.log(res)
      localStorage.setItem('userData', JSON.stringify(res.data))
    }).catch(e => console.log("Failed"))

  }

  return (
    <div className="App">
      <h4 className='changePic'><center>To Change Profile Pic</center></h4>
      <input type='file' id='file' hidden onChange={(e) => setFile(e.target.files[0])} />
      <button className='Uploadbtn'>
        <label for='file' >  Choose File  </label>
      </button >
      <button className='Uploadbtn' onClick={handleUpload} >Upload</button>
    </div>
  );
}

export default FileUploder;
