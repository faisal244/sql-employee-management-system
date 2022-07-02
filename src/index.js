const mysql = require("mysql2");
const inquirer = require("inquirer");
require("dotenv").config();
const table = require("table");
const Db = require("./db");
const { dbOptions } = require("./utils/dbConfig.js");

const config = {
	// table package settings for styles
	border: table.getBorderCharacters("ramac"),
};

const {
	mainQuestions,
	employeeInfo,
	departmentInfo,
	deleteRecord,
} = require("./utils/questions");

const {
	employeeQuery,
	roleQuery,
	departmentQuery,
	employeeByManager,
} = require("./utils/queries");

const {
	generateRoleChoices,
	generateEmployeeChoices,
	generateDepartmentChoices,
} = require("./utils/utils.js");

const init = async () => {
	const db = new Db({
		host: process.env.DB_HOST || "localhost",
		user: process.env.DB_USER || "root",
		password: process.env.DB_PASSWORD || "password",
		database: process.env.DB_NAME || "company_db",
	});

	await db.start();

	// While inProgress is true, ask the user questions
	let inProgress = true;

	while (inProgress) {
		let { userInput } = await inquirer.prompt(mainQuestions);

		// if user selects view all departments, then retrieve from database and display table
		if (userInput === "View all departments") {
			const departments = await db.query(departmentQuery);
			console.table(departments);
		}

		// if user selects view all roles, then retrieve from database and display table
		if (userInput === "View all roles") {
			const roles = await db.query(roleQuery);
			console.table(roles);
		}

		// if user selects view all employees, then retrieve from database and display table
		if (userInput === "View all employees") {
			const employees = await db.query(employeeQuery);
			console.table(employees);
		}
	}
};

init();

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

// // can put get employees from db and get employee choices into one function befcause they are repetitive
// const addRole = () => {};
