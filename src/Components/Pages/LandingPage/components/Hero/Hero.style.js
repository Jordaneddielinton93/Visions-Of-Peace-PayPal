import styled from "styled-components";

export const HeroStyled=styled.main`
  min-height: 600px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;

  & .DISCLAIMER{
    position: absolute;
    top:30%;
    z-index: 20;
    font-size: 8rem;
    color: red;
    background-color: #bbbb;
  }

  @media only screen and (max-width: 600px) {
      min-height:500px ;
  }
  & img{
    z-index: 1;
    @media only screen and (max-width: 600px) {
      max-width: 400px;
      align-self: flex-start;
    }
  }
`