/*personArray1.js와 동일한 방법으로 persons1 배열을 생성한다.
persons1 배열을 복제해서 persons2 배열을 생성한다.
persons2 배열을 새로 배열을 만들어서, persons1 배열의 값들을 복사.
deep copy가 되도록 복제해야 한다.
즉 배열만 복제 되는 것이 아니고, 배열이 참조하는 객체들도 복제 되어야 한다.
persons2 배열을 출력한다.*/

function createPerson(s, i) {
    return { name: s, age: i };
  }

// (1) personArray1.js와 동일한 방법으로 persons1 배열을 생성
let persons1=[];
for(let i=0; i< 10; ++i){
    persons1[persons1.length]=createPerson("홍길동", 16 + i);;
}

// (2) persons2 배열을 새로 배열을 만들어서, persons1 배열의 값들을 복사
let persons2=[];
for(let i=0; i< 10; ++i){
    persons2[i]=createPerson(persons1[i].name, persons1[i].age);
}

// (3) persons2 배열을 출력
console.log(persons2);

// (추가) persons1 배열을 수정하였을 때 persons2 배열이 수정되는지 보기 위한 코드
persons1[0].name="임꺽정";
persons1[0].age=10;
console.log(persons2);

