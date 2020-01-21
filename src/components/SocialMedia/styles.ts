import styled from 'styled-components';
import { defaultTransition } from '../../common/mixins';

const SocialMediaLinkStyled = styled.a`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  color: ${props => props.theme.color.lightGrey};
  padding-left: calc(${props => props.theme.gutter.gutter8});
  padding-right: calc(${props => props.theme.gutter.gutter8});
  ${defaultTransition}
`;

const SocialMediaListStyled = styled.ul`
  display: flex;
  margin-left: calc(-${props => props.theme.gutter.gutter8});

  &:hover {
    ${SocialMediaLinkStyled} {
      opacity: 0.5;

      &:hover {
        opacity: 1;
      }
    }
  }
`;

const SocialMediaItemStyled = styled.li``;

const SocialMediaIconStyled = styled.span`
  display: flex;
  font-size: ${props => props.theme.fontSize.fontSize15};

  svg {
    fill: currentColor;
  }
`;

export { SocialMediaListStyled, SocialMediaItemStyled, SocialMediaLinkStyled, SocialMediaIconStyled };
