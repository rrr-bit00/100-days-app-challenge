# Day08 - 天気アプリ ☁️🌤️

[![Live Demo](https://img.shields.io/badge/%F0%9F%9A%80-LiveDemo-blue?logo=github)](https://rrr-bit00.github.io/100-days-app-challenge/day08-weather-app/)

## 概要

都市名を入力すると、Open-Meteo APIを使ってその都市の現在の天気（気温・風速・天候コード）を表示するアプリです。

- `fetch`と`async/await`による非同期処理
- Open-Meteoのジオコーディング + 天気APIを組み合わせて利用
- クラスベースの構成で、JSの設計力を強化

## 使用技術

- HTML / CSS / JavaScript
- [Open-Meteo API](https://open-meteo.com/)
  - Geocoding API
  - Forecast API（current weather）

## 機能

- 都市名を入力し、「天気を取得」ボタンを押すと
  - 都市の緯度・経度を取得
  - 現在の天気情報を取得
  - 結果を画面に表示（気温・風速・天候コード）

## 学びポイント

- `async/await` の実装パターン
- APIキー不要で使える外部APIの活用方法
- JavaScriptクラス構造の練習
