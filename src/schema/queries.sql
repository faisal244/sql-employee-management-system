USE company_db;

-- view all departments
SELECT department.name FROM department;

-- -- view all roles
SELECT role.id, role.title, role.salary, department.name FROM role JOIN department ON role.department_id = department.id ORDER BY department.name;

-- -- view all employees
SELECT employee_role.first_name, employee_role.last_name, title, salary, name
FROM employee employee_role 
LEFT JOIN role 
ON employee_role.role_id=role.id 
LEFT JOIN department
ON role.department_id=department.id;

-- -- insert department
INSERT INTO department (name) VALUES ('Finance');

-- -- insert role
INSERT INTO role (title, salary, department_id) VALUES ('Junior', 1000, 3);

-- -- insert employee
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Barry', 'Bungalow', 2, 5)