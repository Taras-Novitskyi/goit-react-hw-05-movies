import styled from "styled-components";
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: columns;
  padding: 16px;

  border-bottom: 1px solid black;
`;

export const ImageWrapp = styled.div`
  width: 300px;
  height: 420px;
`;

export const Image = styled.img`
  min-width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

export const Info = styled.div`
  margin-left: 20px;
  font-size: 16px;
`;

export const Title = styled.h2`
  margin-top: 24px;
  font-size: 24px;
  font-weight: 700;
`;

export const Score = styled.div`
  margin-top: 16px;
`;

export const Overview = styled.div`
  font-size: 18px;
  font-weight: 700;
  margin-top: 24px;
  line-height: 1.66;
`;

export const Genres = styled.div`
  font-weight: 700;
  margin-top: 24px;
  line-height: 1.66;
`;

export const Text = styled.div`
  margin-top: 16px;
  line-height: 1.66;
`;

export const AddInfo = styled.div`
  padding: 16px;

  border-bottom: 1px solid black;
`;

export const StyleLink = styled(NavLink)`
display: block;
  padding-left: 16px;
  margin-top: 16px;
  color: black;

  &:hover {
    color: rgb(114, 91, 85);
     text-decoration: none;
  }
`;
