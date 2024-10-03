import styled from 'styled-components';
import { cores } from '../../styles';
import { ButtonContainer } from '../Button/styles';

import lixo from '../../assets/images/lixeira-de-reciclagem 1.png';

export const Overlay = styled.div`
  position: absolute
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`;

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  color: ${cores.rosaMedio};

  &.is-open {
    display: flex;
  }
`;

export const Sidebar = styled.aside`
  background-color: ${cores.rosaEscuro};
  padding: 32px 8px 0;
  max-width: 360px;
  width: 100%;

  ${ButtonContainer} {
    max-width: 100%;
    width: 100%;
    background-color: ${cores.rosaMedio};
    color: ${cores.rosaEscuro};
    padding: 4px 0;
  }
`;

export const Prices = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 24px 0 8px;
`;

export const CartItem = styled.li`
  display: flex;
  background-color: ${cores.rosaMedio};
  color: ${cores.rosaEscuro};
  margin-bottom: 16px;
  position: relative;

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    padding: 8px;
  }

  h3 {
    font-size: 18px;
    margin-bottom: 16px;
  }

  span {
    font-size: 14px;
  }

  button {
    background-image: url(${lixo});
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    position: absolute;
    bottom: 8px;
    right: 8px;
  }
`;
