-- Write a query to find customers who purchased both products 'A' and 'B' but have never purchased product 'C'. These are potential customers to target for product C recommendations.

select x.customer_id, x.customer_name
from customers x
where exists (select 1 from orders a where a.customer_id = x.customer_id and a.product_name = 'A')
and exists (select 1 from orders b where b.customer_id = x.customer_id and b.product_name = 'B')
and not exists (select 1 from orders c where c.customer_id = x.customer_id and c.product_name = 'C')
order by x.customer_name