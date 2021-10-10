import styled from "styled-components";

export const NavBarStyled = styled.header`
  width: 90%;
  height: 10vh;
  display: flex;
  margin: 0 auto;
  background-color: #DDD8D5;
  border-top-left-radius:10px;
  border-top-right-radius:10px;
  position: relative;
  
  & nav{
    display: flex;
    justify-content: space-evenly;
    height: 10vh;
    width: 90%;
    position: fixed;
    transition: 0.2s;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    top: ${props=>props.offSetY>60?"0px":7+"vh"};
    z-index:20;
    background-color:rgba(221, 216, 213,0.9) ;
    & .desktop-ul{
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      width: 100%;
      height: 100%;
      & li{
        font-size: 1.2rem;
        cursor: pointer;
        @media only screen and (max-width: 900px) {
          font-size: 2vw;
        }
        @media only screen and (max-width: 600px) {
          display: none;
        }
      }
      & h1{
        font-size: 4rem;
        text-shadow: 0px 3px 1px rgba(0,0,0,0.2);
        letter-spacing: 2px;
        font-weight: 300;
        text-align: left;
        @media only screen and (max-width: 900px) {
          font-size: 4.2vw;
          display: flex;
          flex-direction: column;
          text-align: center;
        }
        @media only screen and (max-width: 600px) {
          font-size:8vw ;
        }
      }
    }
    .mobile-ul{
      text-align: right;
      display: flex;
      flex-direction: column;
      font-size: 2rem;
      min-height: 10vh;
      width: 100%;
      position: absolute;
      right: 0;
      @media only screen and (min-width: 600px) {
        display: none;
      }
      & svg{
        align-self: flex-end;
        margin: 25px 0px 25px 0px;
        transition: 0.5s;
        transform: rotate(${props=>props.openNav?"270deg":"0deg"});
      }
      & li{
        display: ${props=>props.openNav?"inline-block":"none"};
        line-height: 60px;
        text-align: center;
        background-color: aliceblue;
        width: 100%;
        cursor: pointer;
      }

    }
  }

`