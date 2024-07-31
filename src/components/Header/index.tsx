import { HeaderBar, LinkCart, LinkItem, Links, Logo } from './syles';

import logo from '../../assets/images/logo.png';
import bannerImg from '../../assets/images/bannerImg.png';
import carrinho from '../../assets/images/carrinho.svg';

const Header = () => (
  <HeaderBar style={{ backgroundImage: `url(${bannerImg})` }}>
    <div>
      <Logo src={logo} alt="efood" />
      <nav>
        <Links>
          <LinkItem>
            <a href="/">Home</a>
          </LinkItem>
          <LinkItem>
            <a href="/restaurantes">Restaurantes</a>
          </LinkItem>
        </Links>
      </nav>
    </div>

    <LinkCart href="#">
      0 - produto(s)
      <img src={carrinho} alt="Carrinho" />
    </LinkCart>
  </HeaderBar>
);

export default Header;
