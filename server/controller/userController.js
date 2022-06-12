
const db = require('../db')

class UserController {
    async createUser(req, res) {
        try{
            const {name, surname} = req.body
            const newPerson = await db.query(`INSERT INTO person (name, surname) values ($1, $2) RETURNING *`, [name, surname])
            console.log(newPerson.rows[0])
            res.json(newPerson.rows[0])
        }
        catch (e) {
            console.log(e)
            res.json(e)
        }

    }

    async getUsers(req, res) {

    }

    async getOneUser(req, res) {

    }

    async updateUser(req, res) {

    }

    async deleteUser(req, res) {

    }

}

module.exports = new UserController();