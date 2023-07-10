import { describe, expect, it } from 'vitest';
import { renderTheme } from '../../styles/render-theme';
import { Base } from '.';
import { MockBase } from './mock';

describe('<Base />', () => {
  it('should render', () => {
    const { container } = renderTheme(<Base {...MockBase} />);
    expect(container).toMatchSnapshot();
  });
});
