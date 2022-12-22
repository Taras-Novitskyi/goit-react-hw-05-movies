import { Link, Header } from './Sidebar.styled';

export const Sidebar = () => {
  return (
    <Header>
      <nav>
        <Link to="/" end>
          Home
        </Link>
        <Link to="/movies">Movies</Link>
      </nav>
    </Header>
  );
};
