import express from 'express'

const app = express()

app.get('/', (req, res) => {

    res.json({
        ok: true,
        msg: 'All fine'
    })
})

app.listen(3001, () => console.log('running on http://localhost:3001/'))