
class Shapes {

    constructor(color){
        this.color = color;
       }
       //set width of 300 and height of 200
    renderSVG_Header(){
        return `version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"`;
}
}



class Circle extends Shapes {

    constructor(color){
        super(color);
    }
    renderSVG_Circle(){
        const color = this.color;
        return `<g id="Group_1" data-name="Group 1" transform="translate(70 10)" fill="${color}">
        <circle id="Ellipse_1" data-name="Ellipse 1" cx="78" cy="78" r="78" transform="translate(0.764 4.101)"/>
        <path id="Path_1" data-name="Path 1" d="M17,4.26V24.713A58.626,58.626,0,0,1,56.145,80.006,58.626,58.626,0,0,1,17,135.3v20.453A78.234,78.234,0,0,0,75.718,80.006,78.234,78.234,0,0,0,17,4.26Z" transform="translate(140.732 2.219)"/>
        <path id="Path_2" data-name="Path 2" d="M17,4.26V24.713A58.626,58.626,0,0,1,56.145,80.006,58.626,58.626,0,0,1,17,135.3v20.453A78.234,78.234,0,0,0,75.718,80.006,78.234,78.234,0,0,0,17,4.26Z" transform="translate(16.797 162.23) rotate(180)"/>
        </g>`;
    }

}

class Square extends Shapes {

    constructor(color){
        super(color);
    }
    renderSVG_Squares(){
        const color = this.color;
        return `<g id="Group_1" data-name="Group 1" transform="translate(0 0)" fill="${color}">
        <rect id="Rectangle_1" data-name="Rectangle 1" width="76" height="76" transform="translate(23 19)"/>
        <rect id="Rectangle_6" data-name="Rectangle 6" width="76" height="76" transform="translate(23 106)"/>
        <rect id="Rectangle_2" data-name="Rectangle 2" width="76" height="76" transform="translate(113 19)"/>
        <rect id="Rectangle_4" data-name="Rectangle 4" width="76" height="76" transform="translate(113 106)"/>
        <rect id="Rectangle_3" data-name="Rectangle 3" width="76" height="76" transform="translate(202 19)"/>
        <rect id="Rectangle_5" data-name="Rectangle 5" width="76" height="76" transform="translate(202 106)"/></g>`;
    }

}

class Rectangle extends Shapes {

    constructor(color){
        super(color);
    }
    renderSVG_Rectangle(){
        const color = this.color;
        return `<path id="Path_1" data-name="Path 1" d="M3,147.4H234.383V173.11H3ZM3,57.418H234.383v64.273H3ZM3,6H234.383V31.709H3Z" transform="translate(31.309 10.445)" fill="${color}"/>`;
    }

}

class Triangle extends Shapes {

    constructor(color){
        super(color);
    }
    renderSVG_Triangle(){
        const color = this.color;
        return `<g id="Group_1" data-name="Group 1" transform="translate(0 0)" fill="${color}"><path id="Polygon_1" data-name="Polygon 1" d="M96,0l96,168H0Z" transform="translate(54 16)"/><path id="Polygon_2" data-name="Polygon 2" d="M64,0l64,110H0Z" transform="translate(138 126) rotate(180)"/><path id="Polygon_3" data-name="Polygon 3" d="M64,0l64,110H0Z" transform="translate(290 126) rotate(180)"/></g>`;
    }

}



module.exports = { Shapes, Circle, Square, Rectangle, Triangle };