import styled from 'styled-components';
import { cores } from '../../styles';

export const HeaderBar = styled.header<{ backgroundImage: string }>`
  width: 100%;
  display: flex;
  justify-content: center;
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  background-position: center;

  nav {
    max-width: 1024px;
    width: 100%;
  }

  div {
    flex-direction: column;
    width: 100%;
    justify-content: center;
  }
`;

export const Logo = styled.img`
  height: 58px;
  position: absolute;
  top: 64px;
`;

export const Links = styled.ul`
  display: flex;
  text-decoration: none;
  justify-content: space-between;
`;

export const LinkItem = styled.li`
  padding: 88px 0;

  a {
    color: ${cores.rosaEscuro};
    text-decoration: none;
    font-weight: bold;
    font-size: 20px;
  }
`;

export const BannerTitle = styled.h1`
  font-size: 36px;
  max-width: 540px;
  margin: 260px auto 40px;
  text-align: center;
`;

export const CartButton = styled.a`
  display: flex;
  cursor: pointer;
`;
