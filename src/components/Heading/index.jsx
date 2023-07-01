import PropTypes from 'prop-types';
import { Title } from './styles';

export const Heading = ({ children, lightColor = false }) => {
  return <Title lightColor={lightColor}>{children}</Title>;
};

Heading.propTypes = {
  children: PropTypes.node.isRequired,
  lightColor: PropTypes.bool.isRequired,
};
