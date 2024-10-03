import {
  ModalCustom,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalInfo
} from './styles';
import fechar from '../../assets/images/fechar.png';
import Button from '../Button/index';
import { CartItem, Prato } from '../../pages/Home';
import { useDispatch } from 'react-redux';
import { add } from '../../store/reducers/cart';

type ModalProps = {
  isVisible: boolean;
  onClose: () => void;
  nome: string;
  descricao: string;
  foto: string;
  porcao: string;
  preco: number;
  cardapio: Prato['cardapio'];
};

const Modal = ({
  isVisible,
  onClose,
  nome,
  foto,
  descricao,
  porcao,
  preco,
  cardapio
}: ModalProps) => {
  const dispatch = useDispatch(); // Adicionar o useDispatch aqui

  if (!isVisible) return null;

  const formataPreco = (preco: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(preco);
  };

  const adicionarAoCarrinho = () => {
    const cartItem: CartItem = {
      id: cardapio.id,
      nome,
      descricao,
      foto,
      porcao,
      preco
    };
    dispatch(add(cartItem)); // Usar o dispatch corretamente aqui
    console.log('Prato adicionado ao carrinho:', cartItem);
  };

  return (
    <ModalCustom>
      <ModalContent className="container">
        <ModalHeader>
          <img src={fechar} alt="Clique para fechar" onClick={onClose} />
        </ModalHeader>
        <ModalBody>
          <img src={foto} alt={nome} />
          <ModalInfo>
            <h4>{nome}</h4>
            <p>{descricao}</p>
            <p>Serve: {porcao}</p>
            <Button
              type="button"
              onClick={adicionarAoCarrinho} // Corrigir aqui para adicionar corretamente
              title="Clique aqui para aproveitar este prato"
            >
              {`Adicionar ao carrinho - ${formataPreco(preco)}`}
            </Button>
          </ModalInfo>
        </ModalBody>
      </ModalContent>
      <div className="overlay" onClick={onClose}></div>
    </ModalCustom>
  );
};

export default Modal;
