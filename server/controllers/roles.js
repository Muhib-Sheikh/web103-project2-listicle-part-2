import { pool } from '../config/database.js'

const getRoles = async (req, res) => {
    try {
        const results = await pool.query(`
      SELECT
        id,
        name,
        slug,
        allegiance,
        role_type AS "roleType",
        card_text AS "cardText",
        description,
        image
      FROM roles
      ORDER BY id ASC
    `)

        res.status(200).json(results.rows)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

export default {
    getRoles
}