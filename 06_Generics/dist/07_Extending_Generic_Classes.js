// Generic type class for storey any object
class Store {
    constructor() {
        this._objects = [];
    }
    add(value) {
        this._objects.push(value);
    }
}
let store = new Store();
// Inherit (or) extend the generic type class
class CompressibleStore extends Store {
    compress() { }
}
let compStore = new CompressibleStore();
compStore.compress();
// Searchable store: Restrict the generic type parameter and Find a store by name.
class SearchableStore extends Store {
    find(name) {
        return this._objects.find(obj => obj.name === name);
    }
}
let searchableStore = new SearchableStore();
searchableStore.add({ name: "Store A" });
searchableStore.add({ name: "Store B" });
searchableStore.add({ name: "StoreC" });
console.log(searchableStore.find("Store D"));
// Product by store
class ProductStore extends Store {
    filterByCategory(category) {
        return [];
    }
}
let prodStore = new ProductStore();
console.log(prodStore.filterByCategory("Electronics"));
