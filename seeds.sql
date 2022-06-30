-- departments

USE company_db;

insert into departments (id,name)
values (1, "Sales");

insert into departments (id, name)
values (2, "Marketing");

insert into departments (id, name)
values (3, "IT");

insert into departments (id,name)
values (4, "Engineering");


-- roles
USE company_db;

insert into roles (id, title, salary, department_id)
values (1, "Sales Executive", 24000, 1);
insert into roles (title, salary, department_id)
values (2,"Sales Manager", 35000, 1);
insert into roles (title, salary, department_id)
values (3,"Sales Director", 60000, 1);
insert into roles (title, salary, department_id)
values (4, "Lead Engineer", 60000, 3);
insert into roles (title, salary, department_id)
values (5, "Senior Software Engineer", 60000, 3);
insert into roles (title, salary, department_id)
values (6, "Junior Software Engineer", 35000, 3);
insert into roles (title, salary, department_id)
values (7, "Marketing Executive", 20000, 2);
insert into roles (title, salary, department_id)
values (8, "Marketing Manager", 29000, 2);
insert into roles (title, salary, department_id)
values (9, "Group Marketing Director", 29000, 2);
insert into roles (title, salary, department_id)
values (10, "Application Support Analyst", 40000, 4);
insert into roles (title, salary, department_id)
values (11, "IT Manager", 75000, 4);
insert into roles (title, salary, department_id)
values (12, "IT Director", 75000, 4);


-- employees
USE company_db;

insert into employee (first_name, last_name, role_id, manager_id)
values ("Barry", "Thomson", 3, NULL);
insert into employee (first_name, last_name, role_id, manager_id)
values ("Julie", "Christmas", 2, NULL);
insert into employee (first_name, last_name, role_id, manager_id)
values ("David", "Diggs", 1, NULL);
insert into employee (first_name, last_name, role_id)
values ("Chistopher", "Nolan", NULL);
insert into employee (first_name, last_name, role_id, manager_id)
values ("Kirk", "Hammet", 5, NULL);
insert into employee (first_name, last_name, role_id)
values ("James", "Hetfield", 7, NULL);
insert into employee (first_name, last_name, role_id, manager_id)
values ("Tim ", "Kenny", 6, NULL);
insert into employee (first_name, last_name, role_id)
values ("Alexander", "Murray", 9, NULL);
insert into employee (first_name, last_name, role_id)
values ("Lydia", "Morgan", 8, NULL);
insert into employee (first_name, last_name, role_id, manager_id)
values ("Armaan", "Mohammed", 6, NULL);
insert into employee (first_name, last_name, role_id)
values ("Alessandro", "Ansa", 9, NULL);
insert into employee (first_name, last_name, role_id, manager_id)
values ("Devin", "Townsend", 8, NULL);
insert into employee (first_name, last_name, role_id, manager_id)
values ("Devin", "Townsend", 8, NULL);
insert into employee (first_name, last_name, role_id, manager_id)
values ("Amjad", "Ali", 8, NULL);
