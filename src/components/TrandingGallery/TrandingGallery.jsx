import { FetchTrendingFilms } from 'services/fetchApi';
import { useState } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Loader } from 'components/Loader/Loader';
import { makeSmoothScroll } from 'services/makeSmoothScroll';
import { TrandingList, Item, Link } from './TrandingGallery.styled';
import { SmallMovieCard } from 'components/SmallMovieCard/SmallMovieCard';
import { Button } from 'components/Button/Button';
import { Box } from 'components/Box/Box';

export const TrandingGallery = () => {
  const [films, setFilms] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [showLoadMore, setShowLoadMore] = useState(false);
  const [isLoad, setIsLoad] = useState(false);
  const location = useLocation();

  useEffect(() => {
    async function fetchAPI() {
      try {
        setIsLoad(true);
        const { results, total_pages, page, total_results } =
          await FetchTrendingFilms(currentPage);

        if (total_pages === page || total_results < 20) {
          setShowLoadMore(false);
        } else { setShowLoadMore(true) };
        
        if (page !== 1) {
          setFilms(state => [...state, ...results]);

          setTimeout(() => {
            makeSmoothScroll();
          }, 300);
          return;
        }

        setFilms(results);
      } catch (error) {
        console.log(error);
        toast.error('Something wrong, try again');
      } finally {
        setIsLoad(false);
      }
    }

    fetchAPI();
  }, [currentPage]);

  const changePage = () => {
    setCurrentPage(state => state + 1);
  };

  return (
    <Box display="flex" flexDirection="column" justifyContent="center">
      <TrandingList>
        {films &&
          films.map(({ id, title, poster_path }) => (
            <Item key={id}>
              <Link to={`movies/${id}`} state={{ from: location }}>
                <SmallMovieCard id={id} title={title} poster={poster_path} />
              </Link>
            </Item>
          ))}
      </TrandingList>
      {isLoad && <Loader />}
      {showLoadMore && !isLoad && (
        <Button text="Load more" onClick={changePage} />
      )}
    </Box>
  );
};
