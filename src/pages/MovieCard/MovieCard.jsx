import { Outlet, useParams, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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
} from './MovieCard.styled';
import image from '../../images/no-data.svg';

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

  const { title, backdrop_path, genres, overview, vote_average, release_date } =
    movie;
  const filmGenres = genres.map(genre => genre.name).join(', ');
  const score = Math.round(vote_average * 10);
  const releaseData = release_date.split('-')[0];
  const posterPath = backdrop_path
    ? `https://image.tmdb.org/t/p/w500${backdrop_path}`
    : image;

  return (
    <div>
      <BackLink to={backLinkHref}>Go back</BackLink>

      <Container>
        <Image src={posterPath} alt={title} />
        <Info>
          <Title>
            {title} ({releaseData})
          </Title>
          <Score>Score: {score}</Score>
          <Overview>
            <span>Overview</span> <p>{overview}</p>
          </Overview>
          <Genres>{filmGenres}</Genres>
        </Info>
      </Container>
      <AddInfo>
        <p>Additional information</p>
        <Link to={`cast`} state={{ from: location.state?.from }}>
          Cast
        </Link>
        <Link to={`reviews`} state={{ from: location.state?.from }}>
          Reviews
        </Link>
      </AddInfo>
      <Outlet />
    </div>
  );
};

export default MovieCard;
