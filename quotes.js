const quotes = [
  {
    quote: "01 The way to get started is to quit talking and begin doing.",
    author: "walt Disney"
  },
  {
    quote: "02 The way to get started is to quit talking and begin doing.",
    author: "walt Disney"
  },
  {
    quote: "03 The way to get started is to quit talking and begin doing.",
    author: "walt Disney"
  },
  {
    quote: "04 The way to get started is to quit talking and begin doing.",
    author: "walt Disney"
  },
  {
    quote: "05 The way to get started is to quit talking and begin doing.",
    author: "walt Disney"
  },
  {
    quote: "06 The way to get started is to quit talking and begin doing.",
    author: "walt Disney"
  },
  {
    quote: "07 The way to get started is to quit talking and begin doing.",
    author: "walt Disney"
  },
  {
    quote: "08 The way to get started is to quit talking and begin doing.",
    author: "walt Disney"
  },
  {
    quote: "09 The way to get started is to quit talking and begin doing.",
    author: "walt Disney"
  },
  {
    quote: "10 The way to get started is to quit talking and begin doing.",
    author: "walt Disney"
  }
]

const quote = document.querySelector("#quotes span:first-child");
const author = document.querySelector("#quotes span:last-child");

console.log(quotes[0]); // 실제 아이템 개수 -1

//Math.random() * 10 // 랜덤의 숫자
//Math.round(1.5); // 반올림
//Math.ceil(1.1) // 숫자를 천장까지 높여줌
//Math.floor(1.9999); // 숫자를 바닥까지 낮춰줌 (반올림 낮춤..?)
//Math.floor(Math.random() * 10);

const todayQuote = quotes[Math.floor(Math.random() * 10)];

//console.log([1,2,3,4,5].length);

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;