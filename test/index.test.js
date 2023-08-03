
const { Shapes, Circle, Square, Rectangle, Triangle } = require('../lib/shapes.js');

describe("Shapes", ()=>{
    describe('triangles', ()=>{
        it('make triangle shapes with the color from user', ()=>{
            const shape = new Triangle("blue").renderSVG_Triangle();
            expect(shape).toEqual(`<g id="Group_1" data-name="Group 1" transform="translate(0 0)" fill="blue"><path id="Polygon_1" data-name="Polygon 1" d="M96,0l96,168H0Z" transform="translate(54 16)"/><path id="Polygon_2" data-name="Polygon 2" d="M64,0l64,110H0Z" transform="translate(138 126) rotate(180)"/><path id="Polygon_3" data-name="Polygon 3" d="M64,0l64,110H0Z" transform="translate(290 126) rotate(180)"/></g>`);
        })
    })
});
