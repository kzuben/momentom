
// -------------------- 27 ------------------- //
//set up

const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

// -------------------- 30 ------------------- //
//saving to dos
// 입력한 값을 브라우저에서 저장하는 방법... localStorage 에서 불러와서 화면에 그려주기....

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
  //localStorage.setItem("todos",toDos) //localStorage에 array를 넣을수는없으니... string으로 만들어서 유사하게....
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos))
  //JSON.parse("[1,2,3,4]") ... array를 가지고 단순한 string 으로 바꿀 수가 있다.
}


// -------------------- 29 ------------------- //
// Deleting To dos

//li를 삭제하기위한 함수
function deleteTodo(event) {
 // console.log(event) event가 갖고있는 property를 볼 수있다. ex) target...   우리가 어떤 버튼을 클릭해야하는지 등등을 알기 위하여...
  console.log(event.target)
  // console.dir(event.target) // 여기서 parentNode 또는 parentElement가 li 라는 사실을 알 수 있음
  console.log(event.target.parentElement)

  const li = event.target.parentElement;
  console.log(li.id) //li의 아이디얻기
  li.remove(); // li 삭제
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)) 
  saveToDos();
}

// -------------------- 28 ------------------- //
//adding Todos

//li를 생성함
function paintTodo(newTodo) {
  console.log("I will paint", newTodo);
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  const button = document.createElement("button");
  button.innerText = "X";
  button.addEventListener("click", deleteTodo);

  li.appendChild(span);
  li.appendChild(button);
  span.innerText = newTodo.text;
  console.log(li)
  toDoList.appendChild(li);
}



//입력했을 때 값을 받아서 paintTodo를 호출함
function handleToDoSubmit(event) {
  event.preventDefault(); // 기본 기능을 막음
  const newTodo = toDoInput.value; // 값 비우기 전에 저장하기
  console.log(toDoInput.value);
  toDoInput.value = "";// 입력하면 값 비우기
  console.log(newTodo,toDoInput.value); // toDoInput.value는 값이 "" (empty)여서 안보임..드래그해보면 빈칸이 하나 있음
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  }
  toDos.push(newTodoObj); // 입력한 값을 저장하기 위해 array에 push...
  // localStorage에는 텍스트만 저장할 수 있다... array를 넣을 수 없음
  paintTodo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit",handleToDoSubmit);


// -------------------- 31 ------------------- //

function sayHello(item) {
  //console.log("this is the turn of",item)
  paintTodo();
}


const savedToDos = localStorage.getItem(TODOS_KEY);
console.log(savedToDos);

if(savedToDos !== null) { // savedToDos가 있는 경우
 
  const parsedToDos = JSON.parse(savedToDos); // string을 자바스크립트 object로 가져옴
  console.log(parsedToDos);
  toDos = parsedToDos; // 화면에서 지워도 STORAGE 에서는 지우지 않았으므로..... 삭제하고 새로고침하면 다시 돌아옴......
  parsedToDos.forEach(paintTodo);
}


// -------------------- 32 ------------------- //
// filter는 filter 함수가 반드시 필요... foreach와 비슷한 방식
/* function sexyFilter() {

}
 */
//[1,2,3,4].filter(sexyFilter)

//filter 함수는 반드시 true를 리턴해야 한다.