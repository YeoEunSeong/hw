/*1초 간격으로 현재 시각을 출력하는 코드를 구현하시오.
10번만 반복 호출하고 종료 되도록(clearInterval) 구현하시오.
힌트: 호출 횟수는 전역 변수로 세어야 함.*/


function printTime() {
    if(count++>=3) clearInterval(id); 
    console.log("현재시간: " + new Date());
  }

let count=1;
let id = setInterval(printTime, 1000);