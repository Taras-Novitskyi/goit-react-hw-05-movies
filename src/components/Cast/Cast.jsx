import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchFilmCast } from '../../services/fetchApi';
import image from '../../images/no-data.svg';
import { Box } from 'components/Box/Box';
import { Item, Text, Image } from './Cast.styled';

const Cast = () => {
	const { movieId } = useParams();
	const [cast, setCast] = useState(null);

  useEffect(() => {
    async function fetchAPI() {
      try {
		  const { cast } = await fetchFilmCast(movieId);
		  setCast(cast);
      } catch (error) {
        console.log(error);
      }
    }

    fetchAPI();
  });
	
	if (!cast) {
    return;
  }

	return (
    <Box as="ul">
        {cast.map(({ id, name, profile_path, character }) => (
          <Item key={id}>
            <Image
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w500${profile_path}`
                  : image
              }
              alt={name}
              width='100'
            />
            <Text>{name}</Text>
            <Text>Character: {character}</Text>
          </Item>
        ))}
    </Box>
  );
};

export default Cast;