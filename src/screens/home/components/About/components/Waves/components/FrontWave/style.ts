import styled from "styled-components";

const FrontWaveBox = styled.path`
  animation: frontWave 4s ease-in-out infinite alternate;

  @keyframes frontWave {
    from {
      transform: translateX(-180px);
    }
  }
`;

export default FrontWaveBox;
