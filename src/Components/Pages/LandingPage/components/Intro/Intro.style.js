import styled from "styled-components";

export const IntroStyles = styled.main`
  margin-top: 180px;
  width: 100%;
  min-height:400px ;
  display: flex;
  justify-content: space-evenly;
  @media only screen and (max-width: 600px) {
      margin-top: 0px;
      min-height:300px ;
  }
  & .Intro-Section1{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 450px;
    font-style: italic;
    font-size: 4rem;
    position: relative;
    @media only screen and (max-width: 900px) {
      font-size: 2rem;
    }
    @media only screen and (max-width: 500px) {
      font-size: 1.4rem;
    }
    & .rectangle{
      position:absolute;
      left: 0;
      top: 0;
      width: 100px;
      height: 100%;
      background-color:#E2D9D4 ;
      border-top:#855744 thick solid ;
      border-right:#FCFDFF thin solid ;
    }
    & .intro-Name{
      z-index: 2;
      text-shadow: 0px 3px 1px rgba(0,0,0,0.2);
        letter-spacing: 2px;
        font-weight: 300;
    }
  }
  & .Intro-Section2{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 450px;
    background-color: #E2D9D4;
    border-top:#855744 thick solid ;
    border-left:#FCFDFF thick solid ;
    font-size: 2rem;
    @media only screen and (max-width: 900px) {
      font-size: 1rem;
    }
    @media only screen and (max-width: 500px) {
      font-size: 1rem;
    }
  }
`