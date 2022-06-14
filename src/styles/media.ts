/*
 * Media queries utility
 */
import { generateMedia } from 'styled-media-query';

// Update breakpoints if you want
export const sizes = {
  xxsm: '320px',
  xsm: '480px',
  small: '576px',
  xmedium: '640px',
  medium: '768px',
  mediumplus: '835px',
  large: '992px',
  xlarge: '1200px',
  xxlarge: '1400px',
};

export const customMedia = generateMedia({ ...sizes });

/* Example
const SomeDiv = styled.div`
  display: flex;
  ....
  ${customMedia.lessThan("medium")`
    font-size: 15px;
  `};

  OR

  ${customMedia.lessThan("344px")`
    font-size: 15px;
  `};
`;
*/
