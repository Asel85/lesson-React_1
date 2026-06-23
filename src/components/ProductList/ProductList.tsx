import { IProduct } from '../../types';
import ProductCard from '../ProductCard/ProductCard';

interface IProductListProps {
  products: IProduct[];
}

const ProductList = ({ products }: IProductListProps) => {
  return (
    <section>
      <h2>Products</h2>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );
};

export default ProductList;
