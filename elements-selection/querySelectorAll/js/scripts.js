let elements;

elements = document.querySelectorAll(".one");
// output all in list format
console.log(elements);
// output all in element format...
elements.forEach(el => console.log(el));

elements = document.querySelectorAll("#study");
elements.forEach(el => console.log(el));

// I can use forEach only work with node list, returned by
// querySelectorAll.
// When i use HTML Elements, this is not possible.