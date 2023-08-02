const fs = require('fs');
const inquirer = require("inquirer");
// const shapes = require('/lib/shapes.js');


inquirer
    .prompt([
        {
            type: "list",
            message:"What is your favorite shape?",
            name: "shapes",
            choices: ["circle","square","rectangule","triangle"]
        },
        {
            type: "list",
            message:"What is your color?",
            name: "color",
            choices: ["blue","red","yellow","green"]
        }
    ]).then((res)=>{

        console.log(res);
    });
