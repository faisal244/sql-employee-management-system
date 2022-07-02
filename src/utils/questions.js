// question set to prompt options to the user
const mainQuestions = [
	{
		type: "list",
		message: "What action would you like to take?",
		name: "userInput",
		choices: [
			"View all departments",
			"View all roles",
			"View all employees",
			"Add a department",
			"Add a role",
			"Add an employee",
			"Update Employee role",
			"Quit Session",
			"Update Employee Manager",
			"View Employee by Manager",
			"Delete Record",
		],
	},
];

// Loop stopper questions
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
		type: "input",
		message: "Enter Role Name",
		name: "employeeRole",
	},
	{
		type: "input",
		message: "Enter Manager Name",
		name: "employeeManager",
	},
];

const departmentInfo = [
	{
		type: "input",
		message: "Enter Department Name",
		name: "departmentName",
	},
];

const deleteRecord = [
	{
		type: "list",
		message: "Which record type would you like to delete?",
		name: "recordSelection",
		choices: ["Delete Department", "Delete role", "Delete employee"],
	},
];

module.exports = {
	mainQuestions,
	employeeInfo,
	departmentInfo,
	deleteRecord,
};
