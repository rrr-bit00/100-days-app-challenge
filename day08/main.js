class WeatherApp {
    constructor() {
      this.geoUrl = "https://geocoding-api.open-meteo.com/v1/search";
      this.weatherUrl = "https://api.open-meteo.com/v1/forecast";
      this.cityInput = document.getElementById("cityInput");
      this.resultArea = document.getElementById("resultArea");
      this.button = document.getElementById("getWeatherBtn");

      this.button.addEventListener("click", () => this.handleSearch());
    }

    async handleSearch() {
      const city = this.cityInput.value.trim();
      if (!city) {
        this.showError("都市名を入力してください。");
        return;
      }

      try {
        const coords = await this.fetchCoordinates(city);
        const weather = await this.fetchWeather(coords.latitude, coords.longitude);
        this.displayWeather(coords.name, weather);
      } catch (err) {
        this.showError(err.message);
      }
    }

    async fetchCoordinates(city) {
      const url = `${this.geoUrl}?name=${encodeURIComponent(city)}&count=1`;
      const res = await fetch(url);
      const data = await res.json();
      const result = data.results?.[0];
      if (!result) throw new Error("都市が見つかりませんでした。");
      return result;
    }

    async fetchWeather(lat, lon) {
      const url = `${this.weatherUrl}?latitude=${lat}&longitude=${lon}&current_weather=true`;
      const res = await fetch(url);
      const data = await res.json();
      return data.current_weather;
    }

    displayWeather(city, weather) {
      this.resultArea.innerHTML = `
        <h2>${city}の現在の天気</h2>
        <p>🌡️ 気温: ${weather.temperature}℃</p>
        <p>💨 風速: ${weather.windspeed} m/s</p>
        <p>⛅ 天候コード: ${weather.weathercode}</p>
      `;
    }

    showError(message) {
      this.resultArea.innerHTML = `<p style="color: red;">${message}</p>`;
    }
  }


  new WeatherApp();
