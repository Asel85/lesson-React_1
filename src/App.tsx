import { useEffect, useRef, useState } from 'react';
import ProductList from './components/ProductList/ProductList';
import { IProduct } from './types';

const App = () => {
  const url = 'https://mocki.io/v1/8606e63f-0025-4d0c-95bd-2fc15cf5bc94';

  const [products, setProducts] = useState<IProduct[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  console.log(inputRef);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Не удалось загрузить товары');
        }
        const data: IProduct[] = await response.json();
        setProducts(data);
        setFilteredProducts(data);
      } catch (error) {
        setError('Произошла ошибка при загрузке');
      } finally {
        setIsLoading(false);
      }
    };
    getProducts();
  }, []);

  const handleSearch = () => {
    const searchValue = inputRef.current?.value.toLowerCase() || '';

    const filtered = products.filter((product) => {
      return product.title.toLowerCase().includes(searchValue);
    });
    setFilteredProducts(filtered);
  };

  return (
    <>
      <input ref={inputRef} onChange={handleSearch} type="text" placeholder="Поиск товара" />
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!isLoading && !error && <ProductList products={filteredProducts} />}
    </>
  );
};
export default App;
