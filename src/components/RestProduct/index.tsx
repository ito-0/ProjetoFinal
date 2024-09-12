import { useState } from 'react';
import Button from '../Button';
import CustomModal from '../Modal';
import { Action, Card, Descricao, ImageContainer, Titulo } from './styles';

import zoom from '../../assets/images/zoom.png';

interface GalleryItem {
  foto: string;
}

type Props = {
  title: string;
  description: string;
  defaultCover: string;
  name: string;
  items: GalleryItem[];
  porcao: string; // Array com as fotos
  preco: number;
};

const RestProduct = ({
  title,
  description,
  defaultCover,
  name,
  items,
  porcao,
  preco
}: Props) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(defaultCover); // Estado para a imagem selecionada

  const handleOpenModal = (foto: string) => {
    setSelectedImage(foto); // Atualiza a imagem selecionada
    setModalVisible(true); // Abre a modal
  };

  const handleCloseModal = () => {
    setModalVisible(false); // Fecha a modal
  };

  return (
    <>
      <Card>
        {items.map((media, index) => (
          <ImageContainer
            key={index} // Usa o index como key já que o item não tem URL única
            onClick={() => handleOpenModal(media.foto)} // Abre a modal com a imagem selecionada
          >
            <img src={media.foto} alt={`Mídia ${index + 1} da ${name}`} />
            <Action onClick={() => handleOpenModal(media.foto)}>
              <img src={zoom} alt="Clique para maximizar o produto" />
            </Action>
          </ImageContainer>
        ))}
        <Titulo>{title}</Titulo>
        <Descricao>{description}</Descricao>
        <Button
          type="link"
          to="/restaurantes"
          title="Clique aqui para aproveitar este prato"
        >
          Adicionar ao carrinho
        </Button>
      </Card>

      <CustomModal
        isVisible={isModalVisible}
        onClose={handleCloseModal}
        nome={name}
        descricao={description}
        foto={selectedImage} // Passa a imagem selecionada para a modal
        porcao={porcao}
        preco={preco}
      />
    </>
  );
};

export default RestProduct;
