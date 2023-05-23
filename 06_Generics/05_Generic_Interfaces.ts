interface Result<T> {
    data: T | null,
    error: string | null
}

function fetch<T>(url: string): Result<T> {
    return { data: null, error: null }
}

interface UserDetail {
    userName: string
}
interface Product {
    productName: string
}

let userFetch = fetch<UserDetail>("");
let productFetch = fetch<Product>("");
