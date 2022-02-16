// const path = require('path');
// const fs = require('fs');
//
// const dirMain = path.join(__dirname, 'main');
// const dirOnline = path.join(__dirname, 'main', 'online');
// const dirInPerson = path.join(__dirname, 'main', 'inPerson');
//
// class User {
//     constructor(name, age, city) {
//         this.name = name;
//         this.age = age;
//         this.city = city;
//     }
// }
//
// const onlineUsers = [new User('Andriy', 22, 'Lviv'), new User('Ivan', 21, 'Lviv')];
// const inPersonUsers = [new User('Kolya', 22, 'Lviv'), new User('Yura', 21, 'Lviv')];

// fs.mkdir(dirMain, (err) => {
//     if (err) {
//         console.log(err);
//         throw err;
//     }
//
//     fs.mkdir(dirOnline, (err) => {
//         if (err) {
//             console.log(err);
//             throw err;
//         }
//         for (const user of onlineUsers) {
//             fs.writeFile(path.join(dirOnline, 'onlineUsers.txt'), `NAME: ${user.name}\nAGE: ${user.age}\nCITY: ${user.city}\n\n`, {flag: 'a'}, (err) => {
//                 if (err) {
//                     console.log(err);
//                     throw err;
//                 }
//             })
//         }
//
//     });
//
//     fs.mkdir(dirInPerson, (err) => {
//         if (err) {
//             console.log(err);
//             throw err;
//         }
//         for (const user of inPersonUsers) {
//             fs.writeFile(path.join(dirInPerson, 'personUsers.txt'), `NAME: ${user.name}\nAGE: ${user.age}\nCITY: ${user.city}\n\n`, {flag: 'a'}, (err) => {
//                 if (err) {
//                     console.log(err);
//                     throw err;
//                 }
//             })
//         }
//
//
//     });
//
// });


// const readAndWrite = (pathOne, pathTwo) => {
//     let oneText = '';
//     let twoText = '';
//
//     fs.readFile(pathOne, 'utf8', ((err, data) => {
//         if (err) {
//             console.log(err)
//             throw err;
//         }
//         oneText = data;
//         console.log(oneText);
//
//         fs.writeFile(pathTwo, oneText, err1 => {
//             if (err1) {
//                 console.log(err1);
//                 throw err1;
//             }
//         });
//     }));
//
//     fs.readFile(pathTwo, 'utf8', ((err, data) => {
//         if (err) {
//             console.log(err)
//             throw err;
//         }
//
//         twoText = data;
//         console.log(twoText);
//
//         fs.writeFile(pathOne, twoText, err1 => {
//             if (err1) {
//                 console.log(err1);
//                 throw err1;
//             }
//         });
//     }));
//
// }
//
// readAndWrite(path.join(dirOnline, 'onlineUsers.txt'), path.join(dirInPerson, 'personUsers.txt'));


