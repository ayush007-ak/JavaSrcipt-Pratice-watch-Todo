
//Ways to printin javascript
//& console API
//console.log("waasup");
//alert("me");
// document.write('this is document rigt')
// console.warn('this is warning')
//  console.error('this is an error')


//3. VARAIABLES
// var number = 34;
// var number1 = 35;
// console.log(number+number1);

//4.data types in JS
// var str1="this is string";//string
// var str2= "this is also a string";

//numbers
// var num1 = 20;
// var num2 = 300;

//object key value pair ha
// var marks={
//     ravi: 34,
//     ayush:56,
//     king: 897

// }

//bolean
// var a= true;
// var b = false;
// console.log(a,b)
// console.log(marks)

//imp point
// var und;
// console.log(und)


//At a very high level , there are two types of data types in JS
//1. primitive - undefined , null , number, string , boolean , symbol
//2. Reference data types - arrays , object 

//Array comes in refrence data type

// var arr = [1,2 ,'bablu',3,4]
// console.log(arr)
// console.log(arr[0])
// console.log(arr[3])
// console.log(arr)


//5. Operators

// var a =34;
// var b= 56;
// console.log('the value of a and b is  ', + "  " +a+b)

//Assignment operators

// var c = b;
// c +=2;
// console.log(c)

//comparison operator
// var x = 56;
// var y = 89;
// console.log(x==y)
// console.log(x>=y)
// console.log(x<=y)

// Logical Operatror

// console.log(true && true) //and
// console.log(true && false)
// console.log(false && true)
// console.log(false && false)


// console.log(true || true)///OR
// console.log(true || false)
// console.log(false || true)
// console.log(false || false)

// console.log(!false);  //Logical not sach ko jhoot jhoot ko sach jo krde
// console.log(!true) // operand means answer operator is +%-



//Dry 
//javascript function-1

//function avg(a,b){                 function ayu(a , b){    c = (a +b)/2; return c;}
//  return(a + b)/2;                             c1 = ayu(4 , 5);
//}                                               c2 = ayu(56 ,34)
// console.log(c1 ,c2)
//c1=avg (2,5);
//c2 = avg (56,78);
//console.log(c1 , c2);

//Condtionals in java scripts ->>>>>>>>>
// var age = 114;
// //single if statment
// if(age > 18){
//     console.log('you are not a kid');
// }
//if-else statment
// if(age > 18){
//     console.log('you are not a kid');
// }
// else{
//     console.log('you are a kid');
// }

// //if-else ladder
// if(age > 32){
//   console.log('you are not a kid')
// }
// else if(age > 26){
//   console.log('not a kid anymore')
// }
// else if(age > 22){
//   console.log('or bhai ksa bade hogae ho')
// }
// console.log('End of ladder')


var arr = [1, 2, 34, 5, 5];
// // console.log(arr);

// // for(var i=0; i<arr.length; i++){
// //   console.log(arr[i])
// // // }

// // //for each loop - Good for iterating array 
// // arr.forEach(function(element){
// //   console.log(element)
// // })

// // let j = 0;
// // // const ab = 0; //jo kabhi change ni karinge uske leye use hota a const
// // // ab = ab + 1;
// // // ab++
// // // while(j<arr.length){
// // //   console.log(arr[j]);
// // //   j++; 1ka increment hoga
// // // }
// //   // do{
// //   //   console.log(arr[j]);
// //   //   j++;

// //   // }while(j < arr.length);

// // let myarr = ['fan', 'car', 67, null , true];
// // //Array Methods
// // // console.log(myarr.length)
// // // myarr.pop();
// // // myarr.push('king')
// // // myarr.shift()
// // //myarr.unshift('harry')

// // let newlen = myarr.unshift('harry')
// // console.log(newlen);

// // console.log(myarr);


// //STRING METHOD IN JAVA

// let mylovelystring = "Ayush is a good boy"
// // console.log(mylovelystring.length);
// // console.log(mylovelystring.indexOf("good"))
// // console.log(mylovelystring.lastindexOf("good"))
// //console.log(mylovelystring.slice(0,5))
// // d = mylovelystring.replace("Ayush", "rohan");
// // console.log(d, mylovelystring)

// // let myDate = new Date();
// // console.log(myDate.getTime());
// // console.log(myDate.getFullYear());
// // console.log(myDate.getDay());
// // console.log(myDate.getHours());

// //DOM manipulation
// let elem = document.getElementById('click');
// console.log(elem);

// let elemClass = document.getElementsByClassName("container")
// console.log(elemClass);
// //elemClass[0].style.background = "yellow"
// // elemClass[0].classList.add("bg-primary")
// // elemClass[0].classList.add("text-success")

// // console.log(elem.innerHTML);
// // console.log(elem.innerText);


// // console.log(elemClass[0].innerHTML);
// // console.log(elemClass[0].innerHTML);

// tn = document.getElementsByTagName('div')
// console.log(tn)
// createdElement = document.createElement('p');
// createdElement.innerText = "this is a created para"

// createdElement1 = document.createElement('b');
// createdElement1.innerText = "this is a created para"
// tn[0].appendChild(createdElement);
// tn[0].replaceChild(createdElement1 , createdElement);
// //removeChild(element) ----> remove an element


// //selecting using query
// sel = document.querySelector('.container')
// console.log(sel)

// sel = document.querySelectorAll('.container')
// console.log(sel)

// //Events in javascript

// //  function clicked(){
// //      console.log('button was clicked')
// //  }

// // window.onload = function(){
// //     console.log('this document was loaded')
// // }

// //  firstcontainer.addEventListener('click', function(){
// //      document.querySelectorAll('.container')[1].innerHTML = "<b> we have clicked </b>"
// //      console.log("click hua")
// //  })

// // firstcontainer.addEventListener('mouseover', function(){
// //     console.log("mouse on container")
// // })


// // firstcontainer.addEventListener('mouseout', function(){
// //     console.log("mouse out of container");
// // })


// let prevHTML =   document.querySelectorAll('.container')[1].innerHTML = "<b> we have clicked </b>"
//  firstcontainer.addEventListener('mouseup', function(){
//     document.querySelectorAll('.container')[1].innerHTML = prevHTML;
//      console.log("mouseup on container")
//  })


//  firstcontainer.addEventListener('mousedown', function(){
//     document.querySelectorAll('.container')[1].innerHTML = "<b> we have clicked </b>"
//      console.log("mousedown on container")
//  })


//Arrow function =>
// function summ(a , b){
// return a+b;
// }

// sum =(a,b) => {
//     return a+b;
// }


//SET TIMEOUT SET INTERVAL----------->

logkaro = () => {
    console.log("I am your log")
    document.querySelectorAll('.container')[1].innerHTML = "<b> set intervalo fired </b>"//achi chiz ha yeh query change hojata ha sentencer isme 
}
//setTimeout(logkaro , 3000);
//regular agr logkaro ko repeatedly chalana ha to yeh user
//setInterval(logkaro , 2000)
//usew clear interval or timeout for stopping set events
//clr = setInterval(logkaro , 2000); //rokne ke leye interval console ma we clearinterval(clr)


//JAVASCRIPT LOCAL STORAGE - STORE DATA IN USERS COMPUTER 
//-> lOCAL STORAGE sab ka hota ha bgoogle , lite server
// localStorage.removeItem('name')
//localStorage.clear();
//JSON ------> JAVA SCRIPT OBJECT NOTATION, DATA KO STRING MA CONVERT KRKE ACHE SE TRASNPORT KR SKTE HA
localStorage.setItem("Ayush","khaskalam")
localStorage
localStorage.getItem('name')
//now use json
// obj = {name: "ayush", length:1}
// jso = JSON.stringify(obj);
// console.log(jso)
// console.log(typeof jso) //typeof is use to show that string ha yah konsa data type ha
// parsed = JSON.parse('{"name": "ayush", "length":1, "a":{"this": "that"}}')
// console.log(parsed);


//ECMASCRIPT ES6---->
//Template literals -> Backtciks
// a = 34;
// console.log(`this is my ${a}`)


