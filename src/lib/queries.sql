
-- view all employees
SELECT employee_role.firstName, employee_role.lastName, title, salary, name
FROM employee employee_role 
LEFT JOIN role 
ON employee_role.roleId=role.id 
LEFT JOIN department
ON role.departmentId=department.id;

