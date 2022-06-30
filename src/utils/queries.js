//get all departments query
const getDepartments = `SELECT department.name AS departments FROM department`;

//get all roles query
const getRoles = `SELECT roles.title AS role, roles.salary, department.name AS department FROM roles JOIN department ON roles.departmentId = department.id ORDER BY department.name`;

//get all employees
const getEmployees = `SELECT employee.firstName AS First_Name, employee.lastName AS Last_Name, title AS Role, salary AS Salary, name AS Department
FROM employee 
LEFT JOIN roles 
ON employee.roleId=roles.id 
LEFT JOIN department
ON roles.departmentId=department.id;`;

//insert new department query
const addDepartment = `INSERT INTO department (name) VALUES ('Finance')`;

//exports queries
module.exports = { getDepartments, getRoles, getEmployees };
