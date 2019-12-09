
let board = ""; //start with empty string
let size = 8; //define size of chessboard
for (let i= 0; i < size; i++) { //outer loop to iterate through chessboard rows
  if (i % 2 == 0) {
        board = " "; //checks even numbers to update board at every other space
      } else {
        board = ""; //checks odd numbers to update board at every other space
      }
	for (let j = 0; j< size; j++) { //inner loop to iterate through chessboard columns
      if (j % 2 == 0) {
        board += "#"; //checks even numbers to add hash at ever other column
      } else {
        board += " "; //checks odd numbers to add space at ever other column
      }
      }
  console.log(board); //prints board to console
  
}

  
}
