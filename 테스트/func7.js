//f와 f2는 완전히 같은 변수인가?

function factory() {
  return function (msg) {
    console.log(msg)
  }
}

let f = factory()
f("hello")
/*----------------구분선-----------------------*/
let f2=function (msg) {
    console.log(msg)
  }
f2("hello")

