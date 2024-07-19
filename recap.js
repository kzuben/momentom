/*  todo.js */


// 1단계 : set up
// html에 있는 요소들을 불러와 변수 선언 해주기 



// 3단계 : 입력한 값을 브라우저에서 저장하는 방법... localStorage 에서 불러와서 화면에 그려주기....
// 할일목록을 변수로 넣어줌

// 해당 변수를 배열로 넣어줌 (const가 아닌 let 사용... 변화되는 값이므로)

// 저장하기 위한 함수
function () {
 //localStorage에 array를 넣을수는없으니... string으로 만들어서 유사하게....JSON.parse("[1,2,3,4]") ... array를 가지고 단순한 string 으로 바꿀 수가 있다.


}

// 4단계: li 삭제 버튼 누를 때 삭제하는 함수..파라미터를 넣어줌
function () {
 // console.log(파라미터) 파라미터 갖고있는 property를 볼 수있다. ex) target... 우리가 어떤 버튼을 클릭해야하는지 등등을 알기 위하여...

// console.dir(파라미터.target) // 여기서 parentNode 또는 parentElement가 li 라는 사실을 알 수 있음

// 콘솔을 통해 파라미터의 타겟의 부모요소 호출

// li는 파라미터의 타겟의 부모요소임

//li의 아이디얻기

// li 삭제
}

// 2단계 : 할일 목록에 해당하는 li를 생성하기 위한 함수 (파라미터불러올것)

function () {
  //console.log를 통해 해당 파라미터를 잘 불러오는지 확인
  
  // li를 변수로 선언해서 값을 할당

  // li의 아이디가 필요함 li의 아이디는 --> 할일목록의 아이디
  
  // li 내에 들어갈 텍스트를 span으로 묶음

  // 버튼 변수 생성

  // 버튼안에 텍스트 x로 지정

  // 버튼 클릭 시 실행되는 삭제 함수 이벤트

  // li의 자식으로 span 생성

  // li의 자식으로 button도 생성

  // span의 내용은 할일목록의 텍스트

  // li를 호출해보기 console
 
  // ul의 자식으로 li 생성

}


// 5단계 : 입력했을 때 값을 받아서 paintTodo를 호출함
//화면에 보여주기 위한 함수 호출.. 파라미터를 넣음
function () {

//이벤트의 기본기능을 막음

// input 값 비우기 전에 저장하기.. 변수에

// input의 value를 확인하기..콘솔

// input에 입력하면 값 비우기

// toDoInput.value는 값이 "" (empty)여서 안보임..드래그해보면 빈칸이 하나 있음... 콘솔

// object 형성... 새로운 할일
const  = {
  property? : 깂?,
  ...
}
// 입력한 값을 저장하기 위해 array에 push...

// localStorage에는 텍스트만 저장할 수 있다... array를 넣을 수 없음


// vorm이 submit되면 함수실행


// 6단계: 아이켐들 저장하기 .. 새로고침해도 안보이지않기위한 함수 파라미터를 넣음

function () {
  //console.log("this is the turn of",item)
  
  // 화면에 보여주는함수호출
}


// 7단계 :  localstorage 통해 값 받아와서 변수에 넣어줌


// 콘솔로 해당 저장된값확인

if//(저장된값이 없지않을때) 
{ 
 
 // savedToDos가 있는 경우
  // string을 자바스크립트 object로 가져옴.. 변수로 선언

 //위 내용 콘솔로 불러오기

  // 화면에서 지워도 STORAGE 에서는 지우지 않았으므로..... 삭제하고 새로고침하면 다시 돌아옴......

  // foreach
}