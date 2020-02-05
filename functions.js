function addTwoNumbers (a, b) {
  console.log(a + b)
}

addTwoNumbers(5, 7)

function subTwoNumbers (a, b) {
  console.log(a - b)
}

subTwoNumbers(5,6)

//global scope variables
var globalVar = 'Test'

function fun1(){
  console.log(globalVar)
}

function fun2(){
  console.log(globalVar)
}

fun1()
fun2()

// local variable and functions

function localfun(){
  var locVar = 'Testlocal'
  console.log(locVar)
}
localfun()

//global vs local

var trourserType = 'cricket'

function trouserName(){
  var trourserType = 'football'

  return trourserType;
}
console.log(trouserName())

// return a value from function with return

function retunValue( number) {

  return number + 10
}
console.log(retunValue(5))

// undefined value returned from a function

var a = 10
function addTwoNumbers() {
  a = a + 10
}

function addTwoNum() {
  a +=  10
  console.log(a)
}

function nextInLine(arry,item){

  arry.push(item)
  return arry.shift()
}

var testArr = [ 1,2,3,4,5]

console.log("Before: " + JSON.stringify(testArr))
console.log(nextInLine(testArr,6))
console.log("After: " + JSON.stringify(testArr))

// Booleans

function welcomeBooleans(){
  return false
}
welcomeBooleans()

// if statement

function trueOrFalse(wasthatTrue){

  if(wasthatTrue){

    return "yes, true"
  } 
   return "no, false"
}
console.log(trueOrFalse(false))

// comparsion operator equal

function testEqual(val){

  if (val == 12){

    return "equal"
  }
  return "not equal"
}
console.log(testEqual(10))

function strictEqual(val){

  if (val === 12){

    return "equal"
  }
  return "not equal"
}
console.log(strictEqual('12'))

// inequality operator

function inEquality(val){

  if (val != 12){

    return "not equal"
  }
  return " equal"
}
console.log(inEquality(12))


function strictinEquality(val){

  if (val !== 12){

    return "not equal"
  }
  return "equal"
}
console.log(strictinEquality(12))

// logical And Operator

function testgreaterorequal(val){

  if(val >= 10) {

    return " over 10"
  }
   return " less than 10"
}
console.log(testgreaterorequal(9))

function testlessorequal(val){

  if(val <= 10) {

    return " less than 10"
  }
   return " greater than 10"
}
console.log(testlessorequal(90))

function testlessORequal(val){

  if(val <= 10 || val >=10) {

    return " yes"
  }
   return " No"
}
console.log(testlessORequal(90))

function testlessandequal(val){

  if(val <= 10 && val >=20) {

    return " yes"
  }
   return " No"
}
console.log(testlessandequal(90))

// if else statement and order, chanining 

function orderMyLogic(val){

  if (val < 5) {
    return "less than 5"
  }else if(val <10){
    return " less than 10"
  } else {
    return " greater than or equal to 10"
  }
}
console.log(orderMyLogic(4))

// switch case statement

function switchCase(val){
var answer = null
switch(val){
  case 1 :
    answer = "alpha"
    break
  case 2 :
    answer = "beta"
    break  
  case 3 :
    answer = "gama"
    break
  case 4 :
    answer = "tita"
    break
  default:
    answer = "not a valid input"
    break
  }
  return answer
}
console.log(switchCase(1))


var myDog = {
  
  "name"  : "lexi",
  "legs"  : "4",
  "tails" : "1"

}

myDog.name = "lexi puppy"

console.log(myDog.name)


















