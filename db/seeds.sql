USE parking;

INSERT INTO parking_lots (name, address, city, state, zip, latitude, longitude, available_spaces, 
	                     default_time, spot_id, createdAt, updatedAt)
VALUES ("ParkingA", "309 East 8th Street", "Charlotte", "NC", "28204", 35.227927, -80.836009, 10, 12, 1, now(), now());

INSERT INTO parking_lots (name, address, city, state, zip, latitude, longitude, available_spaces, 
	                     default_time, spot_id, createdAt, updatedAt)
VALUES ("ParkingB", "325 East 9th Street", "Charlotte", "NC", "28204", 35.228532, -80.834729,  10, 12, 2, now(), now());

INSERT INTO parking_lots (name, address, city, state, zip, latitude, longitude, available_spaces, 
	                     default_time, spot_id, createdAt, updatedAt)
VALUES ("ParkingC", "315 East 7th Street", "Charlotte", "NC", "28202", 35.227202, -80.837042, 10, 12, 3, now(), now());

INSERT INTO parking_lots (name, address, city, state, zip, latitude, longitude, available_spaces, 
	                     default_time, spot_id, createdAt, updatedAt)
VALUES ("ParkingD", "418 East 9th Street", "Charlotte", "NC", "28202", 35.227852, -80.834025, 15, 8, 4, now(), now());

INSERT INTO parking_spaces (lot_id, createdAt, updatedAt)
VALUES (1, now(), now());

INSERT INTO parking_spaces (lot_id, createdAt, updatedAt)
VALUES (1, now(), now());

INSERT INTO parking_spaces (lot_id, createdAt, updatedAt)
VALUES (1, now(), now());

INSERT INTO parking_spaces (lot_id, createdAt, updatedAt)
VALUES (1, now(), now());

INSERT INTO availabilities (check_in_time, expiration_time, createdAt, updatedAt, lot_id, space_id)
VALUES (now(), now(), now(), now(), 1, 1);
INSERT INTO availabilities (check_in_time, expiration_time, createdAt, updatedAt, lot_id, space_id)
VALUES (now(), now(), now(), now(), 1, 2);
INSERT INTO availabilities (check_in_time, expiration_time, createdAt, updatedAt, lot_id, space_id)
VALUES (now(), now(), now(), now(), 1, 3);

INSERT INTO users (name, email, password, createdAt, updatedAt)
VALUES ("john", "john@gmail.com", "password", now(), now());
INSERT INTO users (name, email, password, createdAt, updatedAt)
VALUES ("paul", "paul@gmail.com", "12345678", now(), now());
INSERT INTO users (name, email, password, createdAt, updatedAt)
VALUES ("george", "george@gmail.com", "password", now(), now());