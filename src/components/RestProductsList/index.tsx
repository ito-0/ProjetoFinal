import { Prato } from '../../pages/Home';
import RestProduct from '../RestProduct';
import { Container, List } from './styles';

export type Props = {
  background: 'rosaClaro' | 'branca' | 'rosaEscuro';
  cardapio: Prato['cardapio'][]; // Corrija para aceitar o array correto
};

const RestProductsList = ({ background, cardapio }: Props) => (
  <Container background={background}>
    <div className="container">
      <List>
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
      </List>
    </div>
  </Container>
);

export default RestProductsList;
