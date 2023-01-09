const express = require('express');
const router = express.Router();
const { getAllTeams, getOneTeam, createNewTeam, updateOneTeam, deleteOneTeam } = require('./controllers');

router.get('/', getAllTeams)
      .get('/:id', getOneTeam)
      .post('/', createNewTeam)
      .put('/:id', updateOneTeam)
      .delete('/:id', deleteOneTeam);

module.exports = router;