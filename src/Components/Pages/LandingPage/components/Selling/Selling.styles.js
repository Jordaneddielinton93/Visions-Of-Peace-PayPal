import styled from "styled-components";

export const SellingStyles = styled.main`
  display: flex;
  margin-top: 190px;
  width: 100%;
  min-height: 800px;
  @media only screen and (max-width: 500px) {
    margin-top: 60px;
  }
  @media only screen and (max-width: 1000px) {
    flex-direction: column-reverse;
  }
  
  & .LeftSection{
    width: 30%;
    max-height: 620px;
    min-height: 620px;
    height: 620px;
    align-self: flex-end;

    @media only screen and (max-width: 1000px) {
      align-self: center;
      width: 100%;
    }

    & .img2-Sell{
      width:70% ;
      max-height:100% ;
    }
  }
`