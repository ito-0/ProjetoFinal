import { Category, Imagem } from './styles';

type Props = {
  title: string;
  category: string;
  image: string;
};

const RestBanner = ({ title, category, image }: Props) => (
  <Imagem style={{ backgroundImage: `url(${image})` }}>
    <div className="container">
      <Category>{category}</Category>
      <h1>{title}</h1>
    </div>
  </Imagem>
);

export default RestBanner;
