import Product from "../model/Product.js";

export async function create(data) {
    return Product.create(data);
}