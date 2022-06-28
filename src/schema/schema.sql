DROP DATABASE IF EXISTS company_db;
CREATE DATABASE company_db;

USE company_db;

CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(30) NOT NULL,
  PRIMARY KEY (id),
);

CREATE TABLE role (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL(8,2) NOT NULL,  
  department_id INT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (department_id),
  REFERENCES department(id),
  ON UPDATE CASCADE,
  ON DELETE CASCADE
);

CREATE TABLE employee (
  id INT NOT NULL AUTO_INCREMENT,
  PRIMARY KEY(id),
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT NOT NULL,
  manager_id INT,
  FOREIGN KEY (role_id),
  REFERENCES role(id),
  ON DELETE SET NULL,
  FOREIGN KEY (manager_id),
  REFERENCES employee(id),
  ON DELETE SET NULL
);
