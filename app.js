const mysql = require('mysql');
const { promisify } = require('util');
// const faker = require('faker');

const connection = mysql.createConnection({
host: "localhost",
user: "root",
password: "password",
database: "email_database"
});

const promisifiedQuery = promisify(connection.query).bind(connection);


const runQuery = async () => {
    try {
        let data = await promisifiedQuery('SELECT COUNT(*) AS total FROM users');
        return(data);
    } catch (error) {
        console.log(error.sqlMessage);
    }
    connection.end();
};

const addEmail = async (email) => {
    try {
        const queryStringAdd = `INSERT INTO users(email) VALUES ('${email}')`;
        let data = await promisifiedQuery(queryStringAdd);
        // return (data);
    } catch (error) {
        return(error.sqlMessage);
    }
};

// const bulkAdd = () => {
//     let people = [];
//     for (i = 0; i < 500; i++) {
//         people.push([faker.internet.email(), faker.date.past()])
//     }
//     return people;
// };

runQuery();

module.exports = {
    runQuery,
    addEmail
};
