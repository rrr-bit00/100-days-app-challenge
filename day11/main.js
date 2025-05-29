document.getElementById("searchForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const validationArea = document.getElementById("validation");
    validationArea.innerHTML = "";

    const keyword = document.getElementById("countryName").value;
    if (!keyword) {
        errorMsg("国名を入力してください");
        return;
    }

    const data = await getApi(keyword);
    console.log(data);

    const country = new Country(data);

    displayResult(country.name());

    displayResult(country.flagImage());

    displayResult(country.region());

    displayResult(country.mapLink());

    displayResult(country.currencie());

    displayResult(country.getCountryTimezone())
})

// 国の情報を扱うClass
class Country {
constructor(data) {
        this.data = data;
        document.getElementById("result").innerHTML = "";
    }

    // 国の名称を取得
    name() {
        const name = document.createElement("p");
        name.textContent = `🌏 国名：${this.data.name.common}`;
        return name;
    }

    // その国の国旗を取得
    flagImage() {
        const container = document.createElement("div");
        container.classList.add("flag-container");

        const img = document.createElement("img");
        img.src = this.data.flags.png;
        img.alt = `${this.data.name.common}の国旗`;
        img.width = 100;

        container.appendChild(img);
        return container
    }

    // その国の地域を取得
    region() {
        const region = document.createElement("p");
        region.textContent = `📍 地域：${this.data.region}`;
        return region;
    }

    // 国にGoogleMapで飛べるようにする
    mapLink() {
        const a = document.createElement("a");
        a.href = this.data.maps.googleMap;
        a.target = "_blank";
        a.textContent = `${this.data.name.common}の位置をGoogleMapで開く`;
        return a;
    }

    // 流通している通貨情報を取り出す
    currencie() {
        const currencies = document.createElement("p");
        const currenciesKey = Object.keys(this.data.currencies);
        const firstCrrencie = currenciesKey[0];
        const currencieInfo = this.data.currencies[firstCrrencie];

        currencies.innerHTML = `💰 通貨：${currencieInfo.symbol}　${currencieInfo.name}`;
        return currencies;
    }

    // 国のタイムゾーンを取得
    getCountryTimezone() {
        const container = document.createElement("div");
        container.classList.add("timezone-container");
        const timeData = this.data.timezones;

        const time = document.createElement("p");
        time.textContent = `⌛ タイムゾーン：${timeData.join(", ")}`;
        container.appendChild(time);
        return container;
    }
}

function displayResult(tag) {
    document.getElementById("result").append(tag);
}

// 非同期処理でAPIを呼び出す
async function getApi(key) {
    try {
        const response = await fetch(`https://restcountries.com/v3.1/name/${key}`);
        const data = await response.json();

        if  (!data || data.status === 404) {
            throw new Error(`${key}がヒットしませんでした`)
        }
    return data[0];
    }
    catch(error) {
        console.log("APIエラー", error);
        errorMsg(error.message);
    }
}

// エラーメッセージ
function errorMsg(message) {
    const validationArea = document.getElementById("validation");
    const errorLog = document.createElement("p");
    errorLog.textContent = `🚫 ${message}`;
    errorLog.style.color = "red";
    validationArea.appendChild(errorLog);
}
