// Matrix Commands (for you to write!)

// You should modify the routines listed below to complete the assignment.
// Feel free to define any classes, global variables and helper routines that
// you need.
var ctm:number[][]


function multiplication(given:number[][]){
    var newCtm:number[][] = []
    for (let index1 = 0; index1 < 4; index1++) {
        for (let index2 = 0; index2 < 4; index2++) {
            var sum:number = ctm[index1][0] * given[0][index2] + ctm[index1][1] * given[1][index2] 
            +ctm[index1][2] * given[2][index2] +ctm[index1][3] * given[3][index2]
            newCtm[index1][index2] = sum
        }
    }
    ctm = newCtm
}

// set the current matrix to the identity
function init()
{
    ctm = [
        [1, 0, 0, 0], 
        [0, 1, 0, 0], 
        [0, 0, 1, 0], 
        [0, 0, 0, 1]
    ]
}

// multiply the current matrix by the translation
function translate(x: number, y: number, z: number)
{
    let trans:number[][] = [
        [1, 0, 0, x],
        [0, 1, 0, y],
        [0, 0, 1, z],
        [0, 0, 0, 1]
    ]
    multiplication(trans)
}

// multiply the current matrix by the scale
function scale(x: number, y: number, z: number)
{
    let trans:number[][] = [
        [x, 0, 0, 0],
        [0, y, 0, 0],
        [0, 0, z, 0],
        [0, 0, 0, 1]
    ]
    multiplication(trans)
}

// multiply the current matrix by the rotation
function rotateX(angle: number)
{
    var radius:number = angle/180*Math.PI
    let trans:number[][] = [
        [1, 0, 0, 0],
        [0, Math.cos(radius), -Math.sin(radius), 0],
        [0, Math.sin(radius), Math.cos(radius), 0],
        [0, 0, 0, 1]
    ]
    multiplication(trans)
}

// multiply the current matrix by the rotation
function rotateY(angle: number)
{
    var radius:number = angle/180*Math.PI
    let trans:number[][] = [
        [Math.cos(radius), 0, Math.sin(radius), 0],
        [0, 1, 0, 0],
        [-Math.sin(radius), 0, Math.cos(radius), 0],
        [0, 0, 0, 1]
    ]
    multiplication(trans)
}

// multiply the current matrix by the rotation
function rotateZ(angle: number)
{
    var radius:number = angle/180*Math.PI
    let trans:number[][] = [
        [Math.cos(radius), -Math.sin(radius), 0, 0],
        [Math.sin(radius), Math.cos(radius),0, 0],
        [0, 0, 1, 0],
        [0, 0, 0, 1]
    ]
    multiplication(trans)
}

// print the current matrix
function print()
{
    // add code here!
    // use `console.log("something")` to print something to the browser console.
    var row:number = ctm.length
    var colum:number = ctm[0].length
    for (let index1 = 0; index1 < row; index1++) {
        let output:any
        for (let index2 = 0; index2 < colum; index2++) {
            const element = ctm[index1][index2];
            output = output + element
            if (index2 + 1 < colum ) {
                output = output + ", "
            }
        }
        console.log(output)
    }
    // end with a blank line!
    console.log("")
}

// return the current matrix as an array of 16 numbers
// in row major order (i.e., elements 0..3 are row 1, 4..7 are row2,
// 8..11 are row3, and 12..15 are row4)
function currentMatrix() : number[]
{
    var output:number[] =[]
    var row:number = ctm.length
    var colum:number = ctm[0].length
    for (let index1 = 0; index1 < row; index1++) {
        for (let index2 = 0; index2 < colum; index2++) {
            const element = ctm[index1][index2];
            output.push(element)
        }
    }
    return output
}

export {init, translate, scale, rotateX, rotateY, rotateZ, print, currentMatrix}
