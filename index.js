const fs = require('fs');
const inquirer = require("inquirer");
// const shapes = require('/lib/shapes.js');

const validateInitials = async (input) => {
    if (input.length > 3) {
       return 'to many characters';
    }
    return true;
 };

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
        },
        {
            type: "input",
            message:"what are your initials? (max 3 characters)",
            name: "abc",
            validate: validateInitials
        },

    ]).then((res)=>{

        console.log(res);
    });
