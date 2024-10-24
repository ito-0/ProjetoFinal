import * as S from './styles';
import Product from '../Product';

export type Props = {
  background: 'lightPink' | 'white' | 'darkPink';
  restaurantes: Prato[];
};

const ProductsList = ({ background, restaurantes }: Props) => {
  const getPratoTag = (prato: Prato) => {
    const tags = [];

    if (prato.destacado) {
      tags.push(prato.destacado);
    }

    return tags;
  };

  return (
    <S.Container background={background}>
      <div className="s.container">
        <S.ProdList>
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
        </S.ProdList>
      </div>
    </S.Container>
  );
};

export default ProductsList;
