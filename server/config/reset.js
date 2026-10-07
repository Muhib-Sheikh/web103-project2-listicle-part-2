import { pool } from './database.js'
import roleData from '../data/roles.js'

const createRolesTable = async () => {
    const createTableQuery = `
    DROP TABLE IF EXISTS roles;

    CREATE TABLE roles (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      slug VARCHAR(255) NOT NULL UNIQUE,
      allegiance VARCHAR(50) NOT NULL,
      role_type VARCHAR(50) NOT NULL,
      card_text VARCHAR(255) NOT NULL,
      description TEXT NOT NULL,
      image VARCHAR(255) NOT NULL
    );
  `

    try {
        await pool.query(createTableQuery)
        console.log(' roles table created successfully! ')
    } catch (err) {
        console.error(' error creating roles table ', err)
        throw err
    }
}

const seedRolesTable = async () => {
    await createRolesTable()

    for (const role of roleData) {
        const insertQuery = `
      INSERT INTO roles (
        name,
        slug,
        allegiance,
        role_type,
        card_text,
        description,
        image
      )
      VALUES ($1, $2, $3, $4, $5, $6, $7)
    `

        const values = [
            role.name,
            role.slug,
            role.allegiance,
            role.roleType,
            role.cardText,
            role.description,
            role.image
        ]

        await pool.query(insertQuery, values)

        console.log(`${role.name} added successfully`)
    }

    await pool.end()
}

seedRolesTable().catch((err) => {
    console.error(' error seeding roles table ', err)
    process.exit(1)
})