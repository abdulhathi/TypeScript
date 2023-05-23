// We cannot able to override the private method in inheritance

class Cloth {
    protected getInfo(): string {
        return "create by Threads";
    }
}

class Shirt extends Cloth {
    override getInfo(): string {
        return "Shirts are " + super.getInfo();
    }
}

class TShirt extends Cloth {
    override getInfo(): string {
        return "TShirts are " + super.getInfo();
    }
}

console.log(new Shirt().getInfo());
console.log(new TShirt().getInfo());