import styled from "styled-components";

export const RightSectionStyle = styled.section`
  width: 70%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  & .rightSectionHeader{
    display: flex;
    height: 80px;
    width: 100%;
    
    justify-content: flex-start;
    align-items: center;

    & .rightSectionHeader-tile{
      font-size:4rem;
      font-style:italic;
      text-shadow: 0px 3px 1px rgba(0,0,0,0.2);
      letter-spacing: 2px;
      font-weight: 300;
    }

    & .rightSectionHeader-shop{
      font-style:italic;
      color: black;
      font-family: 'Courier New', Courier, monospace;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color:#FCFDFF ;
      border-radius: 100px;
      border: thin solid black;
      height: 54px;
      width: 54px;
      margin-left: 20px;
    }
  }

  & .rightSectionMain{
    height: 620px;
    width: 100%;
    display: flex;
    background-color: #E2D9D4;
    border-top: thin solid #855744;
    border-left: thin solid #FCFDFF;

    & .Main-section-list{
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: flex-start;
      margin-left: 40px;
      width: 50%;
      height: 100%;
      font-size: 3rem;
      text-shadow: 0px 3px 1px rgba(0,0,0,0.2);
      letter-spacing: 2px;
      font-weight: 300;

    }
    & .Main-section-list h3{
      cursor: pointer;
    }

    & .Main-section-list-img-btn{
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      & .GoToStore{
        height:44px;
      }
    }
  }
`