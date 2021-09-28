import styled from "styled-components";

export const TextScrollerStyle = styled.div`
  position: absolute;
  transition: 1.1s;
  left:${(props)=>Math.floor(props.Left/2)+"px" } ;
  top: 40%;
  @media only screen and (max-width: 600px) {
    top:20%;
  }
  & .TextScroller{
    margin-top: ${(props)=>props.Top+"px" };
    position: absolute;
    font-size: 4rem;
    white-space: nowrap;
    font-style:italic;
    text-shadow: 0px 3px 1px rgba(0,0,0,0.2);
    letter-spacing: 2px;
    font-weight: 300;
    @media only screen and (max-width: 600px) {
      font-size: 1rem;
    }
  }
`