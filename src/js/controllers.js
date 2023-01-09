const db = require('./config');


const getAllTeams = (req, res) => {
    const query = 'SELECT * FROM team';
    db.query(query, (err, result) => {
        if (err) return res.status(500).json(err);
        res.status(200).json(result);
    });
};

const getOneTeam = (req, res) => {
    const query = `SELECT * FROM team WHERE id=${req.params.id}`;
    db.query(query, (err, result) => {
        if (err) return res.status(500).json(err);
        if (result.length === 0) return res.sendStatus(404);
        res.status(200).json(result);
    });
};

const createNewTeam = (req, res) => {
    const { name, icon, memberList, project_id, member_id } = req.body;

    if (!name) return res.status(400).json({ 'message': 'Name, icon and memberList required' });
    const query = "INSERT INTO team SET ?";
    const team = {
     name,
     icon,
     memberList,
     project_id: project_id || 1,
     member_id: member_id || 1,
    };
  db.query(query, team, (err) => {
    if (err) return res.status(500).json(err);
    res.status(201).json({ message: "New team created" });
  });
};

const updateOneTeam = (req, res) => {
    const { name, icon, memberList } = req.body;
    if (!name && !memberList && !icon) return res.status(204).json({ 'message': 'Name, icon or memberList required' });

    let query = '';
    if (name) {
        query = `UPDATE team SET name = '${name}' WHERE id = '${req.params.id}'`;
        db.query(query, (err) => { if (err) return res.status(500).json(err) });
    }
    if (memberList) {
        query = `UPDATE team SET memberList = '${memberList}' WHERE id = '${req.params.id}'`;
        db.query(query, (err) => { if (err) return res.status(500).json(err) });
    }
    if (icon) {
        query = `UPDATE team SET icon = '${icon}' WHERE id = '${req.params.id}'`;
        db.query(query, (err) => { if (err) return res.status(500).json(err) });
    }

    res.status(200).json({ 'message': 'Team updated' });
};

const deleteOneTeam = (req, res) => {
    const query = `DELETE FROM team WHERE id=${req.params.id}`;
    db.query(query, (err, result) => {
        if (err) return res.status(500).json(err);
        res.status(200).json({ 'message': 'Team deleted' });
    });
};

module.exports = { 
    getAllTeams,
    getOneTeam,
    createNewTeam,
    updateOneTeam,
    deleteOneTeam
};