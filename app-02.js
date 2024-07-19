 // -------------------- 22 ------------------- //
/*  const loginInput = document.querySelector("#login-form input");
 const loginButton = document.querySelector("#login-form button"); */


/*  function onLoginBtnClick() {
  // console.dir(loginInput) input에 해당하는 여러 정보를 알 수 있다.
  console.log("click!!!")
  console.log("hello", loginInput.value)
 }

 loginButton.addEventListener("click", onLoginBtnClick)
 */
 //input과 button은 document 가 아닌 loginform에서 찾을 수 있다.



 // -------------------- 23 ------------------- //
 // 위 코드에서 사용자가 name을 입력했을 경우에만 버튼을 클릭하게 하고 싶을 때

 /* function onLoginBtnClick() {
  const username = loginInput.value;
  if(username === "") {
    alert("please write your name")
  }
  else if(username.length > 15) {
    alert("Your name is too long")
  }

 }

 loginButton.addEventListener("click", onLoginBtnClick) */

 //user의 입력값 유효성 확인은 좋은 습관... user를 믿지 않기 

  // -------------------- 24 ------------------- //
  // 좋은 툴과 이미 갖고있는 기능을 사용하는 것이 좋다.

/*   function onLoginBtnClick() {
    const username = loginInput.value;
    console.log(username)
   }
  
   loginButton.addEventListener("click", onLoginBtnClick); */

   // 브라우저가 새로고침하지 않고 값을 볼 수 있도록



/*   const link = document.querySelector("a")


   function onLoginSubmit(event) { // 공간을 만들어서 정보를 받는것.. 브라우저에서 기본 동작을 실행하지 않도록 막아주는 것 뿐이다.
    event.preventDefault();
   const username = loginInput.value;
    console.log(username)
    //console.log(event);
   }

   function handleLinkClick(event){//a 링크의 기본 동작을 막고싶다면? : 예를들어 무엇이, 어디가 클릭되었는지 정보를 알고싶을 때....함수를 실행시키는 동시에 object를 넣어줌...
    event.preventDefault();
    console.dir(event)
   // alert("clicked")
   }

   loginForm.addEventListener("submit",onLoginSubmit);
   link.addEventListener("click",handleLinkClick)
 */

   //tomato argument에 포함된 정보로! 이해해야할 부분.. 하나의 argument를 받고 js에서 function을 호출하도록 한다.  //onLoginSubmit({information}).. 언제 submit 되었는가 등등을... 전부 호출해줌.
//submit 시에는 페이지를 새로고침 한다.
//preventDefault는 addEventListener 안에 있는 함수는 직접 실행하지 않는다는것... 브라우저가 하는것 


  // -------------------- 24 ------------------- //
  // Getting username...  user가 버튼 클릭하면... form 사라지도록
  
const loginForm = document.getElementById("login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting")
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";



  function onLoginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  loginForm.classList.add(HIDDEN_CLASSNAME);
    //console.log(username)
    //유저 이름 변수로저장
    //h1에 넣어주기.
    // greeting.innerText = "Hello" + username;
    localStorage.setItem(USERNAME_KEY,username);
    paintGreetings();
  }


  function paintGreetings(username) {
    greeting.innerText = `Hello ${username} keep going` ; // string 이랑 변수를 하나로 합쳐주는 방법
    greeting.classList.remove(HIDDEN_CLASSNAME);
  }



const savedUsername = localStorage.getItem(USERNAME_KEY);

  if(savedUsername === null) {
    // show the form 
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onLoginSubmit);
  }
  else {
    // show the greetings
    paintGreetings(savedUsername);
  }

   // loginForm 이나 loginInput 처럼 중요한 정보를 담은게 아닌 경우는 대문자로 작성함

  // -------------------- 25 ------------------- //
  // saving username 유저의 이름을 저장하는 방법... 무언가를 저장하는 기능은 자주 사용된다.
  // 해당 API의 이름은 local storage... 개발자 도구 통해 확인 (application -> local storage) 
  // mdn을 통해 local storage API를 살펴보면 다양하고 멋진 method를 볼 수 있다
  //ex) setitem.... 사용시 localstorage에 정보를 저장할 수 있음
  //localStorage.setItem("username","jiu") -->  값 저장하기
  // localStorage.getItem("username") --> 값 불러오기 
  // localStorage.removeItem("username") --> 값 지우기 ... key와 value값만 있으면된다.
  //console.log(savedUsername)
  // 오타 방지를 위해 username은 변수로 넣을것 

//인수 Argument
//인수(Argument)는 함수를 호출할 때 건네주는 변수입니다.

//인자 Parameter
//인자(Parameter)는 함수에서 정의되어 함수 내부에서 사용되는 변수입니다. 인자같은 경우는 매개변수, 파라미터라는 이름으로 많이 불리기도 합니다.

// 함수를 선언할 때 파라미터를 넣고, 호출할 때 인수로 받아서 가져온다. 매개변수(파라미터)를 사용하는 이유는 실행 function 에서 다시 한 번 변수를 선언할 필요도 없고 각 function이 해당 역할 한가지만 실행할 수 있는 간편함 등이 있기 때문

// -------------------- 26 ------------------- //

const clock = document.querySelector("#clock");
function sayHello() {
  console.log("hello")
}

// interval 매번 일어나야 하는것 / timeout 기다렸다가 나타나야 하는것

//setInterval(sayHello,5000)
//setTimeout(sayHello,5000)


const date = new Date();
console.log(date.getDate());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getFullYear());



function getClock(){
  const date = new Date();
  const hours = String(date.getHours()).padStart(2,"0");
  const minutes = String(date.getMinutes()).padStart(2,"0");
  const seconds = String(date.getSeconds()).padStart(2,"0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock(); // 최초 실행
setInterval(getClock,1000); // 이후 1초마다 실행


