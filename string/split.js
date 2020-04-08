/*위 문제의 문자열에서 공백을 기준으로 문자열을 쪼개서, 문자열 배열을 만들고,
그 배열을 출력하시오.*/

/*"When I find myself in times of trouble Mother Mary comes to me Speaking words of wisdom, let it be."
위 문자열에서 모음(aeiou)들의 위치를 출력하는 코드를 구현하시오.*/

let str = "When I find myself in times of trouble Mother Mary comes to me Speaking words of wisdom, let it be.";

let str2 = str.split(/[\t ,]+/);
    for (let i = 0; i < str2.length; ++i)
        console.log(str2[i]);