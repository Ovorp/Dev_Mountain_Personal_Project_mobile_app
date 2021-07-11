async function addNewTrip(req, res) {
  const { trip_name, id } = req.body;
  //   const { id } = req.session.user.id;
  const db = req.app.get('db');
  const trip = await db.trip
    .add_trip([id, trip_name])
    .catch((err) => console.log(err));

  res.status(200).json(trip);
}

async function changeTripName(req, res) {
  const { trip_name, trip_id } = req.body;
  const db = req.app.get('db');
  const trip = await db.trip
    .update_trip([trip_id, trip_name])
    .catch((err) => console.log(err));
  res.status(200).json(trip);
}

function deleteTrip(req, res) {
  const { trip_id } = req.body;
  const db = req.app.get('db');

  db.trip
    .delete_trip(trip_id)
    .then(() => res.status(200).json('Trip has been deleted'))
    .catch((err) => console.log(err));
}

module.exports = { addNewTrip, changeTripName, deleteTrip };
