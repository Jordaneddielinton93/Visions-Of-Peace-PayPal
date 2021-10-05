import styled from "styled-components";

export const CardCompStyle = styled.div`
  height: ${(prop)=>prop.height};
  min-width: 250px;
  background-color: #DDD8D5;
  border:thin solid white;
  margin-right: 50px;
  margin-left: 1px;
  transition: 1s;
  opacity:${(prop)=>prop.opacity} ;
  box-shadow:${(prop)=>prop.boxShadow} ;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  &:hover{
    transition: 0;
  }
  & .card-img{
    max-width: 100%;
    max-height: 33%;
  }
  & .card-btn-container{
    display: flex;
    justify-content: space-between;
    width: 90%;
    &-buttons{
      height: 44px;
      width: 100px;
      border-radius: 10px;
      font-size: 1rem;
      font-weight:900 ;
    }
    & .cardBtn1{
      background-color:#855744 ;
      color: white;
    }
    & .cardBtn2{
      
    }
  }
`