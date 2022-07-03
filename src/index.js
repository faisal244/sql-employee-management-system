const mysql = require("mysql2");
const inquirer = require("inquirer");
require("dotenv").config();
const table = require("table");
const Db = require("./db");
const { dbOptions } = require("./utils/dbConfig.js");

const config = {
	// table package style settings
	border: table.getBorderCharacters("honeywell"),
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

		// if user selects add a department, then give the user the choice to add a department name
		if (userInput === "Add a department") {
			const { departmentName } = await inquirer.prompt(departmentInfo);

			await db.query(
				`INSERT INTO department (name) VALUES ('${departmentName}');`
			);
		}

		// if user selects add a role, then give the user the choice to add a role name
		if (userInput === "Add a role") {
			const departments = await db.query(departmentQuery);

			const roleQuestions = [
				{
					type: "list",
					message: "Please select a department:",
					name: "departmentId",
					choices: generateDepartmentChoices(departments),
				},
				{
					type: "input",
					message: "Please enter role title:",
					name: "title",
				},
				{
					type: "input",
					message: "Please enter role salary:",
					name: "salary",
				},
			];

			const { departmentId, title, salary } = await inquirer.prompt(
				roleQuestions
			);

			await db.query(
				`INSERT INTO role(title, salary, department_id) VALUES('${title}', '${salary}', '${departmentId}')`
			);
		}

		// if user selects add an employee, then give the user the choice to add an employee
		if (userInput === "Add an employee") {
			const roles = await db.query("SELECT * FROM role");
			const employees = await db.query("SELECT * FROM  employee");

			const employeeInfo = [
				{
					type: "input",
					message: "Enter First Name",
					name: "firstName",
				},
				{
					type: "input",
					message: "Enter Last Name",
					name: "lastName",
				},
				{
					type: "list",
					message: "Please select a role",
					name: "employeeRole",
					choices: generateRoleChoices(roles),
				},
				{
					type: "confirm",
					name: "managerQuery",
					message: "Does the employee have a manager?",
					default: null,
				},
				{
					type: "list",
					name: "employeeManager",
					message: "Enter Manager Name:",
					choices: generateEmployeeChoices(employees),
					default: null,
					when: (employeeInfo) => employeeInfo.managerQuery === true,
				},
			];

			// prompt questions to user
			const {
				firstName,
				lastName,
				employeeRole,
				employeeManager = null,
			} = await inquirer.prompt(employeeInfo);

			try {
				console.log(employeeManager);
				if (!employeeManager) {
					await db.query(
						`INSERT INTO employee(first_name, last_name, role_id) VALUE('${firstName}', '${lastName}', '${employeeRole}')`
					);
				} else {
					await db.query(
						`INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUE('${firstName}', '${lastName}', '${employeeRole}', '${employeeManager}')`
					);
				}
			} catch (error) {
				console.log(error);
			}
		}

		if (userInput === "Update Employee Manager") {
			const employees = await db.query("SELECT * FROM  employee");
			const updateManager = [
				{
					type: "list",
					message: "Select Employee",
					name: "employeeChoice",
					choices: generateEmployeeChoices(employees),
				},
				{
					type: "list",
					message: "Select New Manager",
					name: "newManager",
					choices: generateEmployeeChoices(employees),
				},
			];

			const { employeeChoice, newManager } = await inquirer.prompt(
				updateManager
			);

			await db.query(
				`UPDATE company_db.employee SET manager_id = '${newManager}' WHERE (id = '${employeeChoice}');`
			);
		}

		// if user selects update employee role, then give the user the choice to update the role of an employee
		if (userInput === "Update Employee role") {
			const roles = await db.query("SELECT * FROM role");
			const employees = await db.query("SELECT * FROM  employee");
			const updateEmployeeInfo = [
				{
					type: "list",
					message: "Select an employee to update their role",
					name: "employeeToUpdate",
					choices: generateEmployeeChoices(employees),
				},
				{
					type: "list",
					message: "Please select a role",
					name: "employeeRole",
					choices: generateRoleChoices(roles),
				},
			];

			const { employeeToUpdate, employeeRole } = await inquirer.prompt(
				updateEmployeeInfo
			);

			await db.query(
				`UPDATE company_db.employee SET role_id = '${employeeRole}' WHERE (id = '${employeeToUpdate}');`
			);
		}

		// if View Employee by Manager, then give the user the choice to View Employee by Manager
		if (userInput === "View Employee by Manager") {
			//prompt questions to user
			const viewEmployeeByManager = await db.query(employeeByManager);
			console.table(viewEmployeeByManager);
		}

		// if Delete Record, then give the user the choice to Delete Record
		if (userInput === "Delete Record") {
			const roles = await db.query("SELECT * FROM role");
			const employees = await db.query("SELECT * FROM  employee");
			const department = await db.query("SELECT * FROM department");
			//prompt questions to user
			const { recordSelection } = await inquirer.prompt(deleteRecord);

			if (recordSelection === "Delete employee") {
				const employeeList = [
					{
						type: "list",
						message: "Select an employee to delete:",
						name: "employeeToDelete",
						choices: generateEmployeeChoices(employees),
					},
				];
				const { employeeToDelete } = await inquirer.prompt(employeeList);

				await db.query(
					`DELETE FROM company_db.employee WHERE (id = '${employeeToDelete}');`
				);
				console.log(`Employee successfully deleted`);
			}

			if (recordSelection === "Delete role") {
				const roleList = [
					{
						type: "list",
						message: "Select a role to delete:",
						name: "roleToDelete",
						choices: generateRoleChoices(roles),
					},
				];
				const { roleToDelete } = await inquirer.prompt(roleList);

				await db.query(
					`DELETE FROM company_db.role WHERE (id = '${roleToDelete}');`
				);
				console.log(`Role successfully deleted`);
			}

			if (recordSelection === "Delete Department") {
				const departmentList = [
					{
						type: "list",
						message: "Select a role to delete:",
						name: "departmentToDelete",
						choices: generateDepartmentChoices(department),
					},
				];
				const { departmentToDelete } = await inquirer.prompt(departmentList);
				await db.query(
					`DELETE FROM company_db.department WHERE (id = '${departmentToDelete}');`
				);
				console.log(`Department successfully deleted`);
			}
		}

		// confirm if user would still like to interact with the database
		if (userInput === "Quit Session") {
			inProgress = false;
			db.stop();
			console.log("Session closed.");
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
