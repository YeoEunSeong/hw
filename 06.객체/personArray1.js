/*personArray1.js
비어있는 persons 배열을 생성한다.
for 루프의 본문에서 
persons 배열의 끝에 { name: "홍길동", age: 16 + i } 객체를 추가한다.
for 루프를 10번 반복한다.
persons 배열을 출력한다.*/


// (1) 비어있는 persons 배열을 생성
let persons=[];
// (2) persons 배열의 끝에  { name: "홍길동", age: 16 + i } 객체를 추가하는 for 루프
for(let i=0; i< 10; ++i){
    persons[persons.length]={ name: "홍길동", age: 16 + i };
}

// (3) persons 배열을 출력
console.log(persons);
