import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

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
  const [file, setFile] = useState({});
  const [description, setDescription] = useState('');
  const [images, setImages] = useState([]);
  const [imageDescription, setImageDescription] = useState([]);

  const submit = async (e) => {
    e.preventDefault();
    const result = await postImage({ image: file, description });
    setImages([result.imageKey, ...images]);
    setImageDescription([result.imageDescription, ...imageDescription]);
    setDescription('');
  };

  const fileSelected = (e) => {
    const file = e.target.files[0];
    setFile(file);
  };

  return (
    <div>
      <Form>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Control type="file" onChange={fileSelected} accept="image/*" />
          <Form.Control
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            type="text"
            placeholder="Picture description"
          />
        </Form.Group>
        {/* <form onSubmit={submit}>
        <input onChange={fileSelected} type="file" accept="image/*"></input>
        <input
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        type="text"
      </form>
      ></input>
      */}
        <Button type="submit" onClick={submit}>
          Submit
        </Button>
      </Form>
      <div className="pic-grid">
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
      </div>

      {/* <img
        src="/api/image/e36712cfaa456a6b6b19cd71ba1ef40a"
        alt="test for s3"
      /> */}
    </div>
  );
}
