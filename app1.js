// Question #1
var first_name = prompt("Enter Your First Name: ");
var last_name = prompt("Enter Last Name: ");
var full_name = first_name + last_name;

alert("Welcome " + full_name);

// Question #2
var mobile = prompt("Write your favourite mobile name: ");
document.write("My favourite mobile: ", mobile);
document.write("<br>Length of the string: ", mobile.length);

// Question #3
var word = "Pakistani";
document.write("<br>String: ", word);
document.write("<br>Index of <b>n</b> is: ", word.indexOf("n"));

// Question #4
var greet = "Hello World";
document.write("<br>String: ", greet);
document.write("<br>Index of <b>l</b> is: ", word.lastIndexOf("l"));

// Question #5
var word = "Pakistani";
document.write("<br>String: ", word);
document.write("<br>Character of Index <b>3</b> is: ", word.charAt("3"));

// Question #6
var first_name = prompt("Enter Your First Name: ");
var last_name = prompt("Enter Last Name: ");
var full_name = first_name.concat(last_name);

alert("Welcome " + full_name);

// Question # 7
var city = "Hyderabad";
var city2 = city.replace("Hyder", "Islam");
document.write("<br>City: ", city);
document.write("<br>After Replacement: ", city2);

// Question # 8
var message = "Ali and Sami are best friends. They play cricket and football together.";
var newMessage = message.replace(/and/g, "&");
document.write("<br>Message: ", message);
document.write("<br>After Replacement: ", newMessage);

// Question # 9
var string = "472";
document.write("<br>String: ", string);
document.write("<br>Type: ", typeof string);

var num = parseInt(string);
document.write("<br>Number: ", num);
document.write("<br>Type: ", typeof num);

// Question # 10
var input = prompt(" Enter a string: ");
document.write("<br>User Input: ", input);
document.write("<br>Upper Case: ", input.toUpperCase());

// Question # 11
var java = prompt("Write javacript: ");
document.write("<br>User Input: ", java);
var title= java.charAt(0).toUpperCase()+ java.slice(1).toLowerCase();
document.write("<br>Title Case: ", title);


// Question # 12
var num = 35.36;
var string = num.toString();
var result = string.replace(".", "");
document.write("<br>Number: ", num);
document.write("<br>Result: ", result);

// Question # 13
var input = prompt("Enter a username: ");
var invalid = ["@", ".", ",", "!"];
var isValid = true;

for (var i = 0; i < invalid.length; i++) {
    if (input.includes(invalid[i])) {
        isValid = false;
        alert("Invalid Username (Do not use any special character)");
        break;
    }
}

if (isValid=== true) {
    document.write("<br>UserName: " + input);
} else {
    document.write("<br>Please enter a valid username.");
}

// Question # 14
var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var input= prompt("Enter an item search for: ").toLowerCase();
var found= false;

for(var i=0; i<A.length; i++){
    if(A[i].toLowerCase=== input){
        found= true;
        break;
    }
}

if(found===true){
    alert("The item '" + input + "' is found in the list.");
}
else{
    alert("The item '" + input + "' is not found in the list.");
}

document.write("<br>")

// Question# 15
var password= prompt("Enter your password");
var value= true;

if(password.length <6){
    alert("Password should'nt be less than 6");
    value= false;
}

if(!isNaN(password[0])){
    alert("Password should'nt started with number");
    value= false;
}

var hasno= false;
var hasletters= false;

for(var i=0; i<password.length; i++){
    var charcode= password.charCodeAt(i);
    
    if(charcode >= 48 && charcode<= 57){
        hasno= true;
    }
    if((charcode >=65 && charcode<= 90)|| (charcode >= 97 && charcode<= 322)){
        hasletters= true;
    }
}

if(hasletters=== true && hasno=== true && value=== true){
    alert("Password is valid");
}
else{
    alert("Invalid Password(Use mix of numbers and letters)");
}


// Question # 16
var uni= "University Of Karachi";

// By spliting it is not showing one by one character

// var universityArray = uni.split(" "); 
// document.write("Array elements: <br>");
// for (var i = 0; i < universityArray.length; i++) {
//     document.write(universityArray[i] + "<br>");
// }

for (var i=0; i<uni.length; i++){
    document.write(uni[i]+"<br>");
}

// Question # 17
var input=prompt("Enter your country name: ");
document.write("Usser Input: ", input);
document.write("<br>Last character of User Input: ", input.charAt(input.length -1));

// Question # 18
var text= "the quick brown fox jumps over the lazy dog";
var array= text.split(" ");
var count= 0;
for (var i=0; i<array.length; i++){
    if(array[i]==="the"){
        count++;
    }
    // break;
}

document.write("<br>Text: ", text);
document.write("<br>There are "+count+" occuurence(s) of word '<b>the</b>'");

document.write("<br><b>--------------------------------------------------------------------------------------</b><br>")

