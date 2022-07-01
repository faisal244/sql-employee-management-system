DROP DATABASE IF EXISTS company_db;
CREATE DATABASE company_db;

USE company_db;

CREATE TABLE departments (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE roles (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL(8 , 2 ) NOT NULL,
    department_id INT NOT NULL,
    FOREIGN KEY (department_id)
        REFERENCES departments (id)
        ON UPDATE CASCADE ON DELETE CASCADE,
        PRIMARY KEY (id)
);

CREATE TABLE employee (
id INT NOT NULL AUTO_INCREMENT,
first_name VARCHAR(30) NOT NULL,
last_name VARCHAR(30) NOT NULL,
role_id INT,
PRIMARY KEY (id),
FOREIGN KEY (role_id) REFERENCES roles(id)
ON DELETE SET NULL,
manager_id INT,
FOREIGN KEY (manager_id) REFERENCES employee(id)
ON DELETE SET NULL
);
