import styled from "styled-components";

export const SignAreaStyled = styled.main`
  display: flex;
  width: 300px;
  min-height: 600px;
  height: 600px;
  margin:auto;
  
  & .form{
    border: solid thin white;
    display: flex;
    min-height:300px ;
    flex-direction: column;
    align-items: center;
    align-self: center;
    justify-self: center;
    width: 100%;
    & .FormLabel{
      position: relative;
      margin-top: 20px;
      width: 95%;
      height: 70px;
    }
    

    & .form-button{
      display: flex;
      margin:20px 0;
      width:95% ;
      height: 34px;
      background-color: whitesmoke;
      justify-content: center;
      align-items: center;
      border-radius: 5px;
    }
    
    &__NameCont{
      &-name{
        transition: 0.3s;
        text-align: left;
        position: absolute;
        /* top: 25%; */
        top: 0%;
        /* left: 10px; */
        left: 0px;
        z-index: 3;
        background-color:#DDD8D5 ;
        padding:0px 5px;
        /* border: white solid thin;
        border-radius: 10px; */
      }
      &-input{
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 34px;
        border-radius: 5px;
      }
    }

    
  }
`