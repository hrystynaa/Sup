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
    db.query(`SELECT * FROM team WHERE name="${name}"`, (err, result) =>{
        if (err) return res.status(500).json(err);
        if (result.length !== 0) return res.status(406).json('There is already team with this name');
        if (!name && !icon && !memberList) return res.status(400).json({ 'message': 'Name, icon and memberList required' });
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
    });
};

const updateOneTeam = (req, res) => {
    const { name, icon, memberList, project_id, member_id } = req.body;
    if (!name && !memberList && !icon && !project_id && !member_id) return res.status(204).json({ 'message': 'Name, icon or memberList required' });
    
    db.query(`SELECT * FROM team WHERE id=${req.params.id}`, (err, result) =>{
        if (err) return res.status(500).json(err);
        if (result.length === 0) return res.status(404).json('No team with this id');
    
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
    if (project_id) {
        query = `UPDATE team SET project_id = '${project_id}' WHERE id = '${req.params.id}'`;
        db.query(query, (err) => { if (err) return res.status(500).json(err) });
    }
    if (member_id) {
        query = `UPDATE team SET member_id = '${member_id}' WHERE id = '${req.params.id}'`;
        db.query(query, (err) => { if (err) return res.status(500).json(err) });
    }
    res.status(200).json({ 'message': 'Team updated' });
});
};

const deleteOneTeam = (req, res) => {
    const query = `DELETE FROM team WHERE id=${req.params.id}`;
    db.query(`SELECT * FROM team WHERE id=${req.params.id}`, (err, result) => {
        if (err) return res.status(500).json(err);
        if (result.length === 0) return res.status(404).json('No team with this id');
        db.query(query, (err, result) => {
            if (err) return res.status(500).json(err);
            res.status(200).json({ 'message': 'Team deleted' });
        });
    });
};

module.exports = { 
    getAllTeams,
    getOneTeam,
    createNewTeam,
    updateOneTeam,
    deleteOneTeam
};