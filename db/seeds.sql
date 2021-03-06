USE parking;

INSERT INTO parking_lots (name, address, city, state, zip, latitude, longitude, available_spaces, total_spaces,
	                     default_time, createdAt, updatedAt)
VALUES ("ParkingA", "309 East 8th Street", "Charlotte", "NC", "28204", 35.227927, -80.836009, 10, 20, 12, now(), now());

INSERT INTO parking_lots (name, address, city, state, zip, latitude, longitude, available_spaces, total_spaces,
	                     default_time, createdAt, updatedAt)
VALUES ("ParkingB", "325 East 9th Street", "Charlotte", "NC", "28204", 35.228532, -80.834729,  10, 20, 12, now(), now());

INSERT INTO parking_lots (name, address, city, state, zip, latitude, longitude, available_spaces, total_spaces,
	                     default_time, createdAt, updatedAt)
VALUES ("ParkingC", "315 East 7th Street", "Charlotte", "NC", "28202", 35.227202, -80.837042, 10, 20, 12, now(), now());

INSERT INTO parking_lots (name, address, city, state, zip, latitude, longitude, available_spaces, total_spaces,
	                     default_time, createdAt, updatedAt)
VALUES ("ParkingD", "418 East 9th Street", "Charlotte", "NC", "28202", 35.227852, -80.834025, 15, 20, 8, now(), now());


INSERT INTO parking_spaces (lot_id, createdAt, updatedAt, check_in_time, expiration_time, is_available)
VALUES (1, now(), now(), now(), ADDTIME(now(), '5:0:0'), false);

INSERT INTO parking_spaces (lot_id, createdAt, updatedAt, check_in_time, expiration_time, is_available)
VALUES (1, now(), now(), now(), ADDTIME(now(), '1:0:0'), false);

INSERT INTO parking_spaces (lot_id, createdAt, updatedAt, check_in_time, expiration_time)
VALUES (1, now(), now(), now(), ADDTIME(now(), '0:30:0'));

INSERT INTO parking_spaces (lot_id, createdAt, updatedAt, check_in_time, expiration_time)
VALUES (1, now(), now(), now(), ADDTIME(now(), '0:30:0'));



INSERT INTO users (username, email, password, createdAt, updatedAt)
VALUES ("john", "john@gmail.com", "password", now(), now());
INSERT INTO users (username, email, password, createdAt, updatedAt)
VALUES ("paul", "paul@gmail.com", "12345678", now(), now());
INSERT INTO users (username, email, password, createdAt, updatedAt)
VALUES ("george", "george@gmail.com", "password", now(), now());