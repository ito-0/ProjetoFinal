import {
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalInfo
} from './styles';
import fechar from '../../assets/images/fechar.png';
import { ButtonLink } from '../Button/styles';

type ModalProps = {
  isVisible: boolean;
  onClose: () => void;
  nome: string;
  descricao: string;
  foto: string;
  porcao: string;
  preco: number;
};

const CustomModal = ({
  isVisible,
  onClose,
  nome,
  foto,
  descricao,
  porcao,
  preco
}: ModalProps) => {
  if (!isVisible) return null;

  const formataPreco = (preco: number) => {
    return new Intl.NumberFormat('pt-Br', {
      style: 'currency',
      currency: 'BRL'
    }).format(preco);
  };

  return (
    <Modal>
      <ModalContent className="container">
        <ModalHeader>
          <img src={fechar} alt="Clique para fechar" onClick={onClose} />
        </ModalHeader>
        <ModalBody>
          <img src={foto} alt={nome} />
          <ModalInfo>
            <h4>{nome}</h4>
            <p>{descricao}</p>
            <p>{`Serve: ${porcao}`}</p>
            <ButtonLink
              type="link"
              to="/restaurantes"
              title="Clique aqui para aproveitar este prato"
            >
              {`Adicionar ao carrinho - ${formataPreco(preco)}`}
            </ButtonLink>
          </ModalInfo>
        </ModalBody>
      </ModalContent>
      <div className="overlay" onClick={onClose}></div>
    </Modal>
  );
};

export default CustomModal;
