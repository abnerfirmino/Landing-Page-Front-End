import { describe, expect, it } from 'vitest';
import { screen } from '@testing-library/react';
import { mapData } from './map-data';

describe('map-data', () => {
  it('should map data even if there is no data', () => {
    const pagesData = mapData()[0];
    expect(pagesData.title).toBe('');
    expect(pagesData.slug).toBe('');
    expect(pagesData.footerHtml).toBe('');
    expect(pagesData.sections).toEqual([]);
    expect(pagesData.menu).toEqual({});
  });

  it('should map data if there are data', () => {
    const pagesData = mapData([
      {
        title: 'title',
        slug: 'slug',
        footer_text: '<p>Hey</p>',
        sections: [1, 2, 3, 4],
        menu: { a: 'b' },
      },
    ])[0];
    expect(pagesData.title).toBe('title');
    expect(pagesData.slug).toBe('slug');
    expect(pagesData.footerHtml).toBe('<p>Hey</p>');
    expect(pagesData.sections).toEqual([1, 2, 3, 4]);
    expect(pagesData.menu).toEqual({ a: 'b' });
  });
});
