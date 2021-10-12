import styled from '@emotion/styled';
import cnst from '../../constants/custom-theme';

export const Header = styled.header(({mode}: {mode: string}) => {
  const {primaryBg} = cnst[mode];
  return ({
    padding: 20,
    backgroundColor: `${primaryBg}`,
  });
});
