import Button from '../Button';
import Tag from '../Tag';
import {
  Card,
  Descricao,
  Titulo,
  Infos,
  Nota,
  TituloNotaContainer
} from './styles';

type Props = {
  title: string;
  category: string;
  description: string;
  infos: string[];
  image: string;
  star: string;
};

const Product = ({
  title,
  category,
  description,
  infos,
  image,
  star
}: Props) => (
  <Card>
    <img src={image} alt={title} srcSet="" />
    <Infos>
      {infos.map((infos) => (
        <Tag key={infos}>{infos}</Tag>
      ))}
    </Infos>
    <TituloNotaContainer>
      <Titulo>{title}</Titulo>
      <Nota>
        {category}
        <img src={star} alt="estrela" srcSet="" />
      </Nota>
    </TituloNotaContainer>
    <Descricao>{description}</Descricao>
    <Button
      type="link"
      to="/restaurantes"
      title="Clique aqui para aproveitar este prato"
    >
      Saiba mais
    </Button>
  </Card>
);

export default Product;
