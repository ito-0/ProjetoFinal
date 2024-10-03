import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'; // Importar useSelector
import { RootReducer } from '../../store'; // Importar o tipo do RootReducer
import {
  BannerTitle,
  CartButton,
  HeaderBar,
  LinkItem,
  Links,
  Logo
} from './styles';

import { open } from '../../store/reducers/cart'; // Ação de abrir o carrinho

import logo from '../../assets/images/logo.png';
import bannerImg from '../../assets/images/bannerImg.png';

const Header = () => {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(true);

  // Obtenha o número de itens no carrinho do estado global
  const { items } = useSelector((state: RootReducer) => state.cart);

  useEffect(() => {
    const currentPath = location.pathname;
    console.log(`Current path: ${currentPath}`); // Adicionado para depuração
    const visible = !currentPath.startsWith('/restaurantes');
    setIsVisible(visible);
    console.log(`Is visible: ${visible}`); // Adicionado para depuração
  }, [location.pathname]);

  const dispatch = useDispatch();

  const openCart = () => {
    dispatch(open());
  };

  return (
    <HeaderBar style={{ backgroundImage: `url(${bannerImg})` }}>
      <Logo src={logo} alt="efood" />
      <nav>
        <Links className={isVisible ? '' : 'visivel'}>
          <LinkItem>
            <a href="/#">Restaurantes</a>
          </LinkItem>
          <LinkItem>
            {/* Exibe o número de itens no carrinho */}
            <CartButton onClick={openCart}>
              {items.length} - produto(s)
            </CartButton>
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
