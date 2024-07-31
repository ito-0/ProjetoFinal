import Button from '../Button';
import { Card, Descricao, Titulo } from './styles';

type Props = {
  title: string;
  description: string;
  image: string;
};

const RestProduct = ({ title, description, image }: Props) => (
  <Card>
    <img src={image} alt={title} srcSet="" />
    <Titulo>{title}</Titulo>
    <Descricao>{description}</Descricao>
    <Button
      type="link"
      to="/restaurantes"
      title="Clique aqui para aproveitar este prato"
    >
      Adicionar ao carrinho
    </Button>
  </Card>
);

export default RestProduct;
