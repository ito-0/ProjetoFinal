import { BannerTitle, HeaderBar, LinkItem, Links, Logo } from './syles';

import logo from '../../assets/images/logo.png';
import bannerImg from '../../assets/images/bannerImg.png';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Header = () => {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Define isVisible com base na URL atual
    setIsVisible(location.pathname !== '/restaurantes');
  }, [location.pathname]);

  return (
    <HeaderBar style={{ backgroundImage: `url(${bannerImg})` }}>
      <Logo src={logo} alt="efood" />
      <nav>
        <Links className={isVisible ? '' : 'visivel'}>
          <LinkItem>
            <a href="/restaurantes">Restaurantes</a>
          </LinkItem>
          <LinkItem>
            <a href="/restaurantes">0 - produto(s)</a>
          </LinkItem>
        </Links>
      </nav>
      {isVisible && (
        <BannerTitle>
          Viva experiências gastronômicas no conforto da sua casa
        </BannerTitle>
      )}
    </HeaderBar>
  );
};

export default Header;
