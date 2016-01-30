var fs = require('fs');
var Vector3 = require('vector-3');

var arrayOfVertices = fs.readFileSync('Vertices.txt').toString().split("\r\n");

var i=1;
V = [];

for (i in arrayOfVertices) {
    var B = arrayOfVertices[i].trim().split(" ",3);
    V[i] = new Vector3(parseFloat(B[0]),parseFloat(B[1]),parseFloat(B[2]));
}
var arrayOfFaces = fs.readFileSync('Faces.txt').toString().split("\r\n");

var j=1;
s = new Array();
var surfaceArea = 0;
for (j in arrayOfFaces) {
    var D = arrayOfFaces[j].trim().split(" ", 3);
    if (D.length == 3) {
        var vec0 = V[parseInt(D[0])-1];
        var vec1 = V[parseInt(D[1])-1];
        var vec2 = V[parseInt(D[2])-1];
        var RES1 = new Vector3(vec1).substract(vec0);
        var RES2 = new Vector3(vec2).substract(vec0);
        var cr = (RES1).cross(RES2);
        s[j] = 0.5 * cr.length();
        if (!isNaN(s[j]))
            surfaceArea = surfaceArea + s[j];}
}
console.log(surfaceArea);