let obj1 = {name:"Person 1", age:5};
let obj2 = { age:5, name:"Person 1"};

for(let key in obj1){
    if(obj1[key] == obj2[key]){
        console.log("obj1 and obj2 are equal");
    }
   else{
        console.log("obj1 and obj2 are not equal");

    }

}
