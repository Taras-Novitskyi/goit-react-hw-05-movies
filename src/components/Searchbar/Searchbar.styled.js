import styled from 'styled-components';

export const Container = styled.div`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;

  padding-top: 16px;
  padding-bottom: 16px;
  background-color: rgb(243, 241, 241);
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
`;

export const SearchBtn = styled.button`
  display: inline-block;
  width: 42px;
  height: 42px;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  border: solid 2px rgba(0, 0, 0, 0.14);

  &:hover {
    opacity: 1;
  }
`;

export const Input = styled.input`
  display: inline-block;
  width: 100%;
  height: 42px;
  font: inherit;
  font-size: 18px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;

  border: solid 2px rgba(0, 0, 0, 0.14);
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2)

  &::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;
