const db = require('./config');
const express = require('express');
const app = express();

const port = 3500;

app.use(express.json());
app.use('/', require('./routes'));

db.connect(() => app.listen(port, () => console.log(`App is running on port ${port}`)));