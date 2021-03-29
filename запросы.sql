1) select FIRST_NAME as worker_name from worker
2) select upper(FIRST_NAME) from worker
3) select distinct DEPARTMENT from worker;
4) select substring(FIRST_NAME,1,3) from worker;
5) select POSITION('G' in FIRST_NAME) from worker where FIRST_NAME = 'Getti';
6) select TRIM(TRAILING from FIRST_NAME) from worker 
   select RTRIM(FIRST_NAME) from worker;
7) select TRIM(LEADING from FIRST_NAME) from worker 
   select LTRIM(FIRST_NAME) from worker;
8) select distinct length(DEPARTMENT) from worker
9) select replace(FIRST_NAME, 'a', 'A') from worker
10) select CONCAT(FIRST_NAME, ' ', LAST_NAME) AS 'COMPLETE_NAME' from worker;
11) select * FROM worker order by FIRST_NAME asc
12) select * FROM worker order by FIRST_NAME desc
13) select * from worker where FIRST_NAME = 'Getti' or FIRST_NAME = 'Donni';
    select * from worker where FIRST_NAME in ('Getti','Donni');
14) select * from worker where FIRST_NAME <> 'Getti' and FIRST_NAME <> 'Donni';
    select * from worker where FIRST_NAME not in ('Getti','Donni');
15) select * from worker where DEPARTMENT = 'Sales';
    select * from Worker where DEPARTMENT like 'Sales%';
16) select * from worker where FIRST_NAME like '%a%';
17) select * from worker where FIRST_NAME like '%a';
18) select * from worker where FIRST_NAME like '______h%';
19) select * from worker where SALARY >= 100000 and SALARY <= 500000;
    select * from worker where SALARY between 100000 and 500000;
20) select * from Worker where to_char(joing_date, 'mon') = 'mar;
21) select COUNT(*) from worker where DEPARTMENT = 'Sales';
22) select FIRST_NAME, SALARY from worker where SALARY between 50000 and 100000;
23)
24) select DISTINCT W.FIRST_NAME, T.WORKER_TITLE
    from worker W
    INNER JOIN Title T
    ON W.WORKER_ID = T.WORKER_REF_ID
    AND T.WORKER_TITLE in ('Developer');
25)  select DEPARTMENT, COUNT(*)
     from worker
     GROUP BY DEPARTMENT
     HAVING COUNT(*) > 1;
26) select * from worker where MOD(WORKER_ID, 2) <> 0;
27) select * from worker where MOD(WORKER_ID, 2) = 0;
28) CREATE TABLE worker_2 AS TABLE worker
    select * INTO worker_2 FROM worker;
    CREATE TABLE worker_2 LIKE worker;
29) (select * from worker) INTERSECT (select * from workerclone)
30) SELECT * FROM worker EXCEPT SELECT * FROM workerclone
31) SELECT NOW();
32) select * from worker order by salary asc limit 10
33) select max(salary) from worker limit 5
    SELECT SALARY FROM worker ORDER BY SALARY DESC LIMIT 5;
34) select Salary from worker W WHERE 4 = (
    select COUNT( DISTINCT ( W2.Salary ) )
    from Worker W2
    WHERE W2.Salary >= W1.Salary);
35) select distinct W.WORKER_ID, W.FIRST_NAME, W.SALARY
    from worker W, worker W1 
    where W.SALARY = W1.SALARY 
    and W.WORKER_ID != W1.WORKER_ID;
36) select max(SALARY) from worker 
    where SALARY not in (select max(SALARY) from worker);
37) select FIRST_NAME, DEPARTMENT from worker W where W.DEPARTMENT='Sales' 
    union all 
    select FIRST_NAME, DEPARTMENT from Worker W1 where W1.DEPARTMENT='Sales';
38) (SELECT * FROM worker)
    INTERSECT
    (SELECT * FROM workerclone);
39) SELECT * FROM WORKER WHERE WORKER_ID <= (SELECT count(WORKER_ID)/2 from worker);
40) SELECT DEPARTMENT, COUNT(WORKER_ID) as number_of_Workers FROM worker 
    GROUP BY DEPARTMENT HAVING COUNT(WORKER_ID) < 5;
41) select department, count(department) as number_of_workers from worker group by department;
42) select * from worker where WORKER_ID = (select max(WORKER_ID) from worker)
43) select * from worker where WORKER_ID = (select min(WORKER_ID) from worker)4
44) SELECT * FROM Worker WHERE WORKER_ID <=5
    UNION
    SELECT * FROM (SELECT * FROM Worker W order by W.WORKER_ID DESC) AS W1 WHERE W1.WORKER_ID <=5;
45) SELECT t.DEPARTMENT,t.FIRST_NAME,t.Salary from(SELECT max(Salary) as TotalSalary,DEPARTMENT from Worker group by DEPARTMENT) as TempNew 
    Inner Join Worker t on TempNew.DEPARTMENT=t.DEPARTMENT 
    and TempNew.TotalSalary=t.Salary;
46) SELECT distinct Salary from worker a WHERE 3 >= (SELECT count(distinct Salary) from worker b WHERE a.Salary <= b.Salary) order by a.Salary desc;
47) SELECT distinct Salary from worker a WHERE 3 >= (SELECT count(distinct Salary) from worker b WHERE a.Salary >= b.Salary) order by a.Salary desc;
48) SELECT distinct Salary from worker a WHERE 50000 >= (SELECT count(distinct Salary) from worker b WHERE a.Salary <= b.Salary) order by a.Salary desc;
49) SELECT DEPARTMENT, sum(Salary) from worker group by DEPARTMENT;
50) select FIRST_NAME, SALARY from worker where SALARY = (select max(SALARY) from worker)


    