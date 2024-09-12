import Button from '../Button';
import Tag from '../Tag';
import {
  Card,
  Descricao,
  Titulo,
  Infos,
  Nota,
  TituloNotaContainer,
  CapaImg
} from './styles';

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
  <Card>
    <CapaImg src={image} alt={titulo} srcSet="" />
    <Infos>
      {destacado.map((destacado) => (
        <Tag key={destacado}>Destaque da semana</Tag>
      ))}
      <Tag>{tipo}</Tag>
    </Infos>
    <TituloNotaContainer>
      <Titulo>{titulo}</Titulo>
      <Nota>
        {nota}
        <img src={star} alt="estrela" srcSet="" />
      </Nota>
    </TituloNotaContainer>
    <Descricao>{descricao}</Descricao>
    <Button
      type="link"
      to={`/restaurantes/${id}`}
      title="Clique aqui para aproveitar este prato"
    >
      Saiba mais
    </Button>
  </Card>
);

export default Product;
