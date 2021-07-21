import React from 'react';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import './../../css/navBar.css';
// import routes from './../../routes';

export default function NavBar() {
  return (
    <nav className="mainNav">
      <Nav defaultActiveKey="/" className="flex-column">
        <Nav.Link href="/" eventKey="home">
          Home
        </Nav.Link>

        <Nav.Link href="#/journal" keventKey="journal">
          Journal
        </Nav.Link>

        <Nav.Link>Trips</Nav.Link>
        <Nav.Link>Pictures</Nav.Link>
        <Nav.Link>Something Else</Nav.Link>
        <div className="logout">
          <Nav.Link>
            <h4>Log out</h4>
          </Nav.Link>
        </div>
      </Nav>
    </nav>
  );
}

// <nav>
//   <Link to="/">
//     <h2>Home</h2>
//   </Link>
//   <ol>
//     <Link to="/journal">
//       <h3>Journal</h3>
//     </Link>
//     <li>Trips</li>
//     <li>Pictures</li>
//     <li>Something Else</li>
//   </ol>
//   <h4>Log Out</h4>
// </nav>
