const { readFile, writeFile } = require('fs/promises');
const inquirer = require("inquirer");
const { Shapes, Triangle, Rectangle } = require('./lib/shapes.js');

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
            message: "what are your initials? (max 3 characters)",
            name: "abc",
            validate: validateInitials
        },
        {
            type: "input",
            message: "What is your text color?",
            name: "color",
        },
        {
            type: "list",
            message: "What is your favorite shape?",
            name: "shapes",
            choices: ["Circles", "Squares", "Rectangles", "Triangles", "Any"]
        },
        {
            type: "input",
            message: "What is your shape color?",
            name: "shapesColor",
        }
    ]).then((res) => {

        console.log(res);

        const svgdata = generateSVG(res.shapesColor, res.shapes, res.color, res.abc);

        writeFile("./examples/logo.svg", svgdata)
            .then(() => {
                console.log('Success svg logo created');
            })

    });



function generateSVG(s_color, shapeSelected, t_color, initials) {

    const svgHeader = new Shapes().renderSVG_Header();
    let svgPaths = "";
    let t_Size = 0;
    let t_Height = 0;

    switch (shapeSelected) {
        case "Circles":

            break;
        case "Squares":

            break;
        case "Rectangles":
            svgPaths = new Rectangle(s_color).renderSVG_Rectangle();
            t_Size = 72;
            t_Height = 125;
            break;
        case "Triangles":
            svgPaths = new Triangle(s_color).renderSVG_Triangle();
            t_Size = 120;
            t_Height = 140;
            break;
        default:
            svgPaths = new Triangle(s_color).renderSVG_Triangle();
            t_Size = 120;
            t_Height = 140;
    }




    const finalsvg = `<svg ${svgHeader}>
   ${svgPaths}
   <text x="150" y="125" font-size="${t_Size}" text-anchor="middle" fill="${t_color}">${initials.toUpperCase()}</text></svg>`

    return finalsvg;
}