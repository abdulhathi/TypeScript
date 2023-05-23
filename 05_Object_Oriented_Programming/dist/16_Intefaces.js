class GoogleCalender {
    constructor(name) {
        this.name = name;
    }
    addEvent(start, end) {
        console.log(`New event created from ${start} to ${end}`);
    }
    // addEvent(): void {};
    removeEvent() { }
    ;
}
console.log(new GoogleCalender("new evenet").addEvent(10.00, 11.00));
