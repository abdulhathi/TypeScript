type ComponentOptions = {
    options: string
}

function ComponentDec1(options: ComponentOptions) {
    return (constructor: Function) => {
        console.log("Component decorator is called");
        constructor.prototype.options = options;
        console.log(options);
    }
}

@ComponentDec1({options: "#My-Profile"})
class MyClass {}