// var EMPTY_LOCATION = 'E';
// var WHITE_LOCATION = 'W';
// var BLACK_LOCATION = 'B';

// var tryFunction = function(testFunction, callback) {
//   try {
//     testFunction();
//   }
//   catch(err) {
//     console.log(err);
//   }
// };

// // expect variables that can be converted to strings (should check)
// // var concatStringsFromNumbers = function(num1, num2) {
// //   console.log(num1.toString() + num2.toString());
// //   return num1.toString() + num2.toString();
// // };
// var clearScreen = function() {
//   console.log();
// };

// var checkLocationOnBoard = function(board, location) {
//   // console.log("width: " + board.columnLabels.length);
//   // console.log("height: " + board.rowLabels.length);
//   // console.log('location x: ' + location.x);
//   // console.log('location y: ' + location.y);
//   if( isLessThan(location.x, board.columnLabels.length)
//         && location.x >= 0
//         && isLessThan(location.y, board.rowLabels.length)
//         && location.y >= 0) {
//     // console.log('location is on board!');
//     return true;
//   } else {
//     // console.log('location is OFF board!');
//     return false;
//   }
// };

// var isLessThan = function(a, b) {
//   return a < b ? true : false;
// };

// var getListForAction = function(action) {
//   switch(action) {
//     case 'placePiece':
//       return ['board', 'location', 'piece'];
//       break;
//     default:
//       [];
//       break;
//   }
// };

// var checkPlacePiece = function(board, location, piece) {
// };

// var checkGameRules = function(action, options) {
//   var optionList = getListForAction(action);
// };

// var isValidPlacementLocation = function(board, location, piece) {
//   //check if empty
//   if(checkGameRules('placePiece', {board: board, location: location, piece: piece})) {
//     return true;
//   } else {
//     return false;
//   }
//     //check if it would be killed when placed
//     // if true check if it would kill instead
//   //
// };

// var getColorCode = function(color) {
//   if(color === 'black') {
//     return BLACK_LOCATION;
//   } else if(color === 'white') {
//     return WHITE_LOCATION;
//   } else {
//     return EMPTY_LOCATION;
//   }
// };

// var getColorFromColorCode = function(colorCode) {
//   if(colorCode === 'W') {
//     return 'white';
//   } else if(colorCode === 'B') {
//     return 'black';
//   } else {
//     return 'empty';
//   }
// };

// var setNodeColor = function(node, piece) {
//   node.displayValue = getColorCode(piece.getColor());
//   return node.displayValue;
// };

// var placeAtBoardLocation = function(board, location, piece) {
//   if(checkLocationOnBoard(board, location) &&
//     isValidPlacementLocation(board, location, piece)) {
//       // console.log(location);
//       // console.log(board.nodes[getKeyFromIndexes(board, location.x, location.y)]);
//       setNodeColor(board.nodes[getKeyFromIndexes(board, location.getY, location.getX)], piece);
//   }
// };

// var getKeyFromIndexes = function(board, x, y) {
//   return board.locationKeys[x * board.width + y];
// };

// var drawBoard = function(board) {
//   var row = [];
//   // console.log(board.locationKeys);
//   for(var j = 0; j < board.height; j++) {
//     for(var i = 0; i < board.width; i++) {
//        row.push(board.nodes[getKeyFromIndexes(board, j, i)].displayValue);
//     }
//     console.log(row.join(" "));
//     row = [];
//   }
// };

// var x = 1;
// var myBoard = new Board(10, 10);
// var myPiece = new Piece('white');
// var myLocation = new Location(0, 3);
// drawBoard(myBoard);
// placeAtBoardLocation(myBoard, myLocation, myPiece);
// clearScreen();
// drawBoard(myBoard);