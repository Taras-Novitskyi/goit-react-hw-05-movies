import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <p>
      Sorry, page not found, please, go to{' '}
      <Link to="/"> home page </Link>
    </p>
  );
};

export default NotFoundPage;