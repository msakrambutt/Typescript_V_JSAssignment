//Excercise Name: No Users
console.log("Output Excercise # 31");
var usernames:Array<string>=["shahid","admin","ali","asif","bilal"];// List of excercise 30
usernames=[];// empty the list
console.log(usernames.length)
if(usernames.length<1){
    console.log("\nWe need to find some users!");
}


//Excercise Name: Checking Usernames
console.log("\nOutput Excercise # 32");

var current_users=["ali","asif","akram","Bilal","hassan"];
var new_users=["kashif","hassan","asif","bilal","aqeel"];
const  current_users_lower:Array<string>=current_users.map(element => {  //convert current_users into lower case 
    return element.toLowerCase();
  });

for(let i=0;i<current_users.length;i++){
    if(new_users[i].toLocaleLowerCase() == current_users_lower[i]){
        console.log("Person "+new_users[i]+" will need to enter new username");
    }else{
        console.log(new_users[i]+" username is available");

    }


}


//Excercise Name: Ordinal Numbers
console.log("Output Excercise # 33");

let arr_ordinal:Array<number>=[1,2,3,4,5,6,7,8,9,10];

for(let k=0;k<arr_ordinal.length;k++){
    if(arr_ordinal[k] == 1){
        console.log("1st");
    } else if (arr_ordinal[k] == 2){
        console.log("2nd");

    }else if(arr_ordinal[k] == 3){
        console.log("3rd");

    }else{
        console.log(arr_ordinal[k]+"th");
    }
   


}

//Excercise Name: Pizzas
console.log("Output Excercise # 34");

let favorite_pizzas:string[]=["Seekh Kebab Pizza ","Chicken Pizza","Chicken Tikka Pizza"];

//print the name of pizzas.
for(let i=0;i<favorite_pizzas.length;i++){
    console.log(favorite_pizzas[i]);
}
// Modify loop and add sentence with pizza name

for(let j=0;j<favorite_pizzas.length;j++){
    console.log("\nI like "+favorite_pizzas[j]+".");
}

console.log("\nI really love pizza!");


//Excercise Name: Animals
console.log("Output Excercise # 35");

let animals:Array<string>=["got","camel","cow"];

for(let i=0;i<animals.length;i++){
    console.log(animals[i]);
}

//statement against each animal
for(let j=0;j<animals.length;j++){
    console.log("\nA "+animals[j]+" would make a great pet.");

}

console.log("\nAll these animals are halal therfore we eat their meat")

//Excercise Name: T-Shirt
console.log("Output Excercise # 36")
let shirt_sizes:string[]=['Extra Large', 'Large', 'Medium', 'Small'];

function make_shirt(size:string, message:string){

console.log("\n I am going to make a "+size+" shirt.");
console.log("\n"+message +">");


}
//make_shirt(shirt_sizes[3],'I am learning MetaVerse web 3.0 course');

for (let j=0;j<shirt_sizes.length;j++)
{

    make_shirt1(shirt_sizes[j],'I love JavaScript');

}


//Excercise Name: Large Shirts
console.log("\nOutput Excercise # 37");
function make_shirt1(size1='large', message1='I love Javascript'){
    
    console.log("\nI'm going to make a " + size1 + " t-shirt.");
    console.log('"' + message1 + '"');
}
make_shirt1();// shirt size & message is default
make_shirt1(shirt_sizes[2]);//message will default
make_shirt1(shirt_sizes[3], 'i want to become metaverse developer.');// no default values

//Excercise Name: Cities
console.log("Output Excercise # 38");
function describe_city(city:string, country='Pakistan'){
    
    
    console.log(city + " is in " + country + ".");
}

describe_city('Lahore');
describe_city('Dehli', 'India');
describe_city('Karachi');

//Excercise Name: City Names
console.log("Output Excercise # 39");

function city_country(city:string, country:string){

    return(city + ", " + country);
}

console.log(city_country('Makka', 'saudi arabia ')+"\n");
console.log(city_country('Medina', 'saudi arabia')+"\n");
console.log(city_country('Lahore', 'Pakistan')+"\n");


//Excercise Name: Album
console.log("Output Excercise # 40");

// with tracks

function make_album(album:string, artist:string, Tracks?:number){
    //create list for album.
    if(arguments.length==3){
    return{albumName:album, artistName:artist,noOfTracks:Tracks};
    }else{
        return{albumName:album, artistName:artist};

    }
    }
 
console.log(make_album('Sarkar Ka Madina','Awais Raza Qadri')); 
console.log(make_album('Wah Kya Baat Is Mahinay','Awais Raza Qadri'));
console.log(make_album('Jashn-e-Aamad-e-Rasool','Awais Raza Qadri'));
console.log(make_album('piece of mind','iron maiden', 5));



//Excercise Name: Magicians
console.log("Output Excercise # 41");
let magicians:Array<string> = ['Apollo Robbins', 'David Devant', 'David Blaine'];

function show_magicians(magiciansList:string[]){
    
    for(let i=0;i<magiciansList.length;i++)
        console.log(magiciansList[i]);
}

show_magicians(magicians);

//Excercise Name: Great Magicians
console.log("\nOutput Excercise # 42");

function make_great(magiciansList:string[]){
    //Add 'the Great' to each magician's name.
    for(let i=0;i<magiciansList.length;i++){
        
        magiciansList[i]='The Great ' + magiciansList[i];
        

    }

    
}



make_great(magicians);// now we append the Greet with magicians name and agian print this array 
console.log("\n");
show_magicians(magicians);
console.log("\n");


//Excercise Name: Unchanged Magicians
console.log("\n\nOutput Excercise # 43");
magicians=['Apollo Robbins', 'David Devant', 'David Blaine']; //Again restoring the copy

let clone_magicians:Array<string>=[...magicians]; //copy of magicians

console.log('clone of magicians list');
make_great(clone_magicians);
show_magicians(clone_magicians)
console.log('original magicians list');
show_magicians(magicians);



//Excercise Name: Sandwiches
console.log("Output Excercise # 44");

//Send an array as parameter using JavaScript Rest Parameters(...parametername)
let make_sandwich= function (...items:string[]){

    //Make a sandwich with the given items.

    console.log("\nI'l will make you a great sandwich")
    items.forEach(id => console.log("Adding "+id+" to your sandwich"));
    console.log("Your sandwich is ready!");

}

make_sandwich('beef', 'cheese','honey');
console.log("\n");
make_sandwich('russian salad', 'apple slices', 'honey');
console.log("\n");
make_sandwich('butter', 'apple jam');
console.log("\n");

//Excercise Name: Cars
console.log("Output Excercise # 45");

function make_car(manufacturerName:string, modelName:string,colorName:string ,...Optionals:any[]){
        
        if(arguments.length==4){  
            return{manufacturer:manufacturerName, model:modelName,color:colorName,Optionals};
       }
            
        return{manufacturer:manufacturerName, model:modelName,color:colorName};

        }
        

console.log(make_car('honda', 'city','white'));
console.log(make_car('toyota', 'corolla', 'blue',{registrationNo:"1",Year:"2022"}));


