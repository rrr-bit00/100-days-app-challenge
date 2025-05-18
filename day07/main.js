/* クラスを使用する前

const quoteText = document.getElementById("quote-text");
const fetchButton = document.getElementById("fetch-button");

fetchButton.addEventListener("click", () => {
    fetchQuote();
})


async function fetchQuote() {
    try {
        const response = await fetch("https://api.allorigins.win/raw?url=https://zenquotes.io/api/random");
        const data = await response.json();
        console.log(data);

        quoteText.textContent = `"${data[0].q}" ー ${data[0].a}`;
    } catch (error) {
        quoteText.textContent = "名言の取得に失敗しました。";
        console.error("Fetch error:", error);
    }
} */

// クラス化

class QuoteManager {
    constructor(displayElementId) {
        this.displayElement = document.getElementById(displayElementId);
    }

    async fetchQuote() {
        try {
            const response = await fetch(
                "https://api.allorigins.win/raw?url=https://zenquotes.io/api/random"
            );

            const data = await response.json();
            const quote = data[0].q;
            const author = data[0].a;
            this.displayQuote(quote, author);
        } catch (error) {
            this.displayElement.textContent = "名言の取得に失敗しました";
            console.error("Fetch error:", error);
        }
    }

    displayQuote(quote, author) {
        this.displayElement.textContent = `"${quote}" ー ${author}`;
    }
}

const manager = new QuoteManager("quote-text");

document.getElementById("fetch-button").addEventListener("click", () => {
    manager.fetchQuote();
})
