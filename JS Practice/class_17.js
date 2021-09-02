/* var friendAge = ['azad', 'amir', 'jamir', 'ponir', 'sarif', 'jarif'];
console.log(friendAge.length);
console.log(friendAge);
console.log(friendAge);
 */

/* var vowelCount = ['a', 'e', 'i', 'o', 'u'];
console.log(vowelCount);
console.log(vowelCount.length); */

/* 
class: 17_3 
array index, get and set by index, indexOf and set

array-index.js 



*/


// var bookPages = ['hablu', 'bolod', 'chouddogostti', 'battery', 'paracitamol', 'gymansium'];

// var batteryIndex = bookPages.indexOf('battery');
// console.log(batteryIndex);
//0 =1; 1=5; 2= 10; 3= 15; 4= 20; 5= 25; 6= 30; 7= 35;8= 40; 9= 45; 10= 50;

/* var numberIndex = [1, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

console.log(numberIndex.indexOf(1));
console.log(numberIndex.indexOf(5));
console.log(numberIndex.indexOf(10));
console.log(numberIndex.indexOf(15));
console.log(numberIndex.indexOf(20));
console.log(numberIndex.indexOf(25));
console.log(numberIndex.indexOf(30));
console.log(numberIndex.indexOf(40));
console.log(numberIndex.indexOf(45));
console.log(numberIndex.indexOf(50));


var numberPosition = numberIndex.indexOf(50); //have need a another var declared then  I stored the array position

console.log(numberPosition);

//say, any one number have no position in this array so you want this position then answer the question: -1  
// you have no index number of 60 
// can i took this number and took this result : 
console.log("Have no position in this array that time result out: " + numberIndex.indexOf(60)); */




//we want to know first, second , third and forth position ::

/* var books = [5, 10, 15, 20, 25, 30, 35, 40];
// var secondIndex = books[2];

console.log(books[1]);
console.log(books[2]);
console.log(books[3]);
console.log(books[4]);
console.log(books[5]); */

/* //jst want to output position array index : 

var bookPages = ['hablu', 'bolod', 'chouddogostti', 'battery', 'paracitamol', 'gymansium'];


// console.log(bookPages[1]);
// console.log(bookPages[2]);
// console.log(bookPages[3]);
// console.log(bookPages[4]);
// console.log(bookPages[5]);

// console.log(bookPages[1]);
// console.log(bookPages[2]);
// console.log(bookPages[3]);
// console.log(bookPages[4]);
// console.log(bookPages[5]);

//just testifying that have no position index
//result have indefined
console.log(bookPages[100]);

//have a ulta kaj
//postion change in this index 
// console.log(bookPages);

bookPages[1] = 'ami 1 number position push dilam tomake';
console.log(bookPages);

// number ar jonno position na thakle man asbe -1
// string ar jonno man asbe indefined */
















/* //-------------------------------------------------------------------------///////// */

/* 
//class: 17_4: add or remove element from array and using push() and pop()



/* var lastBench = ['kalam', 'balam', 'salam'];
//push('in'); declared name.puhs('name');

//add element last position 
lastBench.push('jalam');
lastBench.push('khailam', 'aslam');
lastBench.push('palam');

// console.log(lastBench);

var friendAge = [12, 15, 17, 20];
// friendAge.push(30);
// friendAge.push(60);
// friendAge.push(70);

//pop() use the remove last position array 

var lastItem = friendAge.pop();
// friendAge.pop();
// friendAge.pop();
console.log(friendAge);
console.log(lastItem); */


//js remove from the first item from an array 
//js array add element in the beginging 
/* 
var friendAge = [12, 15, 17, 20];
// friendAge.push(25);       //add the last position 25    last element name.push("name")||name.pop() 
// friendAge.pop();         //remove the last position 25
friendAge.shift(); //remove the first position element 12   first element remove/add name.shift()|| name.unshift("name"); 
friendAge.unshift(100); // add the element first position 100
friendAge.unshift(200); // add the element first position 200
console.log(friendAge); */















// ================================================================================================================================================














/* 
// class: 17_5: compare variable and comparison operator

// console.log(5 > 6); //false 
// console.log(5 < 6); //true 
// console.log(5 == 6); //false
// console.log(5 != 6); //true
 */







//-------------Class:17_6 :Make a conditional decision, if-else, comparison
//conditional.js    

// var isFoodReady = false;
// if (isFoodReady == true) {
//     console.log("I will eat now!!!");
// } else if (isFoodReady == false) {
//     console.log("I will not eating")
// }


// var iphonePrice = 79999;
// var myBudget = 59999;
// if (iphonePrice < myBudget) {
//     console.log("Iphone dye futani marbo naH!!!!");
// } else if (iphonePrice > myBudget) {
//     console.log("Iphone dye futani marte perbo");
// }













//---------------------------- class: 17_7: handle multiple conditions and or 
// var gotJob = true;
// var moneySaved = 250000;

// if (gotJob == true && moneySaved > 200000) {

//     console.log('cholo biye kore feli');
// } else {
//     console.log("tor kopale biya nai");
// }


// var gotJob = false;
// var moneySaved = 50000;
// var hasFlat = false;

// if (gotJob == true || moneySaved > 200000) {

//     console.log('cholo biye kore feli');
// } else {
//     console.log("tor kopale biya nai");
// }












// var gotJob = false;
// var moneySaved = 50000;
// var hasFlat = true;


// if(gotJob == true && moneySaved > 200000) {
//     cons
// }





















// var myLove = 99;
// var yourLove = 100;
// console.log(myLove > yourLove);























// class: 17_8: multi stage condition and nested condition 

// var danishPrice = 50;
// var butterBreadPrice = 25;
// var toastBiscuitPrice = 10;
// var myBudget = 100;

// if (danishPrice < myBudget) {
//     console.log('Danish khabo');

// } else if (butterBreadPrice < myBudget) {
//     console.log("butter bon khabo");
// } else if (toastBiscuitPrice < myBudget) {
//     console.log('Toast biscuit khabo')
// } else {
//     console.log('batash diye cha khabo');
// }












// Class: 17-9: Module summary and two more comparisons


var tableLength = 12;
var tourDestination = ['coxbazar']






