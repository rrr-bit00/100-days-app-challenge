const buttons = document.querySelectorAll("#buttons button");
const results = document.getElementById("result");
const text = document.getElementById("input_text");
const submit = document.getElementById("submit");
const history = document.getElementById("history");

// 最初の一回分のあたりを判定
let isHit = false;

// 乱数のデフォルトの値を設定
rand = 3

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        const name = btn.dataset.name;
        const ran = Math.floor(Math.random() * rand);

        if (!isHit) {
            if (ran === 2) {
                isHit = true;
                results.textContent = `${name} を選びました！結果：🎯当たり！！`;
                addHistory(name, '🎯当たり！！');

                // エフェクトを追加
                confetti({
                    particleCount: 120,
                    spread: 70,
                    origin: {y: 0.7}
                });
            }
            else {
                results.textContent = `${name} を選びました！結果：😢はずれ！！`;
                addHistory(name, '😢はずれ！！');
            }
        }
        else {
                results.textContent = `${name} を選びました！ 既に当たりが引かれています！`;
            }
    })
})

submit.addEventListener("click", () => {
    const add_button = document.createElement("button");
    if (text.value == '') return;

    // textareaの値を受け取る
    const add_drink = text.value;

    // ボタンにdeta属性と名前を作成
    add_button.textContent = add_drink;
    add_button.dataset.name = add_drink;

    // 作成したボタンをbuttonsに追加
    document.getElementById("buttons").appendChild(add_button);

    // 乱数を

    // 追加したボタンの処理
    add_button.addEventListener("click", () => {
        const name = add_button.dataset.name;
        const ran = Math.floor(Math.random() * rand);

        if (!isHit) {
            if (ran === 2) {
                isHit = true;
                results.textContent = `${name} を選びました！結果：🎯当たり！！`;
                addHistory(name, '🎯当たり！！')

                // エフェクトを追加
                confetti({
                    particleCount: 120,
                    spread: 70,
                    origin: {y: 0.7}
                });
            }
            else {
                results.textContent = `${name} を選びました！結果：😢はずれ！！`;
                addHistory(name, '😢はずれ！！')
            }
        }
        else {
                results.textContent = `${name} を選びました！既にあたりが引かれています！`;

            }
    })

});

// 履歴用の関数を作成
function addHistory(drinkName, resultText) {
    const li = document.createElement("li");
    li.textContent = `${drinkName} -> ${resultText}`;
    history.appendChild(li);
}
