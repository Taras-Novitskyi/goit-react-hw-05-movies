import { Link } from 'react-router-dom';
import {Text } from './NotFoundPage.styled';

const NotFoundPage = () => {
  return (
    <Text>
      Sorry, page not found, please, go to{' '}
      <Link to="/">home page </Link>
    </Text>
  );
};

export default NotFoundPage;