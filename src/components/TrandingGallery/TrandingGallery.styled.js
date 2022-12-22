import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const TrandingList = styled.ul`
  padding: 20px 20px;
  margin: 0;
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: auto auto auto;
  gap: 32px;
  background-color: rgb(243, 241, 241);
`;

export const Item = styled.li`
  list-style: none;
  cursor: pointer;
  width: 200px;

  &:hover,
  &:focus {
    box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
    transform: scale(1.01);
  }
`;

export const Link = styled(NavLink)`
  text-decoration: none;
`;

