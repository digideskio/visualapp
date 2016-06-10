import basicAuth from 'basic-auth';
import db from '../db';

function auth(req, res, next)
{
    var user = basicAuth(req);

    if (!user || user.name !== process.env.AUTH_USER || user.pass !== process.env.AUTH_PASS) {
        return res.set('WWW-Authenticate', 'Basic realm=visual').sendStatus(401);
    };

    db.from('user').where({id: 1}).first().then(function (row) {
        req.user = row;
        next();
    });
}

export default auth;
