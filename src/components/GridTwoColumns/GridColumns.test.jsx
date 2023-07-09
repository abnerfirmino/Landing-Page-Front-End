import { describe, expect, it } from 'vitest';
import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { GridTwoColumns } from '.';

import mock from './mock';

describe('<GridTwoColumns />', () => {
  it('should render two column grid', () => {
    const { container } = renderTheme(<GridTwoColumns {...mock} />);
    expect(container).toMatchSnapshot();
  });
});
