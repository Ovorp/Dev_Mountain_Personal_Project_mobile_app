import './css/App.css';
import axios from 'axios';
import ImageForm from './components/ImageForm';

function App() {
  axios.get('api/test').then((res) => {
    console.log(res.data);
  });

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello World</h1>
        <ImageForm />
      </header>
    </div>
  );
}

export default App;
