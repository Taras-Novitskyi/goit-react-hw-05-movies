import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { SearchGallery } from 'components/SearchGallery/SearchGallery';

export const Movies = () => {
  const [query, setQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
    const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('query') ?? '';
  
  	  useEffect(() => {
        setQuery(movieName);
      }, [movieName]);

  const handleFormSubmit = searchMovie => {
    setQuery(searchMovie);
    setCurrentPage(1);

    const nextParams = searchMovie !== '' ? { query: searchMovie } : {};
    setSearchParams(nextParams);
  };

  const changePage = () => {
    setCurrentPage(state => state + 1);
  };

  return (
    <div>
      <Searchbar onFormSubmit={handleFormSubmit} value={movieName} />
      <SearchGallery
        searchMovie={query}
        page={currentPage}
        changePage={changePage}
      />
    </div>
  );
};

export default Movies;
