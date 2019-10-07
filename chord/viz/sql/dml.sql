drop table if EXISTS menzhen_2019;
create table menzhen_2019 as 
select t.*,b.name from diag t join dim_type b on t.type = b.id
where t.illn_name is not NULL
and SUBSTR(t.`year`, 1, 4)='2019'