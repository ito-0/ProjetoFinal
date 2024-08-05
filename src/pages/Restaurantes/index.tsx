import RestProductsList from '../../components/RestProductsList';
import RestPrato from '../../models/RestPrato';
import RestBannerAp from '../../models/RestApresenta';
import RestBannerFinal from '../../components/RestBannerFinal';

import pizzaMarguerita from '../../assets/images/pizzaMarguerita.png';
import comidaUm from '../../assets/images/comidaUm.png';

const bannerLaDolce: RestBannerAp[] = [
  {
    id: 1,
    image: comidaUm,
    title: 'La Dolce Vita Trattoria',
    category: 'Italiana'
  }
];

const pratosLaDolce: RestPrato[] = [
  {
    id: 1,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizzaMarguerita,
    title: 'Pizza Marguerita'
  },
  {
    id: 2,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizzaMarguerita,
    title: 'Pizza Marguerita'
  },
  {
    id: 3,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizzaMarguerita,
    title: 'Pizza Marguerita'
  },
  {
    id: 4,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizzaMarguerita,
    title: 'Pizza Marguerita'
  },
  {
    id: 5,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizzaMarguerita,
    title: 'Pizza Marguerita'
  },
  {
    id: 6,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizzaMarguerita,
    title: 'Pizza Marguerita'
  }
];

const Restaurantes = () => (
  <>
    <RestBannerFinal banners={bannerLaDolce} />
    <RestProductsList pratos={pratosLaDolce} background="rosaClaro" />
  </>
);

export default Restaurantes;
