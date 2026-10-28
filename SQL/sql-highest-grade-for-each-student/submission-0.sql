-- Write a query to find each student's highest score along with the corresponding exam_id. If a student has the same highest score on multiple exams, return the one with the smallest exam_id.
-- Return the student_id, exam_id, and score, ordered by student_id in ascending order.
select
    student_id,
    exam_id,
    score
from (
    select *, row_number() over (partition by student_id order by score desc, exam_id asc) rownumber
    from exam_results r
) r
where rownumber = 1
order by student_id asc