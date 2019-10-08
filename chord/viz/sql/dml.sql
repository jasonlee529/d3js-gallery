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



### 住院
drop table if EXISTS zhuyuan_2019;
create table zhuyuan_2019 as 
select t.*,b.name from diag t join dim_type b on t.type = b.id
where t.illn_name is not NULL
and SUBSTR(t.`year`, 1, 4)='2019';

ALTER TABLE `zhuyuan_2019`
DEFAULT CHARACTER SET=utf8mb4;
ALTER TABLE naofangwei.zhuyuan_2019 MODIFY COLUMN pati_id varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL;
ALTER TABLE naofangwei.zhuyuan_2019 MODIFY COLUMN pati_visit_id varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL;
ALTER TABLE naofangwei.zhuyuan_2019 MODIFY COLUMN illn_name varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL;

ALTER TABLE `zhuyuan_2019`
ADD INDEX `index_01` (`pati_id`, `pati_visit_id`, `illn_name`) ,
DEFAULT CHARACTER SET=utf8mb4;

drop table if EXISTS zhuyuan_2018;
create table zhuyuan_2018 as 
select t.*,b.name from diag t join dim_type b on t.type = b.id
where t.illn_name is not NULL
and SUBSTR(t.`year`, 1, 4)='2018';

ALTER TABLE `zhuyuan_2018`
DEFAULT CHARACTER SET=utf8mb4;
ALTER TABLE naofangwei.zhuyuan_2018 MODIFY COLUMN pati_id varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL;
ALTER TABLE naofangwei.zhuyuan_2018 MODIFY COLUMN pati_visit_id varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL;
ALTER TABLE naofangwei.zhuyuan_2018 MODIFY COLUMN illn_name varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL;
ALTER TABLE `zhuyuan_2018`
ADD INDEX `index_01` (`pati_id`, `pati_visit_id`, `illn_name`) ,
DEFAULT CHARACTER SET=utf8mb4;

drop table if EXISTS zhuyuan_2017;
create table zhuyuan_2017 as 
select t.*,b.name from diag t join dim_type b on t.type = b.id
where t.illn_name is not NULL
and SUBSTR(t.`year`, 1, 4)='2017';

ALTER TABLE `zhuyuan_2017`
DEFAULT CHARACTER SET=utf8mb4;
ALTER TABLE naofangwei.zhuyuan_2017 MODIFY COLUMN pati_id varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL;
ALTER TABLE naofangwei.zhuyuan_2017 MODIFY COLUMN pati_visit_id varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL;
ALTER TABLE naofangwei.zhuyuan_2017 MODIFY COLUMN illn_name varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL;
ALTER TABLE `zhuyuan_2017`
ADD INDEX `index_01` (`pati_id`, `pati_visit_id`, `illn_name`) ,
DEFAULT CHARACTER SET=utf8mb4;

drop table if EXISTS zhuyuan_2016;
create table zhuyuan_2016 as 
select t.*,b.name from diag t join dim_type b on t.type = b.id
where t.illn_name is not NULL
and SUBSTR(t.`year`, 1, 4)='2016';

ALTER TABLE `zhuyuan_2016`
DEFAULT CHARACTER SET=utf8mb4;
ALTER TABLE naofangwei.zhuyuan_2016 MODIFY COLUMN pati_id varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL;
ALTER TABLE naofangwei.zhuyuan_2016 MODIFY COLUMN pati_visit_id varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL;
ALTER TABLE naofangwei.zhuyuan_2016 MODIFY COLUMN illn_name varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL;
ALTER TABLE `zhuyuan_2016`
ADD INDEX `index_01` (`pati_id`, `pati_visit_id`, `illn_name`) ,
DEFAULT CHARACTER SET=utf8mb4;

drop table if EXISTS zhuyuan_2015;
create table zhuyuan_2015 as 
select t.*,b.name from diag t join dim_type b on t.type = b.id
where t.illn_name is not NULL
and SUBSTR(t.`year`, 1, 4)='2015';

ALTER TABLE `zhuyuan_2015`
DEFAULT CHARACTER SET=utf8mb4;
ALTER TABLE naofangwei.zhuyuan_2015 MODIFY COLUMN pati_id varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL;
ALTER TABLE naofangwei.zhuyuan_2015 MODIFY COLUMN pati_visit_id varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL;
ALTER TABLE naofangwei.zhuyuan_2015 MODIFY COLUMN illn_name varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL;
ALTER TABLE `zhuyuan_2015`
ADD INDEX `index_01` (`pati_id`, `pati_visit_id`, `illn_name`) ,
DEFAULT CHARACTER SET=utf8mb4;

