import _ from 'lodash';
import express from 'express';
import bodyParser from 'body-parser';

var router = express.Router(),
    jsonParser = bodyParser.json();

router.get('/pages', jsonParser, function (req, res) {
    res.json([]);
});

export default router;
