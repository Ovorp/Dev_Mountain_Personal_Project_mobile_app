import './css/App.css';
import { useState } from 'react';
import axios from 'axios';

async function postImage({ image, description }) {
  const formData = new FormData();
  formData.append('image', image);
  formData.append('description', description);

  const result = await axios.post('/api/image', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  return result.data;
}

function App() {
  const [file, setFile] = useState();
  const [description, setDescription] = useState('');
  const [images, setImages] = useState([]);
  const [imageDescription, setImageDescription] = useState([]);

  const submit = async (e) => {
    e.preventDefault();
    const result = await postImage({ image: file, description });
    console.log(result, 'this is the result from the submit action');
    setImages([result.image, ...images]);
    setImageDescription([result.description, ...imageDescription]);
  };

  const fileSelected = (e) => {
    const file = e.target.files[0];
    setFile(file);
  };

  // axios.get('api/test').then((res) => {
  //   console.log(res.data);
  // });

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello World</h1>
        <form onSubmit={submit}>
          <input onChange={fileSelected} type="file" accept="image/*"></input>
          <input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            type="text"
          ></input>
          <button type="submit">Submit</button>
        </form>

        {/* {images.map((image, i) => (
          <div key={image}>
            <img src={image} alt={imageDescription[i]}></img>
          </div>
        ))} */}

        <img
          src="/api/image/e36712cfaa456a6b6b19cd71ba1ef40a"
          alt="test for s3"
        />
      </header>
    </div>
  );
}

export default App;
