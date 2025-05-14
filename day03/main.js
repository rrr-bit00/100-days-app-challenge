const buttons = document.querySelectorAll("#buttons button");
const reseult = document.getElementById("reseult");
const formula_his = document.getElementById("formula_history");
const remove_his = document.getElementById("remove_history");

let formula = '';
let historyList = [];

// localStorageの履歴を読み込む
window.addEventListener("DOMContentLoaded", () => {
    const save = localStorage.getItem("calc-history");
    if (save) {
        historyList = JSON.parse(save);
        historyList.forEach(({expression, reseults}) => {
            addHistory(expression, reseults)
        })
    }
})


buttons.forEach(btns => {
    btns.addEventListener("click", () => {
        const key = btns.dataset.key;

        if (key === 'AC') {
            reseult.textContent = '';
            formula = '';
            return;
        }
        else if (key === '=') {
            try {
                const replace = formula
                .replace(/×/g, "*")
                .replace(/÷/g, "/")
                .replace(/\^/g, "**")
                .replace(/√([0-9.()]+)/g, "Math.sqrt($1)");
                const answer = eval(replace);
                reseult.textContent = answer;

                // localStorageに履歴を保存
                historyList.push({expression: formula, reseults: answer});
                localStorage.setItem("calc-history", JSON.stringify(historyList));
                addHistory(formula, answer);

                formula = answer.toString();
            }
            catch {
                reseult.textContent = 'error';
                formula = '';
            }
            return;
        }

        formula += key;
        reseult.textContent = formula;


    })
});

remove_his.addEventListener("click", () => {
    localStorage.removeItem("calc-history")
    historyList = [];
    formula_his.innerHTML = '';
})

// reseultに履歴を追加
function addHistory(formulas, answers) {
    const li = document.createElement('li');
    li.textContent = `${formulas} = ${answers}`;
    formula_his.appendChild(li);
}
