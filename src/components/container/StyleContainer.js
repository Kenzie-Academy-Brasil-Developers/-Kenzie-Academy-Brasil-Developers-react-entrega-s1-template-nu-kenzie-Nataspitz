import styled from "styled-components";

export const StyleContainer = styled.div `
       margin:  15px auto;
       max-width: 1200px;
       width: 100%;
       padding: 0 15px;

       @media(min-width:768px){
              display: flex;
              flex-direction: row;
              padding: 0 80px;
              gap: 3%;
       }

`