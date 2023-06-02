import styled, { css } from "styled-components";


export const StyleCard = styled.li`
    border-radius: 5px;
    background-color: var(--grey-4);
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 15px;
    margin: 10px 0;
     ${({ borderStyle }) =>{
          if (borderStyle === "entrada") {
             return  css`
                    border-left: 4px solid var(--brand-3);
               `
          }else  return css`border-left: 4px solid var(--grey-3); `
     }}

& div:nth-child(2){
     display: flex;
     flex-direction: column;
     gap: 20px;
}


& h3{
     margin-bottom: 15px;
}

   & span{
    font-size: var(--font-sizeText2);
   }

   & button{
        width: 60px;
        font-size: var(--font-sizeText3);
        border: none;
        background-color: var(--grey-3);
        color: var(--grey-1);
   }

   @media(min-width: 768px){
     display: flex;
     flex-direction: row ;
     justify-content: space-between;
   }
`