const express = require('express');
const uuid = require('uuid');
const app = express();

let users = {};
let finds = [];

const port = process.argv.length > 2 ? process.argv[2] : 4000;

app.use(express.json());

app.use(express.static('public'));

var apiRouter = express.Router();
app.use(`/api`, apiRouter);

//create auth
apiRouter.post('/auth/create', async (req, res) => {
    const user = users[req.body.email];
    if (user) {
        res.status(409).send({ msg: 'Existing user' });
    } else {
        const user = { email: req.body.email, password: req.body.password, token: uuid.v4() };
        users[user.email] = user;

        res.send({ token: user.token });
    }
    });
  
//login - get auth
apiRouter.post('/auth/login', async (req, res) => {
    const user = users[req.body.email];
    if (user) {
        if (req.body.password === user.password) {
        user.token = uuid.v4();
        res.send({ token: user.token });
        return;
        }
    }
    res.status(401).send({ msg: 'Unauthorized' });
    });
  
//logout - delete auth
apiRouter.delete('/auth/logout', (req, res) => {
    const user = Object.values(users).find((u) => u.token === req.body.token);
    if (user) {
        delete user.token;
    }
    res.status(204).end();
    });

//SUBMIT AND BROWSE STUFF HERE
//submit - check with ta on status codes
apiRouter.post('/submit', (req, res) => {
    const user = Object.values(users).find((u) => u.token === req.body.token);

    if (!user) {
        res.status(401).send({ msg: 'Unauthorized: You must log in to submit.' });
        return;
    }

    const newFind = {
        user: user.email,
        title: req.body.title,
        description: req.body.description,
    };

    finds.push(newFind);
    res.status(201).send({ msg: 'Find submitted successfully', find: newFind });
});


//browse
apiRouter.get('/browse', (req, res) => {
    res.send(finds);
});

//default page
app.use((_req, res) => {
    res.sendFile('index.html', { root: 'public' });
  });
  
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });