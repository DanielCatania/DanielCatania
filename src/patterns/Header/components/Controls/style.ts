import styled from "styled-components";

const Controls = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (min-width: 0px) {
    flex-direction: column-reverse;
    gap: 32px;
    align-items: flex-start;
  }

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    align-items: center;
    width: 650px;
  }
`;

export default Controls;
