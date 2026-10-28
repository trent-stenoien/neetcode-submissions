-- Write a SQL query that reports the total distance each user has traveled. Return the results sorted by travelled_distance in descending order. If multiple users have the same total distance, sort them by name in ascending order.

select u.name, coalesce(sum(r.distance), 0) travelled_distance
from users u
left join rides r on r.user_id = u.id
group by u.name
order by travelled_distance desc, name asc