const path = require('path');
const fs = require('fs');

// Завдання на практику
//
// 1. Спробуйте створити якийсь файл txt, прочитайте з нього дані і одразу, дані які ви отримали запишіть їх в інший файл,
// в вас вийде невеликий callback hell, пізніше я вам покажу як можна це обійти, але поки зробіть так
//

// const fileTxt = path.join(__dirname, 'file.txt');
// fs.writeFile(fileTxt, 'SOME DATA Some data some data TEXT Text text DATA Data data', (err) => {
//     if (err) {
//         console.log(err);
//         throw err;
//     }
//
//     fs.readFile(fileTxt, 'utf8', ((err1, data) => {
//         if (err1) {
//             console.log(err1);
//             throw err1;
//         }
//
//         fs.writeFile(path.join(__dirname, (Math.random()) + '.txt'), data, (err2) => {
//             if (err2) {
//                 console.log(err2);
//                 throw err2;
//             }
//         });
//     }))
// });

//
// 2. Створіть файл ( можете вручну ) заповніть його якимись даними
// Прочитайте його, скопіюйте всі дані з нього і перенесіть їх в нову папку та файл в ній, старий файл видаліть
// після того як все завершиться. Також вийде callback hell
//

// const text = 'TEXT_TEXT_TEXT_TEXT_\nTEXT_TEXT_TEXT_TEXT_\nTEXT_TEXT_TEXT_TEXT_\nTEXT_TEXT_TEXT_TEXT_\nTEXT_TEXT_TEXT_TEXT_\n';
//
// fs.writeFile(path.join(__dirname, 'some_text.txt'), text, (err) => {
//     if (err) {
//         console.log(err);
//         throw err;
//     }
//
//     fs.readFile(path.join(__dirname, 'some_text.txt'), 'utf8', (err1, data) => {
//         if (err1) {
//             console.log(err1);
//             throw err1;
//         }
//
//         fs.mkdir(path.join(__dirname, 'someDIR'), (err2) => {
//             if (err2) {
//                 console.log(err2);
//                 throw err2;
//             }
//
//             fs.writeFile(path.join(__dirname, 'someDIR', 'some_text.txt'), data, (err3) => {
//                 if (err3) {
//                     console.log(err3);
//                     throw err3;
//                 }
//
//                 fs.unlink(path.join(__dirname, 'some_text.txt'), (err4) => {
//                     if (err4) {
//                         console.log(err4);
//                         throw err4;
//                     }
//                 });
//             });
//         });
//     });
// });

//
// 3. Створіть папку (можете вручну) напишіть скріпт який створить в ній якись дані (можуть бути нові папки і файли(в файли
// запишіть якусь дату) ) і напишіть функцію яка буде зчитувати папку і перевіряти якщо дані які в ній лежать - це файли
// тоді вам потрібно їх очистити, але не видаляти, якщо дані - це папки, вам потрібно їх перейменувати і додати до назви префікс _new
//

// fs.mkdir(path.join(__dirname, 'workDirectory'), (err) => {
//     if (err) {
//         console.log(err);
//         throw err;
//     }
//
//     for (let i = 0; i < 5; i++) {
//         const randomName = Math.floor(Math.random() * 1000);
//
//         fs.mkdir(path.join(__dirname, 'workDirectory', `${randomName}`), (err1) => {
//             if (err1) {
//                 console.log(err1);
//                 throw err1;
//             }
//         });
//
//         fs.writeFile(path.join(__dirname, 'workDirectory', `${Math.floor(Math.random() * 1000)}.txt`), `${Math.random()}`, (err1) => {
//             if (err1) {
//                 console.log(err1);
//                 throw err1;
//             }
//         });
//     }
// });


// const foo = (workDirectory) => {
//     fs.readdir(path.join(__dirname, workDirectory), 'utf8', (err, files) => {
//         if (err) {
//             console.log(err);
//             throw err
//         }
//
//         for (const oneFile of files) {
//             fs.readFile(path.join(__dirname, workDirectory, `${oneFile}`), 'utf8', (err1, data) => {
//                 if (data) {
//                     fs.writeFile(path.join(__dirname, workDirectory, `${oneFile}`), '', (err2) => {
//                         if (err2) {
//                             console.log(err2);
//                             throw err2;
//                         }
//                     })
//                 }
//
//                 if (data === undefined) {
//                     fs.rename(path.join(__dirname, workDirectory, `${oneFile}`), path.join(__dirname, 'workDirectory', `${oneFile}_new`), (err1) => {
//                         if (err1) {
//                             console.log(err1);
//                             throw err1;
//                         }
//                     });
//                 }
//             });
//         }
//     });
// }
//
// foo('workDirectory');