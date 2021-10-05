import styled from "styled-components";

export const SellingStyles = styled.main`
  display: flex;
  margin: 90px 0px;
  width: 96%;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  background-color: #E8DCD5;
  border: 3px white solid;
  border-left: none;
  max-height:500px ;
  align-items: center;
  height:500px ;
  
  & .Angel_ImgContainer{    
    display: flex;
    width: 35%;
    height: 100%;
    align-items: center;
    justify-content: center;
    @media only screen and (max-width: 500px) {
      display: none;
    }


    &-img{
      max-width: 100%;
      max-height: 500px;
    }
  }



`