DROP DATABASE IF EXISTS parking;

CREATE DATABASE parking;
USE parking;

CREATE TABLE parkinglots (
  name VARCHAR(255) NOT NULL,
  address VARCHAR(255) NOT NULL,
  city VARCHAR(255) NOT NULL,
  state VARCHAR(5) NOT NULL,
  zip NUMERIC (10) NOT NUll,
  latitude NUMERIC (10,2) NOT NULL,
  longitude NUMERIC (10,2) NOT NULL,
  available_spaces NUMERIC (10) NOT NULL, 
  default_time NUMERIC (5) NOT NULL,
);

CREATE TABLE parkingspaces (
  isHandicapped BOOLEAN default false,
  compactCarOnly BOOLEAN default false,
  isAvailable BOOLEAN default true,
  electric_charging BOOLEAN default false,
  motorcycle BOOLEAN default false,
);

CREATE TABLE availability (
  check_in_time DATETIME DEFAULT CURRENT_TIMESTAMP, 
  expiration_time INT NOT NULL,
);

CREATE TABLE user (
  name VARCHAR (50) NOT NULL, 
  email VARCHAR (100) NOT NULL,
  password VARCHAR (100) NOT NULL,
);
