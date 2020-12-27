import styled from "styled-components";

export const MainCont = styled.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.35),
      rgba(0, 0, 0, 0.1),
      rgba(0, 0, 0, 0.35)
    ),
    url(/images/misc/joker1.jpg) top left / cover no-repeat;

  @media (max-width: 1100px) {
    background: none;
  }
`;
