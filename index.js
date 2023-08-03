const { readFile, writeFile } = require('fs/promises');
const inquirer = require("inquirer");
const Shapes = require('./lib/shapes.js');
const Triangle = require('./lib/shapes.js');

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
            choices: ["Circle","Square","Rectangle","Triangle"]
        },
        {
            type: "input",
            message:"What is your shape color?",
            name: "shapesColor",
        }
    ]).then((res)=>{

        console.log(res);

        const svgdata = generateSVG(res.shapesColor, res.shapes,res.color, res.abc);

        writeFile("./examples/logo.svg", svgdata)
        .then(()=>{
            console.log('Success svg logo created');
        })
        
    });



function generateSVG(s_color, shapeSelected, t_color, initials){

   const svgHeader = new Shapes().renderSVG_Header();
   const svgPaths = new Triangle().renderSVG_Paths(s_color);

   const finalsvg =  `<svg ${svgHeader}>
   ${svgPaths}
   <text x="150" y="125" font-size="60" text-anchor="middle" fill="${t_color}">${initials}</text></svg>`
    
   return finalsvg;
}