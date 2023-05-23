interface Calender {
    name: string;
    addEvent(start: number, end: number): void;
    removeEvent(): void;
}

interface CloudCalender extends Calender {
    sync(): boolean;
}

class GoogleCalender implements CloudCalender {
    constructor(public name: string) {}
    
    addEvent(start: number, end: number): void {
        console.log(`New event created from ${start} to ${end}`);
    }
    // addEvent(): void {};
    removeEvent(): void {};
    sync(): boolean {
        return true
    }
}

console.log(new GoogleCalender("new evenet").addEvent(10.00, 11.00));