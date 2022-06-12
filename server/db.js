import Pool from 'pg'
const pool = new Pool.Pool({
    user: "postgres",
    password: "unbiliever13",
    host:'localhost',
    port: 5432,
    database: "test_db"
});

export default pool