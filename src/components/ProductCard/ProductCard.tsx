import { IProduct } from '../../types';

interface IProductCard {
  product: IProduct;
}

const ProductCard = ({ product }: IProductCard) => {
  return (
    <article>
      <h1>{product.title}</h1>
      <p>Category: {product.category}</p>
      <p>Price: {product.price}</p>
      <p>{product.inStock ? 'In stock' : 'Out of stock'}</p>
    </article>
  );
};
export default ProductCard;
