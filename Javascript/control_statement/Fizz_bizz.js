var n=20;
for(var i=1;i<=n;i++){
    if (i%3==0){
        console.log("Fizz");
    }
    else if(i%5==0){
        console.log("Buzz");
    }
    else if ((i%3==0) && (i%5==0)){
        console.log("FizzBuzz");
    }
    else{
        console.log(i);
    }
}


function* gene(arr){
    for (let v of arr){
    yield v * v;
    }
}
let gerefunc=gene([1,2,3,4])
for( let n of gerefunc){
    console.log(n);
}

(function(){
    console.log("slef invoking function")
})()


let info1=[
    {
        name:"Dharshini",age:21
    },
    {
        name:"xyz",age:21
    }
    
]
let info2=[
    {
        name:"Dharshu",age:21
    },
    {
        name:"xyz",age:21
    }
    
]
let spread=[...info1,...info2]
console.log(spread)


let arrowfunc=(a,b,...c)=>{
     console.log(a+b,c)
}
arrowfunc(6,2,3,4,5)


let arr=[2,5,6,7,8,3,4]

arr.forEach((curtval)=>{
    console.log(curtval);
})
let ans=arr.map((curtval)=>{
    return curtval
})
console.log(ans)


let obj={
    name:"employee",
    salary:12000,
    bonus:2000,
    total:function(){
        console.log(this.salary+this.bonus);
    }
}

obj.total()


var salary=2000;
var bonus=1000;

let obj1={
    name:"employee",
    salary:12000,
    bonus:2000,
    total:()=>{
        console.log(this.salary+this.bonus);
    }
}

obj1.total()

let person={
    salary:12000,
    bonus:2000,
    name:"emp"
}

let obj2={
    name:"employee",
    salary:12000,
    bonus:2000,
    total:function(status){
        console.log(this.salary+" "+this.bonus+" "+this.name + " "+ (status));
    }
}

obj2.total()
obj2.total.call(person, "approved")


var newpromise= new Promise((resolve,reject)=>{
    var urlfetch= true;
    if(urlfetch){
        resolve("URL is fetched")
    }
    else{
        reject("URL is not fetched")
    }
})

newpromise.then((res)=> console.log(res))
          .catch((error) => console.log(error))   
          .finally(() => console.log("Done")); 


