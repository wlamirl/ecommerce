// import { Button } from '@mui/material';
import { Product } from "../../app/models/products";
import { ProductList } from './ProductList';
import { useState, useEffect } from 'react';

/* interface Props {
  products: Product[];
  addProduct: () => void;
} */

export default function Catalog() {
  const [products, setProducts] = useState<Product[]>([]);

  // const [products, setProducts] = useState([
  //   {name: 'product1', price: 100.00},
  //   {name: 'product2', price: 200.00},
  // ]);

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
    .then(response => response.json())
    .then(data => setProducts(data))
  }, [])

  // const addProduct = () => {
    // setProducts([...products, {name: 'product3', price: 300.00}])
/*     setProducts(prevState => [...prevState, 
      {name: 'product' + (prevState.length + 1), price: (prevState.length * 100) + 100}]) */
/*       setProducts(prevState => [...prevState,
      {
        id: prevState.length + 101,
        name: 'product' + (prevState.length + 1),
        price: (prevState.length * 100) + 100,
        brand: 'some brand',
        description: 'some description',
        pictureUrl: 'http://picsum.photos/200',
      }]) */
  // }  

  return (
    <>
      <ProductList products={products}/>
      {/* <Button variant="contained" onClick={addProduct}>Add product</Button> */}
    </>
  )
}