//Certified web 3.0 & metaverse course Quater # 1 Assignment Solve Javascript Excecise in Typescript
//Excercise Name:Personal Message: 
console.log("Output Excercise # 1");

console.log("First I install Visual Studio,Node.js & Typescript(npm install -g typescript) on my computer then i make all");
console.log("Solve All Javascript Programs by using Typescript\n\n");


console.log("Output Excercise # 2");
var personName:string="Shahid";
console.log("Hello "+personName+", would you like to learn some Typescript today?\n\n");

//Excercise Name: Name Cases
console.log("Output Excercise # 3");
console.log("LowerCase: "+personName.toLocaleLowerCase()+"\n");
console.log("UpperCase: "+personName.toLocaleUpperCase()+"\n");
console.log("titleCase: "+personName[0].toUpperCase()+personName.substring(1).toLowerCase()+"\n\n");


//Excercise Name: Famous Quote
console.log("Output Excercise # 4");
console.log("Thomas Carlyle said, “Once the mind has been expanded by a big idea,it will never go back to its original state.”\n\n");


//Excercise Name: Famous Quote 2
console.log("Output Excercise # 5");
var famous_person="Thomas Carlye said, ";
var message=famous_person+'\"Life is a sucession of lessons which must be lived to be understood.\"';
console.log(message+"\n\n");


//Excercise Name: Stripping Names:
console.log("Output Excercise # 6");
var p_name= "\tShahid Butt\n";
console.log("Output with whitespace\n"+p_name);
console.log("Output without whitespace\n"+p_name.trim()+"\n\n");


//Excercise Name: Number Eight
console.log("Output Excercise # 7");
console.log("Additon Subtrction Multiplication & Division Operation on numbers\n");
console.log("Addition(4+4)= "+(4+4));
console.log("Subtraction(16-4)= "+(12-4));
console.log("Multiplication(2*4)= "+(2*4));
console.log("Division(16/2) "+(16/2)+"\n\n");


//Excercise Name: You should create four lines that show number 8 on each line
console.log("Output Excercise # 8");
console.log("___________________________________");
console.log("Addition: "+String(5 + 3))
console.log("___________________________________");
console.log("Multiplication: "+String(2 * 4))
console.log("___________________________________");
console.log("Division: "+String(16/2));
console.log("___________________________________");
console.log("Subtraction: "+String(11 - 3) )

//Excercise Name: Favorite Number 
console.log("Output Excercise # 9");
var fav_number:number=5;
var message="My favorite number is "+fav_number+", because it naturally attached with me such as";
var message1="My house number start with number 5 and also my CNIC & Mobile # end with number 5";
console.log(message+"\n"+message1+"\n\n");


//Excercise Name: Adding Comments
console.log("Output Excercise # 10\n");
// Program 1: Add two numbers
//Start of first program
let number1: number =5;// first number 
let number2: number =5;// second number
let sum:number=number1+number2;// add the numnbers and put result in sum variable
console.log("Addition of two number is "+sum);//show result on console
//End of first program

// Program 2:  Division of two numbers
//Start of second program
let number3: number =15;// first number 
let number4: number =5;// second number
let sum1:number=number1/number2;// Divide the numnbers and put result in sum variable
console.log("Addition of two number is "+sum1);//show result on console
//End of second program 



//Program # This program we save student’s bio data in JS variables and show the
//data on console
var student_name:string = "shahid akram butt";
var student_age:number=40;
var student_course="Certified Metaverse & Web 3.0";
console.log(student_name+"\n");
console.log(student_age+" years old\n");
console.log(student_course+"\n");


//Excercise Name: Names
console.log("Output Excercise # 11");
var names:string[]=["Mazhar","Abdul Qadeer","Murtaza"];
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log("\n\n");


//Excercise Name: Greetings
console.log("Output Excercise # 12");
var names=["Mazhar","Abdul Qadeer","Murtaza"];
console.log("Hello my dear "+names[0]+"!");
console.log("Hello my dear "+names[1]+"!");
console.log("Hello my dear "+names[2]+"!");
console.log("\n\n");

//Excercise Name: Your Own Array
console.log("Output Excercise # 13");
var fav_transport:string[]= ["train","bicycle"];
console.log("I travel out of city by "+fav_transport[0]+".");
console.log("I daily ride "+fav_transport[1]+" for exercise.\n\n");

//Excercise Name: Guest List
console.log("Output Excercise # 14");
var guests:string[]=["Abdul Qadeer","Aqeel","Murtaza"];
console.log("Hello my dear "+guests[0]+", please come to dinner at 9 PM");
console.log("Hello my dear "+guests[1]+", please come to dinner at 9 PM");
console.log("Hello my dear "+guests[2]+", please come to dinner at p PM\n\n");


//Excercise Name: Changing Guest List
console.log("Output Excercise # 15");
//already invited Guests on dinner
console.log("Hello my dear "+guests[0]+", please come to dinner at 9 PM");
console.log("Hello my dear "+guests[1]+", please come to dinner at 9 PM");
console.log("Hello my dear "+guests[2]+", please come to dinner at 9 PM\n");
// one guest excuse
console.log(guests[1]+",excuse cann't make dinner\n");
// Aqeel cann't make it ! so i invite Mazhar instead of aqeel
var newGuests:string="Mazhar";
guests[1]=newGuests;
// Now invitations again to Guests
console.log("Now again invitations to Guests\n")
console.log("Hello my dear "+guests[0]+", please come to dinner at 9 PM");
console.log("Hello my dear "+guests[1]+", please come to dinner at 9 PM");
console.log("Hello my dear "+guests[2]+", please come to dinner 9 PM\n");













