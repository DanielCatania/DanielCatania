import styled from "styled-components";

const BackWaveBox = styled.path`
  animation: backWave 3s ease-in-out infinite alternate;

  @keyframes backWave {
    from {
      transform: translateX(-160px);
    }
  }
`;

export default BackWaveBox;
