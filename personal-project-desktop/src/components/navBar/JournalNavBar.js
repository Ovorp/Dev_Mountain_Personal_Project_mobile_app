import React, { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap';
import './../../css/navBar.css';

//still might need redux inorder to put down some info for the url.  That might be a good way to get that information

function JournalNavBar(props) {
  // const [tripId, setTripId] = useState(false);
  // will need to add a number but for testing false and true should be fine
  let tripId = props.tripId;
  return (
    <>
      {tripId ? (
        <nav className="second-nav">
          <Nav defaultActiveKey="/" className="flex-column">
            <LinkContainer to="/journal">
              <Nav.Link>Trip Home Page</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/journal/todo">
              <Nav.Link>To Do List</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/journal/people">
              <Nav.Link>People</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/journal/trip-pic">
              <Nav.Link>Trip Pictures</Nav.Link>
            </LinkContainer>
          </Nav>
        </nav>
      ) : (
        <p>please pick a trip</p>
      )}
    </>
  );
}

export default JournalNavBar;
