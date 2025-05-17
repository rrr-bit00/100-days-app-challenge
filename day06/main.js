const judgebutton = document.getElementById("judge");
const resetbutton = document.getElementById("reset");
const resultText = document.getElementById("result");
const input = document.getElementById("inputs");

let answer = Math.floor(Math.random() * 100) + 1;
let count = 0;
let attemptsLeft = 5;
let gameEnd = false;

judgebutton.addEventListener("click", () => {
    if (!gameEnd) main();
});

resetbutton.addEventListener("click", () => {
    resetGame();
})


function main() {
    input.focus();
    check = checkError(Number(input.value));
    if (check) return;

    displayText();
    let state = checkAnswer(Number(input.value));

    resultText.className = "";
    let text = getMessage(state);
    resultText.textContent = text;

    if (state === "correct") gameEnd = true;
    if (state !== "correct" && count > 4) gameOverResult();
    input.value = "";
};


function checkError(inputNum) {
    const error = document.getElementById("error")
    const errorLog = document.getElementById("errorLog");
    errorLog.textContent = "";

    if (input.value.trim() === "") {
        errorLog.textContent = "値を入力してください";
        return true;
    } else if (isNaN(inputNum)) {
        console.log(typeof(input));
        errorLog.textContent = "数字を入力してください";
        error.appendChild(errorLog);
        document.getElementById("inputs").value = "";
        return true;
    } else if (inputNum < Number(1) || inputNum > Number(100)) {
        errorLog.textContent = "1から100までの数字を入力して下さい"
        error.appendChild(errorLog);
        document.getElementById("inputs").value = "";
        return true;
    }
    return false;
}


function displayText() {
    resultText.textContent = "";
    count += 1;
    attemptsLeft -= 1
    document.getElementById("num-of-challenge").textContent = `あと${attemptsLeft}回挑戦できます！`
}

function checkAnswer(input) {
    if (input === answer) return "correct";
    else if (input > answer) return "high";
    else return "low";
};


function getMessage(state) {
    if (state === "correct") {
        resultText.classList.add("correct");
        return `おめでとう！${count}回目に正解しました！`
    } else if (state === "high") {
        resultText.classList.add("high");
        return `入力された数字の方が大きいです！`
    } else {
        resultText.classList.add("low");
        return `入力された数字の方が小さいです！`
    };
};


function resetGame() {
    answer = Math.floor(Math.random() * 100) + 1;
    count = 0;
    attemptsLeft = 5;
    resultText.textContent = "";
    document.getElementById("num-of-challenge").textContent = `あと${attemptsLeft}回挑戦できます！`
    document.getElementById("inputs").value = "";
    input.focus();
    gameEnd = false
};


function gameOverResult() {
    const resultText = document.getElementById("result");
    resultText.textContent = "☠GAMEOVER☠"
    resultText.className = "gameover"
    gameEnd = true;
};
