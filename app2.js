// Question # 1
var num= prompt("Write positive integer number: ");
document.write("Number: ", num);
document.write("<br>Roundoff Value: ", Math.round(num));
document.write("<br>Floor Value: ", Math.floor(num));
document.write("<br>Ceil Value: ", Math.ceil(num));

// Question # 2
var num= prompt("Write negative integer number: ");
document.write("<br>Number: ", num);
document.write("<br>Roundoff Value: ", Math.round(num));
document.write("<br>Floor Value: ", Math.floor(num));
document.write("<br>Ceil Value: ", Math.ceil(num));

// Question # 3
var num= -4;
document.write("<br>Number: ", num);
document.write("<br>The Absoulte value of -4 is: ", Math.abs(num));

// Question # 4
var dice = Math.floor((Math.random() * 6) + 1);
document.write("<br>Random dice value is: ", dice);

// Question # 5
var coin = Math.floor((Math.random() * 2) + 1);
document.write("<br>Random coim value is: ", coin);

if(coin=== 1){
    document.write("<br>Random Coin Value is: Tail");
}
else{
    document.write("<br>Random Coin Value is: Head");
}

// Question # 6
var random = Math.floor((Math.random() * 100) + 1);
document.write("<br>Random value b/w 1 and 100 is: ", random);

// Question # 7
var weight= prompt("Enter your weight in kgs: ");
document.write("<br>Your weight is: ", weight);

// Question # 8
var secretNum= Math.floor((Math.random() * 10) + 1);
var guess= prompt("Guess the number b/w 1 to 10: ");

if(guess=== secretNum){
    alert("Congratulations you guess the right number: ")
}
else{
    alert("Try again");
}


