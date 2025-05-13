var myObj = { "name":"John", "age":31, "city":"New York" };
var arrObj = ["Harsh", "Gowzz","Siva","Arun","Yamuna"];
var myJSON = JSON.stringify(myObj);

// console.log(typeof myJSON)
// console.log(JSON.parse(myJSON))

// console.log(Object.keys(myObj))
// console.log(Object.values(myObj))

// console.log(Object.prototype.lang='eng')

// console.log(arrObj.toString())
// console.log(arrObj.valueOf())

//one by one prnt - loop (for,while)
// //for loop
// for(i=0 ; i<=4 ; i++){
//     console.log("For loop  " + arrObj[i]);
// }


// //for-in
// for (let i in myObj){
//     console.log("For In loop  " + myObj[i]);
// }

// //for-of
// for(let i of arrObj)
// {
//     console.log("For Of loop  " +i);
// }
// //foreach
// arrObj.forEach(element => {
//     console.log(element);
// });

// //small - loop - tolowercase() = array
// arrObj.forEach(element => {
//     arrResult = element.toLowerCase();
//     console.log(arrResult);
// });

// //in single array
// var arrResult2=[];
// arrObj.forEach(element => {
//     arrResult = element.toLowerCase();
//     arrResult2.push(arrResult);
// });
//     console.log(arrResult2);


// //print element less than 4 char

//     var resultLambda =(arrObj.filter((i)=>i.length<=4));   //in single line - lambda function
//     console.log("Less than 4 char " + resultLambda);

//     var result = arrObj.filter(check);              //using function
//     function check(i){
//         return i.length<=4;
//     }
//     console.log("Less than 4 char " + result);
// //

// let statement= "go true gain false";
// var words = statement.split(' ')
// console.log(words);
// var captial= [];
// var result2 = words.forEach(element=>{
//     captial.push(element[0].toUpperCase() + element.slice(1, element.length));
// })
// console.log(captial);
// console.log(captial.join(" "));
// console.log("===============last");
// //last
// var captial2= [];
// words.forEach(element=>{
//     var lengthword = element.length;
//     captial2.push(element.slice(0,lengthword-1) + element[lengthword-1].toUpperCase());
// })
// console.log(captial2);

// ---------------------------------------------------
// Anagram
// var s1 = "ArMy";
// var s2 = "MaTy";
// // console.log(getAnagram(s1,s2))
// console.log(getAnagram1(s1,s2))
// function getAnagram(s1,s2){
//         let count =0;
//         strlengths1 = s1.length 
//         strlengths2 = s2.length;
//         if(strlengths1 == strlengths2){
//         // console.log("String lenght "+ "s1 " + strlengths1 + " s2 " + strlengths2);
//         //true
//         s1arr = s1.toLowerCase().split('');
//         s2arr = s2.toLowerCase().split('');

//         for (let i = 0; i < s1arr.length; i++) {
//             const element = s1arr[i];
//             // console.log(element);
//             for (let j = 0; j < s2arr.length; j++) {
//                 if(s1arr[i]==s2arr[j]){
//                     count += 1;
//                     // return true;
//                 }
//             }   
//         }
//         if(count == strlengths1){
//             return true;
//         }
//         else {
//             return false;
//         }
//        } else {
//         return "both length should be same"
//        }
// }

// function getAnagram1(s1,s2){
//     if(s1.length!=s2.length){
//         return "length should match"
//     }
//     var c1 = s1.toLowerCase().split("").sort().join("");
//     var c2 = s2.toLowerCase().split("").sort().join("");
//     if(c1==c2){
//         return true
//     }
//     return false;
// }
// ----------------------------------------------------------------------
//unique values
// const arrayList = [
//     {
//         name:'Harshini',
//         gender:'Female',
//     },
//     {
//         name:'Gowtham',
//         gender: 'Male',
//     },
//     {
//         name:'Siva',
//         gender:'Male',
//     },
//     {
//         name:'Arun',
//         gender:'Male',
//     },
//     {
//         name:'yamuna',
//         gender:'Female',
//     }
// ]
// const Unique_Value = new Set(arrayList.map((item) => item.gender));
// console.log("Unique values : " + Unique_Value);

// var filterObj = [
//     {fname:'Harshini', age:'23'},
//     {fname:'Gowtham',age:'23'},
//     {fname:'siva',age:'22'},
//     {fname:'Arun',age:'24'}
// ]
 
// var filteryoung = filterObj.filter((filterObj)=> {
//     // if(filterObj.age > 22){
//     //     return filterObj;
//     // }
//     return filterObj.age > 22;
// })
// var findObj = filterObj.find((filterObj)=>filterObj.age ==='22');
// var findObjbyname = filterObj.find((filterObj)=>filterObj.fname ==='siva')
// console.log(filteryoung);
// console.log("By age "+findObj);
// console.log("By name " +findObjbyname);

//-----------------------------------------------------------------------
//destructing array
// let fruit = ['orange','apple','banana'];
// let names = ['gowtham','harshini','abhi'];
// let [g,h,abhi]= names;
// console.log(g,h,abhi);
// let [first,...restOfTheFruits] = fruit;
// console.log("rest operator "+ first,restOfTheFruits);            //rest operator
// var specificFruit = restOfTheFruits.find((fruit)=> fruit === 'apple');
// console.log('specificFruit '+specificFruit);
// let [orange,,banana,pineapple] = fruit;
// console.log(orange,banana,pineapple);
// let person = {fname : 'Harshini', lname:'venkatesan', job:'developer'};
// let {fname,...rest} = person;
// console.log('restoperator '+fname,rest);               //rest operator
// let project = 'Gowz';
// let projectSpread = [...project]                       //spread operator
// console.log("spread operator-------");
// console.log(projectSpread);

// // let fruitSpread = [...fruit];
// // console.log(fruitSpread);
// console.log("Array.from---------- ");
// console.log(Array.from(project));                             //array.from
// let keysOfFruit = fruit.keys();                               //array.keys
// for (let i of keysOfFruit) {
//     console.log("Array Keys "+i);
// }

//-----------------------------------------------------------

//Optional chaining
// let people = [
//     {
//         name:'harshini',
//         location:{street:'East car street', timezone:{offset:'+7:00'}},
//     },
//     {
//         name:'gowtham', location:{street:'residency'}
//     },
//     {
//         name:'siva', location:{street:'layout', timezone:{offset:'+9:00'}},
//     },
// ]

// people.forEach((person)=>{
//     //console.log("&& operator : " + person.location && person.location.timezone && person.location.timezone.offset);
//     console.log("Optional chaining : "+ person?.location?.timezone?.offset);                //optional chaining
// })


//-----------------------------------------------------------------
//Callback function
// function makeUpperCase(value){
//     console.log(value.toUpperCase());
// }
// function handleNameCase(name,cb){
//     let firstname =`${name} venkat`;
//     cb(firstname);                                          //callback function invoke
// }
// handleNameCase('harshini',makeUpperCase)                    //callback function passing as parameter
// handleNameCase('harshini',()=>{
//     setTimeout(()=>{                                        //settimeout
//         console.log("Hello world");
//     },2000)
//     setTimeout(()=>{
//         console.log("Welcome");
//     },6000)
//     setTimeout(()=>{
//         console.log("How are you");
//     },4000)
// })

// handleNameCase('harshini',()=>{
//     console.log("setTimeout inside");
//     setTimeout(()=>{                                        //settimeout
//         console.log("Hello world");
//         setTimeout(()=>{
//             console.log("Welcome");
//             setTimeout(()=>{
//                 console.log("How are you");
//             },3000)
//         },1000)
//     },5000)
// })

//------------------------------------------------------
// Promises
// let promise = new Promise((resolve, reject)=>{
// let randomValue = Math.floor(Math.random() * 19); 
// console.log(randomValue);   
//         if(randomValue % 3 == 0){
//             resolve("Divisible by 3");
//         }
//         else{
//             reject("Not divisible by 3");
//         }
// })
// promise.then((data)=> console.log(data)).catch((err) => console.log(err))

// ------
// function printNumber(time,name, age){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log(`Birthdate of `+name+ `age is ` + age);
//             resolve(data);
//         },time)

//         reject('There is no proper input');
//     })
// }
// printNumber(1000,'Required ',0)
// .then(() => printNumber(2000,'Harshini',22))                    //doubt
// .then(() => printNumber(4000,'Gowtham',23))
// .catch((err)=>(console.log(err)))
//-------------------------------------------------------

//Async and await
// let exampleAsync = async() =>{                        
//     return 'Helloworld';
// }
// console.log(exampleAsync());                          //Async always return promise

// async function someFunc(){
//     let variable = await exampleAsync()
//     console.log('from someFunc '+ variable);
// }
// someFunc()

//example of async and await
// let users =[
//     {id:1,name:'harshini'},
//     {id:2, name:'gowtham'},
//     {id:3, name:'abhi'}
// ]
// let articles = [
//     {userid:1, articles:['0','1','2']},
//     {userid:2, articles:['4','5']},
//     {userid:3, articles:['6','7','8','9']},
// ]

// function getUser(name){
//     return new Promise((resolve,reject)=>{
//         let user = users.find((user)=>user.name === name)

//         if(user){
//             return resolve(user);
//         }
//         else{
//             reject('No user available');
//         }
//     })
// }

// function getArticles(userid){
//     return new Promise((resolve,reject)=>{
//         let userarticles = articles.find((user)=>user.userid === userid)

//         if(userarticles){
//             return resolve(userarticles);
//         }
//         else{
//             reject('No user available');
//         }
//     })
// }

// // getUser('siva')
// // .then((user) => console.log(user))
// // .catch((err)=> console.log(err))

// let getData = async() => {
//     try{
//         let user = await getUser('harshinii');
//     if(user){
//         let arti = await getArticles(user.id)
//         console.log(arti);
//     }
//     } catch(error){
//         console.log(error);
//     }   
// }
// getData()

// ------------------------------------------------------------------------
// Timestamps
// console.log(new Date());
// console.log(Date.now());
// console.log(new Date().getTime());
// console.log(new Date().valueOf());
// setTimeout(()=>{
//     console.log(Date.now());
// },1000)
// console.log(new Date(1688824858596));
// let futureDate = new Date(2023,8,6)
// console.log(`Future date `+futureDate.getTime());

// ------------------------------------------------------------------------
// ES 2022
// let scores =[23,24,25];
// let value = scores.at(0);
// console.log(value);
// ------------------------------------------------------------------------
// Object.keys(), Object.values(), Object.entries()

// let person ={
//     name : 'Harshini',
//     age : 22,
//     status : 'Employee',
// }
// let key = Object.keys(person);
// console.log(key);
// let value = Object.values(person);
// console.log(value);
// let entry = Object.entries(person);
// console.log(entry);

// ------------------------------------------------------------------------
// String includes()
// let person ={
//         name : 'Harshini',
//         age : 22,
//         status : 'Employee',
//     }
// let result = person.name.includes('har');
// console.log(result);
// let starting = person.name.startsWith('Har');
// console.log(starting);
// let ending = person.status.endsWith('ee');
// console.log(ending);

// ------------------------------------------------------------------------
// Array includes()
// let groceries = ['milk','bread','veggies']
// let result = groceries.includes('milk');
// if(result){
//     console.log("The result is in the array");
// }
// else{
//     console.log("The result is not in the array");
// }

// ------------------------------------------------------------------------
// for/ of loop
// let arrayList = ['H','G','I','S','Y']
// for (let obj of arrayList) {                       //for/of loop
//     console.log(obj);
// }

// ------------------------------------------------------------------------
// Class
// class car{
//     constructor(name,year = 2022){                      //default parameter
//         console.log(name+ " "+ year);
//     }
// }
// // let mycar1 = new car("volkswogen","2022")
// let mycar2 = new car("Shift")
// ------------------------------------------------------------------------
// isFinite() or isNaN()
// console.log(isFinite(1.2345677888));                     //infinite()
// console.log(isNaN('Harshini'));                          //isNaN()
// ------------------------------------------------------------------------
// Template string
// let fname = 'Harshini';
// let lname = 'venky';
// let age = prompt("Enter the age..");
// let result =`${fname} ${lname} is ${age}`;
// ------------------------------------------------------------------------
// "abbbccccee" = which character is more in count => [c]
// let var1= "abbbccccee";
// function charCount(str) {
//     obj ={};
//     max=0;
//     maxList=[];
//     arr = str.split("");
//     arr.forEach(value => {
//         if(obj[value]){
//             obj[value] += 1;
//         } else{
//             obj[value] = 1;
//         }
//     });
//     console.log(obj);

//     Object.keys(obj).forEach(value =>{
//         max = obj[value] >= max ? obj[value] : max;
//     })
//     console.log(max);

//     Object.keys(obj).forEach(value =>{
//         if(obj[value] == max) maxList.push(value);
//     })
//     console.log("maxList ",maxList);

// }
// charCount(var1);
// ------------------------------------------------------------------------
// number reverse
// number = "12345";
// numbLength = number.length;
// reverse = "";
// // numbReverse = number.split("").reverse().join("");
// // console.log(numbReverse);
// for (let i = 1; i <= numbLength; i++) {
//     reverse = reverse + number[numbLength-i];
//     console.log(reverse);
// }
// ------------------------------------------------------------------------
//ANAGARAM Eg: 'elbow' === 'below' 
// var word1 = 'elbow';
// var word2 = 'below';
// console.log(checkAnagram(word1,word2));

// function checkAnagram(word1,word2) {
//     if(word1.length != word2.length){
//         return "Length should match";
//     }
//     var a1 = word1.toLowerCase().split("").sort().join("");
//     var a2 = word2.toLowerCase().split("").sort().join("");
//     if(a1==a2){
//         console.log(a1+ " , " +a2);
//         return true;
//     }
//     return false;
// }
// ------------------------------------------------------------------------
//  To check which is longest word in an sentence
// var sentence = "Procrastination makes easy things hard and hard things harder";
// //"Every moment is a fresh beginning";
// console.log(bigWord(sentence));
// function bigWord(sentence) {
//     var str = sentence.split(" ");
//     var maxLength = 0;
//     var longestWord;
//     for(i=0 ; i <= str.length-1; i++){
//         if(maxLength < str[i].length){
//             maxLength = str[i].length;
//             longestWord = str[i];
//         }
//     }
//     return longestWord;
// }
// ------------------------------------------------------------------------



//Udemy Course starts

//forEach 

// var colors = ['red', 'blue', 'green'];
// colors.forEach(function(color){
//     console.log(color);
// })

// var numbers = [1,2,3,4,5];
// var sum = 0;
// numbers.forEach(function(number){                     ----using anoynmous function
//     sum += number;
//     console.log(sum);
// })

// function adder(number){
//     sum += number;
// }
// numbers.forEach(adder);                                  --- using a separate function

// ------------------------------------------------------------------------

//Map

// var numbers = [1,2,3,4];
// var double = numbers.map(function(number){
//     return number*2;
// })
// console.log(double);

// var cars = [
//     { model : 'Volkswogan', price:'Expensive'},
//     { model : 'Suzuki', price: 'Cheap' }
// ]
// var price = cars.map(function(car){
//     return car.price;
// });
// console.log(price);

// ------------------------------------------------------------------------

// Filter

// var Products = [
//     {name:'Cucumber', type:'Vegetable', quantity:'1', price:'40'},
//     {name: 'Strawberry', type:'Fruit', quantity:'10', price:'120'},
//     {name: 'Bean', type:'Vegetable', quantity:'50', price:'90'},
//     {name:'Banana', type:'Fruit', quantity:'10', price:'25'}
// ]

// var filteredProduct = Products.filter(function (product) {
//     // return product.type === 'Fruit';                  --simple filter
//     return product.type === 'Fruit' && product.quantity >=10 && product.price >=40;
// })
// console.log("Fruits", filteredProduct);

// var post = {id: 4 , title: 'New Post' }
// var comments =[
//     {postId:4, content:'awesome post'},
//     {postId:3, content:'nice'},
//     {postId:4, content:'it is okay'}
// ]

// function commentsForPost(post, comments){
//     return comments.filter(function(comment){
//         return comment.postId === post.id;
//     })
// }
// console.log(commentsForPost(post,comments));

// ------------------------------------------------------------------------

// Find

// var users =[
//     {name:'gunduz'},
//     {name:'gowss'},
//     {name:'gowva'},
// ]
// var findUser = users.find(function(user){
//     return user.name == 'gowva';
// })
// console.log(findUser);

// var posts = [
//     {id:1, title:'New post'},
//     {id:1, title:'Post'},
//     {id:2, title:'Old post'}
// ]

// var comment = { postId:1, content:'Great Post'};

// function postForComment(posts,comment){
//     return posts.find(function(post){
//         return post.id === comment.postId;
//     })
// }
// console.log(postForComment(posts,comment));

// ------------------------------------------------------------------------

// Every

// var computers = [
//     {name:'Apple', ram:4},
//     {name:'Lenova', ram:24},
//     {name:'Acer', ram:34}
// ]
// let compWillWork = computers.every(function(computer){
//     return computer.ram > 16;
// })
// let compWillWorkSome = computers.some(function(computer){
//     return computer.ram > 16;
// })
// console.log(compWillWork, compWillWorkSome);

// function Field(value) {
//     this.value = value;
// }
// Field.prototype.validate = function(){
//     return this.value.length >0;
// }
// var username = new Field("");
// var password = new Field("my_password");
// var birthdate = new Field("10/10/2024");

// var Fields = [username,password,birthdate];

// let FieldValue = Fields.every(function(Field){
//     return Field.validate();
// })
// let FieldMatch = Fields.some(function(Field){
//     return Field.validate();
// })
// console.log("Every", FieldValue , "Some" , FieldMatch);

// ------------------------------------------------------------------------

// Reduce

// var numbers = [20,30,40];
// var sum = 0;
// var sumOfNumber = numbers.reduce(function(sum,number){
//     return sum + number;
// },0);
// console.log(sumOfNumber);

// var primaryColor = [
//     {color:'red'},
//     {color:'blue'},
//     {color:'green'}
// ]

// let changedColor = primaryColor.reduce(function(previous, primaryColors){
//     previous.push(primaryColors.color);
//     return previous;
// },[])
// console.log(changedColor);

// ------------------------------------------------------------------------

// Arrow Function

// const double = (number) => 2* number;
// const result = double(4);
// console.log(result);
// const numbers =[1,2,3];
// let double = numbers.map(number => number*2);
// console.log(double);
// const team = {
//     members : ['Harsh','Gowss'],
//     teamName : 'Super Sqaud',
//     teamSummary : function(){
//         return this.members.map((member) => {
//             console.log(`${member} is on team ${this.teamName}`);
//             return `${member} is on team ${this.teamName}`;
//         });
//     }
// };
// var answer = team.teamSummary;
// console.log(answer);

// ------------------------------------------------------------------------

// Template String

// function getMessage(){
//     // const year =  new Date().getFullYear();
//     // return `This is year ${year - 1999}`;
//     return `This is year ${new Date().getFullYear()}`
// }
// let result = getMessage();
// console.log(result);

// ------------------------------------------------------------------------

// Enhanced Object literals

// function createBookShop(inventory){
//     return {
//         inventory,
//         inventoryValue(){
//             return this.inventory.reduce((total,book) => total + book.price,0);
//         },
//         priceForTitle(title){
//             return this.inventory.find(book => book.title === title).price;   
//         }
//     }
// }
// const inventory = [
//     {title:'Harry potter', price: 10},
//     {title:'ELoquent Javascript', price:15}
// ];
// const bookShop = createBookShop(inventory);
// let inventValue = bookShop.inventoryValue();
// let priceTitle = bookShop.priceForTitle('Harry potter');
// console.log(`The total price ${inventValue} and price Harry potter is ${priceTitle}`);

// ------------------------------------------------------------------------

// Default function Arguments

// function makeAjaxRequest(url, method = 'GET'){
//     return method;
// }
// getMethod = makeAjaxRequest('google.com');
// postMethod = makeAjaxRequest('google.com','POST');
// nullMethod = makeAjaxRequest('google.com',null);
// undefinedMethod = makeAjaxRequest('google.com', undefined);
// console.log(`First : ${getMethod} and the second : ${postMethod} and this is from null: ${nullMethod} and this is from undefined : ${undefinedMethod}` );

// ------------------------------------------------------------------------

// Rest and Spread operator

// function addNumbers(...numbers){                      //rest
//     return numbers.reduce((sum,number) => {
//         return sum+number;  
//     },0)
// }
// let addingNumber = addNumbers(1,2,3,4,5,6,7,8,9,10)
// console.log(addingNumber);

// let defaultColor = ['red', 'green'];
// let userFavouriteColor = ['orange','yellow'];
// let fallColors = ['fire red','fall orange'];
// let combinedColor = ['Violet',...fallColors,...defaultColor,...userFavouriteColor];        //spread
// console.log(combinedColor);

// const mathLibrary = {
//     calculateProduct(...rest){
//         console.log("Please go with multiple method");
//         return this.multiple(...rest);
//     },
//     multiple(a,b){
//         return a*b;
//     }
// }

// ------------------------------------------------------------------------

// Destructing

// var expense ={
//     type:'Business',
//     amount: '$45 USD'
// }
// var type = expense.type;
// var amount = expense.amount;         // ES5 
// var {type,amount}=expense;
// type;
// amount;
// console.log(`${type} and ${amount}`);

// var savedFiled = {
//     extension : 'jpg',
//     name : 'report',
//     size : 14040
// }
// function fileSummary({name,extension,size},{color}){
//     return `The file ${name}.${extension} is of size ${size} with ${color}`
// }
// var result = fileSummary(savedFiled,{color:'red'});
// console.log(result);
// const companies = [
//     'Google',
//     'Facebook',
//     'Apple'
// ]
// const[name,...rest]=companies;
// console.log(`The first : ${name} and ${rest}`);

// ------------------------------------------------------------------------

// Classes

// ------------------------------------------------------------------------

// Generators
// For...of Loop

// const colors = ['red','green','white'];

// for(let color of colors){
//     console.log(color);
// }

// function* number(){
//     yield;
// }

// ------------------------------------------------------------------------

// Promise
// promise = new Promise((resolve, reject) =>{
//     // setTimeout(() => {
//     //     reject();
//     // },3000);
//     var request = new XMLHttpRequest();
//     request.onload = () =>{
//         resolve();
//     };
// });
// promise
//    .then(() => console.log( "Finished successfully"))
//    .then(() => console.log("Runned this as well"))
//    .catch(()=> console.log("From reject"));


//url="https://jsonplaceholder.typicode12345.com/posts/";
// fetch(url)
// .then(response => response.data)
// .then(data => console.log(data))

// fetch(url)
// .then(response => console.log(response))
// .catch(error => console.log('BAD', error))
// ------------------------------------------------------------------------

//Map and set object

// let arr = [1,2,2,3,3,3,4,4,4,4,5,5,5,5,5];
// let myset1 = new Set(arr);
// // console.log(myset1);
// // console.log(arr);
// myset1.add(6);
// myset1.add({'a':0,'b':1});
// myset1.add('pqr');
// // console.log(myset1);
// myset1.add(5);
// myset1.add('pqr');
// myset1.add({'a':0,'b':1})
// console.log(myset1);
// console.log(myset1.size);

// let map1= new Map();
// map1.set('a',1);
// map1.set('b',2);
// console.log(map1);

// map1.set('a',3);
// console.log(map1);

// map1.delete('a');
// map1.set('d',4);
// map1.set('e',5);
// console.log(map1);

// for(let i of map1){
//     console.log(i); 
// }

// for(let [k,v] of map1){
//     console.log(k);
//     console.log(v);
// }

// ------------------------------------------------------------------------



