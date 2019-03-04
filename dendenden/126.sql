--select (value) from distance where (id < 3 and id > 1);

--update distance set value='1-6km' where id=2;

--delete from delivery where id=10;

--select * from delivery;

--select * from delivery order by price desc;

select * from delivery inner join weight on delivery.weight_id=weight_id;