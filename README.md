# 17-spring-test2-cullen-webster

## Problem 1
The function takes the array 'colors' and utilizes the ramda 'reverse' function
to return a new array in reverse order. To run this code just put 'node 1.js'
into your terminal and you'll see this result:

"[ 'purple', 'gold', 'orange', 'navy', 'blue', 'green', 'black' ]"


## Problem 2
The first function uses the ramda function 'toUpper' to change the letters in the array to upper-case and then the second function maps over the array to return a new one in which the letters have been transformed. To run this code just put 'node 2.js' into your terminal and you'll see this result:

"[ 'BLACK', 'GREEN', 'BLUE', 'NAVY', 'ORANGE', 'GOLD', 'PURPLE' ]"

## Problem 3
I used the innerHTML functionality to insert each item in my array of colors into the HTML page. I used a string template and mapped over the array for each item and inserted the corresponding color for each item. You can see two objects in the string template, one correlating to the title and the other inserting the background color into each tile. For fun-sies I also made the tiles float.

## Problem 4
For this one, I used a couple of built in JS functions to 1) convert the string to lower case, 2) split it up at each space, and 3) insert a dash in each space. To pass the string in I just added a parameter that was equal to my string value. The input is:

"Do the best you can until you know better. Then, when you know better, do better"

And the output (found by putting 'node 4.js' into the terminal):

"do-the-best-you-can-until-you-know-better.-then,-when-you-know-better,-do-better"

## Problem 5
For this one I just made a function that selects the substring value of '0' and then it will display the characters up to whatever number you input into the call of the function.

## Problem 6
