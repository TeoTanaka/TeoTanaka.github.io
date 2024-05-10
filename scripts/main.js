console.log("Test 1");
for (let i = 0; i < 10; i++) {
    console.log(i*i);
}
console.log("Test2");
for (let i = 5; i>0;i--){
    console.log(i);
}
console.log("Blastoff!");
console.log("Test3");
for (let i = 0; i< 50; i+=2){
    console.log(i);
}
let t = 0;
console.log("Test4");
for (let i =0; i<100; i++){
    
    t+=i
}
console.log(t);
console.log("Test5")
let j = 0;
for (let i =0; i<10; i++) {
    j = i;
    for (let e = 1; e<i;e++){
        j *=e
    }
    console.log(j);
}

console.log("Assignment #2");

let arr = [3,1,4,1,5];
console.log("task 1");
for (let i =0; i<arr.length; i++) {
    console.log(arr[i]);
}

console.log("task2");

for (let i =0; i<arr.length; i++) {
    let j = i+1;
    console.log(arr.at(j*-1));
}

console.log("task3");

let arr2 = [];

for (let i =0; i<10; i++) {
    let j = i+1;
    arr2.push(j*j*j);
}
console.log(arr2);

console.log("task4");

let arr3 = [];
let numPrev1 = 1;
let numPrev2 = 0;
let store = 0;

for (let i =0; i<10; i++) {
    
    numPrev2 = numPrev1;
    numPrev1 = store; 
    
    arr3.push(numPrev1+numPrev2);
    store = numPrev1+numPrev2;
}
console.log(arr3);

console.log("task5");

let arr4 = [];
let arrLength = arr.length;

for (let i =0; i<arrLength; i++) {
    arr4.push(arr.pop());
}
console.log(arr4);



Array.length //returns the length of the array (amount of objects in the array)
Array.push(/*object*/) //adding a new object to the array
Array.pop(/*object*/) //taking the last object from the array and returning it
