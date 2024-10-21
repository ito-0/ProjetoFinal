import Button from '../Button';
import { CartContainer, CartItem, Overlay, Prices, Sidebar } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { RootReducer } from '../../store';
import { close, remove } from '../../store/reducers/cart'; // Importa a ação remove

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart);
  const dispatch = useDispatch();

  const closeCart = () => {
    dispatch(close());
  };

  // Função para formatar o preço
  const formataPreco = (preco: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(preco);
  };

  // Função para calcular o valor total
  const calcularValorTotal = () => {
    return items.reduce((total, item) => total + item.preco, 0);
  };

  // Função para remover o item do carrinho
  const handleRemoveItem = (index: number) => {
    dispatch(remove(index)); // Dispara a ação de remoção com o índice do item
  };

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <ul>
          {items.map((item, index) => (
            <CartItem key={index}>
              <img src={item.foto} alt={item.nome} />
              <div>
                <h3>{item.nome}</h3>
                <span>{formataPreco(item.preco)}</span>
              </div>
              {/* Botão para remover o item pelo índice */}
              <button onClick={() => handleRemoveItem(index)} />
            </CartItem>
          ))}
        </ul>
        <Prices>
          <p>Valor total</p>
          <p>{formataPreco(calcularValorTotal())}</p>
        </Prices>
        <Button title="Clique aqui para continuar com a entrega" type="button">
          Continuar com a entrega
        </Button>
      </Sidebar>
    </CartContainer>
  );
};

export default Cart;
