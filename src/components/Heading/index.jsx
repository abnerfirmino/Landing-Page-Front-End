import PropTypes from 'prop-types';
import { Title } from './styles';

export const Heading = ({
  children,
  colordark = true,
  as = 'h1',
  size = 'huge',
  uppercase = false,
}) => {
  return (
    <Title colordark={+colordark} as={as} size={size} uppercase={+uppercase}>
      {children}
    </Title>
  );
};

Heading.propTypes = {
  children: PropTypes.node.isRequired,
  colordark: PropTypes.bool,
  as: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  size: PropTypes.oneOf(['small', 'medium', 'big', 'huge']),
  uppercase: PropTypes.bool,
};
