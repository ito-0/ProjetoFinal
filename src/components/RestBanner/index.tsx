import * as S from './styles';

type Props = {
  banner: Prato;
};

const RestBanner = ({ banner }: Props) => (
  <S.RestBannerImg style={{ backgroundImage: `url(${banner.capa})` }}>
    <div className="container">
      <S.Category>{banner.tipo}</S.Category>
      <h1>{banner.titulo}</h1>
    </div>
  </S.RestBannerImg>
);

export default RestBanner;
