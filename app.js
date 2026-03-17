/*==================================== Question No 1 =========================================
previousElementSibling and nextElementSibling
======================================= Answer =====================================*/
// let main= document.getElementById('center');
// console.log(main)
// let first = main.previousElementSibling;
// // console.log(first.nextElementSibling.nextElementSibling)

// const { use } = require("react")

// let next = first.previousElementSibling;
// console.log(next)

/*==================================== Question No 2 =========================================
enhanced object literals
======================================= Answer =====================================*/
// let name = 'Aziz';
// let age = 22;
// let city = 'karachi';
// // let oldObj = {
// //     name : name,
// //     age : age,
// //     city : city
// // }
// // console.log(oldObj)
// // console.log(Object.keys(oldObj).length)


// // enhanced object literals 
// let newObj = {
//     name,
//     age,
//     city
// }
// console.log('enhance object ',newObj)


/*==================================== Question No 3 =========================================
array destructuring
======================================= Answer =====================================*/
// let fruits = ['apple','banana','mango','grapes'];
// // console.log(fruits[0])
// // console.log(fruits[-1])


// let [one,two,three,four,five] = fruits;

// console.log(one);
// console.log(three);
// console.log(five)


/*==================================== Question No 4 =========================================
object destructuing
======================================= Answer =====================================*/
// let obj = {
//     name :'Aziz',
//     city : 'karachi',
//     age : 28,
//     designation: 'developer'
// }
// obj.name = 'Ilyas'
// // console.log(obj.hasOwnProperty('age'))
// delete obj.name
// console.log('age' in obj)
// console.log(obj.name)
// console.log(obj['city'])
// console.log(obj)
// // console.log(obj[age])
// // accessign object keys values with out dot notation is called object destructuring 
// let {name,city,age,designation} = obj;
// console.log(designation);
// console.log(age)

/*==================================== Question No 5 =========================================
itrator for/of 
of is used for array elements 
in is used for array's elements index number
======================================= Answer =====================================*/
// let fruits = ['apple','banana','grapes','orange'];
// for(let name of fruits){
//     console.log(name)
// }
// for(let index in fruits){
//     console.log(index)
// }



/*==================================== Question No 6 =========================================
itrator for/of 
in is only used for accessing object keys
======================================= Answer =====================================*/
// let obj = {
//     name : 'Aziz',
//     age : 22,
//     city : 'karachi'
// }

// for(let k in obj){
//     console.log(`${k} : ${obj[k]}`)
// }

/*==================================== Question No 7 =========================================
onfocus and onblur 
======================================= Answer =====================================*/
// function one(){
//     let input = document.getElementById('input');
//     input.style.background = 'red'
// }

// function two(){
//     let input = document.getElementById('input');
//     input.style.background = 'green'
// }




/*==================================== Question No 8 =========================================
spread operator
is used for 
mergin two or more arrays 
copying arrays 
adding data in array  
 and object
======================================= Answer =====================================*/
// let one = ['first','second'];
// let two = ['third','four'];
// // let final = one.concat(two);
// // let final = [...one,...two]
// let final = [...one,...two,'five','six','seven']
// console.log(final)
// let copyArray = [...final];
// console.log('copied ',copyArray)

// use of spread operator for object 
// let one = {name :'Aziz'};
// let two = {age : 30};
// let newObj = {...one,...two};
// console.log(newObj)
// let copy = {...newObj}
// copy = {copy,city:'karchi',designation : 'developer'}
// console.log('copy ',copy)


/*==================================== Question No 9 =========================================
find min and max number using spread operator
======================================= Answer =====================================*/
// let num = [4,2,3,55,0,212,21];
// console.log(Math.max(...num));
// console.log(Math.min(...num))



/*==================================== Question No 10 =========================================
shallow copy of obj 
we make shallow copy of obj by spread operator & =
and if we make any change in copy our origionl obj is also changed
======================================= Answer =====================================*/
// let obj = {
//     name :'Ali',
//     details: {
//         city  :'karachi'
//     }
// }
// console.log(' origional ',obj);
// // let shallow = {...obj};
// let shallow = obj
// shallow.details.city = 'Isb'
// console.log('shallowCopy ',shallow)




/*==================================== Question No 12 =========================================
deep copy 
structurClone()
json.parse(json.stringify())

if we make deep copy of any obj and we make any change in nested object , our origional object is not affected
======================================= Answer =====================================*/

// let obj = {
//     name :'Ali',
//     details: {
//         city  :'karachi'
//     }
// }
// console.log(' origional ',obj);
// // let deep = structuredClone(obj)
// let deep = JSON.parse(JSON.stringify(obj))

// deep.details.city = 'rawalpindi'
// console.log('deep ',deep)





/*==================================== Question No 13 =========================================
callback function
======================================= Answer =====================================*/

// function main(cb){
//     console.log('i am main function');
//     cb()
// }

// function second(){
//     console.log('i am call back function')
// }
// main(second)

/*==================================== Question No 14 =========================================
hof 
the function that takes another function as an argument or return a function is called higher order funciton
======================================= Answer =====================================*/
// function addition(a,b){
//     return a + b
// }

// function multipliation(a,b){
//     return a *b
// }



// function hof(m,n,operation){

//     return operation(m,n)
// }
// let ans = hof(2,5,multipliation);
// console.log(ans)


/*==================================== Question No 15 =========================================
find()
======================================= Answer =====================================*/
// let users = [
//     {
//         id:1,
//         name : 'Aziz',
//         age : 20
//     },
//     {
//         id:2,
//         name : 'Sikander',
//         age : 40
//     },
//     {
//         id:3,
//         name : 'Noman',
//         age : 23
//     },
//     {
//         id:4,
//         name : 'Bilal',
//         age : 30
//     },
// ]

// let result = users.find((user)=>{
//     return user.id == 4
// })
// console.log(result)

/*==================================== Question No 16 =========================================
findIndex()
======================================= Answer =====================================*/
/* let users = [
    {
        id:1,
        name : 'Aziz',
        age : 20
    },
    {
        id:2,
        name : 'Sikander',
        age : 40
    },
    {
        id:3,
        name : 'Noman',
        age : 23
    },
    {
        id:4,
        name : 'Bilal',
        age : 30
    },
]
console.log(users)
let requiredIndex = users.findIndex((user)=>{
    return user.id == 4
})
console.log(requiredIndex)

let requiredObj = users.find((user)=>{
    return user.id == 4
})
console.log(requiredObj)
requiredObj.name = 'Pervaiz';
console.log(requiredObj)

users.splice(requiredIndex,1,requiredObj);
console.log(users)
 */
/*==================================== Question No 17 =========================================
some()
======================================= Answer =====================================*/
/* let users = [
    {
        id:1,
        name : 'Aziz',
        age : 20
    },
    {
        id:2,
        name : 'Sikander',
        age : 40
    },
    {
        id:3,
        name : 'Noman',
        age : 23
    },
    {
        id:4,
        name : 'Bilal',
        age : 30
    },
]
let ans = users.some((user)=>{
    return user.name == 'Sikandere'
})
console.log(ans) */


/*==================================== Question No 18 =========================================
every()
======================================= Answer =====================================*/
/* 
let users = [
    {
        id:1,
        name : 'Aziz',
        age : 30
    },
    {
        id:2,
        name : 'Sikander',
        age : 30
    },
    {
        id:3,
        name : 'Noman',
        age : 30
    },
    {
        id:4,
        name : 'Bilal',
        age : 30
    },
]
let ans = users.every((user)=>{
    return user.age == 30
})
console.log(ans) */
/*==================================== Question No 19 =========================================
every( )
======================================= Answer =====================================*/
// let obj = [
//     {name :'Aziz',active : true},
//     {name :'Hashim',active : true},
//     {name :'Jamal',active : true},
//     {name :'Qdir',active : false}
// ]
// let ans = obj.every((user)=>{
//     return user.active == true
// })
// console.log(ans)


/*==================================== Question No 20 =========================================
forEach()
======================================= Answer =====================================*/
// let num = [22,44,33,2,6,7,99];
// let ul = document.getElementById('ul')
// num.forEach((item)=>{
//     // console.log(item)
//     let li = document.createElement('li');
// li.textContent = `${item}`;
// ul.appendChild(li)
    
// })




/*==================================== Question No 22 =========================================
map() is an array method we can apply or modification to the all elements of an array elements 
and it returned us new array
======================================= Answer =====================================*/
/* let names = ['Aziz', 'Nasir','Umer','Ilyas'];
let modified = names.map((item)=>{
    return item = item  + ' ' + 'khan'
})
console.log(modified)
 */


/* let num = [1,2,3,4,5];
let newNum = num.map((item)=>{
    return item * 5
})
console.log(newNum) */

/*==================================== Question No 23 =========================================
split and join
======================================= Answer =====================================*/
/* let str = 'i love js';
str = str.split(' ');
console.log(str)

str = str.join(' ');
console.log(str)
 */



/*==================================== Question No 24 =========================================
greatest and smallest numb by sort and comparison operator
======================================= Answer =====================================*/
/* let num = [1,123,5,67,34,22,1000,87];
let srt = num.sort(function(a,b){
    return a - b
});
console.log(srt);
let largest = srt.slice(-1).join();
console.log(largest)
let smallest = srt.slice(0,1).join();
console.log(smallest)
 */



/*==================================== Question No 25 =========================================
oop
======================================= Answer =====================================*/

/* let person = {
  name: 'Aziz',
  age: 30,
  greet: function () {
    return 'hello ' + this.name;
  }
}

console.log(person.greet()); 
       */    
/* let person = {
    name : 'Aziz',
    age : 30,
    greet : function (){
        return 'hello ' + this.name 
    }

}
console.log(person.greet()) */




/*==================================== Question No 26 =========================================
oop
======================================= Answer =====================================*/

 /* class Student {
constructor(name,age,designation){this.name = name;
  this.age = age;
  this.designation = designation;
}
details(){return `My name is ${this.name} and my age is ${this.age} and my designation is ${this.designation}`}
}
const newStudent = new Student('Aziz',30,'Designer')
console.log(newStudent);
let ans = newStudent.details();
console.log(ans) */

/* class Student {
    constructor(name,age,designation){
        this.name = name;
        this.age = age;
        this.designation = designation
    }
    details(){
        return `My name is ${this.name} and my age is ${this.age} and 
        my designation is ${this.designation}`

    }
}
const newStudent = new Student('Aziz',30,'Dsigner')
console.log(newStudent.details())
 */


/* class Car {
    constructor(brand, model,year){
        this.brand = brand;
        this.model = model;
        this.year = year;

    }
    details(){
        return `car is ${this.brand} and model is ${this.model} and year is ${this.year} `

    }
}
let newCar = new Car('Toyota','luxury',2020)
console.log(newCar.details()) */

// Ahmed earns 50000 per month


/*==================================== Question No 27 =========================================
oop
======================================= Answer =====================================*/
 /* class Student {
  constructor (name){this.name = name;}
}
class Student2 extends Student {
  constructor(name,age){super(name)
    this.age = age}
  show(){return `My name is ${this.name} and age is ${this.age}`}
}
const result = new Student2('Ahmed',30);
let ans = result.show();
console.log(ans)
 */

// class Student {
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
// }

// class Student2 extends Student {
//     constructor(name,age,designation){
// super(name,age);
// this.designation = designation
//     }

//     show(){
//         return `My name is ${this.name} and my age is ${this.age} and 
//         my desigation is ${this.designation}`
//     }
// }

// let ans = new Student2('Ali',30,'developer');
// console.log(ans.show())
/*==================================== Question No 28 =========================================
oop
======================================= Answer =====================================*/

/* let obj = {
    name : 'Aziz',
    age : 30,
    city : 'karachi',
    details : function(){
        return `My name is ${this.name} and my age is ${this.age} and my city is 
        ${this.city}`
    }
}
console.log(obj.details()) */

/* class Student {
    constructor(name,age,city){
        this.name = name;
        this.age = age;
        this.city = city
    }

fun
}
let result = new Student('Ali',30,'karachi')


 */
/*==================================== Question No 29 =========================================
first pillar of oop is object
======================================= Answer =====================================*/
// first pillar of oop is object 
// let obj = {
//     name : 'Aziz',
//     age : 30,
//     show: function(){
//         return ` My name is ${this.name} and my age is ${this.age}`
//     }
// }
// console.log(obj.show())




/*==================================== Question No 30 =========================================
second pillar of oop  is class, we write first class and than class name initial Capital and 
we receive data in class by using constructor we receive properties in constructor parameter and 
we store them in constructor {} by using this keyword
======================================= Answer =====================================*/
// class Student {
//     constructor(name,age,city){
//         this.name = name;
//         this.age = age;
//         this.city = city
//     }

//     details(){
//         return `My name is ${this.name} and my age is ${this.age} and my city is 
//         ${this.city}`
//     }

// }



// let result = new Student('Aziz',30,'karachi')
// console.log(result.details())

/*==================================== Question No 30 =========================================
inheritence 
is third pillar of oop
======================================= Answer =====================================*/
// class Student {
//     constructor(name,age){
//         this.name = name;
//         this.age = age
//     }
// }

// class Student2 extends Student {
//     constructor(name,age,city,designation){
//         super(name,age);
//         this.city = city;
//         this.designation = designation
//     }
//     show(){
//         return `My name is ${this.name}, my age is ${this.age}, my city is ${this.city} and 
//         my designation is ${this.designation}`
//     }
// }
// let ans = new Student2('Ali',40,'Mianwali','developer')
// console.log(ans.show())





/*==================================== Question No 31 =========================================
polymorphism 
aik he function different situations main different trhan sy behave karta hy
======================================= Answer =====================================*/
 /*  class Cars {
  works(){return `cars are driving on roads`}
}
let ans1 = new Cars();
let result = ans1.works();
console.log(result)
// 2 
class Boats extends Cars{
  works(){return `Boats are sailing on water`}
}
let ans2 = new Boats();
let resul1 = ans2.works();
console.log(resul1);
// 3 
class Kites extends Boats{
  works(){return `kites are flying in air`}
}
let ans3 = new Kites();
let resul3 = ans3.works();
console.log(resul3) */

/* class Cars {
    works(){
        return `cars are driving on roads`
    }
}
let ans = new Cars();
console.log(ans.works())

class Boats extends Cars {
    works(){
        return `Boats are swimming on roads`
    }
}
let ans2 = new Boats();
console.log(ans2.works())

class Kites extends Boats {
    works(){
        return `kites are flying on the air`
    }
}
let ans3 = new Kites();
console.log(ans3.works())
 */


/*==================================== Question No 32 =========================================
every()
======================================= Answer =====================================*/
// let num = [2,4,61,8];
// let ans = num.every((item)=>{
//     return item % 2 == 0
// })

// console.log(ans)




/*==================================== Question No 33 =========================================
Object.groupBy() is used to catageories the data of array of object in different situations 

======================================= Answer =====================================*/
//  let numbers = [1,2,3,4,5,6,7,8];
// let odd = [];
// let even = [];
// for(let num of numbers){
//     if(num % 2 == 0){
//         odd.push(num)
//     }
//     else{
//         even.push(num)
//     }
// }

// console.log(odd);
// console.log(even) */

// let odd = [];
// let even = [];
// for(let num of numbers){
//     if(num % 2 == 0){
//         even.push(num)
//     }
//     else{
//         odd.push(num)
//     }
// }
// console.log(odd);
// console.log(even)

/*==================================== Question No 34 =========================================
Object.groupBy()
======================================= Answer =====================================*/
// let products = [
//     {name :'mobile', price : 20000},
//     {name :'laptop', price : 10000},
//     {name :'mobile', price : 14000},
//     {name :'laptop', price : 8000},
//     {name :'mobile', price : 20000},
// ]
// let ans = Object.groupBy(products,(item)=>{
//     return item.name == 'mobile'
// })
// console.log(ans)
// let mobiles = [];
// let laptop = [];
// for(let i = 0;i < products.length;i++){
//     // console.log(products[i])
//     if(products[i].name == 'mobile'){
//         mobiles.push(products[i])
//     }
//     else{
//         laptop.push(products[i])
//     }
// }
// console.log(mobiles);
// console.log(laptop)

/*==================================== Question No 35 =========================================
Object.key() 
it is advance method of an object we can get all the keys of an object in an array by using this 
======================================= Answer =====================================*/
//  let obj = {
//         name : 'Aziz',
//         age : 28,
//         city :'karachi' 
//  }
//  let k = Object.keys(obj);
//  console.log(k)


/*==================================== Question No 36 =========================================
object.values()
======================================= Answer =====================================*/
// let obj = {
//     name : 'Aziz',
//     age: 30,
//     city : 'karachi'
// }
// console.log(obj)
// // console.log(Object.values(obj))

// // console.log(Object.entries(obj))
// // obj = Object.freeze(obj);
// obj.name = 'ilyas';
// // delete obj.name;
// // delete obj['age']
// console.log(obj.hasOwnProperty('age'))

// console.log(obj)
/*==================================== Question No 37 =========================================
object.is();
object.is() 
is alternative of ===
======================================= Answer =====================================*/
// let a = '5';
// let b = '5';
// let ans = Object.is(a,b)

// console.log(ans)


/*==================================== Question No 38 =========================================
real use of object.values()
======================================= Answer =====================================*/
//  const marks = {
//   math: 80,
//   english: 65,
//   science: 70
// };

// let val = Object.values(marks);
// console.log(val);
// let sum = 0;
// for(let i = 0;i < val.length;i++){
//     // console.log(val[i])
//     sum = sum + val[i]
// }
// console.log(sum)
        
 

/*==================================== Question No 39 =========================================
validation by Object.entries()
======================================= Answer =====================================*/

// let obj = {
//     name :'',
//     age : '',
//     city : 'karachi',
//     desingation : ''
// }
// let a = Object.entries(obj);
// for(let [properties, values] of Object.entries(obj)){
//     // console.log(properties, '  ' , values)
//     if(values == ''){
//         console.log(properties, ' is requird')
//     }
// }

// function testing(){
//     let name = document.getElementById('name');
//     let age = document.getElementById('age');
//     let city = document.getElementById('city');
//     let desigation = document.getElementById('designation');

//     let obj = {
//         name :name.value,
//         age : age.value,
//         city : city.value,
//         desigation : desigation.value
//     }
//     console.log(obj)
//     for(let [prop,val] of Object.entries(obj)){
//         // console.log(prop, ' ',val)
//         if(!val){
//             alert(prop, ' is required')
//         }
//     }
// }




/*==================================== Question No 40 =========================================
Object.seal( ) 
we can update any property by using object.seal but we can delete any property, 
the main difference b/w freeze and seal 
in object.freeze we can not delte or update any key of obj but in object.seal we can 
not delete any object key but only we can update any key of object and both method lock 
the object
======================================= Answer =====================================*/
/* let obj = {
    name :'Ali',
    age : 30,
    city : 'karachi'
}

console.log(obj);
obj = Object.seal(obj);
delete obj.name;
obj.name = 'ikram'

 console.log(obj)



/*==================================== Question No41 =========================================
nested array destructuring 
nested array's values accessing is called nested array destructuring
======================================= Answer =====================================*/
//   let fruits = ['apple','mango','banana',['grapes','guava',['lemon','dates']]];
//   let [one,two,three,[four,five,[six,seven]]] = fruits;
// console.log(three);
// console.log(five);
// console.log(seven)





/*==================================== Question No 42 =========================================
nested object destructuring
======================================= Answer =====================================*/
let obj = {
    name : 'Aziz',
    age : 30,
    education : {
        basicEducation :'Bachelor',
        province : {
            district : 'Mianwali'
        }
    }
}
let {name,age,education:{
    basicEducation,
    province:{district}
}} = obj;

console.log(district);
console.log(basicEducation);
console.log(age)


/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================
https://themewagon.com/themes/free-bootstrap-4-html5-web-developer-portfolio-website-template-satner/
======================================= Answer =====================================*//*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/




/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/






/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/







/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/



/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/






/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/







/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/






/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/







/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================
https://themewagon.com/themes/free-bootstrap-4-html5-web-developer-portfolio-website-template-satner/
======================================= Answer =====================================

==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/






/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/







/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/






/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/







/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================
https://themewagon.com/themes/free-bootstrap-4-html5-web-developer-portfolio-website-template-satner/
======================================= Answer =====================================*/

/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/



/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/






/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/







/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/






/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/







/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================
https://themewagon.com/themes/free-bootstrap-4-html5-web-developer-portfolio-website-template-satner/
======================================= Answer =====================================*//*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/




/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/






/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/







/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/



/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/






/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/







/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/






/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/







/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/





/*==================================== Question No 1 =========================================

======================================= Answer =====================================*/

