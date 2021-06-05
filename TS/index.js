const express = require('express')
const session = require('express-session')

const app = express()

app.use(session({
    secret: 'asdasdf',
}))



app.get('/user', async (req, res) => {
    return res.json({ status: 'ok', name: await req.session.name && req.session.name.length ? req.session.name : 'no user found', another: req.session.another })
    // res.end(req.session.name)
})
app.get('/', async (req, res) => {
    req.session.name = "Arun"
    req.session.another = await "Tarun"
    return res.redirect('/user')
})

app.get('/dis', (req, res) => {
    res.end(req.session.name)
    req.session.destroy()
    return res.status(200).redirect('/user')
})




app.listen(5000, (err) => {
    if (err) throw err
    console.log('server runing')
})