import Banner from '../../components/Banner';
import ProductsList from '../../components/ProductsList';
import Prato from '../../models/Prato';

import comidaDois from '../../assets/images/comidaDois.png';
import comidaUm from '../../assets/images/comidaUm.png';
import estrelaNota from '../../assets/images/estrela.png';

const destaques: Prato[] = [
  {
    id: 1,
    category: '4.9',
    star: estrelaNota,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    image: comidaDois,
    infos: ['Destaque da Semana', 'Japonesa'],
    title: 'Hioki Sushi'
  },
  {
    id: 2,
    category: '4.6',
    star: estrelaNota,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: comidaUm,
    infos: ['Italiana'],
    title: 'Hioki Sushi'
  },
  {
    id: 3,
    category: '4.6',
    star: estrelaNota,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: comidaUm,
    infos: ['Italiana'],
    title: 'Hioki Sushi'
  },
  {
    id: 4,
    category: '4.6',
    star: estrelaNota,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: comidaUm,
    infos: ['Italiana'],
    title: 'Hioki Sushi'
  },
  {
    id: 5,
    category: '4.6',
    star: estrelaNota,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: comidaUm,
    infos: ['Italiana'],
    title: 'Hioki Sushi'
  },
  {
    id: 6,
    category: '4.6',
    star: estrelaNota,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: comidaUm,
    infos: ['Italiana'],
    title: 'Hioki Sushi'
  }
];

const Home = () => (
  <>
    <Banner />
    <ProductsList pratos={destaques} background="rosaClaro" title="Destaques" />
  </>
);

export default Home;
