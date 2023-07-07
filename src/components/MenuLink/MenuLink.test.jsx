import { describe, expect, it } from 'vitest';
import { screen } from '@testing-library/react';
import { MenuLink } from '.';

import { renderTheme } from '../../styles/render-theme';

describe('MenuLink', () => {
  it('should render a link', () => {
    renderTheme(<MenuLink link="https://localhost">Children</MenuLink>);

    const linK = screen.getByRole('link', { name: 'Children' });

    expect(linK).toHaveAttribute('target', '_self');
  });

  it('should open a new tab', () => {
    renderTheme(
      <MenuLink link="https://localhost" newTab={true}>
        Children
      </MenuLink>,
    );

    const linK = screen.getByRole('link', { name: 'Children' });

    expect(linK).toHaveAttribute('target', '_blank');
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(
      <MenuLink link="https://localhost">Children</MenuLink>,
    );

    const linK = container.firstChild;

    expect(linK).toMatchInlineSnapshot(`
      .c0 {
        display: block;
        -webkit-text-decoration: none;
        text-decoration: none;
        font-size: 1.6rem;
        padding: 0.8rem;
        color: #0a1128;
        position: relative;
      }

      .c0::after {
        content: '';
        position: absolute;
        bottom: 0.76rem;
        left: 50%;
        width: 0;
        height: 0.2rem;
        background-color: #dc143c;
        -webkit-transition: all 300ms ease-in-out;
        transition: all 300ms ease-in-out;
      }

      .c0:hover::after {
        left: 25%;
        width: 50%;
      }

      <a
        class="c0"
        href="https://localhost"
        target="_self"
      >
        Children
      </a>
    `);
  });
});
