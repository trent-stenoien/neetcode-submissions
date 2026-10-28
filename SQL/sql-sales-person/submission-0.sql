-- Write a SQL query to find the names of all salespeople who have not made any orders with the company named "CRIMSON".
-- Return the result in any order.

select p.name
from sales_person p
join company c on c.name = 'CRIMSON'
left join orders o on o.sales_id = p.sales_id and o.com_id = c.com_id
where o.order_id is null