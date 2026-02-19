INSERT INTO comments (post_id, user_id, parent_id, text, created_at) VALUES
-- Post 1
(1, 3, NULL, 'By what you remember, i think', '2026-02-01 13:00'),
(1, 19, NULL, 'Probably by what you forgotten because some people tend to see what you lack', '2026-02-01 15:10'),
(1, 8, NULL, 'idk', '2026-02-01 17:45'),
-- Post 2
(2, 1, NULL, 'You look it up on the internet', '2026-02-08 13:00'),
(2, 3, NULL, 'You flip a coin', '2026-02-08 15:10'),
(2, 5, NULL, 'ask your friends or family maybe', '2026-02-08 17:45'),
-- Post 3
(3, 24, NULL, 'You are what you expect of yourself', '2026-02-15 13:00'),
(3, 39, NULL, 'Why does ones definition seem to be answered within others. Lets start off by asking who can define you.', '2026-02-15 15:10'),
(3, 2, NULL, 'Idk does one gain a feeling of relief or depression knowing noone expects anything of you.', '2026-02-15 17:45');
