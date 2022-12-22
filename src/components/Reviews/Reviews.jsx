import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchFilmReviews } from '../../services/fetchApi';

export const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    async function fetchAPI() {
      try {
        // setIsLoad(true);
        const { results } = await fetchFilmReviews(movieId);
        setReviews(results);
      } catch (error) {
        console.log(error);
      } finally {
        // setIsLoad(false);
      }
    }

    fetchAPI();
  });

  if (!reviews) {
    return;
  }

  if (reviews.length === 0) {
    return <p>We don't have any reviews for this movie.</p>;
  }

  return (
    <div>
      <ul>
        {reviews.map(({ id, author, content }) => (
          <li key={id}>
            <p>Author: {author}</p>
            <p>{content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

