
class Shapes{

    constructor(color){
        this.color = color;
       }
       //set width of 300 and height of 200
    renderSVG_Header(){
        return `version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"`;
}
}

class Triangle extends Shapes{

    constructor(color){
        super(color);
    }
    renderSVG_Paths(color){
        return `<g id="Group_1" data-name="Group 1" transform="translate(10 16)" fill="${color}">
        <path id="Polygon_1" data-name="Polygon 1" d="M96,0l96,168H0Z" transform="translate(54 16)"/>
        <path id="Polygon_2" data-name="Polygon 2" d="M64,0l64,110H0Z" transform="translate(138 126) rotate(180)"/>
        <path id="Polygon_3" data-name="Polygon 3" d="M64,0l64,110H0Z" transform="translate(290 126) rotate(180)"/>
        </g>`;
    }

}


module.exports = Shapes;
module.exports = Triangle;