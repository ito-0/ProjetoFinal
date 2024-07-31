import {
  FooterContainer,
  FooterText,
  Links,
  Logo,
  RedesSociaisLinks
} from './styles';

import logo from '../../assets/images/logo.png';
import facebook from '../../assets/images/facebook.png';
import instagram from '../../assets/images/instagram.png';
import twitter from '../../assets/images/twitter.png';

const currentYear = new Date().getFullYear();

const Footer = () => (
  <FooterContainer>
    <Logo src={logo} alt="home" srcSet="" />
    <RedesSociaisLinks>
      <li>
        <Links
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={instagram} alt="Instagram" />
        </Links>
      </li>
      <li>
        <Links
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={facebook} alt="Facebook" />
        </Links>
      </li>
      <li>
        <Links
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={twitter} alt="Twitter" />
        </Links>
      </li>
    </RedesSociaisLinks>
    <FooterText>
      A efood &copy; {currentYear} é uma plataforma para divulgação de
      estabelecimentos, a responsabilidade pela entrega, qualidade dos produtos
      é toda do estabelecimento contratado.
    </FooterText>
  </FooterContainer>
);

export default Footer;
