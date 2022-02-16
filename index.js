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


