INSERT INTO comments (prompt_id, user_id, parent_id, text, created_at) VALUES
-- Prompt 1 subcomments
(1, 22, 1, 'Same here. I notice I act differently when no one''s watching.', '2026-01-04 10:30'),
(1, 31, 1, 'But isn''t that just social adaptation?', '2026-01-04 12:15'),
(1, 15, 31, 'Maybe, but if it disappears without an audience, was it really "you"?', '2026-01-04 14:20'),

(1, 8, 2, 'Unreal is the right word. Like you''re performing for an empty room.', '2026-01-04 11:30'),
(1, 36, 2, 'It makes you question what''s authentic.', '2026-01-04 13:45'),

(1, 19, 3, 'Confidence definitely needs external reinforcement.', '2026-01-04 12:40'),
(1, 5, 19, 'I feel most confident when others acknowledge me.', '2026-01-04 14:50'),
(1, 27, 5, 'That''s not confidence, that''s validation seeking.', '2026-01-04 16:30'),

(1, 40, 4, 'I think identity exists, but it''s dormant without others.', '2026-01-04 14:20'),

(1, 12, 5, 'Social friction reveals who you really are.', '2026-01-04 16:40'),
(1, 3, 12, 'Or creates who you become.', '2026-01-04 18:30'),

(1, 24, 6, 'Shrinking is exactly how it feels.', '2026-01-04 19:00'),

(1, 17, 7, 'Achievement without recognition feels hollow.', '2026-01-05 10:30'),
(1, 33, 17, 'Like a tree falling with no one to hear.', '2026-01-05 12:45'),

(1, 29, 8, 'My humor is 90% references no one would get alone.', '2026-01-05 13:00'),
(1, 14, 29, 'Same. I just think funny things but don''t laugh.', '2026-01-05 15:20'),

(1, 21, 9, 'Solitude is where I find out what''s essential.', '2026-01-05 16:00'),

(1, 38, 10, 'Relational makes sense. Identity needs a mirror.', '2026-01-05 19:30'),

-- Prompt 2 subcomments
(2, 23, 11, 'The path not taken lives rent-free in my mind.', '2026-01-11 10:45'),
(2, 35, 23, 'Same. I still wonder about jobs I didn''t take.', '2026-01-11 12:30'),
(2, 7, 35, 'And people I didn''t date.', '2026-01-11 14:15'),
(2, 18, 7, 'The ghost of every "what if" lingers.', '2026-01-11 16:00'),

(2, 39, 12, 'Avoidance feels safe now, expensive later.', '2026-01-11 11:30'),

(2, 26, 13, 'Indecision is still a decision.', '2026-01-11 13:15'),
(2, 4, 26, 'Choosing not to choose is choosing.', '2026-01-11 15:45'),

(2, 30, 14, 'Regret for silence cuts deeper than regret for action.', '2026-01-11 16:30'),
(2, 11, 30, 'At least action gives you an answer.', '2026-01-11 18:15'),
(2, 19, 11, 'Silence leaves you wondering forever.', '2026-01-11 20:00'),

(2, 8, 15, 'I''ve built whole lives in my head for avoided paths.', '2026-01-11 18:45'),

(2, 32, 16, 'Choosing nothing is choosing the default.', '2026-01-12 10:15'),
(2, 20, 32, 'And default is rarely intentional.', '2026-01-12 12:30'),

(2, 13, 17, 'Fear is my primary decision-maker.', '2026-01-12 13:15'),
(2, 27, 13, 'Same. I avoid more than I pursue.', '2026-01-12 15:45'),

(2, 2, 18, 'Hesitation leaves a stronger imprint.', '2026-01-12 17:30'),

(2, 36, 19, 'Avoidance is invisible until regret makes it visible.', '2026-01-12 20:00'),

(2, 10, 20, 'The unlived life haunts the lived one.', '2026-01-13 21:30'),

-- Prompt 3 subcomments
(3, 25, 21, 'Curiosity dies when you already know.', '2026-01-18 10:15'),
(3, 16, 25, 'That''s why I hate spoilers.', '2026-01-18 11:45'),
(3, 34, 16, 'Same. Knowing ruins the experience.', '2026-01-18 13:30'),

(3, 7, 22, 'Meaning comes from the search, not the find.', '2026-01-18 11:45'),

(3, 38, 23, 'Doubt keeps us moving.', '2026-01-18 13:30'),
(3, 21, 38, 'Certainty would make us static.', '2026-01-18 15:15'),

(3, 14, 24, 'Risk is what makes choices matter.', '2026-01-18 15:20'),
(3, 29, 14, 'No risk, no reward. No meaning.', '2026-01-18 17:30'),

(3, 5, 25, 'Certainty is a sterile comfort.', '2026-01-18 18:00'),
(3, 31, 5, 'Like a hospital. Clean but cold.', '2026-01-18 19:45'),

(3, 12, 26, 'Uncertainty forces presence.', '2026-01-19 10:45'),

(3, 22, 27, 'Ambiguity is where growth happens.', '2026-01-19 13:15'),
(3, 9, 22, 'The gray areas teach the most.', '2026-01-19 15:30'),

(3, 33, 28, 'Doubt makes effort meaningful.', '2026-01-19 16:45'),

(3, 18, 29, 'Questions are more valuable than answers.', '2026-01-19 19:30'),
(3, 37, 18, 'Answers end conversations. Questions start them.', '2026-01-19 21:15'),

(3, 1, 30, 'Philosophy would just be facts.', '2026-01-20 22:30'),

-- Prompt 4 subcomments
(4, 26, 31, 'Context changes everything about morality.', '2026-01-25 10:30'),
(4, 8, 26, 'What''s good in one situation may not be in another.', '2026-01-25 12:15'),

(4, 39, 32, 'Harm reduction is the closest thing to universal.', '2026-01-25 12:30'),
(4, 13, 39, 'Even then, people define harm differently.', '2026-01-25 14:45'),

(4, 24, 33, 'Intent matters, but outcomes matter too.', '2026-01-25 15:00'),
(4, 3, 24, 'The road to hell...', '2026-01-25 17:15'),

(4, 30, 34, 'Moral certainty leads to terrible things.', '2026-01-25 17:30'),
(4, 17, 30, 'Certainty justifies cruelty.', '2026-01-25 19:45'),

(4, 35, 35, 'Goodness evolves. What was good 100 years ago isn''t now.', '2026-01-25 20:00'),

(4, 11, 36, 'Trying honestly is all we can do.', '2026-01-26 11:00'),

(4, 28, 37, 'Quiet goodness is still goodness.', '2026-01-26 13:30'),

(4, 19, 38, 'Consistency builds trust.', '2026-01-26 16:15'),
(4, 2, 19, 'Better to be consistently decent than occasionally perfect.', '2026-01-26 18:30'),

(4, 15, 39, 'Local goodness might be all there is.', '2026-01-26 20:15'),

(4, 32, 40, 'Moral frameworks are more fluid than we admit.', '2026-01-27 22:30'),

-- Prompt 5 subcomments
(5, 23, 41, 'Without memory, there is no self.', '2026-02-01 10:15'),
(5, 6, 23, 'But memory is just a story we tell ourselves.', '2026-02-01 12:30'),

(5, 38, 42, 'Forgetting is survival.', '2026-02-01 12:00'),
(5, 20, 38, 'We couldn''t function if we remembered everything.', '2026-02-01 14:15'),

(5, 9, 43, 'Memory is creative, not reproductive.', '2026-02-01 14:30'),
(5, 31, 9, 'We rewrite constantly.', '2026-02-01 16:45'),

(5, 16, 44, 'We highlight some memories, bury others.', '2026-02-01 17:00'),

(5, 25, 45, 'Forgetting creates blind spots we never notice.', '2026-02-01 19:40'),

(5, 34, 46, 'Some memories deserve to be forgotten.', '2026-02-02 10:45'),

(5, 4, 47, 'We are edited versions, not full archives.', '2026-02-02 13:15'),
(5, 12, 4, 'The editor decides who we are.', '2026-02-02 16:30'),

(5, 27, 48, 'Memory is narrative, not truth.', '2026-02-02 17:00'),
(5, 1, 27, 'And we''re the unreliable narrators.', '2026-02-02 19:30'),

(5, 29, 49, 'Forgetting can feel like betrayal.', '2026-02-02 20:00'),

(5, 37, 50, 'Identity persists even when memory fails. That''s interesting.', '2026-02-03 22:30'),

-- Prompt 6 subcomments
(6, 18, 51, 'Nothing comes free.', '2026-02-08 10:30'),
(6, 33, 18, 'Someone always pays.', '2026-02-08 12:15'),

(6, 7, 52, 'Hidden costs are the most dangerous.', '2026-02-08 12:00'),
(6, 22, 7, 'We only see them after it''s too late.', '2026-02-08 14:30'),

(6, 14, 53, 'The cost is rarely distributed evenly.', '2026-02-08 14:00'),

(6, 30, 54, 'Distant sacrifice is easy to justify.', '2026-02-08 16:30'),
(6, 5, 30, 'Harder when it''s your own.', '2026-02-08 18:45'),

(6, 26, 55, 'Shared sacrifice feels more legitimate.', '2026-02-08 19:00'),

(6, 11, 56, 'Progress stories always have victims.', '2026-02-09 10:45'),
(6, 35, 11, 'We just don''t name them.', '2026-02-09 13:15'),

(6, 19, 57, 'Ethics is about trade-offs.', '2026-02-09 13:15'),

(6, 2, 58, 'Consent makes all the difference.', '2026-02-09 16:30'),
(6, 39, 2, 'Progress without consent is theft.', '2026-02-09 19:45'),

(6, 8, 59, 'We don''t count what we destroy.', '2026-02-09 20:00'),

(6, 24, 60, 'Progress needs to be accountable.', '2026-02-10 22:30'),

-- Prompt 7 subcomments
(7, 17, 61, 'Lighter but also adrift.', '2026-02-15 10:15'),
(7, 32, 17, 'Freedom can feel like floating.', '2026-02-15 12:30'),

(7, 3, 62, 'Pressure becomes who we are.', '2026-02-15 11:45'),
(7, 28, 3, 'Without it, who am I?', '2026-02-15 14:00'),

(7, 13, 63, 'Expectation gives us direction.', '2026-02-15 14:00'),

(7, 21, 64, 'Freedom is disorienting at first.', '2026-02-15 16:15'),
(7, 36, 21, 'Like being untethered.', '2026-02-15 18:30'),

(7, 9, 65, 'Expectation creates momentum.', '2026-02-15 18:45'),

(7, 29, 66, 'Motivation often comes from pressure.', '2026-02-16 10:30'),

(7, 15, 67, 'Peace replaces performance. That''s the goal.', '2026-02-16 13:00'),
(7, 38, 15, 'To perform less and be more.', '2026-02-16 15:30'),

(7, 4, 68, 'Expectations simplify things.', '2026-02-16 15:15'),

(7, 25, 69, 'Pressure teaches discipline.', '2026-02-16 19:30'),
(7, 10, 25, 'Too much pressure breaks you.', '2026-02-16 21:45'),

(7, 34, 70, 'Freedom begins where obligation ends.', '2026-02-16 23:00');
