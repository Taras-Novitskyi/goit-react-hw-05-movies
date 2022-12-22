import { StyledLink } from "./BackLink.styled";
import { HiArrowLeft } from 'react-icons/hi';
import PropTypes from 'prop-types';

export const BackLink = ({ to, children }) => {
  return (
    <StyledLink to={to}>
      <HiArrowLeft size="16" />
      {children}
    </StyledLink>
  );
};

BackLink.propTypes = {
  to: PropTypes.string.isRequired,
};
