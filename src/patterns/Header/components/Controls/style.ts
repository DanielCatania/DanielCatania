import styled from "styled-components";

const Controls = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 0px) {
    flex-direction: column-reverse;
    gap: 32px;
  }

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    width: 650px;
  }
`;

export default Controls;
