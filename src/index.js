const inquirer = require("inquirer");
const mysql = require("mysql2");
require("dotenv").config();

const questions = require("./utils/questions");

const Db = require("./db");

const {
	getDepartments,
	getRoles,
	getEmployees,
	addDepartment,
} = require("./utils/queries.js");

const db = new Db({
	host: process.env.DB_HOST || "localhost",
	user: process.env.DB_USER || "root",
	password: process.env.DB_PASSWORD || "password",
	database: process.env.DB_NAME || "company_db",
});

const init = async () => {
	try {
		// console.log(process.env);

		await db.start();

		let inProgress = true;

		while (inProgress) {
			const { dbAction } = await inquirer.prompt(questions);

			if (dbAction === "viewEmployee") {
				const employees = await db.query(
					`SELECT CONCAT(e.firstName,' ', e.lastName) AS 'EMPLOYEE', j.title AS 'JOB ROLE', d.name AS 'DEPARTMENT', j.salary AS 'SALARY',
      CONCAT( m.firstName,' ',  m.lastName) AS MANAGER
      FROM employee AS e JOIN employee AS m ON e.managerId = m.id INNER JOIN jobRole j ON e.jobRoleId = j.id LEFT JOIN department d ON j.departmentId = d.id;`
				);

				console.table(employees);
			}

			if (dbAction === "viewRoles") {
				const allRoles = await sendQuery(getRoles);

				console.table(roles);
			}

			if (dbAction === "exit") {
				await closeConnection();
				inProgress = false;
				console.log("THANK YOU");
			}
		}
	} catch (error) {
		console.log(`[ERROR]: Internal error | ${error.message}`);
	}
};

init();

// console.log("hello from node!");

// // init function

// // progress: true

// // first action question - what do you want to do?
// // this question will be part of a loop
// // depending on choice out of the 8 actions, you will trigger one of the 8 blocks of code below
// // if user selects quit - you set progress: false

// // if action is view roles, console.log("to do: roles")
// // use console.table for displaying users

// // then focus on the individual blocks - create functions for interacting with the DB
// //

// const getDepartmentsFromDB = () => {
// 	// DB gets passed in, Fn returns an array of departments
// 	// once this one function has been defined, can be refactored for the other get functions below
// };

// const getRolesFromDB = () => {};
// const getEmployeesFromDB = () => {};

// const addDepartment = () => {
// 	// ask question
// 	// Get answer
// 	// Create department function is triggered
// };

// const addRole = () => {
// 	// call getDepartmentsFromDB, pass into departments array
// 	// pass into gernerateDepartmentChoices
// 	// creates an array
// 	//  in your choice object - name, value, and short
// 	// in your value, please put the value as ID for department - the department field doesnt have department name
// 	// depending on what they select, the corrosponding value will be used to store it in the database
// 	// take, title, salary, department, then pass it into another function to create role
// };

// const addEmployee = () => {
// 	//  // call getRolesFromDB, pass into a roles array
// 	// pass into gernerateRoleChoices ( )
// 	// creates an array
// 	// ask for first name, last name, manager name, role ID
// 	// pass these answers into another function - createEmployee() - will do a simple map inside here
// };

// const updateEmployee = () => {
// 	// get employees from db
// 	// returns an array of Employees
// 	// ask questions
// 	// get employee id and role id
// 	// call a function to update employee()
// 	// in that function, you will have a sql query to find that employee and update their database entry
// };

// // can put get employees from db and get employyee choices into one function befcause they are repetitive
// const addRole = () => {};
