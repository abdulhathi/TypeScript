"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ReminderService {
    async getTodos() {
        let todos = [];
        const response = await fetch("https://jsonplaceholder.typicode.com/todos");
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        const jsonResponse = await response.json();
        jsonResponse.forEach((res) => {
            todos.push({ id: res.id, title: res.title });
        });
        return todos;
    }
    async addReminder(title) {
        // let todo: Reminder = {id:0, title:""};
        const response = await fetch("https://jsonplaceholder.typicode.com/todos", {
            method: "POST",
            body: JSON.stringify({
                title: title
            })
        });
        console.log(response);
        // return todo;
    }
}
const reminderService = new ReminderService();
exports.default = reminderService;
// const reminderService = new ReminderService();
// const r = reminderService.getTodos();
// console.log(r);
