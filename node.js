// var Node = function(location, displayValue) {
//   this.location = location;
//   this.neighbors = [];
//   this.displayValue = displayValue;
// };

// Node.prototype.findNeighbors = function(nodes) {
//   var neighbors = [];
//   for(var i = 0; i < nodes.length; i++) {
//     if( (location.y === nodes[i].getYLocation() &&
//           (location.x + 1 === nodes[i].getXLocation() ||
//           location.x - 1 === nodes[i].getXLocation())) ||
//         (location.x === nodes[i].getXLocation() &&
//           (location.y + 1 === nodes[i].getYLocation() ||
//           location.y - 1 === nodes[i].getYLocation()))) {
//       neighbors.push(nodes[i]);
//   }
//   return neighbors;
// };

// Node.prototype.addNeighbors = function(nodes) {
//   for(var i = 0; i < nodes.length; i++) {
//     this.__addNeighbor(node[i]);
//   }
//   return true;
// };

// Node.prototype.__addNeighbor = function(node) {
//   this.neighbors.push(node);
//   return true;
// };

// Node.prototype.getNeighbors = function() {
//   return this.neighbors;
// };

// Node.prototype.getXLocation = function() {
//   return this.location.getX();
// };

// Node.prototype.getYLocation = function() {
//   return this.location.getY();
// };