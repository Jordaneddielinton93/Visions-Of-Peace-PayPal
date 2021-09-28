import styled from "styled-components";

export const HeroStyled=styled.main`
  min-height: 600px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  & img{
    z-index: 1;
    @media only screen and (max-width: 600px) {
      max-width: 400px;
      align-self: flex-start;
    }
  }
`