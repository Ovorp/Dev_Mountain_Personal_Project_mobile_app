import React, { useState } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import JournalNavBar from './../navBar/JournalNavBar';
import TripSum from './trip/TripSum';
import TripForm from './trip/TripForm';

function NoTripSelect(props) {
  const [addTrip, setAddTrip] = useState(false);
  return (
    <>
      <p>This is where you can pick what trip you want to select</p>
      <Button variant="primary" onClick={() => setAddTrip(!addTrip)}>
        + Add new trip
      </Button>
      {addTrip ? <TripForm /> : null}
      {/* This will probably have to be a new component */}
      {props.tripArr.map((val) => {
        return <p>{val}</p>;
      })}
    </>
  );
}

function Journal(props) {
  const [tripId, setTripId] = useState(false);
  const isLoggedIn = props.user.isLoggedIn;
  //need to fix this to get it from redux
  const tripArr = props.trips;
  console.log(tripArr);
  //Will need to get a list of trips from the server and store it on redux on mount

  async function journalHomePage() {
    return (
      <>
        <button onClick={() => setTripId(!tripId)}>
          Test to set tripId to true
        </button>
        <JournalNavBar tripId={tripId} />
        {tripId ? <TripSum /> : <NoTripSelect tripArr={tripArr} />}
      </>
    );
  }

  return (
    <div>
      <h1>Journal Component</h1>{' '}
      {!isLoggedIn ? (
        <h2>Please go to the home page and log in</h2>
      ) : (
        journalHomePage()
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    trips: state.trip,
  };
};

export default connect(mapStateToProps)(Journal);
