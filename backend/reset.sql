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

-- Insert users (50 total users)
INSERT INTO users (username) VALUES
('alice_writer'),
('bob_reader'),
('charlie_creator'),
('dana_poet'),
('evan_thinker'),
('fiona_dreamer'),
('george_storyteller'),
('hannah_wordsmith'),
('ivan_scribe'),
('julia_novelist'),
('kevin_bard'),
('luna_authors'),
('mike_prose'),
('nina_verse'),
('oscar_penman'),
('paula_teller'),
('quinn_dreamer'),
('rachel_imagine'),
('sam_story'),
('tina_fiction'),
('ulysses_writer'),
('violet_author'),
('william_creator'),
('xena_scriber'),
('yves_poet'),
('zara_dreamweaver'),
('aaron_words'),
('bella_stories'),
('carlos_write'),
('diana_imagine'),
('ethan_tales'),
('faye_creator'),
('greg_writer'),
('helen_author'),
('ian_poet'),
('jade_story'),
('kyle_writer'),
('lily_scribe'),
('max_author'),
('nora_writer'),
('owen_creator'),
('piper_author'),
('quincy_writer'),
('ruth_story'),
('sean_author'),
('tara_writer'),
('uma_creator'),
('vince_author'),
('wendy_writer'),
('xander_story');

-- Insert prompts (30 total prompts)
INSERT INTO prompts (created_at, text) VALUES
('2023-10-01', 'Write about a mysterious door that appears in your neighborhood. Where does it lead?'),
('2023-10-02', 'Describe a world where colors have sounds and sounds have colors.'),
('2023-10-03', 'You find a device that can show you one minute from any day in your future. What do you see?'),
('2023-10-04', 'A character discovers their reflection has started giving them advice. Is it helpful or dangerous?'),
('2023-10-05', 'Write a story that begins with: "The last time I saw the moon, it was crying."'),
('2023-10-06', 'A library where books change their stories based on who is reading them.'),
('2023-10-07', 'Write about a chef who can cook memories into food.'),
('2023-10-08', 'A world where shadows have a life of their own and can detach from their owners.'),
('2023-10-09', 'You wake up speaking a language that doesn''t exist. How does the world react?'),
('2023-10-10', 'Write about a clock that runs backward, and what happens when it reaches midnight.'),
('2023-10-11', 'A museum that displays emotions as physical artifacts.'),
('2023-10-12', 'Write about a gardener who grows constellations instead of flowers.'),
('2023-10-13', 'A city built on the back of a sleeping giant. What happens when it starts to wake?'),
('2023-10-14', 'Write about a tailor who stitches fate into clothing.'),
('2023-10-15', 'A world where people trade dreams instead of money.'),
('2023-10-16', 'Write about a lighthouse that guides lost time instead of ships.'),
('2023-10-17', 'A character who can see the colors of lies.'),
('2023-10-18', 'Write about a bookstore that only appears during rainstorms.'),
('2023-10-19', 'A world where silence is a commodity that can be bought and sold.'),
('2023-10-20', 'Write about a musician whose music literally paints the air.'),
('2023-10-21', 'A character who collects forgotten words.'),
('2023-10-22', 'Write about a train that travels between realities.'),
('2023-10-23', 'A world where everyone has a personal raincloud that reflects their mood.'),
('2023-10-24', 'Write about a baker whose bread can heal or harm.'),
('2023-10-25', 'A library where you can borrow skills instead of books.'),
('2023-10-26', 'Write about a mirror that shows what you need to see, not what you want to see.'),
('2023-10-27', 'A world where memories can be planted and grown like seeds.'),
('2023-10-28', 'Write about a detective who solves crimes by reading echoes.'),
('2023-10-29', 'A character who can walk into paintings.'),
('2023-10-30', 'Write about a world where books are banned, and stories are told through taste.');

-- Insert comments (200+ comments with nested replies)
INSERT INTO comments (prompt_id, user_id, parent_id, text, created_at) VALUES
-- Prompt 1 comments (10 comments)
(1, 1, NULL, 'This prompt gave me chills! I imagine the door leads to a library containing every unwritten story.', NOW() - INTERVAL '2 days'),
(1, 2, 1, 'I love that idea! Maybe each book contains a different possible future for our neighborhood.', NOW() - INTERVAL '1 day 12 hours'),
(1, 3, NULL, 'What if the door only appears to people who have something important to discover about themselves?', NOW() - INTERVAL '1 day'),
(1, 4, 3, 'Ooh, that''s deep! So it''s not a physical door but a metaphorical one appearing at a crossroads.', NOW() - INTERVAL '18 hours'),
(1, 5, NULL, 'I think it leads to a parallel universe where our choices played out differently.', NOW() - INTERVAL '15 hours'),
(1, 6, 5, 'What if we meet our alternate selves? Would they be happier or more miserable?', NOW() - INTERVAL '12 hours'),
(1, 7, NULL, 'The door appears at midnight and vanishes at dawn. You have one night to decide.', NOW() - INTERVAL '10 hours'),
(1, 8, 7, 'And what if you get trapped on the other side when dawn comes?', NOW() - INTERVAL '8 hours'),
(1, 9, NULL, 'Maybe it''s a test. The door leads to whatever you fear most.', NOW() - INTERVAL '6 hours'),
(1, 10, 9, 'Or what you desire most? The ultimate temptation.', NOW() - INTERVAL '4 hours'),

-- Prompt 2 comments (8 comments)
(2, 5, NULL, 'In my version, red sounds like a cello and blue like wind chimes. What would green sound like?', NOW() - INTERVAL '3 days'),
(2, 6, 11, 'Green would definitely sound like rustling leaves with a hint of morning birdsong!', NOW() - INTERVAL '2 days 6 hours'),
(2, 1, NULL, 'I imagine this world would be overwhelming at first, but artists would create masterpieces.', NOW() - INTERVAL '2 days'),
(2, 2, 13, 'Synesthesia would be the norm here! Everyone would experience art in 4D.', NOW() - INTERVAL '1 day 18 hours'),
(2, 7, NULL, 'What about black? Would it be silent or a deep bass hum?', NOW() - INTERVAL '1 day 12 hours'),
(2, 8, 15, 'Black would be complete silence, but a heavy, tangible silence you can feel.', NOW() - INTERVAL '1 day 6 hours'),
(2, 9, NULL, 'Imagine concerts where the music creates light shows automatically!', NOW() - INTERVAL '1 day'),
(2, 10, 17, 'And painters could create symphonies with their brushstrokes!', NOW() - INTERVAL '18 hours'),

-- Prompt 3 comments (10 comments)
(3, 2, NULL, 'I''d look one minute before my death to see if I''m smiling. That would tell me everything.', NOW() - INTERVAL '4 days'),
(3, 4, 19, 'That''s both beautiful and terrifying. I think I''d be too scared to use the device.', NOW() - INTERVAL '3 days 12 hours'),
(3, 3, NULL, 'What if you see something you can''t change? Does knowing the future trap you in it?', NOW() - INTERVAL '3 days'),
(3, 5, 21, 'The butterfly effect! Even seeing the future might change it.', NOW() - INTERVAL '2 days 18 hours'),
(3, 6, NULL, 'I''d watch my wedding day. Or the birth of my first child.', NOW() - INTERVAL '2 days 12 hours'),
(3, 7, 23, 'What if you see yourself alone on those days? Would you still pursue those paths?', NOW() - INTERVAL '2 days 6 hours'),
(3, 8, NULL, 'The device should come with a warning label: "Some things are better left unseen."', NOW() - INTERVAL '2 days'),
(3, 9, 25, 'But curiosity would always win. Humans can''t resist knowing.', NOW() - INTERVAL '1 day 18 hours'),
(3, 10, NULL, 'I''d look at a random Tuesday in 20 years. The ordinary moments matter too.', NOW() - INTERVAL '1 day 12 hours'),
(3, 11, 27, 'That''s profound. Happiness is often in the mundane, unnoticed moments.', NOW() - INTERVAL '1 day 6 hours'),

-- Prompt 4 comments (12 comments)
(4, 6, NULL, 'My reflection would probably just criticize my fashion choices. Not very helpful!', NOW() - INTERVAL '5 days'),
(4, 1, 29, 'Haha, same! But what if it started giving genuinely good life advice? Would you trust it?', NOW() - INTERVAL '4 days 8 hours'),
(4, 5, NULL, 'I wrote a story where the reflection is actually a parallel universe self trying to communicate.', NOW() - INTERVAL '4 days'),
(4, 7, 31, 'What if it''s trying to warn you about something? Or maybe it needs your help?', NOW() - INTERVAL '3 days 18 hours'),
(4, 8, NULL, 'The reflection could be a manifestation of your subconscious mind.', NOW() - INTERVAL '3 days 12 hours'),
(4, 9, 33, 'Or a separate entity that has been trapped in mirror-world for centuries!', NOW() - INTERVAL '3 days 6 hours'),
(4, 10, NULL, 'What if it gives bad advice on purpose to sabotage you?', NOW() - INTERVAL '3 days'),
(4, 11, 35, 'A mirror that gaslights you! That''s horror material right there.', NOW() - INTERVAL '2 days 18 hours'),
(4, 12, NULL, 'Maybe the reflection is wiser because it sees you from the outside.', NOW() - INTERVAL '2 days 12 hours'),
(4, 13, 37, 'Or maybe it''s jealous because it can never experience life like you do.', NOW() - INTERVAL '2 days 6 hours'),
(4, 14, NULL, 'I''d probably cover all the mirrors in my house. Too creepy!', NOW() - INTERVAL '2 days'),
(4, 15, 39, 'But what if it only happens with one specific mirror? The antique one from the attic...', NOW() - INTERVAL '1 day 18 hours'),

-- Prompt 5 comments (15 comments)
(5, 3, NULL, 'This is such a powerful opening line. Immediately sets a melancholic, magical tone.', NOW() - INTERVAL '6 days'),
(5, 4, 41, 'Agreed! It makes me wonder what could make the moon cry. A dying planet? Lost love?', NOW() - INTERVAL '5 days 10 hours'),
(5, 2, NULL, 'I imagine the moon''s tears become stardust that grants wishes to those pure of heart.', NOW() - INTERVAL '5 days'),
(5, 6, 43, 'That''s beautiful! Maybe children can collect them in jars and use them for small miracles.', NOW() - INTERVAL '4 days 15 hours'),
(5, 7, NULL, 'The moon is crying because it watches all of humanity''s suffering every night.', NOW() - INTERVAL '4 days 12 hours'),
(5, 8, 45, 'That''s heavy. Maybe it cries for joy too? Watching births, weddings, triumphs?', NOW() - INTERVAL '4 days 9 hours'),
(5, 9, NULL, 'What if the moon cries silver tears that turn to moonstone when they hit the ground?', NOW() - INTERVAL '4 days 6 hours'),
(5, 10, 47, 'And people mine them, not realizing they''re the moon''s tears!', NOW() - INTERVAL '4 days 3 hours'),
(5, 11, NULL, 'Maybe the moon is lonely. All those stars around, but no one to talk to.', NOW() - INTERVAL '4 days'),
(5, 12, 49, 'Or maybe it''s crying because the Earth is drifting away, slowly leaving it behind.', NOW() - INTERVAL '3 days 21 hours'),
(5, 13, NULL, 'The moon cries every time someone on Earth says "I love you" for the first time.', NOW() - INTERVAL '3 days 18 hours'),
(5, 14, 51, 'That''s romantic! Tears of joy for human connection.', NOW() - INTERVAL '3 days 15 hours'),
(5, 15, NULL, 'What if the tears are actually warnings? Each tear falls where disaster will strike.', NOW() - INTERVAL '3 days 12 hours'),
(5, 16, 53, 'And only the narrator can see them crying, so only they can warn people!', NOW() - INTERVAL '3 days 9 hours'),
(5, 17, NULL, 'The moon cries because it remembers when Earth had two moons, and its sibling was destroyed.', NOW() - INTERVAL '3 days 6 hours'),

-- Prompt 6 comments (10 comments)
(6, 8, NULL, 'This would be my dream library! Imagine reading a book that changes based on your mood.', NOW() - INTERVAL '7 days'),
(6, 9, 56, 'What if it changes based on what you NEED to hear, not what you WANT to hear?', NOW() - INTERVAL '6 days 12 hours'),
(6, 10, NULL, 'A therapist would be out of business! The library gives you the perfect story for healing.', NOW() - INTERVAL '6 days'),
(6, 11, 58, 'But what if it shows you harsh truths you''re not ready to face?', NOW() - INTERVAL '5 days 18 hours'),
(6, 12, NULL, 'Different people reading the same book at the same time would see completely different stories!', NOW() - INTERVAL '5 days 12 hours'),
(6, 13, 60, 'That would make book clubs very interesting! "What did yours say?" "Wait, mine was different!"', NOW() - INTERVAL '5 days 6 hours'),
(6, 14, NULL, 'What if villains get villainous versions? Their stories justify their bad actions.', NOW() - INTERVAL '5 days'),
(6, 15, 62, 'That''s dark. The library could actually create more villains by feeding their egos.', NOW() - INTERVAL '4 days 18 hours'),
(6, 16, NULL, 'Maybe the library itself is alive and learning from each reader.', NOW() - INTERVAL '4 days 12 hours'),
(6, 17, 64, 'Growing wiser with each person who walks through its doors. I love that!', NOW() - INTERVAL '4 days 6 hours'),

-- Prompt 7 comments (10 comments)
(7, 10, NULL, 'I''d order the memory of my grandmother''s hug. Nothing tastes like love.', NOW() - INTERVAL '8 days'),
(7, 11, 66, 'What about sad memories? Would they taste bitter? Could they be sweetened with time?', NOW() - INTERVAL '7 days 12 hours'),
(7, 12, NULL, 'A dish cooked with the memory of a first kiss would be the restaurant''s most popular item.', NOW() - INTERVAL '7 days'),
(7, 13, 68, 'But what if someone steals memories through the food? A memory thief chef!', NOW() - INTERVAL '6 days 18 hours'),
(7, 14, NULL, 'Eating a memory of a skill could let you temporarily have that ability!', NOW() - INTERVAL '6 days 12 hours'),
(7, 15, 70, 'Taste a concert memory and hear the music! Taste a travel memory and see the places!', NOW() - INTERVAL '6 days 6 hours'),
(7, 16, NULL, 'What if bad memories are toxic? The chef has to be careful with ingredients.', NOW() - INTERVAL '6 days'),
(7, 17, 72, 'Trauma would be like spoiled meat - dangerous to consume.', NOW() - INTERVAL '5 days 18 hours'),
(7, 18, NULL, 'Could you cook a composite memory? Blend joy, sorrow, and hope into one dish?', NOW() - INTERVAL '5 days 12 hours'),
(7, 19, 74, 'That would be the ultimate culinary art - balancing emotional flavors.', NOW() - INTERVAL '5 days 6 hours'),

-- Prompt 8 comments (12 comments)
(8, 12, NULL, 'My shadow would probably laze around while I work. Typical!', NOW() - INTERVAL '9 days'),
(8, 13, 76, 'What if shadows have their own society? Nighttime is when they come alive and socialize!', NOW() - INTERVAL '8 days 12 hours'),
(8, 14, NULL, 'Shadows could trade places! Your shadow goes on vacation while someone else''s fills in.', NOW() - INTERVAL '8 days'),
(8, 15, 78, 'Shadow dating! Your shadow brings home a shadow partner. Awkward!', NOW() - INTERVAL '7 days 18 hours'),
(8, 16, NULL, 'What if your shadow knows all your secrets because it''s always there?', NOW() - INTERVAL '7 days 12 hours'),
(8, 17, 80, 'Blackmail by your own shadow! The ultimate betrayal.', NOW() - INTERVAL '7 days 6 hours'),
(8, 18, NULL, 'Shadows could be used as spies. They slip under doors, hide in corners...', NOW() - INTERVAL '7 days'),
(8, 19, 82, 'A shadow rebellion! They''re tired of being controlled by their humans.', NOW() - INTERVAL '6 days 18 hours'),
(8, 20, NULL, 'What if you lose your shadow? Do you become invisible? Lose your soul?', NOW() - INTERVAL '6 days 12 hours'),
(8, 21, 84, 'Peter Pan vibes! Maybe shadows can be sewn back on.', NOW() - INTERVAL '6 days 6 hours'),
(8, 22, NULL, 'In bright light, shadows are weak. In darkness, they''re powerful. Balance is key.', NOW() - INTERVAL '6 days'),
(8, 23, 86, 'A shadow could protect you at night, fighting off other shadows!', NOW() - INTERVAL '5 days 18 hours'),

-- Prompt 9 comments (10 comments)
(9, 15, NULL, 'Linguists would be both terrified and excited! A new language to decode.', NOW() - INTERVAL '10 days'),
(9, 16, 88, 'What if it''s not a language but a curse? Words that make things happen when spoken.', NOW() - INTERVAL '9 days 12 hours'),
(9, 17, NULL, 'You could be speaking the tongue of angels or demons. No way to know!', NOW() - INTERVAL '9 days'),
(9, 18, 90, 'Or maybe it''s the language of a future civilization, and you''re the first to hear it.', NOW() - INTERVAL '8 days 18 hours'),
(9, 19, NULL, 'The government would definitely detain you for "study".', NOW() - INTERVAL '8 days 12 hours'),
(9, 20, 92, 'Or worship you as a prophet! Depends on the first miracle you perform.', NOW() - INTERVAL '8 days 6 hours'),
(9, 21, NULL, 'What if you''re speaking in colors? Your words paint the air as you talk.', NOW() - INTERVAL '8 days'),
(9, 22, 94, 'Beautiful but problematic. Can''t have secret conversations anymore!', NOW() - INTERVAL '7 days 18 hours'),
(9, 23, NULL, 'Maybe it''s the language of animals, and now you can understand them all.', NOW() - INTERVAL '7 days 12 hours'),
(9, 24, 96, 'And they can understand you! You become Dr. Doolittle.', NOW() - INTERVAL '7 days 6 hours'),

-- Prompt 10 comments (10 comments)
(10, 18, NULL, 'When it reaches midnight, does time stop? Reverse completely?', NOW() - INTERVAL '11 days'),
(10, 19, 98, 'Maybe it unlocks a door to yesterday. Literal time travel!', NOW() - INTERVAL '10 days 12 hours'),
(10, 20, NULL, 'What if it''s counting down to something? An event that''s coming... or going?', NOW() - INTERVAL '10 days'),
(10, 21, 100, 'A clock counting down to your birth! You''re getting younger.', NOW() - INTERVAL '9 days 18 hours'),
(10, 22, NULL, 'Midnight might be the moment of your death in reverse. You see your life flash backward.', NOW() - INTERVAL '9 days 12 hours'),
(10, 23, 102, 'Or maybe it''s a clock that belonged to a time traveler stuck in reverse.', NOW() - INTERVAL '9 days 6 hours'),
(10, 24, NULL, 'When it hits midnight, everything in a mile radius rewinds 24 hours.', NOW() - INTERVAL '9 days'),
(10, 25, 104, 'Groundhog Day scenario! But only affecting the area around the clock.', NOW() - INTERVAL '8 days 18 hours'),
(10, 26, NULL, 'The clock could be undoing something terrible that happened at midnight.', NOW() - INTERVAL '8 days 12 hours'),
(10, 27, 106, 'Preventing a tragedy over and over until someone gets it right.', NOW() - INTERVAL '8 days 6 hours'),

-- Continue with more prompts...
-- Prompt 11 comments (8 comments)
(11, 20, NULL, 'The Hall of Heartbreaks would be the largest wing. So many broken hearts preserved.', NOW() - INTERVAL '12 days'),
(11, 21, 108, 'But what about the Gallery of Joy? Small but intensely bright exhibits.', NOW() - INTERVAL '11 days 12 hours'),
(11, 22, NULL, 'Nostalgia would be in glass cases that get foggy when you look too closely.', NOW() - INTERVAL '11 days'),
(11, 23, 110, 'Love would be a living exhibit that changes shape constantly.', NOW() - INTERVAL '10 days 18 hours'),
(11, 24, NULL, 'Could you borrow emotions? Take home a vial of courage for a big day?', NOW() - INTERVAL '10 days 12 hours'),
(11, 25, 112, 'Emotion black market! Stolen happiness sold to the depressed.', NOW() - INTERVAL '10 days 6 hours'),
(11, 26, NULL, 'The anger exhibit would need special containment. It''s volatile.', NOW() - INTERVAL '10 days'),
(11, 27, 114, 'What about curiosity? Would it be a maze that changes as you explore?', NOW() - INTERVAL '9 days 18 hours'),

-- Prompt 12 comments (8 comments)
(12, 22, NULL, 'Orion''s Belt would be her favorite - easy to grow, always reliable.', NOW() - INTERVAL '13 days'),
(12, 23, 116, 'But the Big Dipper requires special soil and tends to spread everywhere.', NOW() - INTERVAL '12 days 12 hours'),
(12, 24, NULL, 'What about shooting stars? Are they weeds that need to be cleared?', NOW() - INTERVAL '12 days'),
(12, 25, 118, 'Or annuals that bloom once and die! So beautiful but fleeting.', NOW() - INTERVAL '11 days 18 hours'),
(12, 26, NULL, 'The Milky Way would be a ground cover that spreads across the entire garden.', NOW() - INTERVAL '11 days 12 hours'),
(12, 27, 120, 'And black holes? Hopefully those don''t appear! They''d swallow the whole garden.', NOW() - INTERVAL '11 days 6 hours'),
(12, 28, NULL, 'Do they need starlight to grow? Or maybe moonlight water?', NOW() - INTERVAL '11 days'),
(12, 29, 122, 'They probably only bloom at night, closing during the day.', NOW() - INTERVAL '10 days 18 hours'),

-- Prompt 13 comments (10 comments)
(13, 25, NULL, 'The giant snores cause earthquakes. The city has learned to build flexible structures.', NOW() - INTERVAL '14 days'),
(13, 26, 124, 'What if it''s not a giant but a titan, and we''re like bacteria on its skin?', NOW() - INTERVAL '13 days 12 hours'),
(13, 27, NULL, 'The city council would definitely keep the waking a secret to prevent panic.', NOW() - INTERVAL '13 days'),
(13, 28, 126, 'But what if it''s a friendly giant? It might protect the city from threats.', NOW() - INTERVAL '12 days 18 hours'),
(13, 29, NULL, 'Or what if it''s hungry when it wakes up? City-sized snack!', NOW() - INTERVAL '12 days 12 hours'),
(13, 30, 128, 'Maybe it''s a symbiotic relationship. We keep it clean, it gives us a home.', NOW() - INTERVAL '12 days 6 hours'),
(13, 31, NULL, 'The giant could be dreaming the city into existence. If it wakes, we vanish.', NOW() - INTERVAL '12 days'),
(13, 32, 130, 'That''s existential! Our whole reality depends on a sleeping giant''s dream.', NOW() - INTERVAL '11 days 18 hours'),
(13, 33, NULL, 'What if different neighborhoods are on different body parts? Rich area on the chest, slums on the feet.', NOW() - INTERVAL '11 days 12 hours'),
(13, 34, 132, 'And downtown is on the palm! Easy to get around.', NOW() - INTERVAL '11 days 6 hours'),

-- Prompt 14 comments (8 comments)
(14, 28, NULL, 'A wedding dress stitched with fate threads that ensure lifelong happiness.', NOW() - INTERVAL '15 days'),
(14, 29, 134, 'But what if the thread breaks? Does the marriage fail?', NOW() - INTERVAL '14 days 12 hours'),
(14, 30, NULL, 'A cloak of invisibility that actually makes people ignore you, not just not see you.', NOW() - INTERVAL '14 days'),
(14, 31, 136, 'Perfect for spies! Or introverts at parties.', NOW() - INTERVAL '13 days 18 hours'),
(14, 32, NULL, 'Shoes that make you walk toward your destiny, whether you want to or not.', NOW() - INTERVAL '13 days 12 hours'),
(14, 33, 138, 'Forced destiny! What if your destiny is terrible?', NOW() - INTERVAL '13 days 6 hours'),
(14, 34, NULL, 'A scarf woven with threads of memory. Wearing it lets you relive moments.', NOW() - INTERVAL '13 days'),
(14, 35, 140, 'But what if you get lost in the memories and can''t return to the present?', NOW() - INTERVAL '12 days 18 hours'),

-- Prompt 15 comments (10 comments)
(15, 30, NULL, 'Nightmares would be cheap currency. Everyone has them to spare.', NOW() - INTERVAL '16 days'),
(15, 31, 142, 'But lucid dreams would be like gold! Rare and valuable.', NOW() - INTERVAL '15 days 12 hours'),
(15, 32, NULL, 'Prophetic dreams would be priceless. Seeing the future in your sleep.', NOW() - INTERVAL '15 days'),
(15, 33, 144, 'Dream thieves would be the worst criminals. Stealing people''s hopes.', NOW() - INTERVAL '14 days 18 hours'),
(15, 34, NULL, 'What about shared dreams? Couples could buy them for romantic nights.', NOW() - INTERVAL '14 days 12 hours'),
(15, 35, 146, 'Dream artists would create custom dreams for the wealthy.', NOW() - INTERVAL '14 days 6 hours'),
(15, 36, NULL, 'Nightmare elimination services! Pay to have your bad dreams removed.', NOW() - INTERVAL '14 days'),
(15, 37, 148, 'But what if nightmares are necessary? Processing trauma?', NOW() - INTERVAL '13 days 18 hours'),
(15, 38, NULL, 'Dream banks where you store good dreams for bad days.', NOW() - INTERVAL '13 days 12 hours'),
(15, 39, 150, 'Withdrawal limits! Can''t have people living in dreams forever.', NOW() - INTERVAL '13 days 6 hours'),

-- Additional comments for prompts 16-30 (5 comments each for variety)
(16, 35, NULL, 'Lost hours find their way home. People recover time they thought wasted.', NOW() - INTERVAL '17 days'),
(16, 36, NULL, 'But what about bad times? Do they get guided away or amplified?', NOW() - INTERVAL '16 days 12 hours'),
(17, 37, NULL, 'White lies are pale yellow. Deep deception is blood red.', NOW() - INTERVAL '18 days'),
(17, 38, NULL, 'What about self-deception? What color would that be?', NOW() - INTERVAL '17 days 12 hours'),
(18, 39, NULL, 'The books are slightly damp but never ruined. Magic of some sort.', NOW() - INTERVAL '19 days'),
(18, 40, NULL, 'Do they disappear when the rain stops? What if you''re still reading?', NOW() - INTERVAL '18 days 12 hours'),
(19, 41, NULL, 'Rich people bask in silence while the poor live in constant noise pollution.', NOW() - INTERVAL '20 days'),
(19, 42, NULL, 'What about musicians? They''d be rebels trading in illegal sounds.', NOW() - INTERVAL '19 days 12 hours'),
(20, 43, NULL, 'Sad music paints grays and blues. Happy music creates rainbows.', NOW() - INTERVAL '21 days'),
(20, 44, NULL, 'Angry music would be sharp red spikes! Dangerous to be near.', NOW() - INTERVAL '20 days 12 hours'),
(21, 45, NULL, 'Words like "serendipity" that no one uses anymore but are beautiful.', NOW() - INTERVAL '22 days'),
(21, 46, NULL, 'What happens when a word is completely forgotten? Does it vanish?', NOW() - INTERVAL '21 days 12 hours'),
(22, 47, NULL, 'Ticket price: one memory from your childhood. Non-refundable.', NOW() - INTERVAL '23 days'),
(22, 48, NULL, 'What if you run out of memories to pay? Do you get stuck between realities?', NOW() - INTERVAL '22 days 12 hours'),
(23, 49, NULL, 'Depressed people have constant drizzle. Anxious ones have thunderstorms.', NOW() - INTERVAL '24 days'),
(23, 50, NULL, 'Happy people have sunshine with occasional rainbow showers!', NOW() - INTERVAL '23 days 12 hours'),
(24, 1, NULL, 'Bread of healing mends bones overnight. Bread of harm causes slow fever.', NOW() - INTERVAL '25 days'),
(24, 2, NULL, 'What about neutral bread? Just regular delicious bread.', NOW() - INTERVAL '24 days 12 hours'),
(25, 3, NULL, 'Borrow painting skills for a day! Return them slightly improved with your experience.', NOW() - INTERVAL '26 days'),
(25, 4, NULL, 'Late fees! Your natural talents diminish until you return the borrowed skill.', NOW() - INTERVAL '25 days 12 hours'),
(26, 5, NULL, 'It shows you your potential, not your reality. Motivational but painful.', NOW() - INTERVAL '27 days'),
(26, 6, NULL, 'What if it shows you your greatest failure, over and over?', NOW() - INTERVAL '26 days 12 hours'),
(27, 7, NULL, 'Plant a memory of a beach vacation. Watch palm trees grow with seashell fruits.', NOW() - INTERVAL '28 days'),
(27, 8, NULL, 'Toxic memories grow poisonous plants. Better to burn those seeds.', NOW() - INTERVAL '27 days 12 hours'),
(28, 9, NULL, 'Murders leave the loudest echoes. They scream for years.', NOW() - INTERVAL '29 days'),
(28, 10, NULL, 'Love leaves soft echoes that fade quickly. Need to be cherished.', NOW() - INTERVAL '28 days 12 hours'),
(29, 11, NULL, 'Walk into a Van Gogh and experience the swirling skies firsthand!', NOW() - INTERVAL '30 days'),
(29, 12, NULL, 'What if you get trapped in a painting? Become part of the art forever.', NOW() - INTERVAL '29 days 12 hours'),
(30, 13, NULL, 'Bitter stories are tragedies. Sweet ones are romances. Sour are mysteries.', NOW() - INTERVAL '31 days'),
(30, 14, NULL, 'Spicy stories are adventures! They leave your mouth burning with excitement.', NOW() - INTERVAL '12 minutes'),
(30, 14, NULL, 'Spicy stories are adventures! They leave your mouth burning with excitement.', NOW() - INTERVAL '12 hours'),
(30, 14, NULL, 'Spicy stories are adventures! They leave your mouth burning with excitement.', NOW() - INTERVAL '12 days'),
(30, 14, NULL, 'Spicy stories are adventures! They leave your mouth burning with excitement.', NOW() - INTERVAL '40 days');
