import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const ImgBox = styled.div`
  height: 260px;
`;

export const Img = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

export const Title = styled.p`
color: rgb(114, 91, 85);
  // text-transform: uppercase;
  font-size: inherit;
  font-weight: 700;
  padding: 6px;

  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

