import express from 'express';

var router = express.Router();

router.get('/view', function (req, res) {
    res.send('view');
});

router.get('/edit', function (req, res) {
    res.end('edit');
});

export default router;
