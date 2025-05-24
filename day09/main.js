class Task {
    constructor(text) {
        this.id = Date.now();
        this.text = text;
        this.createdAt = new Date().toLocaleDateString();
    }
}

class TaskManager {
    constructor() {
        this.tasks = []
        this.taskList = document.getElementById("taskList");
        this.errorMsg = document.getElementById("errorMsg");
        this.input = document.getElementById("taskInput");

        document.getElementById("addBtn").addEventListener("click", () => this.handleAdd());
        this.load();
    }

    handleAdd() {
        const text = this.input.value.trim();

        if (!text) {
            this.showError("タスク内容を入力してください。");
            return;
        }

        this.hideError();
        const task = new Task(text);
        this.tasks.push(task);
        this.input.value = "";
        this.save();
        this.render();
    }

    deleteTask(id) {
        this.tasks = this.tasks.filter(t => t.id !== id);
        this.save();
        this.render();
    }

    render() {
        this.taskList.innerHTML = "";
        this.tasks.forEach(task => {
            const li = document.createElement("li");
            li.innerHTML = `
            <span>${task.text}</span> <span>🗓️ ${task.createdAt}</span>
            <button data-id="${task.id}">削除</button>`;

            li.querySelector("button").addEventListener("click", () => {
                this.deleteTask(task.id);
            });
            this.taskList.appendChild(li);
        });
    }

    showError(message) {
        this.errorMsg.textContent = message;
    }

    hideError() {
        this.errorMsg.textContent = "";
    }

    save() {
        localStorage.setItem("tasks", JSON.stringify(this.tasks));
    }

    load() {
        const data = JSON.parse(localStorage.getItem("tasks")) || [];
        this.tasks = data.map(obj => Object.assign(new Task(), obj));
        this.render();
    }
}

window.addEventListener("DOMContentLoaded", () => {
    new TaskManager();
});
