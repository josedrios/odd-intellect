INSERT INTO comments (post_id, user_id, parent_id, text, created_at) VALUES
-- Post 1 subcomments
(NULL, 23, 1, 'wow nice job on elaborating', '2026-02-01 14:00'),
(NULL, 16, 1, 'why say i think, are you uncertain', '2026-02-01 14:32'),
(NULL, 12, 1, 'i was thinking by what you remember as well', '2026-02-01 14:34'),
(NULL, 22, 2, 'that seems rather pessemistic', '2026-02-01 15:23'),
(NULL, 5, 2, 'i feel like you replied in this type of manner because your parents have a strict parenting approach', '2026-02-01 15:40'),
(NULL, 2, 3, 'why even reply then dude', '2026-02-01 18:30'),
-- Post 2 subcomments
(NULL, 40, 4, 'i hate people like u', '2026-02-08 18:30'),
(NULL, 30, 5, 'like like two face character guy from batman', '2026-02-08 16:02'),
-- Post 3 subcomments
(NULL, 22, 7, 'thas deep, and what do you expect of YOURself', '2026-02-15 14:02'),
(NULL, 2, 7, 'got me thinking, what do i expect of myself???', '2026-02-15 15:02'),
(NULL, 4, 7, 'so the expectations of others dont play a role at all in defining who you are?!', '2026-02-15 15:05'),
(NULL, 4, 9, 'It depends on who and whats going on in your life, good question btw', '2026-02-15 17:58');

