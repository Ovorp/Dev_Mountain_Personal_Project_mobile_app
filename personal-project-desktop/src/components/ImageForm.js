import React from 'react';
import { useState } from 'react';
import axios from 'axios';

async function postImage({ image, description }) {
  const formData = new FormData();
  formData.append('image', image);
  formData.append('description', description);
  formData.append('tripId', 3);
  formData.append('userId', 1);
  //need to figure out a way to add trip id and user id

  const result = await axios.post('/api/image', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  return result.data;
}

//write a on mount function that gets all picture information and sets it to set images

export default function ImageForm() {
  const [file, setFile] = useState();
  const [description, setDescription] = useState('');
  const [images, setImages] = useState([]);
  const [imageDescription, setImageDescription] = useState([]);

  const submit = async (e) => {
    e.preventDefault();
    const result = await postImage({ image: file, description });
    console.log(result);
    setImages([result.imageKey, ...images]);
    setImageDescription([result.imageDescription, ...imageDescription]);
  };

  const fileSelected = (e) => {
    const file = e.target.files[0];
    setFile(file);
  };

  console.log(images, imageDescription);

  return (
    <div>
      <form onSubmit={submit}>
        <input onChange={fileSelected} type="file" accept="image/*"></input>
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          type="text"
        ></input>
        <button type="submit">Submit</button>
      </form>

      {images.map((image, i) => (
        <div key={image}>
          <img
            src={`/api/image/${image}`}
            alt={imageDescription[i]}
            width="200"
            height="200"
          ></img>
        </div>
      ))}

      {/* <img
        src="/api/image/e36712cfaa456a6b6b19cd71ba1ef40a"
        alt="test for s3"
      /> */}
    </div>
  );
}
