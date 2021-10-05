import styled from "styled-components";

export const AboutStyles = styled.div`
  width: 100%;
  max-width: 1200px;
  min-height:90vh ;
  position: relative;
  
  margin: 60px auto;
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
      font-size: 7vw;
      font-style: italic;
      font-weight: 500;
      height: 20%;
      width: 80%;
      text-align: left;
      @media only screen and (min-width: 1000px) {
        font-size:4rem ;
      }
      
    }
    & .img-p_container{
      display: flex;
      height:80% ;
      width: 90%;
      align-self: center;
      justify-content: space-evenly;
      @media only screen and (max-width: 450px) {
        width:100%;
      }
      & .img-p_container_text{
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        text-align: left;
        width: 50%;
        font-weight: 600;
        @media only screen and (max-width: 600px) {
          font-size: 0.8rem;
          
        }
      }
      &-img{
        box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
        cursor: pointer;
        @media only screen and (max-width: 850px) {
          height:80% ;
        }
        @media only screen and (max-width: 600px) {
          height:60% ;
        }
        @media only screen and (max-width: 450px) {
          height:50% ;
        }
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
      @media only screen and (max-width: 450px) {
        width:40% ;
      }

      &-img{
        box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
        cursor: pointer;
        transition: 0.5s;
        max-width:100%;
        @media only screen and (max-width: 850px) {
          height:55% ;
        }
        @media only screen and (max-width: 600px) {
          height:45% ;
        }
        @media only screen and (max-width: 450px) {
          height:35% ;
        }
        

        
      }
    }


    &__right{
      width: 60%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      text-align: left;
      position: relative;
      font-weight: 600;
      &-title{
        margin-top: 30px;
        font-size: 2rem;
        @media only screen and (max-width: 600px) {
          font-size: 1rem;
        }
      }

      &-para{
        @media only screen and (max-width: 600px) {
          font-size: 0.8rem;
        }
      }

      &-btn{
        width: 120px;
        height:44px ;
        font-size: 1.5rem;
        background-color:#855744 ;
        color: whitesmoke;
        border: solid thin white;
        border-radius: 10px;
        &:hover{
          background-color:#946e5e ;
          cursor: pointer;
        }
      }

      &-imgContainer{
        height:45% ;
        width: 100%;
        display: flex;
        justify-content: space-between;

        @media only screen and (max-width: 450px) {
          justify-content: space-evenly;
        }
        & .box3img{
          @media only screen and (max-width: 450px) {
            display: none;
          }
        }
        & .btm-imgs{
          height:100% ;
          width:140px ;
          border: solid thin white;
          background-color: whitesmoke;
          @media only screen and (max-width: 850px) {
            width:100px ;
            height:90% ;
            align-self: flex-end;
          }
          @media only screen and (max-width: 600px) {
            width: 80px;
          }
          @media only screen and (max-width: 450px) {
            width: 80px;
          }
          
          &:hover{
            box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
            cursor: pointer;
          }
        }
      }
    }
    
  }
`