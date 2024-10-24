import Button from '../Button';
import Tag from '../Tag';
import * as S from './styles';

import star from '../../assets/images/estrela.png';

type Props = {
  id: number;
  titulo: string;
  tipo: string;
  descricao: string;
  destacado: string[];
  image: string;
  nota: string;
};

const Product = ({
  id,
  titulo,
  tipo,
  descricao,
  destacado,
  image,
  nota
}: Props) => (
  <S.ProdCard>
    <S.ProdImg src={image} alt={titulo} srcSet="" />
    <S.Infos>
      {destacado.map((destacado) => (
        <Tag key={destacado}>Destaque da semana</Tag>
      ))}
      <Tag>{tipo}</Tag>
    </S.Infos>
    <S.ProdContent>
      <S.ProdTitle>{titulo}</S.ProdTitle>
      <S.ProdGrade>
        {nota}
        <img src={star} alt="estrela" srcSet="" />
      </S.ProdGrade>
    </S.ProdContent>
    <S.ProdDescription>{descricao}</S.ProdDescription>
    <Button
      type="link"
      to={`/restaurantes/${id}`}
      title="Clique aqui para aproveitar este prato"
    >
      Saiba mais
    </Button>
  </S.ProdCard>
);

export default Product;
