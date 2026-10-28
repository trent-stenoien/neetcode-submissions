-- The address_id column is the primary key. Each row links a person (via person_id) to their city and state.
-- Write a SQL query that returns the first_name, last_name, city, and state for every person. If a person has no matching address record, return NULL for both city and state.
-- The result can be returned in any order.

select first_name, last_name, city, state
from person p
left join address a on a.person_id = p.person_id