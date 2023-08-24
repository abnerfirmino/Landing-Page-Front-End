import { mapMenu } from './map-menu';
import { mapSections } from './map-sections';

export const mapData = (pagesData = [{}]) => {
  return pagesData.map((data) => {
    const {
      title = '',
      slug = '',
      footer_text: footerHtml = '',
      sections = [],
      menu = {},
    } = data;

    return {
      title,
      slug,
      footerHtml,
      sections: mapSections(sections),
      menu: mapMenu(menu),
    };
  });
};
