
// 99 bottles of beer on the wall
// 99 bottles of beer
// Take 1 down, pass it around
// 98 bottles of beer on the wall
// 98 bottles of beer on the wall
// 98 bottles of beer
// Take 2 down, pass them around
// 96 bottles of beer on the wall
// 96 bottles of beer on the wall
// 96 bottles of beer
// Take 3 down, pass them around
// 93 bottles of beer on the wall

var chosen_starting_number = parseInt(prompt("choose a starting number:"));

for (var i = 0; i < chosen_starting_number; i++) {
  console.log(((chosen_starting_number - i)+" of beer on the wall, "+(chosen_starting_number - i)+" bottles of beer, take one down pass it around"));
}

// if ((chosen_starting_number - i)===1) {
//   "1 of beer on the wall 1 bottles of beer, take it down, pass it around"
// }
