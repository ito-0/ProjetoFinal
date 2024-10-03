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
  const handleRemoveItem = (id: number) => {
    dispatch(remove(id)); // Dispara a ação de remoção com o id do item
  };

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <ul>
          {items.map((item) => (
            <CartItem key={item.id}>
              <img src={item.foto} alt={item.nome} />
              <div>
                <h3>{item.nome}</h3>
                {/* Formata o preço individual usando a função formataPreco */}
                <span>{formataPreco(item.preco)}</span>
              </div>
              {/* Botão para remover o item */}
              <button onClick={() => handleRemoveItem(item.id)} />
            </CartItem>
          ))}
        </ul>
        <Prices>
          <p>Valor total</p>
          {/* Exibe o valor total formatado */}
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
