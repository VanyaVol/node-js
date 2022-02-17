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
    firstName: 'Ivan',
    lastName: 'Voloshyn',
    email: 'vasdggg@mail.ua',
    password: 'asdasdad',
    age: '22',
    city: 'Lviv'
}, {
    firstName: 'Ivan',
    lastName: 'Voloshyn',
    email: 'vaavavvava@mail.ua',
    password: 'asdasdad',
    age: '21',
    city: 'Kiev'
}, {
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
        arrayUsers.push(req.body);
        res.redirect('/users');
    }
});

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

app.get('/user/:userId', (req, res) => {
    const {userId} = req.params;
    res.json(arrayUsers[userId - 1]);
});

app.get('/error', (req, res) => {
    res.render('error');
});

app.use((req, res) => {
    res.render('notFound');
});

app.listen(5005, () => {
    console.log('Start PORT 5000');
})