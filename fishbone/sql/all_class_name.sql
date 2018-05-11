SELECT distinct concat('{"name": "',days,'__',CLASS_NAME,'"},') from huxi_2  where days>0 and days<15 order by days;

SELECT concat('{"source": "',t1.days,'__',t1.CLASS_NAME,'", "target":"',t2.days,'__',t2.CLASS_NAME,'",  "value":', count(DISTINCT t1.PATIENT_ID),'},') from huxi_2 t1 join huxi_2 t2 on t1.PATIENT_ID = t2.PATIENT_ID and t1.days+1 = t2.days
where t1.days>0 and t1.days<14
group by t1.days,t1.CLASS_NAME,t2.days,t2.CLASS_NAME


