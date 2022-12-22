import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchFilmReviews } from '../../services/fetchApi';
import { Item, Author, Review, Error } from './Reviews.styled';
import { Box } from 'components/Box/Box';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    async function fetchAPI() {
      try {
        const { results } = await fetchFilmReviews(movieId);
        setReviews(results);
      } catch (error) {
        console.log(error);
      }
    }

    fetchAPI();
  });

  if (!reviews) {
    return;
  }

  if (reviews.length === 0) {
    return <Error>We don't have any reviews for this movie.</Error>;
  }

  return (
      <Box as="ul">
        {reviews.map(({ id, author, content }) => (
          <Item key={id}>
            <Author>Author: {author}</Author>
            <Review>{content}</Review>
          </Item>
        ))}
      </Box>
  );
};

export default Reviews;

