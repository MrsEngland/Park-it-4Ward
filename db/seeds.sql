
INSERT INTO parkinglots (lot_name, lot_address, lot_city, lot_state, lot_zip, lot_lat, lot_lng, available_spaces, 
	                     default_time, spot_id)
VALUES ("ParkingA", "309 East 8th Street", "Charlotte", "NC", "28204", 35.227927, -80.836009, 10, 12, 1);

INSERT INTO parkinglots (lot_name, lot_address, lot_city, lot_state, lot_zip, lot_lat, lot_lng, available_spaces, 
	                     default_time, spot_id)
VALUES ("ParkingB", "325 East 9th Street", "Charlotte", "NC", "28204", 35.228532, -80.834729,  10, 12, 2);

INSERT INTO parkinglots (lot_name, lot_address, lot_city, lot_state, lot_zip, lot_lat, lot_lng, available_spaces, 
	                     default_time, spot_id)
VALUES ("ParkingC", "315 East 7th Street", "Charlotte", "NC", "28202", 35.227202, -80.837042, 10, 12, 3);

INSERT INTO parkinglots (lot_name, lot_address, lot_city, lot_state, lot_zip, lot_lat, lot_lng, available_spaces, 
	                     default_time, spot_id)
VALUES ("ParkingD", "418 East 9th Street", "Charlotte", "NC", "28202", 35.227852, -80.834025, 15, 8, 4);



INSERT INTO parkingspaces (spot_id)
VALUES (1);

INSERT INTO parkingspaces (spot_id)
VALUES (2);

INSERT INTO parkingspaces (spot_id)
VALUES (3);

INSERT INTO parkingspaces (spot_id)
VALUES (4);

INSERT INTO parkingspaces (spot_id, isHandicapped)
VALUES (5, true);


INSERT INTO availability (spot_id, expiration_time)
VALUES (1, 1815);
INSERT INTO availability (spot_id, expiration_time)
VALUES (2, 1815);
INSERT INTO availability (spot_id, expiration_time)
VALUES (3, 1800);


INSERT INTO user (user_name, user_email, user_password)
VALUES ("john", "john@gmail.com", "password");
INSERT INTO user (user_name, user_email, user_password)
VALUES ("paul", "paul@gmail.com", "12345678");
INSERT INTO user (user_name, user_email, user_password)
VALUES ("george", "george@gmail.com", "password");



