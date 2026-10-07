import express from 'express'
import rolesRouter from './routes/roles.js'

const app = express()

app.use(express.static('./public'))

app.use('/roles', rolesRouter)

app.use((req, res) => {
    res.status(404).sendFile('404.html', { root: './public' })
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`)
})