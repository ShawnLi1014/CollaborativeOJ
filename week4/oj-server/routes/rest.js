const express = require("express");
const router = express.Router();
const problemService = require("../services/problemService");
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
var Client = require('node-rest-client').Client;
var client = new Client();

EXECUTOR_SERVER_URL = 'http://localhost:5000/build_and_run';

client.registerMethod("build_and_run", EXECUTOR_SERVER_URL, "POST");

router.get('/problems', (req, res) => {
    problemService.getProblems()
        .then(problems => res.json(problems));
});

router.get('/problems/:id', (req, res) => {
    var id = req.params.id;
    problemService.getProblem(+id)
        .then(problem => res.json(problem));
});

router.post('/problems', jsonParser, (req, res) => {
    problemService.addProblem(req.body)
        .then(function (problem) {
            res.json(problem);
        }, function (error) {
            res.status(400).send("Problem name already exists!")
        });
});

router.post('/build_and_run', jsonParser, (req, res) => {
    const userCode = req.body.user_code;
    const lang = req.body.lang;

    console.log(lang + ':' + userCode);
    client.methods.build_and_run(
        {
            data: { code: userCode, lang: lang},
            headers: {'Content-Type': 'application/json'}
        }, (data, response) => {
            console.log('Received response from execution server: ' + response);
            const text = 'Build output:' + data['build'] + '\n' +'Execute output:' + data['run'];

            data['text'] = text;
            res.json(data);
        }
    )
});

module.exports = router;
