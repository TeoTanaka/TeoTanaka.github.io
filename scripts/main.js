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
