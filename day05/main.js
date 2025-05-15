function judge(player, cpu) {
    if (player === cpu) return "あいこ！";
    if ((player === "グー" && cpu === "チョキ") ||
        (player === "チョキ" && cpu === "パー") ||
        (player === "パー" && cpu === "グー")
    ) return "あなたの勝ち！";
    return "あなたの負け！";
}

document.querySelectorAll("button[data-choice]").forEach(button => {
    button.addEventListener("click", () => {
        const playerChoice = button.dataset.choice;
        const cpuChoice = ["グー", "チョキ", "パー"][Math.floor(Math.random() * 3)];
        const result = judge(playerChoice, cpuChoice);
        const overlay = document.getElementById("result-overlay");
        const resultText = document.getElementById("result-text");

        resultText.textContent = result;

        overlay.classList.add("active");
    });
});

document.getElementById("result-overlay").addEventListener("click", () => {
    document.getElementById("result-overlay").classList.remove("active");
});
