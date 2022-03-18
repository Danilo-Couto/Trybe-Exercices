const express = require("express");
const router = express.router();
//const router = require('express').Router(); // assim no GABARITO
const { readFile, writeFile } = require('../helpers/readWriteFile');
const validations = require.resolve('../middlewares/validators.js;');
const PATH_FILE = './teams.json';

router.get('/', async(_req, res) => {
  const teams = await readFile(PATH_FILE) || [];
    res.status(200).json({teams});
});

router.post('/', validations.isValid, function (req, res){
    const newTeam = {
        ...req.body,
        initials: req.body.initials.tuUpperCase()
    }
    const team = await writeFile(PATH_FILE, newTeam);

    return res.status(200).json(team);
});

module.exports = router;