import { Container } from './styles';

type Props = {
  children: JSX.Element;
  title: string;
};

const Card = ({ children, title }: Props) => (
  <Container>
    <h3>{title}</h3>
    {children}
  </Container>
);

export default Card;
