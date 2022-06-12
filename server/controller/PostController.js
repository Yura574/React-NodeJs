const db = require('../db')


class PostController {
    async getPost(req, res) {
        const userId = req.query.id
        const posts = await db.query(`select *  from posts   where user_id = $1`, [userId])
        res.json(posts.rows)
    }

    async createPost(req, res) {
        const {title, content, user_id} = req.body
        const newPost = await db.query(`insert into posts (title, content, user_id)
                                        values ($1, $2, $3) returning *`, [title, content, user_id])
        res.json(newPost.rows[0])
        console.log(newPost.rows[0])
    }

    async updatePost(req, res) {
        const {id, title, content} = req.body
        const updatePost = await db.query('update posts set title = $1, content = $2 where id = $3', [title, content, id])

        res.json('update post successful')
    }

    async deletePost(req, res) {
        const id = req.params.id
        const deletePost = await db.query(`delete from posts where id = $1`, [id])
        console.log(req.params.id)
        res.json('delete post successful')
    }
}

module.exports = new PostController()