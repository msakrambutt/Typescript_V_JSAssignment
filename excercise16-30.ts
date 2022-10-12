
//Excercise Name: More Guests
console.log("Output Excercise # 16");

//invited Guests on dinner
var guests:string[]=["Abdul Qadeer","Aqeel","Murtaza"];
console.log("Hello my dear "+guests[0]+", please come to dinner");
console.log("Hello my dear "+guests[1]+", please come to dinner");
console.log("Hello my dear "+guests[2]+", please come to dinner\n");
var refuse_guest:string=guests[1];
console.log(refuse_guest+",excuse cann't make dinner\n");
// Aqeel cann't make it ! so i invite Mazhar instead of aqeel
var newGuests:string="Mazhar";
guests[1]=newGuests;
// Now invitations again to Guests
console.log("Now again invitations to Guests\n")
console.log("Hello my dear "+guests[0]+", please come to dinner");
console.log("Hello my dear "+guests[1]+", please come to dinner");
console.log("Hello my dear "+guests[2]+", please come to dinner\n");
// Now we have bigger table , so add more guests in the list
console.log("Our table is now bigger!\n");
guests.unshift("Ali");
guests[2]="Asif";
guests.push("bilal");

for(let i=0;i<guests.length;i++){
    console.log("Hello my dear "+guests[i]+", please come to dinner\n");

}


//Excercise Name: Shrinking Guest List
console.log("Output Excercise # 17");
//invited Guests on dinner
var guests:string[]=["Abdul Qadeer","Aqeel","Murtaza"];
console.log("Hello my dear "+guests[0]+", please come to dinner");
console.log("Hello my dear "+guests[1]+", please come to dinner");
console.log("Hello my dear "+guests[2]+", please come to dinner\n");

var refuse_guest:string=guests[1];

console.log(refuse_guest+",excuse cann't make dinner\n");
// Aqeel cann't make it ! so i invite Mazhar instead of aqeel
var newGuests:string="Mazhar";
guests[1]=newGuests;
// Now invitations again to Guests
console.log("Now again invitations to Guests\n")
console.log("Hello my dear "+guests[0]+", please come to dinner");
console.log("Hello my dear "+guests[1]+", please come to dinner");
console.log("Hello my dear "+guests[2]+", please come to dinner\n");
// Now we have bigger table , so add more guests in the list
console.log("Our table is now bigger!\n");
//adding guest at start of the list
guests.unshift("Ali");
//adding guest middle of the list without deleting any guest
guests.splice(3,0,"Asif");
//adding guest at the end of the list
guests.push("bilal");

for(let i=0;i<guests.length;i++){
    console.log("Hello my dear "+guests[i]+", please come to dinner");

}
// Dinner table won't arrive on time
console.log("\n Now we only invite two person to dinner\n");
for(let j=0;j<guests.length+1;j++){
    console.log("Sorry  "+guests.pop()+", there is no space at the dinner table");

}
// now only two person left. Again invite these two
console.log("Hello my dear "+guests[0]+", please come to dinner");
console.log("Hello my dear "+guests[1]+", please come to dinner");

// empty the list
guests.pop();
guests.pop();

// print the list
console.log(guests);



//Excercise Name: Seeing the World
console.log("Output Excercise # 18");
//function will received unsorted array and return sorted data
var places_pakistan:string[]=["Pir Chinasa","Swat","Azad Kashmir","Neelam Vally","Kiran Lake"];
function sorting(arr:string[]){// by using slice function with sort becuase slice create shallow copy
    
    return arr.slice().sort();
    
    
}
//function will received unsorted array and return in reverse order
function reverse(arr1:string[]){
    return arr1.slice().reverse();

}
console.log("First show array in orginal order\n");
console.log(places_pakistan+"\n");
console.log(" Array in aphabatical order\n");
console.log(sorting(places_pakistan));
console.log("\nNow again show array in original order\n");
console.log(places_pakistan+"\n");
console.log("\nNow  show array in reverse order\n");
console.log(reverse(places_pakistan)+"\n");
console.log("\nNow again show array in original order\n");
console.log(places_pakistan+"\n");
console.log("\n Original array reversed\n");
places_pakistan.reverse();
console.log(places_pakistan+"\n");
console.log("\n Again reversed array and now back to its original order\n");
places_pakistan.reverse();
console.log(places_pakistan+"\n");
console.log("\nSort Array in aphabatical order and now its order changed\n");
places_pakistan.sort();
console.log(places_pakistan);
console.log(" \nSort Array in reversed order and now its order changed\n");
places_pakistan.reverse();
console.log(places_pakistan);

//Excercise Name: Dinner Guests
console.log("Output Excercise # 19");

var guests:string[]=["Abdul Qadeer","Aqeel","Murtaza"];// Guest already decleard,only here how many invited

console.log('\n I am inviting %d guests. \n', guests.length);

//Excercise Name: Think of something you could store in a array
console.log("Output Excercise # 20");//pending
let mountains:string[]=["Karakoram","K2","Nanga Parbat"];
console.log(mountains);



//Excercise Name: They think of something you could store in a JavaScript Object
console.log("Output Excercise # 21");


let student={
    Rollno:196272,
    name:"sahhid",
    courseTitle:"Metaverse web 3.0"
};
console.log("PIAIC Roll #: "+student.Rollno+" "+"Name: "+student.name+"Course Title: "+student.courseTitle+"\n");





//Excercise Name: Intentional Error
console.log("Output Excercise # 22");

// Error for Array index error
class InvalidArrayIndexError extends Error {};

    let arr:string[]=["31","55","44","32","4"];
   //Javascript does not give Array index out error ,it gives only undefined as ouput, we run arrary one time more its length
    
    
    for(let i=0;i<=arr.length;i++){
        if(arr[i] == undefined){
            console.log("Array index is out");
            break;
        }
    console.log(arr[i]+"\n");

    }
    
    
    



//Excercise Name: Conditional Tests
console.log("Output Excercise # 23");

let car:string[] = ['subaru','Honda','Suzuki','Revo','Toyota','Civic','Rose Rice','MBW','Pak Hero','Cultus'];
let car1:string[] = ['subaru','HonPride','Suzuki','RevoFore','Toyota','Civica','Rose Rice','MBK','Pak Hero','CultusOne'];

for(let i=0;i<car.length;i++){
if(car[i] == car1[i]){
console.log("Is car == "+car1[i]+"? I predict True.")
}else
{
console.log("Is car == "+car1[i]+"? I predict False.")
  
}
console.log(car[i] == car1[i])
}


console.log("Output Excercise # 24");

let course1:string="METAVERSE";
let course2:string="MetaVerse";
let name_lower:string="metaverse";
let name_upper:string="METAAVERSE";
let num1:number=5;
let num2:number=6;


//test for equality of strings

if (course1 === "METAVERSE")
{
    console.log("\nCondition matched. Answer is "+(course1 === "METAVERSE"));
}
//test for Inequality of strings
if(course2 != "METAVERSE")
{
    console.log("\nCondition not matched. Answer is "+(course2 === "METAVERSE"));
}
//test using the lowercase function
if(name_lower.toLowerCase()){
    console.log("\n All string characters are in lowercase");

}
//test using the uppercase function
if(name_upper.toUpperCase()){
    console.log("\n All string characters are in uppercase\n");

}

//Numerical tests of two numbers put fixed value in variables because we print output on console.
//otherwise i get two numbers input from user and show result on browsers
//num1=parseInt(prompt("Enter First number for matching"));
//num2=parseInt(prompt("Enter Second number for matching"));


if(num1 === num2){
    console.log("\n Both numbers are equal\n");

}else if(num1 != num2){
    console.log("\n Both numbers are not equal\n");

}else if(num1>num2){
    console.log("\n number1 is greater the number2\n");

}else if(num1<num2){
    console.log("\n number1 is less the number2\n");

}else if(num1>=num2){
    console.log("\n number1 is greater or equal to number2\n");

}else if(num1<=num2){
    console.log("\n number1 is less or equal to number2\n");

}
//Tests using "and" and "or" operators
let num3:number=7;
let num4:number=9;
// By using && opeartor Answer is true when all conditions are true
if(num3 === num4 && num3 < num4){
    console.log("\n By using and operator Answer is True \n");

}else
{
    console.log("\n By using and operator Answer is False \n");
  
}


// By using || opeartor Answer is true if any one conditions is true
if(num3 === num4 || num3 < num4){
    console.log("\n By using or operator Answer is True \n");

}else
{
    console.log("\n By using or operator Answer is False \n");
  
}
//Test whether an item is in a array or not
var arrStationary:string[]=["pen","pencil","scale"];
var item:string="pen";
if (arrStationary.indexOf(item)>-1){
    console.log("\nPen found in array")
}else{
    console.log("\nPen not found in array")

}


//Excercise Name: Alien Colors #1
console.log("Output Excercise # 25");
var alien_color:string ="green";
if(alien_color === "green"){
    console.log("you earn 5 points.");
}
var alien_color:string ="yellow";
if(alien_color === "green"){
    console.log("you earn 5 points.");
}

//Excercise Name: Alien Colors #2
console.log("Output Excercise # 26");

var alien_color:string="green";
if(alien_color === "green"){
    console.log("\nyou earn 5 points.");
}else
{
    console.log("\nyou earn 10 points.");

}

var alien_color:string ="yellow";
if(alien_color === "green"){
    console.log("you earn 5 points.");
}else{
    console.log("you earn 10 points.");

}

//Excercise Name: Alien Colors #3
console.log("Output Excercise # 27");

var alien_color:string="yellow";
if(alien_color === "green"){
    console.log("\nyou earn 5 points.");
}else if(alien_color === "yellow")
{
    console.log("\nyou earn 10 points.");

}else{
    console.log("\nyou earn 15 points.");

}

//Excercise Name: Stages of Life:
console.log("Output Excercise # 28");

var age:number=40;
if(age<2){
    console.log("person is baby");

}else if(age<4){
    console.log("person is toddler");

}else if(age<13 ){
    console.log("person is kid");

}else if(age<20){
    console.log("person is teenager");
}else if(age<65){
    console.log("person is adult");

}else{
    console.log("person is elder");

}

//Excercise Name: Favorite Fruit
console.log("Output Excercise # 29");

var favorite_fruits:string[]=["apple","banana","peach"];

if(favorite_fruits.indexOf("apple")>-1) {console.log("You really like apples!")};
if(favorite_fruits.indexOf("banana")>-1) {console.log("You really like banans!")};
if(favorite_fruits.indexOf("peach")>-1) {console.log("You really like peaches!")};
if(favorite_fruits.indexOf("strawberry")>-1) {console.log("You really like staberries!")};
if(favorite_fruits.indexOf("bluberries")>-1) {console.log("You really like bluberries!")};

//Excercise Name: Hello Admin
console.log("Output Excercise # 30");
var usernames:Array<string>=["shahid","admin","ali","asif","bilal"];

for(let j=0;j<usernames.length;j++){
    if(usernames[j] === "admin"){
        console.log("Hello "+usernames[j]+", would you like to see a status report?")
    }else{
        console.log("Hello "+usernames[j]+", thank you for logging in again.")

    }
}

