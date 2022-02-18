const  helper = require('./helper')

helper.greeting('Evgeniy');


const fs = require('fs')
const path = require("path");

fs.mkdir(path.join(__dirname, 'main'), (err)=>{
    if (err){
        console.log(err);
    }
})
fs.mkdir(path.join(__dirname, 'main/inPerson'), (err)=>{
    if (err){
        console.log(err);
    }
})


fs.mkdir(path.join(__dirname, 'main/online'), (err)=>{
    if (err){
        console.log(err);
    }
})
fs.writeFileSync(path.join(__dirname,'main','inPerson','inPerson.txt'),'' )
fs.writeFileSync(path.join(__dirname,'main','online','online.txt'),'')


const onlineUsers = [
    {name: 'Amadey', age: 22, city: 'Toronto'},
    {name: 'Duncan', age: 652, city: 'NY'},
    {name: 'Lucas', age: 18, city: 'Chicago'},
];

const inPersonUsers = [
    {name: 'Marta', age: 26, city: 'Lviv'},
    {name: 'Bogdan', age: 32, city: 'Lviv'},
    {name: 'Kira', age: 20, city: 'Ternopil'},
];

onlineUsers.forEach(user => {
    fs.writeFile(path.join(__dirname, 'main', 'online', `${user.name}`),
        `${JSON.stringify(user, null, `\t`)}`, (err => {
            if (err) {
                console.log(err);
                throw err;
            }
        }));
});

inPersonUsers.forEach(user => {
    fs.writeFile(path.join(__dirname, 'main', 'inPerson', `${user.name}`),
        `${JSON.stringify(user, null, `\t`)}`, (err => {
            if (err) {
                console.log(err);
                throw err;
            }
        }));
});

function changeUsersFilesDir(prevFilesDir, nextFilesDir) {
    fs.readdir(path.join(__dirname, 'main', `${prevFilesDir}`), (err, files) => {
        if (err) {
            console.log(err);
            throw err;
        }
        files.forEach(file => {
            fs.rename(path.join(__dirname, 'main', `${prevFilesDir}`, `${file}`),
                path.join(__dirname, 'main', `${nextFilesDir}`, `${file}`), (err => {
                    if (err) {
                        console.log(err);
                        throw err;
                    }
                }));
        });
    });
}

changeUsersFilesDir('inPerson', 'online');
changeUsersFilesDir('online', 'inPerson');
