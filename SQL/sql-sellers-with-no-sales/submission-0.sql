-- The seller_id column is the primary key. Each row contains information about a seller.
-- Write a query to find the names of all sellers who did not make any sales in the year 2020.
-- Return the result ordered by seller_name in ascending order.

select s.seller_name
from seller s
left join orders o on o.seller_id = s.seller_id and o.sale_date >= '1/1/2020' and o.sale_date < '1/1/2021'
where o.order_id is null
order by s.seller_name asc