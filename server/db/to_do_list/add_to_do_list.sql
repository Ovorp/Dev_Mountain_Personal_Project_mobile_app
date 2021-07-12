INSERT INTO to_do_list
(trip_id)
VALUES
($1)
RETURNING *;