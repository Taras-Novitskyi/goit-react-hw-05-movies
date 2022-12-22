import { Link } from 'react-router-dom';

export const NotFoundPage = () => {
  return (
    <p>
      Sorry, page not found, please, go to{' '}
      <Link to="/"> home page </Link>
    </p>
  );
};
