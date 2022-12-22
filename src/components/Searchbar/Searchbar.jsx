import { BsSearch } from 'react-icons/bs';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import {
  Container,
  SearchForm,
  SearchBtn,
  Input,
} from './Searchbar.styled';

export function Searchbar({ onFormSubmit}) {
  const [searchMovie, setSearchMovie] = useState('');

  const handleSearchChange = event => {
    setSearchMovie(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();
    
    if (searchMovie.trim() === '') {
      toast.error('Enter your search query');
    }

    onFormSubmit(searchMovie);
    setSearchMovie('');
    event.currentTarget.reset();
  };

  return (
    <Container>
      <SearchForm onSubmit={handleSubmit}>
        <Input
          type="text"
          autocomplete="off"
          name="input"
          autoFocus
          placeholder="Search movies"
          onChange={handleSearchChange}
        />
        <SearchBtn type="submit">
          <BsSearch />
        </SearchBtn>
      </SearchForm>
    </Container>
  );
};

Searchbar.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
};
