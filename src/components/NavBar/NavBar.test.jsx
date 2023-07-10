import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { NavBar } from '.';

import link from './mock';
import { theme } from '../../styles/theme';

describe('<NavBar />', () => {
  it('should render links', () => {
    renderTheme(<NavBar links={link} />);
    expect(screen.getAllByRole('link')).toHaveLength(link.length);
  });

  it('should not render links', () => {
    renderTheme(<NavBar />);
    expect(screen.queryAllByText(/links/i)).toHaveLength(0);
  });

  it('should render links', () => {
    renderTheme(<NavBar links={link} />);
    expect(screen.getByText(/link 10/i).parentElement).toHaveStyleRule(
      'flex-flow',
      'column wrap',
      {
        media: theme.media.ltMedium,
      },
    );
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<NavBar links={link} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
