import styled from "styled-components";

export const StyleForm = styled.form`
    display: flex;
    flex-direction: column;
    padding: 30px 15px;
    border: 1px solid var(--grey-2);
    width: 100%;
    margin-bottom: 30px;

    & input{
        margin-top: 10px;
        margin-bottom: 5px;
        height: 45px;
        border-radius: 4px;
        border: none;
        background-color: var(--grey-4);
        padding-left: 15px;
    }

    & input::placeholder{
        font-size: var(--font-sizeText1);
    }

    & span{
        margin-bottom: 15px;
        font-size: var( --font-sizeText2);
    }

    & select{
        height: 45px;
        font-size: var(--font-sizeText2);
        border-radius: 4px;
        margin: 10px 0 15px;
        border: none;
        background-color: var(--grey-4);
        color: var(--grey-1);
        padding-left: 15px;
    }
`