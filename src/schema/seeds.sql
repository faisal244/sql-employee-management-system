-- departments

USE company_db;

insert into department (id,name)
values (1, "Sales");

insert into department (id, name)
values (2, "Marketing");

insert into department (id, name)
values (3, "IT");

insert into department (id,name)
values (4, "Engineering");


-- roles
USE company_db;

insert into role (title, salary, department_id)
values ("Sales Executive", 24000, 1);
insert into role (title, salary, department_id)
values ("Sales Manager", 35000, 1);
insert into role (title, salary, department_id)
values ("Sales Director", 60000, 1);
insert into role (title, salary, department_id)
values ("Lead Engineer", 60000, 3);
insert into role (title, salary, department_id)
values ("Senior Software Engineer", 60000, 3);
insert into role (title, salary, department_id)
values ("Junior Software Engineer", 35000, 3);
insert into role (title, salary, department_id)
values ("Marketing Executive", 20000, 2);
insert into role (title, salary, department_id)
values ("Marketing Manager", 29000, 2);
insert into role (title, salary, department_id)
values ("Group Marketing Director", 29000, 2);
insert into role (title, salary, department_id)
values ("Application Support Analyst", 40000, 4);
insert into role (title, salary, department_id)
values ("IT Manager", 75000, 4);
insert into role (title, salary, department_id)
values ("IT Director", 75000, 4);


-- employees
USE company_db;

insert into employee (first_name, last_name, role_id, manager_id)
values ("Barry", "Thomson", 3);
insert into employee (first_name, last_name, role_id, manager_id)
values ("Julie", "Christmas", 2, 1);
insert into employee (first_name, last_name, role_id, manager_id)
values ("David", "Diggs", 1, 2);
insert into employee (first_name, last_name, role_id)
values ("Chistopher", "Nolan", 4);
insert into employee (first_name, last_name, role_id, manager_id)
values ("Kirk", "Hammet", 5, 4);
insert into employee (first_name, last_name, role_id)
values ("James", "Hetfield", 7);
insert into employee (first_name, last_name, role_id, manager_id)
values ("Tim ", "Kenny", 6, 6);
insert into employee (first_name, last_name, role_id)
values ("Alexander", "Murray", 9);
insert into employee (first_name, last_name, role_id)
values ("Lydia", "Morgan", 8, 8);
insert into employee (first_name, last_name, role_id, manager_id)
values ("Armaan", "Mohammed", 6, 6);
insert into employee (first_name, last_name, role_id)
values ("Alessandro", "Ansa", 9);
insert into employee (first_name, last_name, role_id, manager_id)
values ("Devin", "Townsend", 8, 8);
insert into employee (first_name, last_name, role_id, manager_id)
values ("Devin", "Townsend", 8, 8);
insert into employee (first_name, last_name, role_id, manager_id)
values ("Amjad", "Ali", 8, 8);
