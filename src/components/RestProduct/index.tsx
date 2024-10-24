import { useState } from 'react';

import Button from '../Button';
import CustomModal from '../Modal';
import * as S from './styles';

import zoom from '../../assets/images/zoom.png';

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
      <S.RestCard>
        {items.map((media) => (
          <S.RestImageContainer
            key={media.id}
            onClick={() => handleOpenModal(media.foto)}
          >
            <img src={media.foto} alt={`Mídia da ${name}`} />
            <S.Action onClick={() => handleOpenModal(media.foto)}>
              <img src={zoom} alt="Clique para maximizar o produto" />
            </S.Action>
          </S.RestImageContainer>
        ))}
        <S.RestTitle>{title}</S.RestTitle>
        <S.RestDescription>{description}</S.RestDescription>
        <Button
          type="button"
          title="Visualizar Produto"
          onClick={handleButtonOpenModal} // Atualiza para abrir a modal
        >
          Adicionar ao carrinho
        </Button>
      </S.RestCard>

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
