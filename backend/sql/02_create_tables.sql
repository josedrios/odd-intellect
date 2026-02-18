CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(20) UNIQUE NOT NULL,
    bio VARCHAR(150),
    email VARCHAR(50),
    current_streak INT,
    longest_streak INT,
    name VARCHAR(50),
    country VARCHAR(100),
    age INT,
    gender VARCHAR(10)
);

CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    text VARCHAR(200) NOT NULL,
    created_at DATE NOT NULL
);

CREATE TABLE comments (
    id SERIAL PRIMARY KEY,
    post_id INT NOT NULL REFERENCES posts(id),
    user_id INT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    parent_id INT REFERENCES comments(id) ON DELETE CASCADE,
    text VARCHAR(300) NOT NULL,
    created_at TIMESTAMP DEFAULT now()
);
