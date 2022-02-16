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
fs.writeFileSync(path.join(__dirname,'main','inPerson','inPerson.txt'),'data',{})
fs.writeFileSync(path.join(__dirname,'main','online','online.txt'),'data',{})

data = onlineUsers;
let onlineUsers = ['name', 'age', 'city'];
// let inPersonUsers = [{ name: "Andrii", age: 22, city: "Lviv" }]

