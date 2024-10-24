import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as S from './styles';

import { RootReducer } from '../../store';
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
    <S.HeaderBar backgroundImage={bannerImg}>
      <S.Logo src={logo} alt="efood" />
      <nav>
        {isRestaurantesPage ? (
          <S.Links>
            <S.LinkItem className="left">
              <a href="/">Restaurantes</a>
            </S.LinkItem>
            <S.LinkItem className="right">
              <S.CartButton onClick={openCart}>
                {items.length} produto(s) no carrinho
              </S.CartButton>
            </S.LinkItem>
          </S.Links>
        ) : (
          <div>
            <S.BannerTitle>
              Viva experiências gastronômicas no conforto da sua casa
            </S.BannerTitle>
          </div>
        )}
      </nav>
    </S.HeaderBar>
  );
};

export default Header;
