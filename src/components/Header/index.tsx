import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootReducer } from '../../store';
import {
  BannerTitle,
  CartButton,
  HeaderBar,
  LinkItem,
  Links,
  Logo
} from './styles';
import { open } from '../../store/reducers/cart';
import logo from '../../assets/images/logo.png';
import bannerImg from '../../assets/images/bannerImg.png';

const Header = () => {
  const { pathname } = useLocation();
  const [isRestaurantesPage, setIsRestaurantesPage] = useState(false);
  const { items } = useSelector((state: RootReducer) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    setIsRestaurantesPage(pathname.includes('/restaurantes/'));
  }, [pathname]);

  const openCart = () => dispatch(open());

  return (
    <HeaderBar backgroundImage={bannerImg}>
      <Logo src={logo} alt="efood" />
      <nav>
        {isRestaurantesPage ? (
          <Links>
            <LinkItem className="left">
              <a href="/">Restaurantes</a>
            </LinkItem>
            <LinkItem className="right">
              <CartButton onClick={openCart}>
                {items.length} produto(s) no carrinho
              </CartButton>
            </LinkItem>
          </Links>
        ) : (
          <div>
            <BannerTitle>
              Viva experiências gastronômicas no conforto da sua casa
            </BannerTitle>
          </div>
        )}
      </nav>
    </HeaderBar>
  );
};

export default Header;
