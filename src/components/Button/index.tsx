import { ButtonContainer, ButtonLink } from './styles';

export type Props = {
  type: 'button' | 'link' | 'submit';
  title: string;
  to?: string;
  onClick?: () => void;
  children: string;
  variant?: 'primary' | 'secondary'; // Adiciona o variant para diferentes estilos de botão
  disabled?: boolean; // Adiciona a opção de desabilitar o botão
};

const Button = ({
  type,
  title,
  to,
  onClick,
  children,
  variant = 'primary',
  disabled
}: Props) => {
  if (type === 'button' || type === 'submit') {
    return (
      <ButtonContainer
        type={type}
        title={title}
        onClick={onClick}
        variant={variant} // Usa a variante (primary ou secondary)
        disabled={disabled} // Define o botão como desabilitado se necessário
      >
        {children}
      </ButtonContainer>
    );
  }

  return (
    <ButtonLink to={to as string} title={title}>
      {children}
    </ButtonLink>
  );
};

export default Button;
