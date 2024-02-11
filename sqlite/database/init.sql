Drop table if exists reviews;

CREATE TABLE IF NOT EXISTS reviews (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  username TEXT,
  stars INTEGER,
  comment TEXT,
  picture TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO reviews (username, stars, comment, picture, created_at) VALUES ('JohnDoe', 4, 'Great service!', 'https://www.shutterstock.com/image-vector/cute-cartoon-rubber-duck-vector-600nw-2276837591.jpg','2022-01-30 12:30:00');

INSERT INTO reviews (username, stars, comment, picture, created_at) VALUES ('AliceSmith', 5, 'Excellent experience!','https://www.shutterstock.com/image-vector/cute-cartoon-rubber-duck-vector-600nw-2276837591.jpg', '2022-01-30 12:30:00');


INSERT INTO reviews (username, stars, comment, picture, created_at) VALUES ('BobJohnson', 3, 'Could be better', 'https://www.shutterstock.com/image-vector/cute-cartoon-rubber-duck-vector-600nw-2276837591.jpg', '2022-01-30 12:30:00');
