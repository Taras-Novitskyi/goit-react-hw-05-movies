import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Link } from './SearchGallery.styled';
import { fetchSearchFilms } from '../../services/fetchApi';
import { makeSmoothScroll } from 'services/makeSmoothScroll';
import { Box } from 'components/Box/Box';
import { Button } from 'components/Button/Button';
import { Loader } from 'components/Loader/Loader';
import { GalleryList, Item } from './SearchGallery.styled';
import { SmallMovieCard } from 'components/SmallMovieCard/SmallMovieCard';

export const SearchGallery = ({ searchMovie, page, changePage }) => {
  const [movies, setMovies] = useState(null);
  const [totalMovies, setTotalMovies] = useState(0);
  const [isLoad, setIsLoad] = useState(false);
  const [isShowGallery, setIsShowGallery] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsShowGallery(false);
  }, [searchMovie]);

  useEffect(() => {
    async function fetchAPI() {
      try {
        setIsLoad(true);
        const { results, total_results } = await fetchSearchFilms(
          searchMovie,
          page
        );

        if (results.length === 0) {
          toast.error('Sorry, no resault for your search');

          setIsShowGallery(false);
          setTotalMovies(0);
          setMovies(null);
          return;
        }

        if (page !== 1) {
          setMovies(state => [...state, ...results]);
          setIsShowGallery(true);

          setTimeout(() => {
            makeSmoothScroll();
          }, 300);
          return;
        }

        setMovies(results);
        setTotalMovies(total_results);
        setIsShowGallery(true);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoad(false);
      }
    }

    fetchAPI();
  }, [page, searchMovie]);

  if (movies === null) {
    return null;
  }

  const totalPages = Math.ceil(totalMovies / 12);

  if (searchMovie === '') {
    return (
      <Box display="flex" justifyContent="center" as="h1">
        Enter key word from movie search!
      </Box>
    );
  }

  return (
    <>
      {isShowGallery && (
        <Box display="flex" flexDirection="column" justifyContent="center">
          <GalleryList>
            {movies.map(({ id, title, poster_path }) => (
              <Item key={id}>
                <Link to={`${id}`} state={{ from: location }}>
					<SmallMovieCard id={id} title={title} poster={poster_path}/>
                </Link>
              </Item>
            ))}
          </GalleryList>
          {totalMovies > 20 && totalPages !== page && !isLoad && (
            <Button text="Load more" onClick={changePage} />
          )}
        </Box>
      )}
      {isLoad && <Loader />}
    </>
  );
};
