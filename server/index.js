const express = require('express')
const ctrl = require('./controller.js')
const path = require('path')

const app = express();

app.use(express.json());

app.get('/api/heroes', ctrl.getHeroes)
app.get('/api/team', ctrl.getTeam)
app.post('/api/team/:id', ctrl.addHero)
app.delete('/api/team/:id', ctrl.deleteTeammate)
app.post('/api/text',ctrl.textTeam)
app.post('/api/email',ctrl.emailNewsletter)

app.use(express.static(__dirname + '/../build'))

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build/index.html'))
})

const port = 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));