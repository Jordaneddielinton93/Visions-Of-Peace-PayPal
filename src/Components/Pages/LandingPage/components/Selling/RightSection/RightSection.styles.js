import styled from "styled-components";

export const RightSectionStyle = styled.section`
  width: 70%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  @media only screen and (max-width: 1000px) {
    width: 100%;
  }

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

      @media only screen and (max-width: 500px) {
        font-size: 2.2rem;
      }
    }

    & .rightSectionHeader-shop{
      
      color: black;
      font-family: Verdana, Geneva, Tahoma, sans-serif;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color:#FCFDFF ;
      border-radius: 100px;
      border: thin inset black;
      height: 54px;
      width: 54px;
      margin-left: 20px;
    }
  }

  & .rightSectionMain{
    height: 620px;
    min-width: 100%;
    display: flex;
    background-color: #E2D9D4;
    border-top: thin solid #855744;
    border-left: thin solid #FCFDFF;
    @media only screen and (max-width: 500px) {
      height:420px;
    }
    @media only screen and (max-width: 400px) {
      height:320px;
    }
    & .Main-section-list{
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: flex-start;
      margin-left: 40px;
      min-width: 50%;
      height: 100%;
      font-size: 3rem;
      text-shadow: 0px 3px 1px rgba(0,0,0,0.2);
      letter-spacing: 2px;
      font-weight: 300;
      @media only screen and (max-width: 700px) {
        /* margin-left: 0px; */
        font-size: 1.5rem;
      }

      @media only screen and (max-width: 500px) {
        margin-left: 10px;
      }
    }
    & .Main-section-list h3{
      cursor: pointer;
      @media only screen and (max-width: 700px) {
      text-align: center;
      }
      @media only screen and (max-width: 400px) {
        font-size: 1.2rem;
      }
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