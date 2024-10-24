import ProductsList from '../../components/ProductsList';
import { useGetFeaturedPratoQuery } from '../../services/api';

const Home = () => {
  // Faz a requisição à API usando RTK Query
  const { data: destaques, isLoading, error } = useGetFeaturedPratoQuery();

  if (isLoading) {
    return <h3>Carregando...</h3>;
  }

  if (error) {
    return <h3>Erro ao carregar os destaques</h3>;
  }

  // Verifique se a resposta da API é válida
  if (!destaques || destaques.length === 0) {
    return <h3>Nenhum restaurante encontrado</h3>;
  }

  return (
    <>
      <ProductsList restaurantes={destaques} background="rosaClaro" title="" />
    </>
  );
};

export default Home;
