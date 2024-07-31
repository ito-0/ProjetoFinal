import { BannerTitle, Imagem, Logo } from './styles'; // Importa os componentes estilizados
import logo from '../../assets/images/logo.png'; // Importa a imagem do logo
import comidaDois from '../../assets/images/comidaDois.png'; // Importa a imagem de fundo
import Tag from '../Tag'; // Importa o componente de Tag
import Button from '../Button'; // Importa o componente de Button

const Banner = () => (
  <Imagem style={{ backgroundImage: `url(${comidaDois})` }}>
    <div className="container">
      <Tag size="big">Destaque do dia</Tag>
      <div className="content">
        <Logo src={logo} alt="efood" /> {/* Exibe o logo */}
        <BannerTitle>
          Viva experiências gastronômicas no conforto da sua casa{' '}
          {/* Exibe o título */}
        </BannerTitle>
      </div>
      <Button
        type="link"
        to="/perfil"
        title="Clique aqui para aproveitar este prato"
      >
        Aproveitar
      </Button>
    </div>
  </Imagem>
);

export default Banner;
