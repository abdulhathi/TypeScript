// We cannot able to override the private method in inheritance
class Cloth {
    getInfo() {
        return "create by Threads";
    }
}
class Shirt extends Cloth {
    getInfo() {
        return "Shirts are " + super.getInfo();
    }
}
class TShirt extends Cloth {
    getInfo() {
        return "TShirts are " + super.getInfo();
    }
}
console.log(new Shirt().getInfo());
console.log(new TShirt().getInfo());
