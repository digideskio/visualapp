import express from 'express';

var router = express.Router();

router.get('/view', function (req, res) {
    res.redirect(process.env.EDITOR_VIEW);
});

router.get('/edit', function (req, res) {
    res.redirect(process.env.EDITOR_EDIT);
});

export default router;
