import { Title, Container, ImgBox, Img } from './SmallMovieCard.styled';
import image from '../../images/no-data.svg';

export const SmallMovieCard = ({ title, poster }) => {
  const posterPath = poster
    ? `https://image.tmdb.org/t/p/w500${poster}`
    : image;

  return (
    <Container>
      <ImgBox>
        <Img src={posterPath} alt={title} />
      </ImgBox>
      <Title>{title}</Title>
    </Container>
  );
};
