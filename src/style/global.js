import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    :root{
        --grey-1: #212529; 
        --grey-2: #868E96; 
        --grey-3: #E9ECEF; 
        --grey-4: #F8F9FA; 

        --brand-1: #FD377E;
        --brand-2: #E34981;
        --brand-3: #03B898;

        --font-sizeTitle1: 2.375rem;
        --font-sizeTitle2: 1.375rem;
        --font-sizeTitle3: 1rem;

        --font-sizeText1: 1rem;
        --font-sizeText2: 0.75rem;
        --font-sizeText3: 0.625rem;
    }

    body{
        font-family: 'Inter', sans-serif;
    }

    li{
        list-style: none;
    }

    button{
        cursor: pointer;
        padding: 5px;
        font-size: var(--font-sizeText1);
        color: var(--grey-4);
        background-color: var(--brand-1);
        width: 500;
    }

    label{
        font-size: var(--font-sizeText2);
        color: var(--grey-1);
    }


    h1{
        font-size:var(--font-sizeTitle1)  ;
        color: var(--grey-1);
    }

    h2{
        font-size:var(--font-sizeText2) ;
        color: var(--grey-1);
    }

    h3{
        font-size:var(--font-sizeTitle3) ;
        color: var(--grey-1);
    }

    p{
        font-size: var(--font-sizeText2);
        color: var(--grey-1);
    }

    header{
        border-bottom: 1px solid var(--grey-5);
        box-shadow: 10px 3px 5px var(--grey-3) ;
        height: 30px ;
    }

    main{
        margin-top: 30px;
    }

    input::placeholder, button, option{
        font-family: 'Inter', sans-serif;
    }

    @media (min-width: 768px){
        #left{
            width: 30%;
            min-width: 260px;
        }

        #right{
            width: 50%;
            border: 1px solid;
            margin: 0;
        }
    }
`