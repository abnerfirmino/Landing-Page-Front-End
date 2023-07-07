import PropTypes from 'prop-types';
import * as Styled from './styles';
import { MenuLink } from '../MenuLink';

export const NavBar = ({ links = [] }) => {
  return (
    <Styled.Container>
      {links.map((link, index) => (
        <MenuLink key={index} {...link} />
      ))}
    </Styled.Container>
  );
};

NavBar.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      children: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      newTab: PropTypes.bool,
    }),
  ),
};
