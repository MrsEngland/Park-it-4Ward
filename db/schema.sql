DROP DATABASE IF EXISTS parking;

CREATE DATABASE parking;
USE parking;

CREATE TABLE parkinglots (
  lot_name VARCHAR(255) NOT NULL,
  lot_address VARCHAR(255) NOT NULL,
  lot_city VARCHAR(255) NOT NULL,
  lot_state VARCHAR(5) NOT NULL,
  lot_zip NUMERIC (10) NOT NUll,
  available_spaces NUMERIC (10) NOT NULL, 
  default_time NUMERIC (5) NOT NULL,
  spot_id Int(10) NOT NULL,
  PRIMARY KEY (spot_id) 
);

CREATE TABLE parkingspaces (
  spot_id Int (10),
  isHandicapped BOOLEAN default false,
  compactCarOnly BOOLEAN default false,
  isAvailable BOOLEAN default true,
  electric_charging BOOLEAN default false,
  motorcycle BOOLEAN default false,
  FOREIGN KEY (spot_id) REFERENCES parkinglots (spot_id)
);

CREATE TABLE availability (
  spot_id Int (10) NOT NULL,
  -- this defaults the check in time to the current time
  check_in_time DATETIME DEFAULT CURRENT_TIMESTAMP, 
  expiration_time INT NOT NULL,
  FOREIGN KEY (spot_id) REFERENCES parkinglots (spot_id)
);

CREATE TABLE user (
  userID INT (100) AUTO INCREMENT,
  user_name VARCHAR (50) NOT NULL, 
  user_email VARCHAR (100) NOT NULL,
  user_password VARCHAR (100) NOT NULL,
  PRIMARY KEY (userID)
);
