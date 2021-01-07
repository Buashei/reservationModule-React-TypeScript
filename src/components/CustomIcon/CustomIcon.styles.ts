import styled from 'styled-components';

const smallSize = '45px';
const bigSize = '80px';

import { IsSmallProps } from './CustomIcon.types';

export const Img = styled.img<IsSmallProps>`
  height: ${({ isSmall }) => (isSmall ? bigSize : smallSize)};
`;
