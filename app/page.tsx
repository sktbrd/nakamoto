import { Container } from '@chakra-ui/react';
import ProductList from './components/store/ProductList';
import { dummyProducts } from './components/store/Products';

export default function Home() {
  return (
    <Container maxW="container.lg">
      <ProductList products={dummyProducts} columns={3} />
    </Container>
  );
}
