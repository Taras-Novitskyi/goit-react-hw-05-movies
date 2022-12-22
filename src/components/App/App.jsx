// import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from '../Layout/Layout';
import { NotFoundPage } from 'pages/NotFoundPage/NotFoundPage';
import { Home } from 'pages/Home/Home';
import Movies from '../../pages/Movies/Movies';
import MovieCard from 'pages/MovieCard/MovieCard';
import { Cast } from 'components/Cast/Cast';
import { Reviews } from 'components/Reviews/Reviews';
import { Box } from 'components/Box/Box';

// const Movies = lazy(() => import('../../pages/Movies/Movies'));
// const MovieCard = lazy(() => import('../../pages/MovieCard/MovieCard'));

export const App = () => {
  return (
    <Box>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieCard />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Box>
  );
};
