import React, { useState } from 'react';
import { connect } from 'react-redux';
import ToDoCheckboxes from './ToDoCheckboxes';

function ToDoItems(props) {
  const itemArr = props.trip.filter(
    (val) => val.tripId === props.user.currentTripId
  )[0].toDoList;

  return (
    <>
      {itemArr.map((val, i) => {
        return (
          <>
            <ToDoCheckboxes val={val} key={i} />
          </>
        );
      })}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    trip: state.trip,
  };
};

export default connect(mapStateToProps)(ToDoItems);
