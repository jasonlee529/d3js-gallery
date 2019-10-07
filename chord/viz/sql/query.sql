SELECT
	 t1.illn_name , t1.type,t2.illn_name ,t2.type,count(1) cnt
FROM
	menzhen_2019 t1
join menzhen_2019 t2 on t1.pati_id=t2.pati_id and t1.pati_visit_id = t2.pati_visit_id
and t1.illn_name < t2.illn_name 
group by  t1.illn_name , t2.illn_name
order by t1.type , cnt desc;