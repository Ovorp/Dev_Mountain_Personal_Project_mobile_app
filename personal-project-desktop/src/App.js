import './css/App.css';

import axios from 'axios';
import { HashRouter } from 'react-router-dom';
import ImageForm from './components/ImageForm';
import { Header, NavBar } from './component imports/appComponents';
import routes from './routes/routes';
import Journal from './components/journal/Journal';
import Button from 'react-bootstrap/Button';

function App() {
  axios.get('api/test').then((res) => {
    console.log(res.data);
  });

  return (
    <HashRouter>
      <div className="App">
        <Header />
        {/* <Button variant="primary">Primary</Button>{' '}
        <Button variant="secondary">Secondary</Button>{' '}
        <Button variant="success">Success</Button>{' '}
        <Button variant="warning">Warning</Button>{' '}
        <Button variant="danger">Danger</Button>{' '}
        <Button variant="info">Info</Button>{' '}
        <Button variant="light">Light</Button>{' '}
        <Button variant="dark">Dark</Button>{' '}
        <Button variant="link">Link</Button> */}
        <NavBar />

        {/* <Journal /> */}
        <div className="home">
          {/* Need to add some styles to this div so everything looks the same  */}
          {routes}
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
