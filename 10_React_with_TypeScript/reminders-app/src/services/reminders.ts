import { Reminder } from "../models/Reminder";

class ReminderService {

    async getTodos(): Promise<Reminder[]> {
        let todos: Reminder[] = []
        const response = await fetch("https://jsonplaceholder.typicode.com/todos", {
            method: "GET"
        })
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        const jsonResponse = await response.json();
        jsonResponse.forEach((res: any) => {
            todos.push({id: res.id, title: res.title})
        })
        return todos;
    }

    async addReminder(title: string) {
        // let todo: Reminder = {id:0, title:""};
        const response = await fetch("https://jsonplaceholder.typicode.com/todos", {
            method: "POST",
            body: JSON.stringify({
                title: title
            })
        })
        const id = await response.json();
        return {id: id, title: title}
    }
}

const reminderService = new ReminderService();
export default reminderService;

// const reminderService = new ReminderService();
// const r = reminderService.getTodos();
// console.log(r);
