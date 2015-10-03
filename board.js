// require('./location.js');
// require('./node.js');
// var Board = function(width, height) {
//   var labels = this.generateLabels(width, height);
//   this.rowLabels = labels['rowLabels'];
//   this.columnLabels = labels['columnLabels'];
//   this.width = width;
//   this.height = height;
//   this.locationKeys = this.generateLocationKeys(this.rowLabels, this.columnLabels);
//   this.nodes = this.generateBoard(this.locationKeys);
// };

// Board.prototype.generateLocationKeys = function(rows, columns) {
//   var keys = [];
//   for(var i = 0; i < columns.length; i++) {
//     for (var j = 0; j < rows.length; j++) {
//       // console.log("i: " + columns[i] + " j: " + rows[j]);
//       keys.push(columns[i].concat(rows[j]));
//     }
//   }
//   return keys;
// };

// // Seperate into conversion to string then loop through the arrays of values
// // Basically save the loop from converting to string repeatedly
// Board.prototype.generateBoard = function(keys) {
//   var locations = {};
//   var location;
//   for(var i = 0; i < keys.length; i++) {
//     location = new Location(Math.floor(i / this.width), Math.floor(i % this.width));
//     locations[keys[i]] = new Node(location, EMPTY_LOCATION);
//   }
//   return locations;
// };

// Board.prototype.generateLabels = function(width, height) {
//   // console.log("test of labels in outside function");
//   var rows = [];
//   var columns = [];
//   var locationLabels = {
//     'rowLabels': rows,
//     'columnLabels': columns
//   };

//   for(var i = 1; i <= width; i++) {
//     locationLabels['rowLabels'].push(i.toString());
//   }
//   for (var j = 1; j <= height; j++) {
//     locationLabels['columnLabels'].push(j.toString());
//   }
//   return locationLabels;
// };

// Board.prototype.getLocationInformation = function(key) {
//   return this.locations[key];
// };

// Board.prototype.setLocationInformation = function(key, value) {
//   this.locations[key] = value;
// };