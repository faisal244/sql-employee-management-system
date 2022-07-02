-- departments

USE company_db;

insert into department (name)
values ("Sales");

insert into department (name)
values ("Marketing");

insert into department (name)
values ("IT");

insert into department (name)
values ("Engineering");


-- roles
-- USE company_db;

insert into role (title, salary, department_id)
values ("Sales Executive", 24000, 1);
insert into role (title, salary, department_id)
values ("Sales Manager", 35000, 1);
insert into role (title, salary, department_id)
values ("Sales Director", 60000, 1);
insert into role (title, salary, department_id)
values ("Lead Engineer", 60000, 3);
insert into role (title, salary, department_id)
values ("Senior Software Engineer", 45000, 3);
insert into role (title, salary, department_id)
values ("Junior Software Engineer", 30000, 3);
insert into role (title, salary, department_id)
values ("Marketing Executive", 20000, 2);
insert into role (title, salary, department_id)
values ("Marketing Manager", 30000, 2);
insert into role (title, salary, department_id)
values ("Group Marketing Director", 70000, 2);
insert into role (title, salary, department_id)
values ("Application Support Analyst", 35000, 4);
insert into role (title, salary, department_id)
values ("IT Manager", 55000, 4);
insert into role (title, salary, department_id)
values ("IT Director", 75000, 4);


-- employees
-- USE company_db;

insert into employee (first_name, last_name, role_id)
values ("Barry", "Thomson", 2);
insert into employee (first_name, last_name, role_id)
values ("Julie", "Christmas", 2);
insert into employee (first_name, last_name, role_id)
values ("David", "Diggs", 1);
insert into employee (first_name, last_name, role_id)
values ("Chistopher", "Nolan", 1);
insert into employee (first_name, last_name, role_id)
values ("Kurt", "Hammet", 5);
insert into employee (first_name, last_name, role_id)
values ("James", "Hetfield", 4);
insert into employee (first_name, last_name, role_id)
values ("Tim ", "Kenny", 9);
insert into employee (first_name, last_name, role_id)
values ("Alexander", "Murray", 8);
insert into employee (first_name, last_name, role_id)
values ("Lydia", "Morgan", 8);
insert into employee (first_name, last_name, role_id)
values ("Armaan", "Mohammed", 12);
insert into employee (first_name, last_name, role_id)
values ("Alessandro", "Ansa", 6);
insert into employee (first_name, last_name, role_id)
values ("Devin", "Townsend", 2);
insert into employee (first_name, last_name, role_id)
values ("Amjad", "Ali", 8);


UPDATE employee SET manager_id = 3 WHERE id = 1;
UPDATE employee SET manager_id = 4 WHERE id = 2;
UPDATE employee SET manager_id = 3 WHERE id = 3;
UPDATE employee SET manager_id = 6 WHERE id = 5;
UPDATE employee SET manager_id = 9 WHERE id = 9;
UPDATE employee SET manager_id = 12 WHERE id = 12;
UPDATE employee SET manager_id = 12 WHERE id = 13;
