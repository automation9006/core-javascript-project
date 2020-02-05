// strore multiple values with an array
var ourArray = ['myName', 10]
console.log(ourArray)

console.log('***********************************')

// nested array
var dataArray1 = [['trouser', 32], ['trouser', 34]]
console.log(dataArray1)

console.log('***********************************')

// access data in array with index
var array2 = [50, 60, 70]
var myData = array2[1]
console.log(myData)

console.log('***********************************')

// modify array data with indexes
var arrayNo3 = [50, 60, 70]
arrayNo3[1] = 10
console.log(arrayNo3)

console.log('***********************************')

// access multidimentional with arrays
var array4 = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [[10, 11, 12], 13, 14]]
var myarryPrint = array4[0][2]
console.log(myarryPrint)

console.log('***********************************')

// manpulate arrays with push
var array5 = [['Tester', 10], ['Tester2', 50]]
array5.push(['Tester3'], 40)
console.log(array5)

console.log('***********************************')

// manpulate arrays with pop
var array6 = [['Tester', 10], ['Tester2', 50]]
array6.pop()
console.log(array6)

console.log('***********************************')

// modify arrays with shift
var array7 = [['Tester', 10], ['Tester2', 50]]
array7.shift()
console.log(array7)

console.log('***********************************')

// modify arrays with unshift
var array8 = [['Tester', 10], ['Tester2', 50]]
array8.unshift(['Tester', 100])
console.log(array8)


