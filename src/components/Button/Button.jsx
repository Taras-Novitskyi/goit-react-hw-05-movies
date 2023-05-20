import PropTypes from 'prop-types';
import { Btn, ButtonUp } from './Button.styled';

export const Button = ({ text, onClick }) => {
  return (
    <Btn type="button" onClick={onClick}>
      {text}
    </Btn>
  );
};

export const ButtonScrollUp = ({
  type = 'button',
  onClickUp,
  children,
  isButtonUp,
  disabled = false,
}) => {
  return (
    <ButtonUp
      type={type}
      onClick={onClickUp}
      isButtonUp={isButtonUp}
      disabled={disabled}
    >
      {children}
    </ButtonUp>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string,
  onClickUp: PropTypes.func.isRequired,
  isButtonUp: PropTypes.bool.isRequired,
  disabled: PropTypes.bool,
};
