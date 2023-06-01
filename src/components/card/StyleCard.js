import styled from "styled-components";

export const StyleCard = styled.li`
    border-left: 3px solid ;
    border-radius: 5px;
    background-color: var(--grey-4);
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 15px 10px;
    margin: 10px 0;

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
`