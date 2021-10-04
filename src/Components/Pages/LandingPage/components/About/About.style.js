import styled from "styled-components";

export const AboutStyles = styled.div`
  width: 100%;
  min-height:90vh ;
  position: relative;
  margin-top: 60px;
  & .About-rectangle-background{
    position: absolute;
    top: 0;
    right: 0;
    min-height:95%;
    width: 70%;
    background-color:#E8DCD5 ;
    border: 3px solid #FCFDFF;
    border-right: none;
    z-index: 1;
  }


  & .About_top{
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 0;
    height: 50%;
    width: 100%;
    z-index: 15;
    &_header{
      align-self: center;
      font-size: 4rem;
      font-style: italic;
      font-weight: 500;
      height: 20%;
      width: 90%;
      
    }
    & .img-p_container{
      display: flex;
      height:80% ;
      width: 90%;
      align-self: center;

      & .img-p_container_text{
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        text-align: left;
      }
    }
  }

  & .About_bottom{
    display: flex;
    justify-content: space-evenly;
    position: absolute;
    bottom: 0;
    height: 50%;
    width: 100%;
    z-index: 2;

    &__left{
      width: 30%;
      height:100% ;
    }


    &__right{
      width: 60%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      text-align: left;
      &-title{
        margin-top: 30px;
        font-size: 2rem;
      }

      &-btn{
        width: 120px;
        height:44px ;
        font-size: 1rem;
        background-color:#855744 ;
        color: whitesmoke;
        border: solid thin white;
        border-radius: 10px;

      }

      &-imgContainer{
        height:40% ;
        width: 100%;
        display: flex;
        justify-content: space-between;
        & .btm-imgs{
          height:100% ;
          width:130px ;
          border: solid thin white;
          background-color: whitesmoke;
        }
      }
    }
    
  }
`