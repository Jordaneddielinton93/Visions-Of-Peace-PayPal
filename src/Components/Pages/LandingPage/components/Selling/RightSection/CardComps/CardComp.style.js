import styled from "styled-components";

export const CardCompStyle = styled.div`
  height: ${(prop)=>prop.height};
  min-width: 250px;
  background-color: aquamarine;
  border:thin solid white;
  margin-right: 50px;
  transition: 1s;
  opacity:${(prop)=>prop.opacity} ;
`