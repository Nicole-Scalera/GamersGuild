-- TODO
-- Edit this to update the columns

-- Database setup

-- CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Setup (as root / postgres)
DROP DATABASE IF EXISTS gamersguild;
CREATE DATABASE gamersguild;
CREATE USER gamersguild WITH ENCRYPTED PASSWORD 'gamersguild';
GRANT ALL PRIVILEGES ON DATABASE gamersguild TO gamersguild;
GRANT CONNECT ON DATABASE gamersguild TO gamersguild;

\c gamersguild gamersguild

-- Create the "gamersguild" schema if it doesn't exist
CREATE SCHEMA IF NOT EXISTS gamersguild;

-- Set the search path to use the "gamersguild" schema
SET search_path = gamersguild;

-- Create and inserts

CREATE TABLE IF NOT EXISTS gamersguild.users (
    user_id SERIAL PRIMARY KEY,
    first_name VARCHAR,
    last_name VARCHAR
);


GRANT ALL PRIVILEGES ON TABLE users TO gamersguild;


CREATE TABLE IF NOT EXISTS gamersguild.feed (
    feed_id SERIAL PRIMARY KEY,
    user_id Integer,
    feed_description VARCHAR,
    feed_like VARCHAR,
    comment VARCHAR

);

GRANT ALL PRIVILEGES ON TABLE feed TO gamersguild;

-- Seed data, initial data to give for testing
INSERT INTO gamersguild.users (first_name, last_name) values('Ellie', 'Williams');
INSERT INTO gamersguild.users (first_name, last_name) values('Joel', 'Miller');
INSERT INTO gamersguild.users (first_name, last_name) values('Abby', 'Anderson');

INSERT INTO gamersguild.feed (user_id, feed_description, comment) values(1, "Man, it's raining hard today", 'Hope it slows down soon.'); -- Ellie
INSERT INTO gamersguild.feed (user_id, feed_description, comment) values(1, 'Just killed a few clickers #zombieslayer', 'Fantastic!'); -- Ellie
INSERT INTO gamersguild.feed (user_id, feed_description, comment) values(2, "I could really use a cup of coffee right now.", 'Same here!'); -- Joel
INSERT INTO gamersguild.feed (user_id, feed_description, comment) values(3, 'Hi Joel!', 'Hello Abby!'); -- Abby

Commit;