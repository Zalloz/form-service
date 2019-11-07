DROP DATABASE IF EXISTS formservice;

CREATE DATABASE formservice;

\c formservice

CREATE TABLE agents (
  id SERIAL PRIMARY KEY,
  agent_name varchar(25) NOT NULL,
  recent_sales int NOT NULL,
  phone varchar(12) NOT NULL,
  agent_type varchar(7) NOT NULL,
  average_stars int NOT NULL,
  num_ratings int NOT NULL,
  agent_photo varchar(62) NOT NULL
);
