import styled from 'styled-components';
import { cores } from '../../styles';
import { ButtonLink } from '../Button/styles';

export const ModalCustom = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  z-index: 10;

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 9;
  }
`;

export const ModalBody = styled.div`
  display: flex;

  img {
    width: 280px;
    height: 280px;
    object-fit: cover;
    margin-right: 20px;
  }
`;

export const ModalInfo = styled.div`
  color: ${cores.branca};
  display: flex;
  flex-direction: column;

  h4 {
    font-size: 18px;
    margin-bottom: 16px;
  }

  p {
    font-size: 14px;
    line-height: 24px;
    margin-bottom: 16px;
  }

  Button {
    align-self: flex-start;
    margin-top: 0;
    background-color: ${cores.rosaMedio};
    color: ${cores.rosaEscuro};
  }
`;

export const ModalContent = styled.div`
  max-width: 1024px;
  position: relative;
  background-color: ${cores.rosaEscuro};
  padding: 32px;
  z-index: 20;
  display: flex;
  flex-direction: column;
  }
`;

export const ModalHeader = styled.header`
  position: absolute;
  top: 8px;
  right: 8px;
  display: flex;
  justify-content: flex-end;
  width: calc(100% - 32px);

  img {
    cursor: pointer;
  }
`;
