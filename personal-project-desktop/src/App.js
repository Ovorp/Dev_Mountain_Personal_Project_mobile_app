import './css/App.css';
import axios from 'axios';

function App() {
  axios.get('api/test').then((res) => {
    console.log(res.data);
  });

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello World</h1>
        <p></p>
      </header>
    </div>
  );
}

export default App;
