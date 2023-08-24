import { describe, expect, it } from 'vitest';
import { screen } from '@testing-library/react';
import { mapData } from './map-data';

describe('map-data', () => {
  it('should map data even if there is no data', () => {
    const pagesData = mapData()[0];
    expect(pagesData.title).toBe('');
    expect(pagesData.slug).toBe('');
    expect(pagesData.footerHtml).toBe('');
  });

  it('should map data if there are data', () => {
    const pagesData = mapData([
      {
        title: 'title',
        slug: 'slug',
        footer_text: '<p>Hey</p>',
      },
    ])[0];
    expect(pagesData.title).toBe('title');
    expect(pagesData.slug).toBe('slug');
    expect(pagesData.footerHtml).toBe('<p>Hey</p>');
  });
});
