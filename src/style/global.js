import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    :root{
        --grey-1: #F8F9FA: 
        --grey-2: #E9ECEF: 
        --grey-3: #868E96: 
        --grey-4: #212529: 

        --brand-1: #FD377E;
        --brand-2: #E34981;
        --brand-3: #03B898;

        --font-sizeTitle1: 1.75rem;
        --font-sizeTitle2: 1.5rem;
        --font-sizeTitle3: 1.25rem;

        --font-sizeText1: 1rem;
        --font-sizeText2: 0.75rem;
    }

    li{
        list-style: none;
    }

    button{
        cursor: pointer;
        padding: 5px;
        font-size: var(--font-sizeText2);
    }

    label{
        font-size: var(--font-sizeTitle3);
    }

    h1{
        font-size:var(--font-sizeTitle1)  ;
    }

    h2{
        font-size:var(--font-sizeText2) ;
    }

    h3{
        font-size:var(--font-sizeText3) ;
    }

    p{
        font-size: var(--font-sizeText2);
    }
`