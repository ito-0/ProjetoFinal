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
  <S.Card>
    <S.CapaImg src={image} alt={titulo} srcSet="" />
    <S.Infos>
      {destacado.map((destacado) => (
        <Tag key={destacado}>Destaque da semana</Tag>
      ))}
      <Tag>{tipo}</Tag>
    </S.Infos>
    <S.TituloNotaContainer>
      <S.Titulo>{titulo}</S.Titulo>
      <S.Nota>
        {nota}
        <img src={star} alt="estrela" srcSet="" />
      </S.Nota>
    </S.TituloNotaContainer>
    <S.Descricao>{descricao}</S.Descricao>
    <Button
      type="link"
      to={`/restaurantes/${id}`}
      title="Clique aqui para aproveitar este prato"
    >
      Saiba mais
    </Button>
  </S.Card>
);

export default Product;
