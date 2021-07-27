import React from 'react';
import tripRoutes from './../../../routes/tripRoutes';

export default function TripSum(props) {
  return (
    <div>
      <h1>See your trip summary</h1>
      {tripRoutes}
    </div>
  );
}
