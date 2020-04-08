
// (1) 빈 배열을 만든다.
let a = []; 

// (2) Math.random() 메소드를 사용하여, 1 이상 100 이하의 정수 난수를 100개 생성해서, 배열에 채운다.
for (let i = 0; i < 100 ; i++) {
    a[i] = Math.floor(Math.random() * (100) + 1);
}

// (3) 배열의 오름차순으로 정렬한다.
a.sort(compareNumber);

function compareNumber(i,j){
    return i-j;
}

// (4) 배열을 출력한다.
console.log(a);