const results = ['大吉', '中吉', '吉', '小吉', '凶', '大凶'];
const button = document.getElementById('draw_btn');
const result = document.getElementById('result');

button.addEventListener('click', () => {
    const index = Math.floor(Math.random() * results.length);
    const resultText = results[index];
    result.textContent = resultText

    result.classList.remove('pop');
    void result.offsetWidth;
    result.classList.add('pop');

    switch (resultText) {

        case '大吉':
            result.style.color = 'red';
            confetti({
                particleCount: 150,
                spread: 100,
                origin:{ y: 0.8}
            });
            break;
        case '中吉':
            result.style.color = 'orange';
            confetti({
                particleCount: 75,
                spread: 50,
                origin: { y: 0.4}
            })
            break;
        case '吉':
            result.style.color = 'green';
            break;
        case '小吉':
            result.style.color = 'blue';
            break;
        case '凶':
            result.style.color = 'gray';
            break;
        case '大凶':
            result.style.color = 'purple';
            break;
    }

})

