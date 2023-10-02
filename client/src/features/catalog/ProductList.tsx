import { Grid } from '@mui/material'
import { Product } from '../../app/models/products';
import { ProductCard } from './ProductCard';

interface Props {
  products: Product[];
}

export const ProductList = ({products}: Props) => {
  return (
    <Grid container spacing={4}>
      {/* {products.map((item, index) => (
              <li key={index}>{item.name} - {item.price}</li>  
          ))} */}
      {products.map(product => (
        <Grid item xs={3} key={product.id}> 
          <ProductCard product={product} />
        </Grid>
      ))}
    </Grid>      
    )
}
