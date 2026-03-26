CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(20) UNIQUE NOT NULL,
    email VARCHAR(50),
    password VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT now()
);

CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    text VARCHAR(200) NOT NULL,
    created_at DATE NOT NULL
);

CREATE TABLE comments (
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    post_id INT REFERENCES posts(id),
    parent_id INT REFERENCES comments(id) ON DELETE CASCADE,
    text VARCHAR(300) NOT NULL,
    created_at TIMESTAMP DEFAULT now()
);
