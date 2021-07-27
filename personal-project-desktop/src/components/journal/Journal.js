import React, { useState } from 'react';
import JournalNavBar from './../navBar/JournalNavBar';
import TripSum from './trip/TripSum';

function noTripSelect(tripArr) {
  return (
    <>
      <p>This is where you can pick what trip you want to select</p>
      <button>+ Add new trip</button>
      {/* This will probably have to be a new component */}
      {tripArr.map((val) => {
        return <p>{val}</p>;
      })}
    </>
  );
}

export default function Journal(props) {
  const [tripId, setTripId] = useState(false);
  //need to fix this to get it from redux
  const tripArr = [1, 2, 3, 4, 5];
  //Will need to get a list of trips from the server and store it on redux on mount
  return (
    <div>
      <h1>Journal Component</h1>{' '}
      <button onClick={() => setTripId(!tripId)}>
        Test to set tripId to true
      </button>
      <JournalNavBar tripId={tripId} />
      {tripId ? <TripSum /> : noTripSelect(tripArr)}
    </div>
  );
}
