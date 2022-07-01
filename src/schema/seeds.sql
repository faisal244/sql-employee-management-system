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

insert into employee (first_name, last_name, role_id, manager_id)
values ("Barry", "Thomson", 2, 3);
insert into employee (first_name, last_name, role_id, manager_id)
values ("Julie", "Christmas", 2, 2);
insert into employee (first_name, last_name, role_id, manager_id)
values ("David", "Diggs", 1, 3);
insert into employee (first_name, last_name, role_id)
values ("Chistopher", "Nolan", 1);
insert into employee (first_name, last_name, role_id, manager_id)
values ("Kirk", "Hammet", 5, 6);
insert into employee (first_name, last_name, role_id)
values ("James", "Hetfield", 4);
insert into employee (first_name, last_name, role_id)
values ("Tim ", "Kenny", 9);
insert into employee (first_name, last_name, role_id)
values ("Alexander", "Murray", 8);
insert into employee (first_name, last_name, role_id, manager_id)
values ("Lydia", "Morgan", 8, 8);
insert into employee (first_name, last_name, role_id)
values ("Armaan", "Mohammed", 12);
insert into employee (first_name, last_name, role_id)
values ("Alessandro", "Ansa", 9);
insert into employee (first_name, last_name, role_id, manager_id)
values ("Devin", "Townsend", 2, 3);
insert into employee (first_name, last_name, role_id, manager_id)
values ("Amjad", "Ali", 8, 10);
