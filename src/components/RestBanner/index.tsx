import * as S from './styles';

type Props = {
  banner: Prato;
};

const RestBanner = ({ banner }: Props) => (
  <S.Imagem style={{ backgroundImage: `url(${banner.capa})` }}>
    <div className="container">
      <S.Category>{banner.tipo}</S.Category>
      <h1>{banner.titulo}</h1>
    </div>
  </S.Imagem>
);

export default RestBanner;
