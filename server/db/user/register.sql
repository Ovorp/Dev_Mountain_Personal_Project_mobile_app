INSERT INTO users
(users_first_name, users_last_name, users_password, phone_number)
VALUES
($1, $2, $3, $4)
returning *;