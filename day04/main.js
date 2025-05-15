document.addEventListener("DOMContentLoaded", () => {
  const submit = document.getElementById("submit");
  let idNum = 0;
  let savedData = JSON.parse(localStorage.getItem("formHistory")) || [];

  // 初期化：保存済みデータを表示
  savedData.forEach(values => {
    if (values[0] > idNum) idNum = values[0]; // ID更新
    addRow(values);
  });

  submit.addEventListener("click", () => {
    const firstName = document.getElementById("first-name").value.trim();
    const secondName = document.getElementById("second-name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const checkPass = document.getElementById("check-pass").value.trim();

    const errorFirstName = document.getElementById("first-name-error");
    const errorSecondName = document.getElementById("second-name-error");
    const errorEmail = document.getElementById("email-error");
    const errorPassWord = document.getElementById("password-error");
    const errorCheckPass = document.getElementById("check-pass-error");

    // エラー初期化
    [errorFirstName, errorSecondName, errorEmail, errorPassWord, errorCheckPass].forEach(e => e.textContent = "");

    ["first-name", "second-name", "email", "password", "check-pass"].forEach(id => {
    document.getElementById(id).classList.remove("invalid");
    });

    // バリデーション
    if (!firstName) {
      errorFirstName.textContent = "姓を入力してください";
      document.getElementById("first-name").classList.add("invalid");
      return;
    } else if (!secondName) {
      errorSecondName.textContent = "名を入力してください";
      document.getElementById("second-name").classList.add("invalid");
      return;
    } else if (!email) {
      errorEmail.textContent = "メールアドレスを入力してください";
      document.getElementById("email").classList.add("invalid");
      return;
    } else if (!password) {
      errorPassWord.textContent = "パスワードを設定してください";
      document.getElementById("password").classList.add("invalid");
      return;
    } else if (!checkPass) {
      errorCheckPass.textContent = "確認用パスワードを設定してください";
      document.getElementById("check-pass").classList.add("invalid");
      return;
    }

    if (password !== checkPass) {
      errorPassWord.textContent = "パスワードと確認用パスワードが一致しません";
      errorCheckPass.textContent = "パスワードと確認用パスワードが一致しません";
      return;
    }



    // データ追加
    idNum += 1;
    const values = [
      idNum,
      firstName + secondName,
      email,
      password
    ];

    savedData.push(values);
    localStorage.setItem("formHistory", JSON.stringify(savedData));
    addRow(values);

    // 入力リセット（任意）
    ["first-name", "second-name", "email", "password", "check-pass"].forEach(id => {
      document.getElementById(id).value = "";
    });
  });

  function addRow(values) {
    const tr = document.createElement("tr");

    values.forEach(value => {
      const td = document.createElement("td");
      td.textContent = value;
      tr.appendChild(td);
    });

    const td = document.createElement("td");
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "削除";
    deleteBtn.addEventListener("click", () => {
      tr.remove();
      savedData = savedData.filter(v => v[0] !== values[0]);
      localStorage.setItem("formHistory", JSON.stringify(savedData));
    });
    td.appendChild(deleteBtn);
    tr.appendChild(td);

    document.getElementById("history-table-body").appendChild(tr);
  }
});
