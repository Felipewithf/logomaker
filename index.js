const { readFile, writeFile } = require('fs/promises');
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
            type: "input",
            message:"what are your initials? (max 3 characters)",
            name: "abc",
            validate: validateInitials
        },
        {
            type: "input",
            message:"What is your text color?",
            name: "color",
        },
        {
            type: "list",
            message:"What is your favorite shape?",
            name: "shapes",
            choices: ["circles","squares","rectangles","triangles"]
        },
        {
            type: "input",
            message:"What is your shape color?",
            name: "shapesColor",
        },
        
        

    ]).then((res)=>{

        console.log(res);

        const svgdata = generateSVG();

        writeFile("./examples/logo.svg", svgdata)
        .then(()=>{
            console.log('Success svg logo created');
        })
        
    });



function generateSVG(){
   const finalsvg =  `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
   <polygon points="150, 18 244, 182 56, 182" fill="Blue" />
   <text x="150" y="125" font-size="60" text-anchor="middle" fill="Yellow">ABC</text></svg>`
    return finalsvg;
}