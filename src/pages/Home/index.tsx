import { useEffect, useState } from 'react';

import ProductsList from '../../components/ProductsList';

export interface GalleryItem {
  foto: string;
}

export type Prato = {
  id: number;
  titulo: string;
  tipo: string;
  avaliacao: string;
  descricao: string;
  capa: string;
  destacado?: string;
  cardapio: {
    foto: string;
    preco: number;
    id: number;
    nome: string;
    descricao: string;
    porcao: string;
  };
};

const Home = () => {
  const [destaques, setDestaques] = useState<Prato[]>([]);

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setDestaques(res));
  }, []);

  return (
    <>
      <ProductsList restaurantes={destaques} background="rosaClaro" title="" />
    </>
  );
};

export default Home;
