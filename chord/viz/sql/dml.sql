drop table if EXISTS menzhen_2019;
create table menzhen_2019 as 
select t.*,b.name from diag t join dim_type b on t.type = b.id
where t.illn_name is not NULL
and SUBSTR(t.`year`, 1, 4)='2019';

ALTER TABLE `menzhen_2019`
DEFAULT CHARACTER SET=utf8mb4;

ALTER TABLE `menzhen_2019`
ADD INDEX `index_01` (`pati_id`, `pati_visit_id`, `illn_name`) ,
DEFAULT CHARACTER SET=utf8mb4;

drop table if EXISTS menzhen_2018;
create table menzhen_2018 as 
select t.*,b.name from diag t join dim_type b on t.type = b.id
where t.illn_name is not NULL
and SUBSTR(t.`year`, 1, 4)='2018';

ALTER TABLE `menzhen_2018`
DEFAULT CHARACTER SET=utf8mb4;

ALTER TABLE `menzhen_2018`
ADD INDEX `index_01` (`pati_id`, `pati_visit_id`, `illn_name`) ,
DEFAULT CHARACTER SET=utf8mb4;

drop table if EXISTS menzhen_2017;
create table menzhen_2017 as 
select t.*,b.name from diag t join dim_type b on t.type = b.id
where t.illn_name is not NULL
and SUBSTR(t.`year`, 1, 4)='2017';

ALTER TABLE `menzhen_2017`
DEFAULT CHARACTER SET=utf8mb4;

ALTER TABLE `menzhen_2017`
ADD INDEX `index_01` (`pati_id`, `pati_visit_id`, `illn_name`) ,
DEFAULT CHARACTER SET=utf8mb4;

drop table if EXISTS menzhen_2016;
create table menzhen_2016 as 
select t.*,b.name from diag t join dim_type b on t.type = b.id
where t.illn_name is not NULL
and SUBSTR(t.`year`, 1, 4)='2016';

ALTER TABLE `menzhen_2016`
DEFAULT CHARACTER SET=utf8mb4;

ALTER TABLE `menzhen_2016`
ADD INDEX `index_01` (`pati_id`, `pati_visit_id`, `illn_name`) ,
DEFAULT CHARACTER SET=utf8mb4;

drop table if EXISTS menzhen_2015;
create table menzhen_2015 as 
select t.*,b.name from diag t join dim_type b on t.type = b.id
where t.illn_name is not NULL
and SUBSTR(t.`year`, 1, 4)='2015';

ALTER TABLE `menzhen_2015`
DEFAULT CHARACTER SET=utf8mb4;

ALTER TABLE `menzhen_2015`
ADD INDEX `index_01` (`pati_id`, `pati_visit_id`, `illn_name`) ,
DEFAULT CHARACTER SET=utf8mb4;

