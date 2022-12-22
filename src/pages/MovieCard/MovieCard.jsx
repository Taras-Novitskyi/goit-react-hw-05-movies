import { Outlet, useParams, useLocation } from 'react-router-dom';
import { useEffect, useState, Suspense } from 'react';
import { FetchFilmDetails } from '../../services/fetchApi';
import { BackLink } from 'components/BackLink/BackLink';
import {
  Container,
  Image,
  Info,
  Title,
  Score,
  Overview,
  Genres,
  AddInfo,
  ImageWrapp,
  Text,
  StyleLink,
} from './MovieCard.styled';
import image from '../../images/no-data.svg';
import { Loader } from 'components/Loader/Loader';

export const MovieCard = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();

  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    async function fetchAPI() {
      try {
        // setIsLoad(true);
        const result = await FetchFilmDetails(movieId);
        setMovie(result);
      } catch (error) {
        console.log(error);
      } finally {
        // setIsLoad(false);
      }
    }

    fetchAPI();
  }, [movieId]);

  if (!movie) {
    return;
  }

  const { title, poster_path, genres, overview, vote_average, release_date } =
    movie;
  const filmGenres = genres.map(genre => genre.name).join(', ');
  const score = Math.round(vote_average * 10);
  const releaseData = release_date.split('-')[0];
  const posterPath = poster_path
    ? `https://image.tmdb.org/t/p/w500${poster_path}`
    : image;

  return (
    <div>
      <BackLink to={backLinkHref}>Go back</BackLink>
      <Container>
        <ImageWrapp>
          <Image src={posterPath} alt={title} />
        </ImageWrapp>
        <Info>
          <Title>
            {title} ({releaseData})
          </Title>
          <Score>User Score: {score} %</Score>
          <Overview>Overview</Overview>
          <Text>{overview}</Text>
          <Genres>Overview</Genres>
          <Text>{filmGenres}</Text>
        </Info>
      </Container>
      <AddInfo>
        <p>Additional information</p>
        <StyleLink to={`cast`} state={{ from: location.state?.from }}>
          Cast
        </StyleLink>
        <StyleLink to={`reviews`} state={{ from: location.state?.from }}>
          Reviews
        </StyleLink>
      </AddInfo>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieCard;
