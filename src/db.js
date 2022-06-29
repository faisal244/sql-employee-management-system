const mysql = require("mysql2/promise");
const initDatabase = async (config) => {
	// console.log(config);
	const db = await mysql.createConnection({
		host: "localhost",
		user: process.env.DB_USER,
		password: process.env.DB_PASSWORD,
		database: "company_db",
	});

	const executeQuery = async (query, values) => {
		if (values) {
			const [results] = await db.query(query, values);

			return results;
		}

		const [results] = await db.query(query);

		return results;
	};

	const closeConnection = async () => {
		await db.end();
	};

	return {
		executeQuery,
		closeConnection,
	};
};

module.exports = initDatabase;
