
class Shapes {

    constructor(color){
        this.color = color;
       }
       //set width of 300 and height of 200
    renderSVG_Header(){
        return `version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"`;
}
}

class Triangle extends Shapes {

    constructor(color){
        super(color);
    }
    renderSVG_Triangle(){
        const color = this.color;
        return `<g id="Group_1" data-name="Group 1" transform="translate(0 0)" fill="${color}">
        <path id="Polygon_1" data-name="Polygon 1" d="M96,0l96,168H0Z" transform="translate(54 16)"/>
        <path id="Polygon_2" data-name="Polygon 2" d="M64,0l64,110H0Z" transform="translate(138 126) rotate(180)"/>
        <path id="Polygon_3" data-name="Polygon 3" d="M64,0l64,110H0Z" transform="translate(290 126) rotate(180)"/>
        </g>`;
    }

}

class Rectangle extends Shapes {

    constructor(color){
        super(color);
    }
    renderSVG_Rectangle(){
        const color = this.color;
        return `<path id="Path_1" data-name="Path 1" d="M3,147.4H234.383V173.11H3ZM3,57.418H234.383v64.273H3ZM3,6H234.383V31.709H3Z" 
        transform="translate(31.309 10.445)" fill="${color}"/>`;
    }

}


module.exports = { Shapes, Triangle, Rectangle };