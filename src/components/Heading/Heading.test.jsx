import { describe, expect, it } from 'vitest';
import { screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { renderTheme } from '../../styles/render-theme';
import { theme } from '../../styles/theme';

import { Heading } from '.';

describe('Heading', () => {
  it('should render with default values', () => {
    renderTheme(<Heading>texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'texto' });

    expect(heading).toHaveStyle({
      color: theme.colors.primaryColor,
      'font-size': theme.fonts.sizes.xhuge,
      'text-transform': 'none',
    });
  });

  it('should render with white color', () => {
    renderTheme(<Heading colordark={false}>texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'texto' });

    expect(heading).toHaveStyle({
      color: theme.colors.white,
    });
  });

  it('should render correct heading sizes', () => {
    const { rerender } = renderTheme(<Heading size="small">texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'texto' });

    expect(heading).toHaveStyle({
      'font-size': theme.fonts.sizes.medium,
    });

    rerender(
      <ThemeProvider theme={theme}>
        <Heading size="big">texto</Heading>
      </ThemeProvider>,
    );

    expect(heading).toHaveStyle({
      'font-size': theme.fonts.sizes.xlarge,
    });

    rerender(
      <ThemeProvider theme={theme}>
        <Heading size="medium">texto</Heading>
      </ThemeProvider>,
    );

    expect(heading).toHaveStyle({
      'font-size': theme.fonts.sizes.large,
    });

    rerender(
      <ThemeProvider theme={theme}>
        <Heading size="huge">texto</Heading>
      </ThemeProvider>,
    );

    expect(screen.getByRole('heading', { name: 'texto' })).toHaveStyle({
      'font-size': theme.fonts.sizes.xhuge,
    });
  });

  it('should render correct font-size when using mobile', () => {
    renderTheme(<Heading size="huge">texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'texto' });

    expect(heading).toHaveStyleRule('font-size', theme.fonts.sizes.xlarge, {
      media: theme.media.ltMedium,
    });
  });

  it('should render with uppercase letters', () => {
    renderTheme(<Heading uppercase={true}>texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'texto' });

    expect(heading).toHaveStyle({
      'text-transform': 'uppercase',
    });
  });

  it('should render correct heading element', () => {
    const { container } = renderTheme(<Heading as="h6">texto</Heading>);
    const h6 = container.querySelector('h6');

    expect(h6.tagName.toLowerCase()).toBe('h6');
  });
});
