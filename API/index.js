const express = require ("express");
const config = require("./pkg/config")

const api = express();

api.use(express.json());

api.listen(config.get('service').port, err => {
    if (err) return console.log(err);
    return console.log(`Server started on port ${config.get('service').port}`);
});