import styled from 'styled-components';

export const Btn = styled.button`
  padding: 8px 16px;
  margin: 32px auto;
  border-radius: 4px;
  background-color: rgb(114, 91, 85);
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  display: inline-block;
  color: #fff;
  border: 0;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  width: 180px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);

  &:hover,
  &:focus {
    background-color: #674c4c;
  }
`;

export const ButtonUp = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;

  display: flex;
  align-items: center;
  justify-content: center;

  height: 50px;
  width: 50px;

  font-family: 'Montserrat';
  font-size: 30px;
  color: rgb(114, 91, 85);
  background-color: transparent;
  border: 4px solid rgb(114, 91, 85);
  border-radius: 50%;

  opacity: ${p => (p.isButtonUp ? 1 : 0)};
  pointer-events: ${p => (p.isButtonUp ? 'auto' : 'none')};

  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: #fff;
    scale: 1.05;
    background-color: rgb(114, 91, 85);
  }

  &:active,
  &:focus {
    outline: none;
    box-shadow: none;
  }

  @media (min-width: 768px) {
    bottom: 100px;
    right: 50px;
    height: 70px;
    width: 70px;
    font-size: 50px;
    bottom: 100px;
  }
`;
