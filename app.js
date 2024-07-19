// -------------------- START 01 -------------------- //
// variable : 변수, 숫자... 정수: interger, 소수: float
//const a = 5;
//const b = 2;

// 변수에 공백은 사용할 수 없다, 문자 : string, 상수 constant.. 카멜 케이스

const veryLongVariableName = 0;

// 파이썬에서 변수를 선언하는 형식... 스네이크 케이스
const very_long_variable_name = 0;

//const myName = "Jiu";

//console.log(a + b); //괄호 안의 내용이 콘솔에 출력
//console.log(a * b);
//console.log(a / b);
//console.log("hello" + myName);

// -------------------- 02 -------------------- //

// let 과 const의 차이 : const는 상수(constant) 값이 바뀔 수 없다, let은 변경할 수 있다. 첫 생성시에만 let을 쓰고 변경을 원할 때는 let을 생략함...

const a = 5;
const b = 2;
let myName = "Jiu"

console.log(a + b); 
console.log(a * b);
console.log(a / b);

console.log("hello" + myName);

// 변수를 바꿈 위 let myName이 const myName 이었다면 에러가 확인됨 
myName = "kim"

console.log("your new name is " + myName);

// ... 기본적으로는 const를 사용하고, 필요에 따라 let을 사용하기
// var은 원한다면 어디서든 내용 업데이트가 되었다.. 보호받을 수 없음 (실수로 업데이트 했을 때 프로그램이 알려줄 수 없다)--> var은 사용하지않는다

// -------------------- 03 -------------------- //
//데이터 타입 : boolean (true / false)
// ex: 사용자가 로그인했는가? 비디오가 재생되고 있는가? 웹사이트가 로딩되고 있는가? 등에 사용된다


// <존재하지않음>과 <정의되지않음>과 <아무것도없음>의 차이
const amIFat =  null;// null 아무것도 없음.. 없다!
let something; // undefined 정의되지 않음.. 존재하지만,값이 없다.
console.log(amIFat);
console.log(something);

// null은 자연적으로 발생하지않고, variable 안에 어떤것도 없다는 것을 알려주기 위해서 있다
// 파이썬에는 null 대신 None 이 존재함

// -------------------- 04 -------------------- //
//데이터를 정리하는 법.. 데이터의 구조 array : 배열

/* const mon = "mon";
const tue = "tue";
const wed = "wed";
const thu = "thu";
const fri = "fri";
const sat = "sat";
const sund = "sund"; */

// const days0fWeek = mon + tue + wed + thu + fri + sat + sund;각각에 접근하기 위해 ....데이터로 만들어진 리스트를 생성! 배열 안에는 무엇이든 넣을 수 있다.

//const days0fWeek = [mon, tue, wed, thu, fri, sat, sund];
//console.log(days0fWeek);

//const nonsense = [1,2,"hello",false,null,true,undefined,"jiu"];
//console.log(nonsense)


const days0fWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];
console.log(days0fWeek[1]); // 배열의 2번째 항목 가져오기... 컴퓨터는 숫자를 0부터 센다

// array에 원하는 데이터를 추가할 수 있다.
days0fWeek.push("sun"); // .의 의미는? 
console.log(days0fWeek);


const apple = "apple";
const potato = "potato";

const toBuy = ["potato","tomato","pizza"];
toBuy.push("kimbab");

console.log(toBuy);
console.log(toBuy[2])
console.log(toBuy[2123123]) //undefined;


// -------------------- 05 -------------------- //
// object... variable의 이름 property 특성

/* const playerName = "jiu";
const playerPoints = 121212;
const playerHandsome = true;
const playerFat = "little bit"; */

/* player.name;
player.points;
player.handsome; */

//player[0] == name
//player[1] == points
//const player = ["jiu", 1212 , flase, "little bit"];

// 더 좋은 방법 .. object는 중괄호를 사용함

const player =  {
  name: "jiu", //property
  points: 10,
  fat: true
};

console.log(player);
console.log(player.name); // object 안의 요소를 호출하는 법
console.log(player["name"]);

console.log(player); // {name: "jiu", points: 10, fat: true}
player.fat = false; // 오브젝트 안의 프로퍼티의 값을 변경할 수 있음
console.log(player); // {name: "jiu", points : 10, fat: false}


player.lastName = "potato";
console.log(player); // {name: "jiu", points : 10, fat: false, lastName : potato}

player.points = player.points + 15;
console.log(player.points); // 25


// -------------------- 06 -------------------- //
// function 01
// 어떻게 function을 만드는가? 반복해서 사용할 수 있는 코드조각...function... 우리는 코드를 쓰고싶지 않다. 가능한 적게 쓰고싶다

console.log("Hello my name is Jiu")
console.log("Hello my name is Jiu02")
console.log("Hello my name is Jiu03")
console.log("Hello my name is Jiu04")


// 여기서 바뀌는 부분은 ()내용 뿐이다. 많은 복사를 할 필요가 없음
// 반복을 최대한 줄이기 위해 function을 사용한다.. 캡슐화! 한번에 실행

/* function sayHello() {
  console.log("Hello my name is")
} */

//console.log(sayHello)

//alert();
//console.log();

// argument : 인수


function sayHello(nameOfPerson, age) {
  console.log("Hello my name is " + nameOfPerson + "and I'm " + age + " years old")
}

sayHello();
sayHello("Jiu", 10);
sayHello("Jiu02" , 23);
sayHello("Jiu03" ,21);

function plus (firstNumber, secondNumber) {
  console.log(firstNumber + secondNumber) // NaN... 이 안에서만 존재할 수 있다. function 밖에선 firstNumber 존재하지 않음
}

function devide(a,b) {
  console.log(a / b)
}

plus(); // undefined undefined
plus(8,60); // 68
devide(98,20); // 4.9



const player02 = {
name: "Jiu",
sayHello : function(otherPersonName) {
  console.log("hello! " + otherPersonName + " nice to meet you")
}
};

console.log(player02.name)
player02.sayHello("Jiu02")
player02.sayHello("Jiu03")


function plus02(a,b) {
  console.log(a + b);
}

plus02(5,5)

// -------------------- 07 -------------------- //
//Recap
const abc = null; // 비어있다.
let isNicoFat = true;

//console.log(abc);
isNicoFat = false;

// 변수에는 숫자도 string도 저장할 수 있다 boolean 역시 마찬가지다
let hello;
console.log(hello) //undefined;

//null None Nil

const me = "sexy";
const days = [
1,2,false,true,null,undefined,"text",me
];

const toBuys = ["potato", "tomato", "pizza"];
console.log(toBuys[1]);
toBuys[2] = "water";
console.log(toBuys);
toBuys.push("lemon");
console.log(toBuys); // (4) ["potato","tomato","pizza","lemon"]


// -------------------- 08 -------------------- //
//Recap II

const playerNumberOne = {
  name: "Jiu",
  age: 98,

}

console.log(playerNumberOne,console);
console.log(playerNumberOne.name);

playerNumberOne.name = "jiu02";
console.log(playerNumberOne.name);
playerNumberOne.sexy = "soon";
console.log(playerNumberOne)


function plus03(potato,salad) {
  console.log(potato + salad);
}

plus03(1.2313213,98989);


function minusFive(potato) {
  console.log(potato - 5)
}

minusFive(5,10,12) //0 첫번째만 나옴

console.log("");

const calculator = {
  add : function(a,b) {
    console.log(a**b)
  }
}

calculator.add(5,3)

// -------------------- 09 -------------------- //
//Recap II

const player03 = {
  name: "jiu1",
  age:98,
  add: function(a,b)
  {
    console.log(a+b)
  }
}

player03.add(4,1)

console.log(player03.name,console);

player03.name="jiu2";
console.log(player03.name);
player03.sexy= "soon";
console.log(player03);


function plus04(a,b) {
 // console.log(2+2);
 // 더 편하게 만들기! 인자를 받는다.
 console.log(a + b);
 console.log(a - 5);
}

//plus04(1,2);
//plus04(11312312231,2.13213132);
plus04(1,2);

// -------------------- 10 -------------------- //
//Returns

const calculatorTest = {
  plus: function(a,b) {
  console.log(a+b + "132!!")
   return a + b;
   console.log(a+b + "123!!"); // 호출되지않는다.
  },
  minus: function(a,b) {
    return a - b;
  },
  times: function(a,b) {
    return a * b;
  },
  divide: function(a,b){
    return a / b;
  },
  power: function(a,b) {
    return a ** b;
  }
}

calculatorTest.plus(123,123)
calculatorTest.minus(3,1)
calculatorTest.times(13,2)
calculatorTest.divide(132,2)
calculatorTest.power(132,13)

//function 밖에서 결과값을 원한다면? 화면에 표시하기위해서는 data를 받아서!
// 나이를 계산하는 function
// function을 실행시킬 때 age 자리로 인자가 대체 되면서 return 결과를 알려주는 function에서 return을 사용한다.

// *** 한번 return 하면 function은 끝난다. return을 하면 function은 작동을 멈추고 결과값을 return 하고 끝나버린다

const age = 96;

function calculateKrAge(age0fForeigner) {
  return age0fForeigner + 2;
}

const krAge = calculateKrAge(age);
console.log(krAge);

const calculate = { 
  plus : function (a, b) {
    return a + b ;
  },
  minus : function (a, b) {
    return a - b ;
  },
  times : function (a, b) {
    return a * b ;
  },
  divide : function (a, b) {
    return a / b ;
  },
  power : function (a, b) {
    return a ** b ;
  }
}

const plusResult = calculate.plus(2,12)
const minusResult = calculate.minus(plusResult,10);
const timesResult = calculate.times(10,minusResult);
const divideResult = calculate.divide(timesResult,plusResult);
const powerResult = calculate.power(divideResult,minusResult);


// -------------------- 11 -------------------- //
// if 조건문 (conditional)
// 나이계산기 만들기

//const userAge = prompt("당신의 나이는?"); //css를 적용시킬 수 없다.. 오래된 방법이기도 함.. 취소시 null

//console.log(userAge) // 입력하는 값이 number 가 아니다....
//console.log(typeof userAge); // string
//console.log(typeof parseInt(userAge)); // string

// parseInt()  string을 number로 변환함! string을 처리하지는못함 lalala 같은

/* const userAgeNumber = parseInt(prompt("당신의 나이는?")); */
//console.log(userAgeNumber);

// NaN (Not a number) 가 나올 때....
/* console.log(isNaN(userAgeNumber)); */ // boolean을 return (반환) 한다.즉 false

/* if(condition) {
  /// condition === true

} else {
  /// condition === false 없어도 됨... 없다면
} */


  // userAgeNumber가 Not a number인 것이 true일 때
/*   if(isNaN(userAgeNumber)) {
    console.log("please write a number.")
  }

  else {
    console.log("Thank you for writing your age.")
  } */


/*   const userAgeResult =NaN;

  if(true) {
    console.log("please write a number")
  } */


    // -------------------- 12 -------------------- //

  /* if(isNaN(userAgeNumber)) {
      console.log("please write a number.")
    }

    else if(userAgeNumber<18) {
      console.log("You are too young")
    }
  
    else {
      console.log("You can drink.")
    } */
  

    /*    if(isNaN(userAgeNumber) || userAgeNumber < 0) {
        console.log("please write a real positive number.")
      }

      else if(userAgeNumber<18) {
        console.log("You are too young")
      }

      else if(userAgeNumber >= 18 && age <=50) { //두가지가 모두 부합해야 함 ! 하나라도 false 이면 해당 안됨 .. OR의 경우는 || 으로 표기함.. 하나만이라도 true면 됨
        console.log("You can drink")
      }

      else if(userAgeNumber >= 50 && userAgeNumber <=80) {
        console.log("You should exercise")
      } 

      else if(userAgeNumber > 80) {
        console.log("You can do whatever you wnat")
      }

      else {
        console.log("You can't drink.")
      } // 음수를 입력한다면...

    */
      // -------------------- 13 -------------------- //

       
/*     if(isNaN(userAgeNumber) || userAgeNumber < 0) {
      console.log("please write a real positive number.");
    }

    else if(userAgeNumber<18) {
      console.log("You are too young");
    }

    else if(userAgeNumber >= 18 && age <=50) { //두가지가 모두 부합해야 함 ! 하나라도 false 이면 해당 안됨 .. OR의 경우는 || 으로 표기함.. 하나만이라도 true면 됨
      console.log("You can drink");
    }

    else if(userAgeNumber >= 50 && userAgeNumber <=80) {
      console.log("You should exercise");
    } 

    else if(userAgeNumber > 80) {
      console.log("You can do whatever you wnat");
    }

    else if(userAgeNumber === 100) {
      console.log("wow you are wise");
    }
  
    else {
      console.log("You can't drink.");
    } // 음수를 입력한다면...


    if((a && b) || (c && d) || false) {
      ////////// OR은 1개만 true면 실행됨... and는 모두 true여야함!
    }
 */
 // -------------------- 14 -------------------- //
 // javascript on the browser ... 상호작용 하는법
    
//document.title //momentum html에서 정보 가져오기
//document.title = "hi" // html에 정보 입력하기


 // -------------------- 15 -------------------- //
//const title = document.getElementById("title") // <h1 id="title"> grab me! </h1>
//const title = document.getElementsByTagName("h1")
const h1 = document.querySelector("h1")
console.log(h1)
console.dir(h1) //element를 자세히 보여줌

h1.innerText ="Got You!"

console.log(h1.id);
console.log(h1.className);


 // -------------------- 16 -------------------- //
 // element를 가져오고 변경하기
 const hellos = document.getElementsByClassName("hello");
 console.log(hellos);

 const titleH1 = document.querySelector(".hello h1");
 console.log(titleH1);

 // -------------------- 17-------------------- //
//events :ex) click




/* function handleTitleClick(){
  console.log("title was clicked!")
  h1.style.color ="blue";
}

function handleMouseEnter(){
  h1.style.color ="red";
  h1.innerText = "Mouse is here!"
}

function handleMouseLeave(){
  h1.innerText =  "Mouse is gone!"
  h1.style.color ="black";
} */


//title.addEventListener("click", handleTitleClick)
//title.addEventListener("mouseenter",handleMouseEnter)
//title.addEventListener("mouseleave",handleMouseLeave)


 // -------------------- 18-------------------- //
//Events part two .... web APIs라는 문장이 포함된 페이지를 찾는다. (검색어:h1 html element mdn ) --> 자바스크립트 관점의 html heading element라는 의미이기 때문

console.dir(h1)
//여기서 나오는 property 앞에 on이 붙었다면 그것이 event 인 것....


 // --------------------19 ------------------- //
// More Events.... event 내부를 살펴보고, event를 listening 하는 다른 방법

//h1.onclick = handleTitleClick;
//h1.onmouseenter = handleMouseEnter;
//h1.onmouseleave = handleMouseLeave;


// 그러나 addeventlistener를 선호하는 이유는? 추후 removeeventlistener을 사용할 수 있기 때문이다.
//error 이벤트 등등 여러가지 이벤트가 있음.. resize 역시.... 


function handleWindowResize() {
  document.body.style.backgroundColor = "tomato";
}

window.addEventListener("resize",handleWindowResize);

// body, title 등을 제외한 나머지는 document.queryselector를 통해서 찾아야 한다. 

function handleWindowCopy() {
  alert('copier!')
}

window.addEventListener("copy",handleWindowCopy);

// 원하는 어떤 이벤트도 가져올 수 있다.
// 대상이 달라질 것이고 패턴은 같다.


//우리가 wifi에 연결되어있는지 브라우저가 알 수 있다.


function handleWindowOffline() {
  alert ("SOS no wifi")
}

function handleWindowOnline() {
  alert ("ALL Good")
}

window.addEventListener("offline",handleWindowOffline);
window.addEventListener("online",handleWindowOnline);



 // -------------------- 20 ------------------- //


//console.dir(body)


/*  function handleMouseClick() {
    console.log(h1.style.color);

    if(h1.style.color === "blue") {
      h1.style.color = "tomato";
    } else {
      h1.style.color = "blue" ;
    }
 }

h1.addEventListener("click",handleMouseClick) */


// 위의 코드를 좀 더 깔끔하게 정리할 수 있다. h1의 color 현재 값을 저장하는것

/* function handleMouseClick() {
  const currentColor = h1.style.color;
  let newColor;
  if(currentColor === "blue"){
    newColor = "tomato";
  }
  else {
    newColor = "blue";
  }
  h1.style.color = newColor;
}

h1.addEventListener("click",handleMouseClick) */

 // -------------------- 21 ------------------- //

// javascript로 css 와 소통하는 방법
// javascript 안에서는 css를 작업하지 않고 ,, style에 지정해 놓은 뒤 이벤트로 불러주기



/* function handleMouseClick() {

    if(h1.className === "active") {
        h1.className = "";
    }
    else {
        h1.className = "active";
    }
}

h1.addEventListener("click",handleMouseClick)

 */

// 위 코드는 에러의 요소가 있으므로 변경!

/* function handleMouseClick() {

    const clickedClass = "clicked"
    if(h1.className === clickedClass) {
        h1.className = "";
    }
    else {
        h1.className = clickedClass;
    }
}

h1.addEventListener("click",handleMouseClick); */

// 위 코드의 문제점: h1이 갖고 있던 고유의 class를 무시하고 교체해버림! 최초의 classname이 없어져 버림....즉 좋은 방법이 아니다.


/* function handleMouseClick() {

    const clickedClass = "clicked";
    if(h1.classList.contains(clickedClass)) {
        h1.classList.remove(clickedClass);
    }
    else {
        h1.classList.add(clickedClass);
    }
}

h1.addEventListener("click",handleMouseClick);

 */


// 위 코드를 더욱 간단한 방식으로 toggle function 사용하기.. 또한 string은 반복하지 않는다.

function handleMouseClick() {
    h1.classList.toggle("clicked") // 있다면 제거하고 없다면 생성한다.
}
h1.addEventListener("click",handleMouseClick);

