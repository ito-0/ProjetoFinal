import { Prato } from '../../pages/Home';
import { Category, Imagem } from './styles';

type Props = {
  banner: Prato;
};

const RestBanner = ({ banner }: Props) => (
  <Imagem style={{ backgroundImage: `url(${banner.capa})` }}>
    <div className="container">
      <Category>{banner.tipo}</Category>
      <h1>{banner.titulo}</h1>
    </div>
  </Imagem>
);

export default RestBanner;
