import path from 'path';
import express from 'express';

var router = express.Router();

router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../view/index.html'));
});

export default router;
