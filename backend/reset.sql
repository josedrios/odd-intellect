-- TODO:
-- change field names to be consistent and simply intuitive

-- My DB reset script

-- NOTE: SCRIPT/TABLES ARE STILL IN DEVELOPMENT

-- 1. drop any tables if already there

DROP TABLE IF EXISTS comments CASCADE;
DROP TABLE IF EXISTS prompts CASCADE;
DROP TABLE IF EXISTS users CASCADE;

-- 2. create tables

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(20) UNIQUE NOT NULL
);

CREATE TABLE prompts (
    id SERIAL PRIMARY KEY,
    text VARCHAR(200) NOT NULL,
    created_at DATE NOT NULL
);

CREATE TABLE comments (
    id SERIAL PRIMARY KEY,
    prompt_id INT NOT NULL REFERENCES prompts(id),
    user_id INT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    parent_id INT REFERENCES comments(id) ON DELETE CASCADE,
    text VARCHAR(300) NOT NULL,
    created_at TIMESTAMP DEFAULT now()
);

-- 3. populate tables

-- I USED DEEP SEEK FOR THIS STEP
-- WOULD HAVE BEEN TOO TIME CONSUMING TO DO BY HAND

-- Insert users
INSERT INTO users (username) VALUES
('alice_writer'),
('bob_reader'),
('charlie_creator'),
('dana_poet'),
('evan_thinker'),
('fiona_dreamer');

-- Insert prompts
INSERT INTO prompts (created_at, text) VALUES
('2023-10-01', 'Write about a mysterious door that appears in your neighborhood. Where does it lead?'),
('2023-10-02', 'Describe a world where colors have sounds and sounds have colors.'),
('2023-10-03', 'You find a device that can show you one minute from any day in your future. What do you see?'),
('2023-10-04', 'A character discovers their reflection has started giving them advice. Is it helpful or dangerous?'),
('2023-10-05', 'Write a story that begins with: "The last time I saw the moon, it was crying."');

-- Insert comments (including some nested/reply comments)
INSERT INTO comments (prompt_id, user_id, parent_id, text, created_at) VALUES
-- Prompt 1 comments
(1, 1, NULL, 'This prompt gave me chills! I imagine the door leads to a library containing every unwritten story.', NOW() - INTERVAL '2 days'),
(1, 2, 1, 'I love that idea! Maybe each book contains a different possible future for our neighborhood.', NOW() - INTERVAL '1 day 12 hours'),
(1, 3, NULL, 'What if the door only appears to people who have something important to discover about themselves?', NOW() - INTERVAL '1 day'),
(1, 4, 3, 'Ooh, that''s deep! So it''s not a physical door but a metaphorical one appearing at a crossroads.', NOW() - INTERVAL '18 hours'),

-- Prompt 2 comments
(2, 5, NULL, 'In my version, red sounds like a cello and blue like wind chimes. What would green sound like?', NOW() - INTERVAL '3 days'),
(2, 6, 5, 'Green would definitely sound like rustling leaves with a hint of morning birdsong!', NOW() - INTERVAL '2 days 6 hours'),
(2, 1, NULL, 'I imagine this world would be overwhelming at first, but artists would create masterpieces.', NOW() - INTERVAL '2 days'),

-- Prompt 3 comments
(3, 2, NULL, 'I''d look one minute before my death to see if I''m smiling. That would tell me everything.', NOW() - INTERVAL '4 days'),
(3, 4, 8, 'That''s both beautiful and terrifying. I think I''d be too scared to use the device.', NOW() - INTERVAL '3 days 12 hours'),
(3, 3, NULL, 'What if you see something you can''t change? Does knowing the future trap you in it?', NOW() - INTERVAL '3 days'),

-- Prompt 4 comments
(4, 6, NULL, 'My reflection would probably just criticize my fashion choices. Not very helpful!', NOW() - INTERVAL '5 days'),
(4, 1, 11, 'Haha, same! But what if it started giving genuinely good life advice? Would you trust it?', NOW() - INTERVAL '4 days 8 hours'),
(4, 5, NULL, 'I wrote a story where the reflection is actually a parallel universe self trying to communicate.', NOW() - INTERVAL '4 days'),

-- Prompt 5 comments
(5, 3, NULL, 'This is such a powerful opening line. Immediately sets a melancholic, magical tone.', NOW() - INTERVAL '6 days'),
(5, 4, 14, 'Agreed! It makes me wonder what could make the moon cry. A dying planet? Lost love?', NOW() - INTERVAL '5 days 10 hours'),
(5, 2, NULL, 'I imagine the moon''s tears become stardust that grants wishes to those pure of heart.', NOW() - INTERVAL '5 days'),
(5, 6, 16, 'That''s beautiful! Maybe children can collect them in jars and use them for small miracles.', NOW() - INTERVAL '4 days 15 hours');
