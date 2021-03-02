const express = require('express')
const ctrl = require('./controller.js')

const app = express();

app.use(express.json());

app.get('/api/heroes', ctrl.getHeroes)
app.get('/api/team', ctrl.getTeam)
app.post('/api/team/:id', ctrl.addHero)
app.delete('/api/team/:id', ctrl.deleteTeammate)

const port = 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));