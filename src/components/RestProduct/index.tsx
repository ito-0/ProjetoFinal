import { useState } from 'react';
import { useDispatch } from 'react-redux'; // Importar useDispatch
import Button from '../Button';
import CustomModal from '../Modal';
import { Action, Card, Descricao, ImageContainer, Titulo } from './styles';
import zoom from '../../assets/images/zoom.png';
import { CartItem, Prato } from '../../pages/Home';
import { add } from '../../store/reducers/cart'; // Importar a ação add

interface GalleryItem {
  id: number;
  foto: string;
}

type Props = {
  title: string;
  description: string;
  defaultCover: string;
  name: string;
  items: GalleryItem[]; // Array de objetos com id e foto
  porcao: string;
  preco: number;
  cardapio: Prato['cardapio'];
};

const RestProduct = ({
  title,
  description,
  defaultCover,
  name,
  items,
  porcao,
  preco,
  cardapio
}: Props) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(defaultCover);
  const dispatch = useDispatch(); // Inicializa o dispatch

  const handleOpenModal = (foto: string) => {
    setSelectedImage(foto);
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const handleAddToCart = () => {
    const cartItem: CartItem = {
      id: cardapio.id,
      nome: name, // Passa o nome correto
      descricao: description, // Passa a descrição correta
      foto: defaultCover, // Passa a imagem de capa correta
      preco,
      porcao
    };

    dispatch(add(cartItem)); // Adiciona o item ao carrinho via Redux
  };

  return (
    <>
      <Card>
        {items.map((media) => (
          <ImageContainer
            key={media.id}
            onClick={() => handleOpenModal(media.foto)}
          >
            <img src={media.foto} alt={`Mídia da ${name}`} />
            <Action onClick={() => handleOpenModal(media.foto)}>
              <img src={zoom} alt="Clique para maximizar o produto" />
            </Action>
          </ImageContainer>
        ))}
        <Titulo>{title}</Titulo>
        <Descricao>{description}</Descricao>
        <Button
          type="button"
          title="Adicionar ao carrinho"
          onClick={handleAddToCart} // Atualiza o evento onClick
        >
          Adicionar ao carrinho
        </Button>
      </Card>

      <CustomModal
        isVisible={isModalVisible}
        onClose={handleCloseModal}
        nome={name}
        descricao={description}
        foto={selectedImage}
        porcao={porcao}
        preco={preco}
        cardapio={cardapio}
      />
    </>
  );
};

export default RestProduct;
