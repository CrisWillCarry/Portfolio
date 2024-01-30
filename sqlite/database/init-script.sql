CREATE TABLE IF NOT EXISTS reviews (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  username TEXT,
  rating INTEGER,
  comment TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Inserting a review with specific values
INSERT INTO reviews (username, rating, comment) VALUES ('JohnDoe', 4, 'Great service!');

-- Inserting another review with different values
INSERT INTO reviews (username, rating, comment) VALUES ('AliceSmith', 5, 'Excellent experience!');

-- Inserting a review with all columns specified
INSERT INTO reviews (username, rating, comment, created_at) VALUES ('BobJohnson', 3, 'Could be better', '2022-01-30 12:30:00');
