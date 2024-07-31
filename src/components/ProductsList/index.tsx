import Prato from '../../models/Prato';
import Product from '../Product';

import { Container, List } from './styles';

export type Props = {
  title: string;
  background: 'rosaClaro' | 'branca' | 'rosaEscuro';
  pratos: Prato[];
};

const ProductsList = ({ background, title, pratos }: Props) => (
  <Container background={background}>
    <div className="container">
      <h2>{title}</h2>
      <List>
        {pratos.map((prato) => (
          <Product
            key={prato.id}
            category={prato.category}
            description={prato.description}
            image={prato.image}
            infos={prato.infos}
            title={prato.title}
            star={prato.star}
          />
        ))}
      </List>
    </div>
  </Container>
);

export default ProductsList;
