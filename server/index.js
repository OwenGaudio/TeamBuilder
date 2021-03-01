const express = require('express')
const ctrl = require('./controller.js')

const app = express();

app.use(express.json());

app.get('/api/heroes', ctrl.getHeroes)
app.get('/api/team', ctrl.getTeam)
app.put('api/heroes/:id', ctrl.addHero)
app.delete('api/team', ctrl.deleteTeamMate)

const port = 4000;
app.listen(port, () => console.log(`Listening on port ${port}`));