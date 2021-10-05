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
    
    & .sellArrowSvg{
      font-size: 3rem;
      stroke-width: 10px;
      fill: white;
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