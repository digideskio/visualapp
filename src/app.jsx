import express from 'express';
import auth from './helper/auth';

import home from './route/home';
import frontend from './route/frontend';
import page from './route/page';

var app = express();

app.set('devel', true);

// app.use(auth);
app.use('/', home);
app.use('/frontend', frontend);
app.use('/page', page);

app.listen(process.env.PORT, function () {
    console.log('Example app listening on port ' + process.env.PORT);
});
