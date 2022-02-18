const express = require('express');
const path = require('path');
const {engine} = require('express-handlebars');

const app = new express;

app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.use(express.static(path.join(__dirname, 'static')));
app.set('view engine', '.hbs');
app.engine('.hbs', engine({defaultLayout: false}));
app.set('views', path.join(__dirname, 'static'));

let arrayUsers = [{
    id: 1, firstName: 'Ivan', lastName: 'Voloshyn', email: 'v@mail.ua', password: '1204', age: '22', city: 'Lviv'
}, {
    id: 2,
    firstName: 'Ivan',
    lastName: 'Voloshyn',
    email: 'vaavavvava@mail.ua',
    password: 'asdasdad',
    age: '21',
    city: 'Kiev'
}, {
    id: 3,
    firstName: 'Ivan',
    lastName: 'Voloshyn',
    email: 'vaavavvavaddd@mail.ua',
    password: 'asdasdad',
    age: '22',
    city: 'Kiev'
}];

app.get('/login', (req, res) => {
    res.render('login');
})

app.post('/login', (req, res) => {
    let isEmail = false;

    for (const user of arrayUsers) {
        if (user.email === req.body.email) {
            isEmail = true;
            res.redirect('error');
            break;
        }
    }

    if (!isEmail) {
        const user = {...req.body, id: arrayUsers.length + 1};
        arrayUsers.push(user);
        res.redirect('/users');
    }
});

app.get('/signin', (req, res) => {
    res.render('signIn');
});

app.post('/signin', (req, res) => {
    const {email, password} = req.body;

    for (let i = 0; i < arrayUsers.length; i++) {
        if ((arrayUsers[i].email === email) && (arrayUsers[i].password === password)) {
            res.redirect(`/user/${i + 1}`);
        }
    }
})

app.get('/users', (req, res) => {
    const {age = '', city = ''} = req.query;
    let users = arrayUsers;

    if (age) {
        users = users.filter(value => value.age === age);
    }

    if (city) {
        users = users.filter(value => value.city === city);
    }

    res.render('users', {users});
});

app.post('/user/:userId', (req, res) => {
    const {userId} = req.params;

    delete arrayUsers[userId - 1];

    res.redirect('/users');
});

app.get('/user/:userId', (req, res) => {
    const {userId} = req.params;
    const user = arrayUsers[userId - 1];

    res.render('user', {user});
});

app.get('/error', (req, res) => {
    res.render('error');
});

app.use((req, res) => {
    res.render('notFound');
});

app.listen(5000, () => {
    console.log('Start PORT 5000');
})