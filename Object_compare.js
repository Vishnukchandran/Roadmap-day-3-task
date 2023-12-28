let obj1 = { name: "Person 1", age: 5 };
let obj2 = { age: 5, name: "Person 1" };
let flag = true;

for(let key in obj1){
    if(obj1[key] !== obj2[key]){
        flag = false;
        break;
}
}

if(flag){
     console.log("obj1 and obj2 are equal");
    }
   else{
        console.log("obj1 and obj2 are not equal");

    }