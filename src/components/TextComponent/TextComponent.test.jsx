import { describe, expect, it } from 'vitest';
import { screen } from '@testing-library/react';
import { TextComponent } from '.';

import { renderTheme } from '../../styles/render-theme';

describe('TextComponent', () => {
  it('should render the correct text', () => {
    renderTheme(
      <TextComponent>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      </TextComponent>,
    );

    const text = screen.getByText(/Lorem ipsum, dolor/i);

    expect(text).toBeInTheDocument();
  });

  it('should have default styles', () => {
    const { container } = renderTheme(
      <TextComponent>Lorem ipsum.</TextComponent>,
    );
    const text = container.firstChild;

    expect(text).toMatchSnapshot();
  });
});
