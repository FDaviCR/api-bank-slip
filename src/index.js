const express = require('express');
const cors = require('cors');
const routes = require('./routes/index.js');
const port = 8080;

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});