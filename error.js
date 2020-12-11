process.on("uncaughtException", err => console.log("예기치 못한 에러", err));

setInterval(() => {
    throw new Error("서버를 고장내주마!");
}, 1000);

setTimeout(() => {
    console.log(`process.on'uncaughtException' 때문에 실행 됩니다.`);
}, 2000);
