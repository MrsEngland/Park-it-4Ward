CREATE DATABASE parking;
USE parking;

CREATE TABLE "parkinglots" (
  lot_name VARCHAR(255) NOT NULL,
  lot_address VARCHAR(255) NOT NULL,
  lot_city VARCHAR(255) NOT NULL,
  lot_state VARCHAR(5) NOT NULL,
  lot_zip NUMERIC (10) NOT NUll,
  available_spaces NUMERIC (10) NOT NULL, 
  spot_id Int(10) NOT NULL,
  PRIMARY KEY (spot_id) 
);

CREATE TABLE "parkingspaces" (
  spot_id Int (10),
  isHandicapped BOOLEAN default false,
  compactCarOnly BOOLEAN default false,
  PRIMARY KEY (spot_id)
);

CREATE TABLE "availability" (
  spot_id Int (10) NOT NULL,
  total_time VARCHAR (255) NOT NULL,
  current_time (50)
  time_remaining (50) NOT NULL, 

-- SQL function NOW will timestamp current time. Need to see how to incorporate it. 
-- TIme remaining, function to subtract current time from total time to see what is left
) 

