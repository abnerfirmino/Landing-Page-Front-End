import styled, { css } from 'styled-components';

// configurando o title size
const titleSize = {
  small: (theme) => css`
    font-size: ${theme.fonts.sizes.medium};`,
  medium: (theme) => css`
    font-size: ${theme.fonts.sizes.large};`,
  big: (theme) => css`
    font-size: ${theme.fonts.sizes.xlarge};`,
  huge: (theme) => css`
    font-size: ${theme.fonts.sizes.xhuge};
    ${mediaFont(theme)};
  `,
};

function mediaFont(theme) {
  return css`
    @media screen and ${theme.media.ltMedium} {
      font-size: ${theme.fonts.sizes.xlarge};
    }
  `;
}

// função do uppercase
const titleCase = (uppercase) => css`
  text-transform: ${uppercase ? 'uppercase' : 'none'};
`;

export const Title = styled.h1`
  ${({ theme, colordark, size, uppercase }) => css`
    color: ${colordark ? theme.colors.primaryColor : theme.colors.white};
    ${titleSize[size](theme)};
    ${titleCase(uppercase)};
  `}
`;
