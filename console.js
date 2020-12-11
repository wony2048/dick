const string = "abc";
const number = 1;
const boolean = true;
const obj = {
    outside: { inside: { key: "value" } },
};
console.time("전체시간");
console.log("평범한 로그 쉼표로 구분해 여러 값을 찍을수 있다");
console.log(string, number, boolean);
console.error("에러 메시지는 console.error에 담아 주세요");

console.dir(obj, { colors: true, depth: 2 });
console.dir(obj, { colors: true, depth: 1 });

console.time("시간측정");
for (let i = 0; i < 100000; i++) {
    continue;
}
console.timeEnd("시간측정");

function b() {
    console.trace("에러 위치 추적");
}

function a() {
    b();
}

a();

console.timeEnd("전체시간");
