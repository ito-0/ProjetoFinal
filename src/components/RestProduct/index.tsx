import { useState } from 'react';
import Button from '../Button';
import CustomModal from '../Modal';
import { Action, Card, Descricao, ImageContainer, Titulo } from './styles';
import zoom from '../../assets/images/zoom.png';
import { Prato } from '../../pages/Home';

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

  const handleOpenModal = (foto: string) => {
    setSelectedImage(foto);
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  // Removendo a lógica de adicionar ao carrinho para focar na abertura da modal
  const handleButtonOpenModal = () => {
    setModalVisible(true);
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
          title="Visualizar Produto"
          onClick={handleButtonOpenModal} // Atualiza para abrir a modal
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
