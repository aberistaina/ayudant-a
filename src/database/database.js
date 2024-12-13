import pkg from "pg";
const { Pool } = pkg;


let pool = new Pool({
    host: "localhost",
    port: 5432,
    database: "animales",
    user: "postgres",
    password: "6108",
    max: 10
});
    

export const consultas = async (query) => {
    try {
        const resultado = await pool.query(query)
        return resultado.rows;
    } catch (error) {
        throw error;
    }
};
