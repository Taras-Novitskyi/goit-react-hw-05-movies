import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchFilmCast } from '../../services/fetchApi';
import image from '../../images/no-data.svg';

export const Cast = () => {
	const { movieId } = useParams();
	const [cast, setCast] = useState(null);

  useEffect(() => {
    async function fetchAPI() {
      try {
        // setIsLoad(true);
		  const { cast } = await fetchFilmCast(movieId);
		  setCast(cast);
      } catch (error) {
        console.log(error);
      } finally {
        // setIsLoad(false);
      }
    }

    fetchAPI();
  });
	
	if (!cast) {
    return;
  }

	return (
    <div>
      <ul>
        {cast.map(({ id, name, profile_path, character }) => (
          <li key={id}>
            <img
              src={profile_path ? `https://image.tmdb.org/t/p/w500${profile_path}`: image}
              alt={name}
            />
            <p>{name}</p>
            <p>Character: {character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
