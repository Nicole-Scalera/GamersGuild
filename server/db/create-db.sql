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
    user_id uuid PRIMARY KEY,
    first_name VARCHAR,
    last_name VARCHAR
);


GRANT ALL PRIVILEGES ON TABLE users TO gamersguild;


CREATE TABLE IF NOT EXISTS gamersguild.feed (
    feed_id SERIAL PRIMARY KEY,
    feed_description VARCHAR,
    feed_like VARCHAR,
    comment VARCHAR

);

GRANT ALL PRIVILEGES ON TABLE feed TO gamersguild;