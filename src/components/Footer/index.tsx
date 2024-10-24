import * as S from './styles';

import logo from '../../assets/images/logo.png';
import facebook from '../../assets/images/facebook.png';
import instagram from '../../assets/images/instagram.png';
import twitter from '../../assets/images/twitter.png';

const currentYear = new Date().getFullYear();

const Footer = () => (
  <S.FooterContainer>
    <S.Logo src={logo} alt="home" srcSet="" />
    <S.RedesSociaisLinks>
      <li>
        <S.Links
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={instagram} alt="Instagram" />
        </S.Links>
      </li>
      <li>
        <S.Links
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={facebook} alt="Facebook" />
        </S.Links>
      </li>
      <li>
        <S.Links
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={twitter} alt="Twitter" />
        </S.Links>
      </li>
    </S.RedesSociaisLinks>
    <S.FooterText>
      A efood &copy; {currentYear} é uma plataforma para divulgação de
      estabelecimentos, a responsabilidade pela entrega, qualidade dos produtos
      é toda do estabelecimento contratado.
    </S.FooterText>
  </S.FooterContainer>
);

export default Footer;
