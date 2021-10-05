import styled from "styled-components";

export const RightSectionStyle = styled.section`
  width: 65%;
  height: 90%;
  display: flex;
  
  max-height:500px ;
  @media only screen and (max-width: 500px) {
    width: 90%;
  }
  .leftArrowContainer{
    width: 30px;
    height:100%;
    display: flex;
    align-items: center;
    position: relative;
    
    & .sellArrowSvg{
      position: absolute;
      font-size: 3rem;
      stroke-width: 10px;
      fill: white;
      height: 100px;
      z-index: 10;
      left: -13px;
      &:hover{
        stroke-width:5px;
      }
      & polygon{
        color: white;
        
        animation: bounce 2s ease infinite;
        
        @keyframes bounce {
            70% { transform:translateY(0%); }
            80% { transform:translateY(-18%); }
            90% { transform:translateY(0%); }
            95% { transform:translateY(-10%); }
            97% { transform:translateY(0%); }
            99% { transform:translateY(-6%); }
            100% { transform:translateY(0); }
        }
      }
      &:hover{
        cursor: pointer;
      }
    }
  }


  & .ImgSliderCont{
    height: 100%;
    width: 100%;
    border-left: thick solid #855744;
    overflow-x: hidden;
    position: relative;
    position: relative;

    &_slider{
      transition: 1.5s;
      position: absolute;
      display: flex;
      height: 100%;
      width:1600px;
      white-space: nowrap;
      align-items: center;
    }
  }
`