import * as S from './styles';

import RestProduct from '../RestProduct';

export type Props = {
  background: 'lightPink' | 'white' | 'darkPink';
  cardapio: Prato['cardapio'][]; // Corrija para aceitar o array correto
};

const RestProductsList = ({ background, cardapio }: Props) => (
  <S.Container background={background}>
    <div className="container">
      <S.RestList>
        {cardapio.map((item) => (
          <RestProduct
            defaultCover={item.foto} // Acessa a propriedade correta
            name={item.nome} // Acessa o nome do prato diretamente
            key={item.id} // Usa o id correto
            description={item.descricao} // Acessa a descrição diretamente
            title={item.nome} // Usa o nome do prato para o título
            items={[{ id: item.id, foto: item.foto }]} // Passa o array correto de fotos
            porcao={item.porcao}
            preco={item.preco}
            cardapio={item}
          />
        ))}
      </S.RestList>
    </div>
  </S.Container>
);

export default RestProductsList;
