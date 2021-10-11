import styled from "styled-components"

export const ShopItemStyle = styled.div`
width:100% ;
min-height:700px ;
margin: 0px auto;
display: flex;
justify-content: center;
margin-top: 30px;

  & .CardContainer{
    width: 1000px;
    min-height: 100%;

    display: flex;
    flex-direction: column;
    
    &__Header{
      display: flex;
      width: 100%;
      height:50px ;

      &--title{
        display: flex;
        align-items: center;
        width: 100%;
        background-color: #E8DCD5;
        border-radius:10px;
        border:3px solid white;
        text-align: left;
        padding-left: 20px;
      }
      &__Nav{
        position: relative;
        width: 80px;
        max-height: 100%;
        background-color: #E8DCD5;
        border-radius:10px;
        border:3px solid white;
        &--icon{
          display: flex;
          justify-content: center;
          align-items: center;
          height: 50px ;
          font-size: 3rem;
        }
        &__list{
          display: none;
          
          &--item{
            display: flex;
            height:50px;
            width:80px;
            background-color: #E8DCD5;
            border-radius:10px;
            border:3px solid white;
            margin-top: 10px;
            align-items: center;
            justify-content: center;
            &:hover{
              background:#e5d8d1 ;
            }
          }
        }
        :hover{
          cursor: pointer;
          & .CardContainer__Header__Nav__list{
            display: inline-block;
          }
        }
      }
    }




    &__cardHolder{
      height:100% ;
      max-width: 100%;
      margin-right: 80px;
      padding: 10px;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
    }
  }
`