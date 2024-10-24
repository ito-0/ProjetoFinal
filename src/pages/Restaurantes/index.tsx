import { useParams } from 'react-router-dom';
import RestProductsList from '../../components/RestProductsList';
import RestBanner from '../../components/RestBanner';

import { useGetPratoQuery } from '../../services/api';

const Restaurantes = () => {
  const { id } = useParams();

  // Faz a requisição usando RTK Query
  const { data: restaurante, isLoading, error } = useGetPratoQuery(id || '');

  if (!id) {
    return <h3>Restaurante não encontrado</h3>;
  }

  if (isLoading) {
    return <h3>Carregando...</h3>;
  }

  if (error) {
    return <h3>Erro ao carregar os dados do restaurante</h3>;
  }

  // Verifique se o restaurante e o cardápio são válidos
  if (!restaurante || !Array.isArray(restaurante.cardapio)) {
    return <h3>Restaurante ou cardápio não encontrado</h3>;
  }

  return (
    <>
      <RestBanner banner={restaurante} />
      <RestProductsList
        cardapio={restaurante.cardapio}
        background="lightPink"
      />
    </>
  );
};

export default Restaurantes;
