// Looping Starter Questions
const choiceQuestions = {
	type: "list",
	name: "chosenAction",
	message: "What would you like to do?",
	choices: [
		{
			value: "viewEmployee",
			name: "View all Employees",
		},
		{
			value: "addEmployee",
			name: "Add a new Employee",
		},
		{
			value: "updateEmployeeRole",
			name: "Update an Employee Role",
		},
		{
			value: "viewRoles",
			name: "View all Roles",
		},
		{
			value: "addRoles",
			name: "Add a new Role",
		},
		{
			value: "viewDepartments",
			name: "View all Departments",
		},
		{
			value: "addDepartment",
			name: "Add a new Department",
		},
		{
			value: "exit",
			name: "Exit",
		},
	],
};

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
	choiceQuestions,
	employeeInfo,
	departmentInfo,
	deleteRecord,
};
