// Function to find the area of a rectangle
function findArea(width, height) {
   return width * height;
}
// Function to find the perimeter of a rectangle
function findPerimeter(width, height) {
   return 2 * (width + height);
}

// Input for width and height
var width = 5;
var height = 10;

// Calculate the area and perimeter
var area = findArea(width, height);
var perimeter = findPerimeter(width, height);

// Output the results
console.log("Area of rectangle: " + area);
console.log("Perimeter of rectangle: " + perimeter);