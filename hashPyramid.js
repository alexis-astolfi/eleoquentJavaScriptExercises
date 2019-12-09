/*
write a loop that prints out hash pyramid to console
#
##
###
####
#####
######
#######
*/

let triangle = "#";  /*start with empty string*/
for (let counter = 1; counter <= 7; counter ++) { /*count up to seven*/
  triangle += "#"; /*add one has per line until for loop iterator reaches 7*/
  console.log(triangle); /*print out completed pyramid to console*/
}