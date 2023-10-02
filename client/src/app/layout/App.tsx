// import { useEffect, useState } from 'react';
// import { Product } from '../models/products';
import { useState } from 'react';
import Catalog from '../../features/catalog/Catalog';
// import { Typography } from '@mui/material';
import { Header } from './Header';
import { Container, CssBaseline, ThemeProvider, createTheme } from '@mui/material';

/* const products = [
  {name: 'product1', price: 100.00},
  {name: 'product2', price: 200.00},
] */

const App = () => {

  const [darkMode, setDarkMode] = useState(false);
  const paletteType = darkMode ? 'dark' : 'light';
  const theme = createTheme({
    palette: {
      mode: paletteType,
      background: {
        default: paletteType=== 'light' ? '#eaeaea' : '#121212'
      }
    }
 
  })

  function handleThemeChange() {
    setDarkMode(!darkMode)
  }
  
  return (
    <ThemeProvider theme={theme}>
{/*       <Typography variant='h1'>e-Commerce React</Typography>  */}
      <CssBaseline />
      <Header darkMode={darkMode} handleThemeChange={handleThemeChange}/>
      <Container>
        {/* <Catalog products={products} addProduct={addProduct}/> */}
        <Catalog />
      </Container>

    </ThemeProvider>
  );
}

export default App;
