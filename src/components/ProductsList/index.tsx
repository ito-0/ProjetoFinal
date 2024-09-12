import { Prato } from '../../pages/Home';
import Product from '../Product';

import { Container, List } from './styles';

export type Props = {
  title: string;
  background: 'rosaClaro' | 'branca' | 'rosaEscuro';
  restaurantes: Prato[];
};

const ProductsList = ({ background, title, restaurantes }: Props) => {
  const getPratoTag = (prato: Prato) => {
    const tags = [];

    if (prato.destacado) {
      tags.push(prato.destacado);
    }

    return tags;
  };

  return (
    <Container background={background}>
      <div className="container">
        <h2>{title}</h2>
        <List>
          {restaurantes.map((prato) => (
            <Product
              id={prato.id}
              key={prato.id}
              tipo={prato.tipo}
              descricao={prato.descricao}
              image={prato.capa}
              destacado={getPratoTag(prato)}
              titulo={prato.titulo}
              nota={prato.avaliacao}
            />
          ))}
        </List>
      </div>
    </Container>
  );
};

export default ProductsList;
