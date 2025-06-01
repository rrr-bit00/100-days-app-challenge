document.getElementById("selector").addEventListener("click", async (event) => {
    document.getElementById("result").innerHTML = "";
    const target = event.target;
    if (target.tagName === "BUTTON"){
        const region = target.dataset.region;

        // regionキーのvalueをローカルから呼び出す
        const cacheData = localStorage.getItem(region);

        let data;
        // ローカルにアイテムがあったか確認
        if (cacheData) {
            // ローカルの文字列で保存したjsonをオブジェクトに変換
            data = JSON.parse(cacheData);
        } else {
            // ローカルになかったらapiを呼び出す
            data = await getApi(region);

            /* 呼び出したデータを保存するため文字列に変換
            その際、(key, JSON.stringify(value))と記述する */
            localStorage.setItem(region, JSON.stringify(data));
        }

        showCountry(data);
    }
})

async function getApi(region) {
    const res = await fetch(`https://restcountries.com/v3.1/region/${region}`);
    const data = await res.json();
    return data;
}

function showCountry(data) {
    data.forEach(element => {
        const container = document.createElement("div");
        // name flag lang money
        const name = element.name.common;
        countryName(container, name);

        const capital = element.capital;
        countryCapital(container, capital);

        if (element.translations.jpn) {
            const translations = element.translations.jpn.official;
            countryTranslate(container, translations);
        }

        const time = element.timezones;
        countryTimezone(container, time);

        const image = element.flags.png;
        countryImage(container, image);

        document.getElementById("result").appendChild(container);
    });
}

function countryName(container, name) {
    const p = document.createElement("p");
    p.textContent = `国名：${name}`;
    container.appendChild(p);
}

function countryCapital(container, capital) {
    const p = document.createElement("p");
    p.textContent = `首都：${capital}`;
    container.appendChild(p);
}

function countryTranslate(container, translations) {
    const p = document.createElement("p");
    p.textContent = `日本語名称：${translations}`;
    container.appendChild(p);
}

function countryTimezone(container, time) {
    const timezoneText = time.join('<br>');
    const p = document.createElement("p");
    p.innerHTML = `標準時間：<br>${timezoneText}`
    container.appendChild(p);
}


function countryImage(container, image) {
    const img = document.createElement("img");
    img.src = image;
    img.alt = "国旗";
    img.style.width = "100%";
    container.appendChild(img);
}
