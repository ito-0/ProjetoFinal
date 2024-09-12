import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Prato } from '../Home';
import RestProductsList from '../../components/RestProductsList';
import RestBanner from '../../components/RestBanner';

const Restaurantes = () => {
  const { id } = useParams();

  const [banner, setBanner] = useState<Prato | null>(null); // Inicializa como null para evitar erro
  const [cardapio, setCardapio] = useState<Prato['cardapio'][]>([]); // Corrige para ser um array de objetos do cardapio

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => {
        setBanner(res);
        setCardapio(res.cardapio); // Corrige para acessar corretamente a propriedade cardapio, que deve ser um array
      })
      .catch((error) => console.error('Erro ao buscar dados:', error));
  }, [id]);

  if (!banner) {
    return <h3>Carregando...</h3>;
  }

  return (
    <>
      <RestBanner banner={banner} />
      <RestProductsList cardapio={cardapio} background="rosaClaro" />
    </>
  );
};

export default Restaurantes;
