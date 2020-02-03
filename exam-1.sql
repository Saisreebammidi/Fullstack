use dbwork;
create table details(sno int NOT NULL auto_increment,name varchar(45),college varchar(45),rollno int(50));
select * from details;
create table details(id int NOT NULL auto_increment,branch varchar(45),yop int(50));
insert into details (sno,name,college,rollno)values(1,'supriya','hitam',3);
insert into details (sno,name,college,rollno)values(2,'saisree','gitam',5);
select * from exam;
insert into exam (id,branch,yop)values(1,'cse',2020);
insert into exam (id,branch,yop)values(2,'cse',2020);
SELECT `details`.`sno`,
    `details`.`name`,
    `details`.`college`,
    `details`.`rollno`
FROM `dbwork`.`details`;
CREATE DEFINER=`root`@`localhost` PROCEDURE `insert_de`(
in sno int(100),
in uname varchar(100),
in college varchar(100),
in roll_no int(100)
)
BEGIN
insert into details (sno,name,college,rollno)values(sno,uname,college,roll_no);
END
call dbwork.insert_de(3, 'asd', 'sadf', 23);
CREATE DEFINER=`root`@`localhost` PROCEDURE `update_exam`(
in uid int(100),
in stream varchar(50),
in passing int (100)
)
BEGIN
declare x int;
set x=(select id from exam where id=uid);

update exam set yop=passing where id=x;



END
call dbwork.update_exam(1, 'cse', 2020);
CREATE DEFINER=`root`@`localhost` PROCEDURE `select_data`(

)
BEGIN
select name from details where rollno=3;
END
call dbwork.select_data();
call dbwork.insert_de(3, 'asdf', 'qwe', 23);
SELECT * FROM dbwork.details;