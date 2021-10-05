import styled from "styled-components";

export const CardCompStyle = styled.div`
  height: ${(prop)=>prop.height};
  min-width: 250px;
  background-color: aquamarine;
  border:thin solid white;
  margin-right: 50px;
  transition: 1s;
  opacity:${(prop)=>prop.opacity} ;
  &:hover{
    transition: 0;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  }
`