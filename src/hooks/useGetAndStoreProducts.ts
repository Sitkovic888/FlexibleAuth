import { useAppDispatch, useAppSelector } from '@/hooks';
import { selectHasProducts, selectProducts, setProducts } from '@/store/slices/products/productsSlice';
import axios from 'axios';
import { useState, useEffect } from 'react';

const BASE_URL = 'https://dummyjson.com/products';

const useGetAndStoreProducts = () => {
  const hasProducts = useAppSelector(selectHasProducts);
  const products = useAppSelector(selectProducts);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const dispatch = useAppDispatch();

  const fetchProducts = async () => {
    setLoading(true);
    setError(null);

    await axios.get(`${BASE_URL}`)
      .then((data) => {
        console.log("data.data", {
          data,
          hasProducts,
          products
        })

        dispatch(setProducts(data.data.products));
      })
      .catch(e => setError(e.message))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    console.log("hasProducts", hasProducts)
    if (!hasProducts) {
      fetchProducts();
    }
  }, []);

  return { products, loading, error };
};

export default useGetAndStoreProducts;