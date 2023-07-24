import styled from "styled-components";
import Text from "@/components/Text";

const Title = styled(Text)`
  @media screen and (min-width: 0px) {
    max-width: 320px;
  }

  @media screen and (min-width: 744px) {
    max-width: 420px;
  }

  @media screen and (min-width: 1024px) {
    overflow: hidden;
    white-space: nowrap;

    border-right: 5px solid transparent;

    max-width: none;
    animation: writingTitle 5s 1.5s steps(30) both,
      blinkCursor 0.5s 12 1.5s both;
  }

  @keyframes writingTitle {
    0% {
      width: 0px;
    }
    100% {
      width: 950px;
    }
  }

  @keyframes blinkCursor {
    0% {
      border-right-color: ${({ theme }) => theme.colors.main["050"]};
    }
    100% {
      border-right-color: transparent;
    }
  }
`;

const Line = styled.span`
  @media screen and (min-width: 0px) {
    border-right: 3px solid transparent;
    overflow: hidden;
    display: block;
    white-space: nowrap;
  }

  @media screen and (min-width: 1024px) {
    display: inline;
    border: none;

    animation: none;
  }
`;

export const FirstLine = styled(Line)`
  @media screen and (min-width: 0px) {
    animation: writingSmallFirstLine 3s steps(12) 1s both,
      blinkCursor 0.5s steps(12) 0.5s 8 both;
  }

  @media screen and (min-width: 744px) {
    animation-name: writingMediumFirstLine, blinkCursor;
  }

  @keyframes writingSmallFirstLine {
    0% {
      width: 0px;
    }
    100% {
      width: 205px;
    }
  }

  @keyframes writingMediumFirstLine {
    0% {
      width: 0px;
    }
    100% {
      width: 270px;
    }
  }
`;

export const SecondLine = styled(Line)`
  color: ${({ theme }) => theme.colors.main["050"]};

  @media screen and (min-width: 0px) {
    animation: writingSmallSecondLine 4s steps(15) 4s both,
      blinkCursor 0.5s 4.5s 12 both;
  }

  @media screen and (min-width: 744px) {
    animation-name: writingMediumSecondLine, blinkCursor;
  }

  @keyframes writingSmallSecondLine {
    0% {
      width: 0px;
    }
    100% {
      width: 315px;
    }
  }

  @keyframes writingMediumSecondLine {
    0% {
      width: 0px;
    }
    100% {
      width: 420px;
    }
  }
`;

export const Subtitle = styled(Text)`
  overflow: hidden;
  white-space: nowrap;
  border-right: 2px solid transparent;

  @media screen and (min-width: 0px) {
    border-right: 3px solid transparent;

    animation: writingSubtitleSmall 3s 8s steps(15) both,
      blinkCursor 0.5s 8 8s both;
  }
  @media screen and (min-width: 744px) {
    animation-name: writingSubtitleMedium, blinkCursor;
  }
  @media screen and (min-width: 1024px) {
    border-right: 5px solid transparent;

    animation-name: writingSubtitleBig, blinkCursor;
    animation-delay: 6.5s, 6.5s;
  }

  @keyframes writingSubtitleSmall {
    0% {
      width: 0px;
    }
    100% {
      width: 295px;
    }
  }
  @keyframes writingSubtitleMedium {
    0% {
      width: 0px;
    }
    100% {
      width: 440px;
    }
  }
  @keyframes writingSubtitleBig {
    0% {
      width: 0px;
    }
    100% {
      width: 590px;
    }
  }
`;

export default Title;
