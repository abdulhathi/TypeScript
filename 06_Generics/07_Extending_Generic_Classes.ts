interface Product {
    name: string;
    price: number;
}

// Generic type class for storey any object
class Store<T> {
    protected _objects: T[] = [];
    add(value: T): void {
        this._objects.push(value);
    }
}
let store = new Store<Product>();

// Inherit (or) extend the generic type class
class CompressibleStore<T> extends Store<T> {
    compress() {}
}
let compStore = new CompressibleStore<Product>();
compStore.compress();

// Searchable store: Restrict the generic type parameter and Find a store by name.
class SearchableStore<T extends { name: string }> extends Store<T> {
    find(name: string): T | undefined {
        return this._objects.find(obj => obj.name === name);
    }
}

let searchableStore = new SearchableStore<{name: string}>();
searchableStore.add({name: "Store A"});
searchableStore.add({name: "Store B"});
searchableStore.add({name: "StoreC"});
console.log(searchableStore.find("Store D"));

// Product by store
class ProductStore extends Store<Product> {
    filterByCategory(category: string): Product[] {
        return []
    }
}

let prodStore = new ProductStore();
console.log(prodStore.filterByCategory("Electronics"));