const db = require('../db')

class UserController {
    async createUser(req, res) {
        try {
            const {name, surname} = req.body
            const newPerson = await db.query(`INSERT INTO person (name, surname)
                                              values ($1, $2) RETURNING *`, [name, surname])
            console.log(newPerson.rows[0])
            res.json(newPerson.rows[0])
        } catch (e) {
            console.log(e)
            res.json(e)
        }

    }

    async getUsers(req, res) {
        const users = await db.query(`select * from person`)
        res.json(users.rows)
    }

    async getOneUser(req, res) {
        const id = req.params.id
        const user = await db.query(`select * from person where id = $1`, [id])
        res.json(user.rows[0])
    }

    async updateUser(req, res) {
        const {id, name, surname} = req.body
        const updatedUser = await db.query(`UPDATE person set name = $1, surname = $2 where id = $3 RETURNING *`,
            [name, surname, id])
        res.json(updatedUser.rows)
    }

    async deleteUser(req, res) {
        const id = req.params.id
        const deletedUser = await db.query(`delete from person where id = $1`, [id])
        res.json(deletedUser)
        console.log(id)
    }

}

module.exports = new UserController();