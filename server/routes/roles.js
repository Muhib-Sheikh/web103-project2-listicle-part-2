import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import roleData from '../data/roles.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const router = express.Router()

router.get('/', (req, res) => {
    res.status(200).json(roleData)
})

router.get('/:roleSlug', (req, res) => {
    res.status(200).sendFile(
        path.resolve(__dirname, '../public/role.html')
    )
})

export default router