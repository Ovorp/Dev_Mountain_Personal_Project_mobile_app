CREATE TABLE users (
    users_id serial PRIMARY KEY,
    users_first_name VARCHAR(60),
    users_last_name VARCHAR(60),
    users_password VARCHAR(300) NOT NULL,
    phone_number VARCHAR(10)
);

CREATE TABLE users_picture (
    users_picture_id serial PRIMARY KEY,
    users_id int REFERENCES users(users_id)
);

CREATE TABLE trip (
    trip_id serial PRIMARY KEY,
    users_id int REFERENCES users(users_id),
    trip_name VARCHAR(60)
);

CREATE TABLE to_do_list (
    to_do_list_id serial PRIMARY KEY,
    trip_id int REFERENCES trip(trip_id)
);

CREATE TABLE to_do_list_item (
    to_do_list_item_id serial PRIMARY KEY,
    to_do_list_id int REFERENCES to_do_list(to_do_list_id),
    item_name VARCHAR(200) NOT NULL,
    is_done BOOLEAN
);

CREATE TABLE people_list (
    people_list_id serial PRIMARY KEY,
    trip_id int REFERENCES trip(trip_id)
);

CREATE TABLE people (
    people_id serial PRIMARY KEY,
    people_list_id int REFERENCES people_list(people_list_id),
    first_name VARCHAR(60),
    last_name VARCHAR(60),
    email VARCHAR(100),
    phone_number VARCHAR(10)

);

CREATE TABLE pictures (
    picture_id serial PRIMARY KEY,
    trip_id int REFERENCES trip(trip_id),
    users_id int REFERENCES users(users_id)
)