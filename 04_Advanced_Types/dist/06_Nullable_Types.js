function myFun(name) {
    if (name)
        console.log(name);
    else if (name === null)
        console.log("name is NULL");
    else if (name === undefined)
        console.log("name is undefined");
}
myFun(null);
myFun(undefined);
myFun("Abdul");
