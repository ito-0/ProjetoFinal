import RestPrato from '../../models/RestPrato';
import RestProduct from '../RestProduct';

import { Container, List } from './styles';

export type Props = {
  background: 'rosaClaro' | 'branca' | 'rosaEscuro';
  pratos: RestPrato[];
};

const RestProductsList = ({ background, pratos }: Props) => (
  <Container background={background}>
    <div className="container">
      <List>
        {pratos.map((prato) => (
          <RestProduct
            key={prato.id}
            description={prato.description}
            image={prato.image}
            title={prato.title}
          />
        ))}
      </List>
    </div>
  </Container>
);

export default RestProductsList;
