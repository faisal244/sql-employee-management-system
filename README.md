# 12 SQL: Employee Management System

## Table of Contents

- [Description](#description)
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Video Walkthrough](#video-walkthrough)
- [Screenshots](#screenshots)
- [Installation](#installation)
- [Usage](#usage)
- [Contact Me](#contact-me)
- [My Development Environment](#my-development-environment)
- [Languages, Technologies and Packages used](#languages-technologies-and-packages-used)

## Description

Developers frequently have to create interfaces that allow non-developers to easily view and interact with information stored in databases. These interfaces are called **content management systems (CMS)**. I was tasked with building a command-line application from scratch to manage a company's employee database, using Node.js, Inquirer, and MySQL.

## User Story

```md
AS A business owner
I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my business
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids
WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database
```

## Video Walkthrough

The following video shows an example of the application being used from the command line:

[![A video thumbnail shows the command-line employee management application with a play button overlaying the view.](./Assets/12-sql-homework-video-thumbnail.png)](https://drive.google.com/file/d/1D4BlpzGmmyc1UbVKMTP0ObKn4AYDk2mN/view?usp=sharing)

## Screenshots

## Installation

The application will be invoked by entering the following 3 commands line by line into your terminal / CLI

```

git clone git@github.com:faisal244/sql-employee-management-system.git
cd sql-employee-management-system
npm install

```

## Usage

Once all the dependancies have been installed, please provide the application with the source database schema by entering the following 2 commands in your terminal:

```
mysql -u root -p
When promted for a password, enter "password"
```

then type:

```

source [enter absolute file path for the provided schema.sql file in the schema folder here]

```

type quit to exit the MySQL shell.

Once the source database schema has been provided, please execute the following 2 commands in your terminal to seed the database with employee data and run this application:

```

npm run seed
npm run start

```

## Contact me

- Contact me by Email: [m.faisal244@gmail.com](mailto:m.faisal244@gmail.com)

- [Connect with me on linkedin](https://www.linkedin.com/in/faisal244/)

- [View my Portfolio](https://faisal244.github.io/Portfolio/)

## My Development Environment

- VScode
- Terminal
- Nodemon
- MacOS Monterey
- Git
- Github

## Languages, Technologies and Packages used

- Javascript
- Node.JS
- Inquirer Package
- Dotenv
- [NPM] Mysql2
- [NPM] Table

---
