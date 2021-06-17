const mysql = require('mysql');
const config = require('./coon/config');

const faker = require('faker');

class People {
    async create() {
        try {
            const connection = mysql.createConnection(config);
            const sql = `INSERT INTO people(name) values ("${faker.name.findName()}")`;
            await connection.query(sql);
            connection.end();
            return Promise.resolve();
        } catch (e) {
            return Promise.reject(e);
        }
    }

    async read(req, res) {
        try {
            const connection = mysql.createConnection(config);
            await connection.query(`SELECT name from people`, (err, result) => {
                if (err) throw err;

                let listNames = ``
                result.forEach(people => listNames += `Nome: ${people.name}<br />`)
                res.send(`<h1>Full Cycle Rocks!</h1> ${listNames}`);
            });
            connection.end();
            return Promise.resolve();
        } catch (e) {
            return Promise.reject(e);
        }
    }
}

module.exports = new People;