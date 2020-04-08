// setTimeout에 여러 파라미터 변수를 넣어보는 테스트
// 왜 delay를 0으로 해도 id값이 먼저 로그에 출력될까?

function printTime(...msg) {
    for(let i=0; i<msg.length; i++){
        console.log(msg[i]);
    }
    console.log(new Date());
  }
  
  setTimeout(printTime, 0, "바로", "테스트1","테스트2");

  let id=setTimeout(printTime, 1000, "1초 후", "테스트1","테스트2");
  console.log(id);

  