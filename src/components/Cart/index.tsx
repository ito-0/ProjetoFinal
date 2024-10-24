import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Button from '../Button';
import * as S from './styles';

import { remove, close } from '../../store/reducers/cart';
import { RootReducer } from '../../store';
import { parseToBrl } from '../../utils';

import Checkout from '../../pages/Checkout/index';

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart);
  const dispatch = useDispatch();
  const [isCheckout, setIsCheckout] = useState(false); // Estado para alternar entre carrinho e checkout

  const totalPrice = items.reduce((total, item) => total + item.preco, 0);

  const closeCart = () => {
    dispatch(close());
  };

  const handleRemoveItem = (index: number) => {
    dispatch(remove(index)); // Dispara a ação de remoção com o índice do item
  };

  const goToCheckout = () => {
    setIsCheckout(true);
  };

  const goToCart = () => {
    setIsCheckout(false);
  };

  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeCart} />
      <S.Sidebar>
        {isCheckout ? (
          <Checkout onBackToCart={goToCart} />
        ) : (
          <>
            {items.length > 0 ? (
              <>
                <ul>
                  {items.map((item, index) => (
                    <S.CartItem key={index}>
                      <img src={item.foto} alt={item.nome} />
                      <div>
                        <h3>{item.nome}</h3>
                        <span>{parseToBrl(item.preco)}</span>
                      </div>
                      <button
                        onClick={() => handleRemoveItem(index)}
                        type="button"
                      />
                    </S.CartItem>
                  ))}
                </ul>
                <S.Prices>
                  <p>Valor total</p>
                  <p>{parseToBrl(totalPrice)}</p>
                </S.Prices>
                <Button
                  onClick={goToCheckout}
                  title="Clique aqui para continuar com a compra"
                  type="button"
                >
                  Continuar com a compra
                </Button>
              </>
            ) : (
              <p className="empty-text">
                O carrinho está vazio, adicione itens para continuar com a
                compra.
              </p>
            )}
          </>
        )}
      </S.Sidebar>
    </S.CartContainer>
  );
};

export default Cart;
