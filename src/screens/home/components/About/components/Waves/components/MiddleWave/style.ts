import styled from "styled-components";

const MiddleWaveBox = styled.path`
  animation: middleWave 2s ease-in-out infinite alternate;

  @keyframes middleWave {
    from {
      transform: translateX(-400px);
    }
  }
`;

export default MiddleWaveBox;
