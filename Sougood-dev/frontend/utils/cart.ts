import ICartItem from "../types/cart";
import Product from "../types/product";

export const cartItemFromProduct = (product: Product): ICartItem => {
  return {
    id: product._id,
    name: product.name,
    category: product.category,
    subcategory: product.subcategory,
    description: product.description,
    image: product.imageUrl,
    price: product.price,
    amount: 0
  } as ICartItem;
};
