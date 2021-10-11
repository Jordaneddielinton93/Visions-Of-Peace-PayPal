import styled from "styled-components";

export const CardTemplateStyle = styled.div`
  width: 200px;
  height: 280px;
  background-color: #E8DCD5;
  border-radius:10px;
  border: solid 3px white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  &:hover{
      box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    }
  &  .card_header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 15%;
    margin: 0px 10px;
    font-size: 1.3rem;

    &-title{
      font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
      font-size: 1.2rem;
      background-color:#C4C4C4;
      padding:0px 5px;
      border-radius: 5px;
      text-shadow: 1px 4px 0px rgba(150, 150, 150, 0.44);
    }
  }
  & .card_IMG{
    height:40% ;
    width: 100%;
    background-color: white;
  }
  & .card_titleDisc-container{
    background-color:#C4C4C4 ;
    height: 20%;
    width: 100%;
    text-align: left;
    &-title{
      font-size: 1.3rem;
      color: white;
      margin-left: 5px;
      text-shadow: 1px 4px 0px rgba(150, 150, 150, 0.44);
    }
    &-discr{
      margin-left: 5px;

      color: white;
    }
  }
  & .Card_btns{
    display: flex;
    height:15% ;
    &_amount{
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      width: 50%;
      font-size: 1rem;
      color: black;
      font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
      &-plus,&-minus{
        display: flex;
        width: 20px;
        height: 20px;
        font-size: 1rem;

      }
      
    }
    &-AddToBasket{
      width: 50%;
      background-color:#855744 ;
      border-top-left-radius: 15px;
      color: white;
      font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
      border-bottom-right-radius: 10px;
    }
  }

`