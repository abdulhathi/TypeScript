const Component = (constructor: Function) => {
    console.log("Component decorator called.");
    constructor.prototype.uniqueId = Date.now();
    constructor.prototype.insertDOM = () => {
        console.log("Inserting a component in DOM.")
    }
}

@Component
class ProfileComponent {

}